<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddToCollectionRequest;
use App\Http\Resources\MediaResource;
use App\Http\Resources\UserResource;
use App\Models\Media;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class CollectionController extends Controller
{
    public function index(User $user): AnonymousResourceCollection
    {
        return MediaResource::collection($user->media()->latest('media_user.created_at')->paginate(10));
    }

    public function store(AddToCollectionRequest $request, User $user): JsonResponse
    {
        $mediaId = $request->integer('media_id');

        if ($user->media()->where('media_id', $mediaId)->exists()) {
            return response()->json([
                'message' => 'Media sudah ada di koleksi',
            ], 409);
        }

        $user->media()->attach($mediaId);

        return response()->json([
            'message' => 'Media berhasil ditambahkan ke koleksi',
            'data' => new UserResource($user->load('media')),
        ], 201);
    }

    public function destroy(User $user, Media $media): JsonResponse
    {
        if (! $user->media()->where('media_id', $media->id)->exists()) {
            return response()->json([
                'message' => 'Media tidak ada di dalam koleksi pengguna',
            ], 404);
        }

        $user->media()->detach($media->id);

        return response()->json([
            'message' => 'Media berhasil dihapus dari koleksi',
        ], 200);
    }
}
