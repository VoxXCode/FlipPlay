<?php

namespace App\Models;

class Anime extends Media
{
    private int $episodes;
    private string $season;

    public function __construct(
        int $id,
        string $title,
        float $score,
        int $year,
        string $synopsis,
        int $episodes,
        string $season
    ) {
        parent::__construct($id, $title, $score, $year, $synopsis);
        $this->episodes = $episodes;
        $this->season = $season;
    }

    public function getEpisodes(): int
    {
        return $this->episodes;
    }

    public function getSeason(): string
    {
        return $this->season;
    }

    public function getType(): string
    {
        return "TV Series";
    }

    public function getDetailInfo(): string
    {
        return sprintf(
            "[%s] %s (%d)\n" .
            "  Skor       : ⭐ %.2f / 10\n" .
            "  Episode    : %d episode\n" .
            "  Musim Rilis: %s\n" .
            "  Sinopsis   : %s",
            $this->getType(),
            $this->title,
            $this->year,
            $this->score,
            $this->episodes,
            $this->season,
            $this->synopsis
        );
    }
}
