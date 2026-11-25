<?php

spl_autoload_register(function (string $className): void {
    $prefix = 'App\\';
    $baseDir = __DIR__ . '/App/';
    $len = strlen($prefix);
    if (strncmp($prefix, $className, $len) !== 0) return;
    $file = $baseDir . str_replace('\\', '/', substr($className, $len)) . '.php';
    if (file_exists($file)) require_once $file;
});

use App\Models\Anime;
use App\Models\Movie;
use App\Models\User;
use App\Services\MediaLibrary;

$library = new MediaLibrary("FlipPlay Official Catalog");

$library->addMedia(new Anime(52991, "Sousou no Frieren",               9.32, 2023, "Setelah petualangan sepuluh tahun mengalahkan Raja Iblis, penyihir elf Frieren memulai perjalanan baru memahami nilai kehidupan.", 28, "Fall 2023"));
$library->addMedia(new Anime(5114,  "Fullmetal Alchemist: Brotherhood", 9.09, 2009, "Dua bersaudara Edward dan Alphonse mencari Batu Bertuah untuk memulihkan tubuh mereka akibat alkimia terlarang.", 64, "Spring 2009"));
$library->addMedia(new Anime(38524, "Shingeki no Kyojin Season 3",     9.05, 2019, "Pasukan Pengintai berusaha merebut kembali Wall Maria sambil mengungkap rahasia ruang bawah tanah Eren Yeager.", 10, "Spring 2019"));
$library->addMedia(new Movie(32281, "Kimi no Na wa. (Your Name)",      8.84, 2016, "Dua remaja SMA saling bertukar tubuh secara misterius melintasi ruang dan waktu.", 107));
$library->addMedia(new Movie(28851, "Koe no Katachi (A Silent Voice)", 8.93, 2016, "Seorang pemuda berusaha menebus rasa bersalahnya kepada gadis tunarungu yang pernah ia rundung semasa SD.", 130));

$user = new User("USR-001", "Budi Santoso");

function printHeader(string $title): void
{
    echo PHP_EOL . str_repeat("=", 70) . PHP_EOL;
    echo "  " . strtoupper($title) . PHP_EOL;
    echo str_repeat("=", 70) . PHP_EOL;
}

function printMenu(): void
{
    echo PHP_EOL;
    echo str_repeat("*", 70) . PHP_EOL;
    echo "          FLIPPLAY BACKEND ENGINE - SIMULASI TERMINAL PHP OOP        " . PHP_EOL;
    echo str_repeat("*", 70) . PHP_EOL;
    echo PHP_EOL;
    echo "  [1]  Tambah Media ke Library" . PHP_EOL;
    echo "  [2]  Tampilkan Semua Media" . PHP_EOL;
    echo "  [3]  Cari Media Berdasarkan Judul" . PHP_EOL;
    echo "  [4]  Lihat Detail Informasi Media" . PHP_EOL;
    echo "  [5]  Koleksi Watchlist Pengguna" . PHP_EOL;
    echo "  [6]  Jalankan Semua Simulasi Sekaligus" . PHP_EOL;
    echo "  [0]  Keluar" . PHP_EOL;
    echo PHP_EOL;
    echo str_repeat("-", 70) . PHP_EOL;
    echo "  Pilih menu (0-6): ";
}

function handleTambahMedia(MediaLibrary &$library): void
{
    printHeader("1. Tambah Media ke Library");

    echo "Pilih jenis media yang ingin ditambahkan:\n";
    echo "  [1] Anime (TV Series)\n";
    echo "  [2] Movie (Film)\n";
    echo "  Pilih (1/2): ";
    $jenis = trim(fgets(STDIN));

    if ($jenis !== '1' && $jenis !== '2') {
        echo "\n[!] Pilihan tidak valid.\n";
        return;
    }

    echo "ID Media     : "; $id    = (int) trim(fgets(STDIN));
    echo "Judul        : "; $title = trim(fgets(STDIN));
    echo "Tahun Rilis  : "; $year  = (int) trim(fgets(STDIN));
    echo "Skor (0-10)  : "; $score = (float) trim(fgets(STDIN));
    echo "Sinopsis     : "; $syn   = trim(fgets(STDIN));

    if ($jenis === '1') {
        echo "Jumlah Episode: "; $eps    = (int) trim(fgets(STDIN));
        echo "Musim Rilis   : "; $season = trim(fgets(STDIN));
        $library->addMedia(new Anime($id, $title, $score, $year, $syn, $eps, $season));
    } else {
        echo "Durasi (menit): "; $dur = (int) trim(fgets(STDIN));
        $library->addMedia(new Movie($id, $title, $score, $year, $syn, $dur));
    }

    echo "\n[✓] Media \"$title\" berhasil ditambahkan! Total koleksi: {$library->getTotalMediaCount()} item.\n";
}

