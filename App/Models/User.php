<?php

namespace App\Models;

class User
{
    private string $userId;
    private string $name;
    private array $watchlist = [];

    public function __construct(string $userId, string $name)
    {
        $this->userId = $userId;
        $this->name = $name;
    }

    public function getUserId(): string
    {
        return $this->userId;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function addToWatchlist(Media $media): bool
    {
        foreach ($this->watchlist as $item) {
            if ($item->getId() === $media->getId()) {
                return false;
            }
        }

        $this->watchlist[] = $media;
        return true;
    }

    public function getWatchlist(): array
    {
        return $this->watchlist;
    }

    public function getWatchlistCount(): int
    {
        return count($this->watchlist);
    }
}
