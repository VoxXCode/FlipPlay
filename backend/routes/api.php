<?php

use App\Http\Controllers\CollectionController;
use App\Http\Controllers\MediaController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::apiResource('media', MediaController::class)->parameters(['media' => 'media']);

Route::apiResource('users', UserController::class)->only(['index', 'show', 'store']);

Route::get('users/{user}/collection', [CollectionController::class, 'index']);
Route::post('users/{user}/collection', [CollectionController::class, 'store']);
Route::delete('users/{user}/collection/{media}', [CollectionController::class, 'destroy']);