function handleTampilSemua(MediaLibrary $library): void
{
    printHeader("2. Daftar Semua Media di Library");

    $allMedia = $library->getAllMedia();
    if (empty($allMedia)) {
        echo "Library masih kosong.\n";
        return;
    }

    printf("%-6s | %-10s | %-34s | %-6s | %-6s\n", "ID", "TIPE", "JUDUL", "TAHUN", "SKOR");
    echo str_repeat("-", 70) . PHP_EOL;
    foreach ($allMedia as $media) {
        printf(
            "%-6d | %-10s | %-34s | %-6d | ⭐ %.2f\n",
            $media->getId(),
            $media->getType(),
            mb_strimwidth($media->getTitle(), 0, 34, "..."),
            $media->getYear(),
            $media->getScore()
        );
    }
    echo "\nTotal: {$library->getTotalMediaCount()} media.\n";
}

function handleCariMedia(MediaLibrary $library): void
{
    printHeader("3. Cari Media Berdasarkan Judul");

    echo "Masukkan kata kunci judul: ";
    $keyword = trim(fgets(STDIN));
    $results = $library->searchByTitle($keyword);
    echo PHP_EOL;

    if (empty($results)) {
        echo "[!] Tidak ada media dengan judul mengandung \"$keyword\".\n";
        return;
    }

    echo "Ditemukan " . count($results) . " hasil untuk \"$keyword\":\n\n";
    foreach ($results as $i => $item) {
        echo "  " . ($i + 1) . ". [{$item->getType()}] {$item->getTitle()} ({$item->getYear()}) - Skor: ⭐ {$item->getScore()}\n";
    }
}

function handleDetailMedia(MediaLibrary $library): void
{
    printHeader("4. Detail Informasi Media");

    $allMedia = $library->getAllMedia();
    if (empty($allMedia)) {
        echo "Library masih kosong.\n";
        return;
    }

    echo "Media yang tersedia:\n";
    foreach ($allMedia as $i => $media) {
        echo "  [" . ($i + 1) . "] {$media->getTitle()}\n";
    }

    echo "\nMasukkan nomor media yang ingin dilihat detailnya: ";
    $input = (int) trim(fgets(STDIN));
    $index = $input - 1;

    if (!isset($allMedia[$index])) {
        echo "\n[!] Nomor tidak valid.\n";
        return;
    }

    echo PHP_EOL . str_repeat("-", 70) . PHP_EOL;
    echo $allMedia[$index]->getDetailInfo() . PHP_EOL;
    echo str_repeat("-", 70) . PHP_EOL;
}

function handleWatchlist(MediaLibrary $library, User &$user): void
{
    printHeader("5. Koleksi Watchlist Pengguna");

    echo "Pengguna: {$user->getName()} (ID: {$user->getUserId()})\n\n";
    echo "  [1] Tambahkan media ke Watchlist\n";
    echo "  [2] Lihat Watchlist saya\n";
    echo "  Pilih (1/2): ";
    $sub = trim(fgets(STDIN));

    if ($sub === '1') {
        $allMedia = $library->getAllMedia();
        if (empty($allMedia)) {
            echo "\n[!] Library kosong, tidak ada media yang bisa ditambahkan.\n";
            return;
        }
        echo "\nMedia di Library:\n";
        foreach ($allMedia as $i => $media) {
            echo "  [" . ($i + 1) . "] {$media->getTitle()} [{$media->getType()}]\n";
        }
        echo "Pilih nomor media: ";
        $no = (int) trim(fgets(STDIN)) - 1;

        if (!isset($allMedia[$no])) {
            echo "\n[!] Nomor tidak valid.\n";
            return;
        }
        $picked = $allMedia[$no];
        $ok = $user->addToWatchlist($picked);
        if ($ok) {
            echo "\n[✓] \"{$picked->getTitle()}\" berhasil ditambahkan ke Watchlist.\n";
        } else {
            echo "\n[!] \"{$picked->getTitle()}\" sudah ada di Watchlist Anda.\n";
        }

    } elseif ($sub === '2') {
        $watchlist = $user->getWatchlist();
        echo PHP_EOL;
        if (empty($watchlist)) {
            echo "Watchlist masih kosong. Tambahkan media terlebih dahulu.\n";
            return;
        }
        echo "Watchlist {$user->getName()} (Total: {$user->getWatchlistCount()} item):\n";
        echo str_repeat("-", 70) . PHP_EOL;
        foreach ($watchlist as $i => $item) {
            echo "  " . ($i + 1) . ". [{$item->getType()}] {$item->getTitle()} ({$item->getYear()}) - Skor: ⭐ {$item->getScore()}\n";
        }
    } else {
        echo "\n[!] Pilihan tidak valid.\n";
    }
}

