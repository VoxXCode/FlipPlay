<?php

namespace Tests\Feature;

use App\Models\Media;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class FlipPlayApiTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->seed();
    }

    public function test_can_list_all_media(): void
    {
        $response = $this->getJson('/api/media');

        $response->assertStatus(200)
            ->assertJsonStructure([
                'data' => [
                    '*' => ['id', 'title', 'type', 'score', 'year', 'synopsis'],
                ],
            ]);
    }

    public function test_can_filter_media_by_title(): void
    {
        $response = $this->getJson('/api/media?title=Frieren');

        $response->assertStatus(200);
        $this->assertEquals('Sousou no Frieren', $response->json('data.0.title'));
    }

    public function test_can_create_media(): void
    {
        $payload = [
            'title' => 'Shingeki no Kyojin',
            'type' => 'TV Series',
            'score' => 9.05,
            'year' => 2013,
            'synopsis' => 'Umat manusia terkurung di dalam dinding raksasa.',
        ];

        $response = $this->postJson('/api/media', $payload);

        $response->assertStatus(201)
            ->assertJsonPath('data.title', 'Shingeki no Kyojin');

        $this->assertDatabaseHas('media', ['title' => 'Shingeki no Kyojin']);
    }

    public function test_create_media_validation_failure(): void
    {
        $response = $this->postJson('/api/media', []);

        $response->assertStatus(422)
            ->assertJsonValidationErrors(['title', 'type', 'score', 'year']);
    }

    public function test_create_media_duplicate_title_failure(): void
    {
        $response = $this->postJson('/api/media', [
            'title' => 'Sousou no Frieren',
            'type' => 'TV Series',
            'score' => 9.0,
            'year' => 2023,
        ]);

        $response->assertStatus(422)
            ->assertJsonValidationErrors(['title']);
    }

    public function test_can_show_media_detail(): void
    {
        $media = Media::where('title', 'Sousou no Frieren')->first();

        $response = $this->getJson('/api/media/' . $media->id);

        $response->assertStatus(200)
            ->assertJsonPath('data.id', $media->id)
            ->assertJsonStructure([
                'data' => ['id', 'title', 'collected_by_users'],
            ]);
    }

    public function test_show_non_existent_media_returns_404(): void
    {
        $response = $this->getJson('/api/media/9999');

        $response->assertStatus(404);
    }

    public function test_can_update_media_with_patch(): void
    {
        $media = Media::first();

        $response = $this->patchJson('/api/media/' . $media->id, [
            'score' => 9.99,
        ]);

        $response->assertStatus(200)
            ->assertJsonPath('data.score', 9.99);

        $this->assertDatabaseHas('media', ['id' => $media->id, 'score' => 9.99]);
    }

    public function test_can_delete_media(): void
    {
        $media = Media::create([
            'title' => 'Media Hapus',
            'type' => 'Movie',
            'score' => 7.0,
            'year' => 2020,
        ]);

        $response = $this->deleteJson('/api/media/' . $media->id);

        $response->assertStatus(200)
            ->assertJsonPath('message', 'Media berhasil dihapus');

        $this->assertDatabaseMissing('media', ['id' => $media->id]);
    }

    public function test_can_add_media_to_user_collection(): void
    {
        $user = User::first();
        $media = Media::whereDoesntHave('users', fn ($q) => $q->where('users.id', $user->id))->first();

        $response = $this->postJson("/api/users/{$user->id}/collection", [
            'media_id' => $media->id,
        ]);

        $response->assertStatus(201)
            ->assertJsonPath('message', 'Media berhasil ditambahkan ke koleksi');

        $this->assertDatabaseHas('media_user', [
            'user_id' => $user->id,
            'media_id' => $media->id,
        ]);
    }

    public function test_add_duplicate_media_to_collection_returns_409(): void
    {
        $user = User::first();
        $media = $user->media()->first();

        $response = $this->postJson("/api/users/{$user->id}/collection", [
            'media_id' => $media->id,
        ]);

        $response->assertStatus(409)
            ->assertJsonPath('message', 'Media sudah ada di koleksi');
    }

    public function test_can_get_user_collection(): void
    {
        $user = User::first();

        $response = $this->getJson("/api/users/{$user->id}/collection");

        $response->assertStatus(200)
            ->assertJsonStructure(['data']);
    }

    public function test_can_remove_media_from_user_collection(): void
    {
        $user = User::first();
        $media = $user->media()->first();

        $response = $this->deleteJson("/api/users/{$user->id}/collection/{$media->id}");

        $response->assertStatus(200)
            ->assertJsonPath('message', 'Media berhasil dihapus dari koleksi');

        $this->assertDatabaseMissing('media_user', [
            'user_id' => $user->id,
            'media_id' => $media->id,
        ]);
    }
}
