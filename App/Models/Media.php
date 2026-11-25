<?php

namespace App\Models;

abstract class Media
{
    protected int $id;
    protected string $title;
    protected float $score;
    protected int $year;
    protected string $synopsis;

    public function __construct(
        int $id,
        string $title,
        float $score,
        int $year,
        string $synopsis
    ) {
        $this->id = $id;
        $this->title = $title;
        $this->setScore($score);
        $this->year = $year;
        $this->synopsis = $synopsis;
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function getTitle(): string
    {
        return $this->title;
    }

    public function getScore(): float
    {
        return $this->score;
    }

    public function setScore(float $score): void
    {
        if ($score < 0.0 || $score > 10.0) {
            throw new \InvalidArgumentException("Skor harus berada dalam rentang 0.0 sampai 10.0");
        }
        $this->score = $score;
    }

    public function getYear(): int
    {
        return $this->year;
    }

    public function getSynopsis(): string
    {
        return $this->synopsis;
    }

    abstract public function getType(): string;
    abstract public function getDetailInfo(): string;
}
