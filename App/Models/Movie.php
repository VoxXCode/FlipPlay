<?php

namespace App\Models;

class Movie extends Media
{
    private int $durationMinutes;

    public function __construct(
        int $id,
        string $title,
        float $score,
        int $year,
        string $synopsis,
        int $durationMinutes
    ) {
        parent::__construct($id, $title, $score, $year, $synopsis);
        $this->durationMinutes = $durationMinutes;
    }

    public function getDurationMinutes(): int
    {
        return $this->durationMinutes;
    }

    public function getType(): string
    {
        return "Movie";
    }

    public function getDetailInfo(): string
    {
        return sprintf(
            "[%s] %s (%d)\n" .
            "  Skor       : ⭐ %.2f / 10\n" .
            "  Durasi     : %d menit\n" .
            "  Sinopsis   : %s",
            $this->getType(),
            $this->title,
            $this->year,
            $this->score,
            $this->durationMinutes,
            $this->synopsis
        );
    }
}
