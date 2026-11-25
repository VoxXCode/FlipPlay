<?php

namespace Database\Seeders;

use App\Models\Media;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $user1 = User::firstOrCreate(
            ['email' => 'budi@flipplay.test'],
            [
                'name' => 'Budi Santoso',
                'password' => Hash::make('password123'),
            ]
        );

        $user2 = User::firstOrCreate(
            ['email' => 'siti@flipplay.test'],
            [
                'name' => 'Siti Rahma',
                'password' => Hash::make('password123'),
            ]
        );

        $jsonPath = dirname(base_path()) . DIRECTORY_SEPARATOR . 'data.json';
        if (! file_exists($jsonPath)) {
            $jsonPath = base_path('data.json');
        }

        if (file_exists($jsonPath)) {
            $jsonContent = file_get_contents($jsonPath);
            $data = json_decode($jsonContent, true);

            $rawItems = [];

            if (! empty($data['banner']) && is_array($data['banner'])) {
                foreach ($data['banner'] as $item) {
                    $rawItems[] = [
                        'title' => $item['title'] ?? null,
                        'type' => $item['type'] ?? 'TV',
                        'score' => (float) ($item['score'] ?? 8.5),
                        'year' => (int) ($item['year'] ?? 2023),
                        'synopsis' => $item['synopsis'] ?? null,
                        'image' => $item['images']['jpg']['large_image_url'] ?? null,
                        'genre' => null,
                    ];
                }
            }

            if (! empty($data['catalog']) && is_array($data['catalog'])) {
                foreach ($data['catalog'] as $item) {
                    $genreStr = null;
                    if (! empty($item['genre'])) {
                        $genreStr = is_array($item['genre']) ? implode(', ', $item['genre']) : (string) $item['genre'];
                    }

                    $rawItems[] = [
                        'title' => $item['title'] ?? null,
                        'type' => $item['format'] ?? ($item['type'] ?? 'Manga'),
                        'score' => (float) ($item['score'] ?? 8.0),
                        'year' => (int) ($item['year'] ?? 2020),
                        'synopsis' => $item['synopsis'] ?? null,
                        'image' => $item['image'] ?? null,
                        'genre' => $genreStr,
                    ];
                }
            }

            foreach (['updateTerbaru', 'rekomendasi'] as $section) {
                if (! empty($data[$section]) && is_array($data[$section])) {
                    foreach (['anime', 'manga'] as $sub) {
                        if (! empty($data[$section][$sub]) && is_array($data[$section][$sub])) {
                            foreach ($data[$section][$sub] as $item) {
                                $rawItems[] = [
                                    'title' => $item['title'] ?? null,
                                    'type' => $item['type'] ?? ($sub === 'manga' ? 'Manga' : 'TV'),
                                    'score' => (float) ($item['score'] ?? 8.0),
                                    'year' => (int) ($item['year'] ?? 2022),
                                    'synopsis' => $item['synopsis'] ?? null,
                                    'image' => $item['images']['jpg']['large_image_url'] ?? null,
                                    'genre' => null,
                                ];
                            }
                        }
                    }
                }
            }

            $insertedIds = [];
            foreach ($rawItems as $item) {
                if (empty($item['title'])) {
                    continue;
                }

                $cleanTitle = trim($item['title']);
                $score = max(0.0, min(10.0, $item['score']));

                $media = Media::firstOrCreate(
                    ['title' => $cleanTitle],
                    [
                        'type' => $item['type'] ?? 'Anime',
                        'score' => $score,
                        'year' => $item['year'] ?: 2023,
                        'synopsis' => $item['synopsis'],
                        'image' => $item['image'],
                        'genre' => $item['genre'],
                    ]
                );

                $insertedIds[] = $media->id;
            }

            if (count($insertedIds) >= 3) {
                $user1->media()->syncWithoutDetaching([$insertedIds[0], $insertedIds[1], $insertedIds[2]]);
                $user2->media()->syncWithoutDetaching([$insertedIds[0]]);
            }
        }
    }
}
