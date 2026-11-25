<?php

namespace App\Services;

use App\Models\Media;

class MediaLibrary
{
    private string $libraryName;
    private array $catalog = [];

    public function __construct(string $libraryName = "FlipPlay Media Catalog")
    {
        $this->libraryName = $libraryName;
    }

    public function getLibraryName(): string
    {
        return $this->libraryName;
    }

    public function addMedia(Media $media): void
    {
        $this->catalog[$media->getId()] = $media;
    }

    public function getAllMedia(): array
    {
        return array_values($this->catalog);
    }

    public function searchByTitle(string $keyword): array
    {
        $keyword = trim(strtolower($keyword));
        if ($keyword === '') {
            return [];
        }

        $results = [];
        foreach ($this->catalog as $media) {
            if (str_contains(strtolower($media->getTitle()), $keyword)) {
                $results[] = $media;
            }
        }

        return $results;
    }

    public function findById(int $id): ?Media
    {
        return $this->catalog[$id] ?? null;
    }

    public function getTotalMediaCount(): int
    {
        return count($this->catalog);
    }
}