function handleSemuaSimulasi(MediaLibrary $library, User $user): void
{
    printHeader("1. Menambahkan Media ke dalam Library");
    echo "Library '{$library->getLibraryName()}' sudah dimuat dengan {$library->getTotalMediaCount()} media.\n";

    printHeader("2. Daftar Semua Media yang Tersedia");
    printf("%-6s | %-10s | %-34s | %-6s | %-6s\n", "ID", "TIPE", "JUDUL", "TAHUN", "SKOR");
    echo str_repeat("-", 70) . PHP_EOL;
    foreach ($library->getAllMedia() as $media) {
        printf("%-6d | %-10s | %-34s | %-6d | ⭐ %.2f\n",
            $media->getId(), $media->getType(),
            mb_strimwidth($media->getTitle(), 0, 34, "..."),
            $media->getYear(), $media->getScore()
        );
    }

    printHeader("3. Mencari Media Berdasarkan Judul");
    $keyword = "Frieren";
    echo "Kata kunci: \"$keyword\"\n\n";
    foreach ($library->searchByTitle($keyword) as $item) {
        echo " -> [{$item->getType()}] {$item->getTitle()} ({$item->getYear()}) - Skor: {$item->getScore()}\n";
    }

    printHeader("4. Detail Informasi Media (Polymorphism)");
    $allMedia = $library->getAllMedia();
    echo "--- Detail Anime ---\n";
    echo $allMedia[0]->getDetailInfo() . "\n\n";
    echo "--- Detail Movie ---\n";
    echo $allMedia[3]->getDetailInfo() . "\n";

    printHeader("5. Koleksi Watchlist Pengguna");
    $user2 = new User("USR-001", "Budi Santoso");
    $user2->addToWatchlist($allMedia[0]);
    $user2->addToWatchlist($allMedia[3]);
    if (!$user2->addToWatchlist($allMedia[0])) {
        echo "[Info] '{$allMedia[0]->getTitle()}' sudah ada di watchlist (tidak diduplikasi).\n\n";
    }
    echo "Watchlist {$user2->getName()} (Total: {$user2->getWatchlistCount()} item):\n";
    echo str_repeat("-", 70) . PHP_EOL;
    foreach ($user2->getWatchlist() as $i => $item) {
        echo "  " . ($i + 1) . ". [{$item->getType()}] {$item->getTitle()} ({$item->getYear()}) - Skor: ⭐ {$item->getScore()}\n";
    }

    echo PHP_EOL . str_repeat("=", 70) . PHP_EOL;
    echo "  SIMULASI LENGKAP SELESAI!" . PHP_EOL;
    echo str_repeat("=", 70) . PHP_EOL;
}

while (true) {
    printMenu();
    $choice = trim(fgets(STDIN));

    switch ($choice) {
        case '1': handleTambahMedia($library);          break;
        case '2': handleTampilSemua($library);          break;
        case '3': handleCariMedia($library);            break;
        case '4': handleDetailMedia($library);          break;
        case '5': handleWatchlist($library, $user);     break;
        case '6': handleSemuaSimulasi($library, $user); break;
        case '0':
            echo PHP_EOL . "Terima kasih sudah menggunakan FlipPlay Engine. Sampai jumpa!" . PHP_EOL . PHP_EOL;
            exit(0);
        default:
            echo PHP_EOL . "[!] Pilihan tidak valid. Masukkan angka 0 sampai 6." . PHP_EOL;
    }

    echo PHP_EOL . "Tekan ENTER untuk kembali ke menu...";
    fgets(STDIN);
}
