/**
 * FlipPlay - Streaming & Digital Reading Platform
 * script.js - Logika Interaktif & Konsumsi API JSON
 */

// ============================================
// 1. DATA SOURCE & API FETCHING
// ============================================

const API_ENDPOINT = 'data.json';

// Data internal sebagai cadangan otomatis jika file dibuka langsung via file:/// (CORS constraint pada browser modern)
const fallbackDataInternal = {
    "banner": [
        {
            "mal_id": 52991,
            "title": "Sousou no Frieren",
            "url": "https://myanimelist.net/anime/52991/Sousou_no_Frieren",
            "images": {
                "jpg": {
                    "large_image_url": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-qQTzQnEJJ3oB.jpg"
                }
            },
            "score": 9.32,
            "type": "TV",
            "year": 2023,
            "rank": 1,
            "synopsis": "Setelah petualangan sepuluh tahun mengalahkan Raja Iblis, penyihir elf Frieren berpisah dengan rekan-rekannya. Bertahun-tahun berlalu, ia menyaksikan kematian satu demi satu rekannya karena waktu manusia yang singkat. Frieren kemudian memulai perjalanan baru untuk memahami nilai kehidupan dan kenangan yang ditinggalkan."
        },
        {
            "mal_id": 5114,
            "title": "Fullmetal Alchemist: Brotherhood",
            "url": "https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood",
            "images": {
                "jpg": {
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1208/94745l.jpg"
                }
            },
            "score": 9.09,
            "type": "TV",
            "year": 2009,
            "rank": 2,
            "synopsis": "Dua bersaudara Edward dan Alphonse Elric mencoba alkimia terlarang untuk membangkitkan ibu mereka. Kegagalan fatal membuat Alphonse kehilangan tubuhnya dan Edward kehilangan lengan dan kakinya. Mereka memulai pengembaraan mencari Batu Bertuah untuk memulihkan tubuh mereka kembali."
        },
        {
            "mal_id": 38524,
            "title": "Shingeki no Kyojin Season 3 Part 2",
            "url": "https://myanimelist.net/anime/38524/Shingeki_no_Kyojin_Season_3_Part_2",
            "images": {
                "jpg": {
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1517/100633l.jpg"
                }
            },
            "score": 9.05,
            "type": "TV",
            "year": 2019,
            "rank": 5,
            "synopsis": "Pasukan Pengintai memulai misi merebut kembali Wall Maria di Distrik Shiganshina. Di sana, pertempuran mematikan melawan Titan Binatang, Titan Berzirah, dan Titan Kolosal menentukan nasib akhir umat manusia dan membuka rahasia ruang bawah tanah kediaman Eren Yeager."
        },
        {
            "mal_id": 11061,
            "title": "Hunter x Hunter (2011)",
            "url": "https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011",
            "images": {
                "jpg": {
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1337/99013l.jpg"
                }
            },
            "score": 9.04,
            "type": "TV",
            "year": 2011,
            "rank": 6,
            "synopsis": "Gon Freecss memulai petualangan untuk menjadi Hunter berlisensi demi menemukan jejak ayahnya yang seorang Hunter legendaris. Bersama Killua, Kurapika, dan Leorio, Gon menghadapi berbagai ujian maut dan pertempuran sengit melawan musuh-musuh berkemampuan Nen tingkat tinggi."
        },
        {
            "mal_id": 9253,
            "title": "Steins;Gate",
            "url": "https://myanimelist.net/anime/9253/Steins_Gate",
            "images": {
                "jpg": {
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1935/127974l.jpg"
                }
            },
            "score": 9.07,
            "type": "TV",
            "year": 2011,
            "rank": 3,
            "synopsis": "Rintaro Okabe, seorang ilmuwan gila yang memproklamirkan dirinya sendiri, secara tidak sengaja menemukan cara mengirim pesan ke masa lalu menggunakan microwave yang dimodifikasi. Setiap perubahan garis waktu menimbulkan konsekuensi mengerikan yang mengancam orang-orang terdekatnya."
        }
    ],
    "updateTerbaru": {
        "anime": [
            {
                "mal_id": 58567,
                "title": "Solo Leveling Season 2: Arise from the Shadow",
                "url": "https://myanimelist.net/anime/58567/Ore_dake_Level_Up_na_Ken_Season_2__Arise_from_the_Shadow",
                "images": {
                    "jpg": {
                        "large_image_url": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx176496-9BDMjAZGEbq4.png"
                    }
                },
                "score": 8.52,
                "type": "TV",
                "episodes": 13,
                "status": "Currently Airing",
                "year": 2025,
                "rank": 120,
                "members": 410000
            },
            {
                "mal_id": 58568,
                "title": "Sakamoto Days",
                "url": "https://myanimelist.net/anime/58568/Sakamoto_Days",
                "images": {
                    "jpg": {
                        "large_image_url": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx177709-e5Qx6RlsBgD5.png"
                    }
                },
                "score": 8.35,
                "type": "TV",
                "episodes": 11,
                "status": "Currently Airing",
                "year": 2025,
                "rank": 180,
                "members": 260000
            },
            {
                "mal_id": 57334,
                "title": "Dandadan",
                "url": "https://myanimelist.net/anime/57334/Dandadan",
                "images": {
                    "jpg": {
                        "large_image_url": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx171018-60q1B6GK2Ghb.jpg"
                    }
                },
                "score": 8.65,
                "type": "TV",
                "episodes": 12,
                "status": "Currently Airing",
                "year": 2024,
                "rank": 65,
                "members": 580000
            },
            {
                "mal_id": 54857,
                "title": "Re:Zero kara Hajimeru Isekai Seikatsu 3rd Season",
                "url": "https://myanimelist.net/anime/54857/Re_Zero_kara_Hajimeru_Isekai_Seikatsu_3rd_Season",
                "images": {
                    "jpg": {
                        "large_image_url": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx163134-yieRFbvUOH9a.jpg"
                    }
                },
                "score": 8.58,
                "type": "TV",
                "episodes": 16,
                "status": "Currently Airing",
                "year": 2024,
                "rank": 95,
                "members": 390000
            },
            {
                "mal_id": 56784,
                "title": "Bleach: Sennen Kessen-hen - Soukoku-tan",
                "url": "https://myanimelist.net/anime/56784/Bleach__Sennen_Kessen-hen_-_Soukoku-tan",
                "images": {
                    "jpg": {
                        "large_image_url": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx169755-Rqb7MjnzdTc6.jpg"
                    }
                },
                "score": 8.88,
                "type": "TV",
                "episodes": 13,
                "status": "Currently Airing",
                "year": 2024,
                "rank": 25,
                "members": 280000
            }
        ],
        "manga": [
            {
                "mal_id": 113138,
                "title": "Jujutsu Kaisen",
                "url": "https://myanimelist.net/manga/113138/Jujutsu_Kaisen",
                "images": {
                    "jpg": {
                        "large_image_url": "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx101517-H3TdM3g5ZUe9.jpg"
                    }
                },
                "score": 8.44,
                "type": "Manga",
                "chapters": 271,
                "status": "Finished",
                "year": 2018,
                "rank": 135,
                "members": 420000
            },
            {
                "mal_id": 116778,
                "title": "Chainsaw Man",
                "url": "https://myanimelist.net/manga/116778/Chainsaw_Man",
                "images": {
                    "jpg": {
                        "large_image_url": "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx105778-euxXZEIfDY2u.png"
                    }
                },
                "score": 8.74,
                "type": "Manga",
                "chapters": 180,
                "status": "Publishing",
                "year": 2018,
                "rank": 42,
                "members": 580000
            },
            {
                "mal_id": 119161,
                "title": "Spy x Family",
                "url": "https://myanimelist.net/manga/119161/Spy_x_Family",
                "images": {
                    "jpg": {
                        "large_image_url": "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx108556-NHjkz0BNJhLx.jpg"
                    }
                },
                "score": 8.52,
                "type": "Manga",
                "chapters": 105,
                "status": "Publishing",
                "year": 2019,
                "rank": 108,
                "members": 370000
            },
            {
                "mal_id": 126146,
                "title": "[Oshi no Ko]",
                "url": "https://myanimelist.net/manga/126146/Oshi_no_Ko",
                "images": {
                    "jpg": {
                        "large_image_url": "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx117195-r3kf8eF0xkDJ.png"
                    }
                },
                "score": 8.61,
                "type": "Manga",
                "chapters": 166,
                "status": "Finished",
                "year": 2020,
                "rank": 82,
                "members": 290000
            },
            {
                "mal_id": 114745,
                "title": "Blue Lock",
                "url": "https://myanimelist.net/manga/114745/Blue_Lock",
                "images": {
                    "jpg": {
                        "large_image_url": "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx106130-yPNeuSu75ey1.jpg"
                    }
                },
                "score": 8.32,
                "type": "Manga",
                "chapters": 280,
                "status": "Publishing",
                "year": 2018,
                "rank": 215,
                "members": 240000
            }
        ]
    },
    "rekomendasi": {
        "anime": [
            {
                "mal_id": 52991,
                "title": "Sousou no Frieren",
                "url": "https://myanimelist.net/anime/52991/Sousou_no_Frieren",
                "images": {
                    "jpg": {
                        "large_image_url": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-qQTzQnEJJ3oB.jpg"
                    }
                },
                "score": 9.32,
                "type": "TV",
                "episodes": 28,
                "status": "Finished Airing",
                "year": 2023,
                "rank": 1,
                "members": 960000
            },
            {
                "mal_id": 5114,
                "title": "Fullmetal Alchemist: Brotherhood",
                "url": "https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood",
                "images": {
                    "jpg": {
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1208/94745l.jpg"
                    }
                },
                "score": 9.09,
                "type": "TV",
                "episodes": 64,
                "status": "Finished Airing",
                "year": 2009,
                "rank": 2,
                "members": 3300000
            },
            {
                "mal_id": 9253,
                "title": "Steins;Gate",
                "url": "https://myanimelist.net/anime/9253/Steins_Gate",
                "images": {
                    "jpg": {
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1935/127974l.jpg"
                    }
                },
                "score": 9.07,
                "type": "TV",
                "episodes": 24,
                "status": "Finished Airing",
                "year": 2011,
                "rank": 3,
                "members": 2500000
            },
            {
                "mal_id": 28977,
                "title": "Gintama°",
                "url": "https://myanimelist.net/anime/28977/Gintama°",
                "images": {
                    "jpg": {
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/3/72078l.jpg"
                    }
                },
                "score": 9.06,
                "type": "TV",
                "episodes": 51,
                "status": "Finished Airing",
                "year": 2015,
                "rank": 4,
                "members": 620000
            },
            {
                "mal_id": 38524,
                "title": "Shingeki no Kyojin Season 3 Part 2",
                "url": "https://myanimelist.net/anime/38524/Shingeki_no_Kyojin_Season_3_Part_2",
                "images": {
                    "jpg": {
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1517/100633l.jpg"
                    }
                },
                "score": 9.05,
                "type": "TV",
                "episodes": 10,
                "status": "Finished Airing",
                "year": 2019,
                "rank": 5,
                "members": 2200000
            },
            {
                "mal_id": 11061,
                "title": "Hunter x Hunter (2011)",
                "url": "https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011",
                "images": {
                    "jpg": {
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1337/99013l.jpg"
                    }
                },
                "score": 9.04,
                "type": "TV",
                "episodes": 148,
                "status": "Finished Airing",
                "year": 2011,
                "rank": 6,
                "members": 2800000
            },
            {
                "mal_id": 41467,
                "title": "Bleach: Sennen Kessen-hen",
                "url": "https://myanimelist.net/anime/41467/Bleach__Sennen_Kessen-hen",
                "images": {
                    "jpg": {
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1764/126627l.jpg"
                    }
                },
                "score": 9.01,
                "type": "TV",
                "episodes": 13,
                "status": "Finished Airing",
                "year": 2022,
                "rank": 7,
                "members": 530000
            },
            {
                "mal_id": 9969,
                "title": "Gintama'",
                "url": "https://myanimelist.net/anime/9969/Gintama",
                "images": {
                    "jpg": {
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/4/50361l.jpg"
                    }
                },
                "score": 9.03,
                "type": "TV",
                "episodes": 51,
                "status": "Finished Airing",
                "year": 2011,
                "rank": 8,
                "members": 540000
            },
            {
                "mal_id": 43608,
                "title": "Kaguya-sama wa Kokurasetai: Ultra Romantic",
                "url": "https://myanimelist.net/anime/43608/Kaguya-sama_wa_Kokurasetai__Ultra_Romantic",
                "images": {
                    "jpg": {
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1160/122627l.jpg"
                    }
                },
                "score": 8.98,
                "type": "TV",
                "episodes": 13,
                "status": "Finished Airing",
                "year": 2022,
                "rank": 9,
                "members": 900000
            },
            {
                "mal_id": 4181,
                "title": "Clannad: After Story",
                "url": "https://myanimelist.net/anime/4181/Clannad__After_Story",
                "images": {
                    "jpg": {
                        "large_image_url": "https://cdn.myanimelist.net/images/anime/1299/110774l.jpg"
                    }
                },
                "score": 8.93,
                "type": "TV",
                "episodes": 24,
                "status": "Finished Airing",
                "year": 2008,
                "rank": 10,
                "members": 1200000
            }
        ],
        "manga": [
            {
                "mal_id": 2,
                "title": "Berserk",
                "url": "https://myanimelist.net/manga/2/Berserk",
                "images": {
                    "jpg": {
                        "large_image_url": "https://cdn.myanimelist.net/images/manga/1/157897l.jpg"
                    }
                },
                "score": 9.47,
                "type": "Manga",
                "chapters": 376,
                "status": "Publishing",
                "year": 1989,
                "rank": 1,
                "members": 700000
            },
            {
                "mal_id": 1706,
                "title": "JoJo no Kimyou na Bouken Part 7: Steel Ball Run",
                "url": "https://myanimelist.net/manga/1706/JoJo_no_Kimyou_na_Bouken_Part_7__Steel_Ball_Run",
                "images": {
                    "jpg": {
                        "large_image_url": "https://cdn.myanimelist.net/images/manga/3/179882l.jpg"
                    }
                },
                "score": 9.31,
                "type": "Manga",
                "chapters": 95,
                "status": "Finished",
                "year": 2004,
                "rank": 2,
                "members": 290000
            },
            {
                "mal_id": 656,
                "title": "Vagabond",
                "url": "https://myanimelist.net/manga/656/Vagabond",
                "images": {
                    "jpg": {
                        "large_image_url": "https://cdn.myanimelist.net/images/manga/1/259070l.jpg"
                    }
                },
                "score": 9.26,
                "type": "Manga",
                "chapters": 327,
                "status": "On Hiatus",
                "year": 1998,
                "rank": 3,
                "members": 410000
            },
            {
                "mal_id": 13,
                "title": "One Piece",
                "url": "https://myanimelist.net/manga/13/One_Piece",
                "images": {
                    "jpg": {
                        "large_image_url": "https://cdn.myanimelist.net/images/manga/2/253146l.jpg"
                    }
                },
                "score": 9.22,
                "type": "Manga",
                "chapters": 1100,
                "status": "Publishing",
                "year": 1997,
                "rank": 4,
                "members": 650000
            },
            {
                "mal_id": 1,
                "title": "Monster",
                "url": "https://myanimelist.net/manga/1/Monster",
                "images": {
                    "jpg": {
                        "large_image_url": "https://cdn.myanimelist.net/images/manga/3/258224l.jpg"
                    }
                },
                "score": 9.15,
                "type": "Manga",
                "chapters": 162,
                "status": "Finished",
                "year": 1994,
                "rank": 5,
                "members": 270000
            },
            {
                "mal_id": 642,
                "title": "Vinland Saga",
                "url": "https://myanimelist.net/manga/642/Vinland_Saga",
                "images": {
                    "jpg": {
                        "large_image_url": "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30642-0mjRDkf4THpo.jpg"
                    }
                },
                "score": 9.07,
                "type": "Manga",
                "chapters": 212,
                "status": "Publishing",
                "year": 2005,
                "rank": 6,
                "members": 330000
            },
            {
                "mal_id": 25,
                "title": "Fullmetal Alchemist",
                "url": "https://myanimelist.net/manga/25/Fullmetal_Alchemist",
                "images": {
                    "jpg": {
                        "large_image_url": "https://cdn.myanimelist.net/images/manga/3/243675l.jpg"
                    }
                },
                "score": 9.03,
                "type": "Manga",
                "chapters": 116,
                "status": "Finished",
                "year": 2001,
                "rank": 7,
                "members": 310000
            },
            {
                "mal_id": 70345,
                "title": "Grand Blue",
                "url": "https://myanimelist.net/manga/70345/Grand_Blue",
                "images": {
                    "jpg": {
                        "large_image_url": "https://cdn.myanimelist.net/images/manga/2/166124l.jpg"
                    }
                },
                "score": 9.01,
                "type": "Manga",
                "chapters": 92,
                "status": "Publishing",
                "year": 2014,
                "rank": 8,
                "members": 190000
            },
            {
                "mal_id": 4632,
                "title": "Oyasumi Punpun",
                "url": "https://myanimelist.net/manga/4632/Oyasumi_Punpun",
                "images": {
                    "jpg": {
                        "large_image_url": "https://cdn.myanimelist.net/images/manga/3/164420l.jpg"
                    }
                },
                "score": 8.99,
                "type": "Manga",
                "chapters": 147,
                "status": "Finished",
                "year": 2007,
                "rank": 9,
                "members": 460000
            },
            {
                "mal_id": 51,
                "title": "Slam Dunk",
                "url": "https://myanimelist.net/manga/51/Slam_Dunk",
                "images": {
                    "jpg": {
                        "large_image_url": "https://cdn.myanimelist.net/images/manga/2/258749l.jpg"
                    }
                },
                "score": 8.98,
                "type": "Manga",
                "chapters": 276,
                "status": "Finished",
                "year": 1990,
                "rank": 10,
                "members": 180000
            }
        ]
    },
    "catalog": [
        {
            "id": 1,
            "title": "The Count's Youngest Son Is A Player!",
            "url": "https://myanimelist.net/manga/130424",
            "image": "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx123573-LKoCKwRouEMW.png",
            "aura": [
                "binge",
                "high-energy"
            ],
            "genre": [
                "Action",
                "Fantasy",
                "Adventure",
                "Adaptation"
            ],
            "format": "Manhwa",
            "type": "Manga",
            "status": "ongoing",
            "timeAgo": "9s",
            "up": true,
            "views": "4.4M",
            "rawViews": 4400000,
            "latestRelease": "CH.161",
            "score": 8.9,
            "year": 2020
        },
        {
            "id": 2,
            "title": "The Ruined World Was Mistaken for a Game",
            "url": "https://myanimelist.net/manga/153648",
            "image": "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx156477-uM3wUBlYEaap.png",
            "aura": [
                "mind-bending",
                "binge"
            ],
            "genre": [
                "Action",
                "Fantasy",
                "Sci-Fi",
                "Psychological"
            ],
            "format": "Manhwa",
            "type": "Manga",
            "status": "ongoing",
            "timeAgo": "18s",
            "up": true,
            "views": "247.2k",
            "rawViews": 247200,
            "latestRelease": "CH.28",
            "score": 8.4,
            "year": 2023
        },
        {
            "id": 3,
            "title": "The Heavenly Path's Annihilation",
            "url": "https://myanimelist.net/manga/153098",
            "image": "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx153432-flZLVek7Ei1Z.png",
            "aura": [
                "high-energy",
                "melancholy"
            ],
            "genre": [
                "Action",
                "Martial Arts",
                "Historical",
                "Supernatural"
            ],
            "format": "Manhwa",
            "type": "Manga",
            "status": "ongoing",
            "timeAgo": "33s",
            "up": true,
            "views": "129.5k",
            "rawViews": 129500,
            "latestRelease": "CH.22",
            "score": 8.6,
            "year": 2022
        },
        {
            "id": 4,
            "title": "The Supreme Demon Swordmaster",
            "url": "https://myanimelist.net/manga/150125",
            "image": "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx149332-adkSyOFY3c5U.jpg",
            "aura": [
                "high-energy",
                "binge"
            ],
            "genre": [
                "Action",
                "Fantasy",
                "Demon",
                "Demons"
            ],
            "format": "Manhwa",
            "type": "Manga",
            "status": "ongoing",
            "timeAgo": "35s",
            "up": true,
            "views": "1.1M",
            "rawViews": 1100000,
            "latestRelease": "CH.57",
            "score": 8.7,
            "year": 2022
        },
        {
            "id": 5,
            "title": "I'm Going To Destroy This Country",
            "url": "https://myanimelist.net/manga/147820",
            "image": "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx136220-u9sewv3u02mN.jpg",
            "aura": [
                "high-energy",
                "melancholy"
            ],
            "genre": [
                "Action",
                "Drama",
                "Supernatural",
                "Thriller"
            ],
            "format": "Manhwa",
            "type": "Manga",
            "status": "ongoing",
            "timeAgo": "1m",
            "up": true,
            "views": "5.4M",
            "rawViews": 5400000,
            "latestRelease": "CH.98.7",
            "score": 8.8,
            "year": 2021
        },
        {
            "id": 6,
            "title": "The World's Best Kunlun Tavern",
            "url": "https://myanimelist.net/manga/141982",
            "image": "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx132144-i5B4VnG9sRgh.png",
            "aura": [
                "chill",
                "binge"
            ],
            "genre": [
                "Comedy",
                "Martial Arts",
                "Cooking",
                "Slice of Life"
            ],
            "format": "Manhwa",
            "type": "Manga",
            "status": "ongoing",
            "timeAgo": "32m",
            "up": true,
            "views": "1.6M",
            "rawViews": 1600000,
            "latestRelease": "CH.134",
            "score": 8.5,
            "year": 2021
        },
        {
            "id": 7,
            "title": "The Ultimate of All Ages",
            "url": "https://myanimelist.net/manga/128746",
            "image": "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx116353-DYuIigXuPwpZ.jpg",
            "aura": [
                "high-energy",
                "binge"
            ],
            "genre": [
                "Action",
                "Fantasy",
                "Adventure",
                "Martial Arts"
            ],
            "format": "Manhua",
            "type": "Manga",
            "status": "ongoing",
            "timeAgo": "33m",
            "up": true,
            "views": "14.4M",
            "rawViews": 14400000,
            "latestRelease": "CH.576",
            "score": 8.3,
            "year": 2019
        },
        {
            "id": 8,
            "title": "Study Group",
            "url": "https://myanimelist.net/manga/122184",
            "image": "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx110472-jxJG7CZ3lf4d.jpg",
            "aura": [
                "high-energy",
                "chill"
            ],
            "genre": [
                "Action",
                "Drama",
                "Martial Arts",
                "Comedy"
            ],
            "format": "Manhwa",
            "type": "Manga",
            "status": "ongoing",
            "country": "🇰🇷",
            "timeAgo": "33m",
            "up": true,
            "views": "776.2k",
            "rawViews": 776200,
            "latestRelease": "CH.328",
            "score": 8.5,
            "year": 2019
        },
        {
            "id": 9,
            "title": "The Sword Emperor Who Surpasses His Previous Life",
            "url": "https://myanimelist.net/manga/149950",
            "image": "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx137280-juUL79K7f9s7.png",
            "aura": [
                "high-energy",
                "binge"
            ],
            "genre": [
                "Action",
                "Fantasy",
                "Adaptation",
                "Magic"
            ],
            "format": "Manhwa",
            "type": "Manga",
            "status": "ongoing",
            "timeAgo": "34m",
            "up": true,
            "views": "865.8k",
            "rawViews": 865800,
            "latestRelease": "CH.45",
            "score": 8.4,
            "year": 2022
        },
        {
            "id": 10,
            "title": "The Hero Returns",
            "url": "https://myanimelist.net/manga/148765",
            "image": "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx146017-Xv0ma1h8ShJc.jpg",
            "aura": [
                "high-energy",
                "binge"
            ],
            "genre": [
                "Action",
                "Supernatural",
                "Fantasy",
                "Adventure"
            ],
            "format": "Manhwa",
            "type": "Manga",
            "status": "ongoing",
            "timeAgo": "34m",
            "up": true,
            "views": "7.2M",
            "rawViews": 7200000,
            "latestRelease": "CH.175",
            "score": 8.7,
            "year": 2022
        },
        {
            "id": 11,
            "title": "The Grand Duke's New Daughter-in-Law is a Menace",
            "url": "https://myanimelist.net/manga/158920",
            "image": "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx108556-NHjkz0BNJhLx.jpg",
            "aura": [
                "chill",
                "binge"
            ],
            "genre": [
                "Romance",
                "Comedy",
                "Fantasy",
                "Historical"
            ],
            "format": "Manhwa",
            "type": "Manga",
            "status": "ongoing",
            "timeAgo": "35m",
            "up": true,
            "views": "94.6k",
            "rawViews": 94600,
            "latestRelease": "CH.23",
            "score": 8.2,
            "year": 2023
        },
        {
            "id": 12,
            "title": "Tang Clan Legend",
            "url": "https://myanimelist.net/manga/149811",
            "image": "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx106929-flAUvHZDUz5v.jpg",
            "aura": [
                "high-energy",
                "mind-bending"
            ],
            "genre": [
                "Martial Arts",
                "Historical",
                "Action",
                "Drama"
            ],
            "format": "Manhwa",
            "type": "Manga",
            "status": "ongoing",
            "timeAgo": "36m",
            "up": true,
            "views": "488.7k",
            "rawViews": 488700,
            "latestRelease": "CH.64",
            "score": 8.4,
            "year": 2022
        },
        {
            "id": 13,
            "title": "Solo Leveling Season 2: Arise from the Shadow",
            "url": "https://myanimelist.net/anime/58567",
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx176496-9BDMjAZGEbq4.png",
            "aura": [
                "high-energy",
                "binge"
            ],
            "genre": [
                "Action",
                "Fantasy",
                "Supernatural",
                "Adventure"
            ],
            "format": "TV",
            "type": "Anime",
            "status": "ongoing",
            "timeAgo": "37m",
            "up": true,
            "views": "3.8M",
            "rawViews": 3800000,
            "latestRelease": "EP.13",
            "score": 8.8,
            "year": 2025
        },
        {
            "id": 14,
            "title": "Sousou no Frieren",
            "url": "https://myanimelist.net/anime/52991",
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-qQTzQnEJJ3oB.jpg",
            "aura": [
                "melancholy",
                "chill"
            ],
            "genre": [
                "Adventure",
                "Drama",
                "Fantasy",
                "Magic"
            ],
            "format": "TV",
            "type": "Anime",
            "status": "tamat",
            "timeAgo": "38m",
            "up": false,
            "views": "4.1M",
            "rawViews": 4100000,
            "latestRelease": "EP.28",
            "score": 9.3,
            "year": 2023
        },
        {
            "id": 15,
            "title": "Sakamoto Days",
            "url": "https://myanimelist.net/anime/58568",
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx177709-e5Qx6RlsBgD5.png",
            "aura": [
                "high-energy",
                "chill",
                "binge"
            ],
            "genre": [
                "Action",
                "Comedy",
                "Supernatural",
                "Crime"
            ],
            "format": "TV",
            "type": "Anime",
            "status": "ongoing",
            "timeAgo": "38m",
            "up": true,
            "views": "1.9M",
            "rawViews": 1900000,
            "latestRelease": "EP.11",
            "score": 8.4,
            "year": 2025
        },
        {
            "id": 16,
            "title": "Dandadan",
            "url": "https://myanimelist.net/anime/57334",
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx171018-60q1B6GK2Ghb.jpg",
            "aura": [
                "high-energy",
                "mind-bending",
                "binge"
            ],
            "genre": [
                "Action",
                "Comedy",
                "Supernatural",
                "Sci-Fi"
            ],
            "format": "TV",
            "type": "Anime",
            "status": "ongoing",
            "timeAgo": "39m",
            "up": true,
            "views": "2.6M",
            "rawViews": 2600000,
            "latestRelease": "EP.12",
            "score": 8.7,
            "year": 2024
        },
        {
            "id": 17,
            "title": "Jujutsu Kaisen",
            "url": "https://myanimelist.net/manga/113138",
            "image": "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx101517-H3TdM3g5ZUe9.jpg",
            "aura": [
                "high-energy",
                "melancholy"
            ],
            "genre": [
                "Action",
                "Supernatural",
                "Demon",
                "Demons"
            ],
            "format": "Manga",
            "type": "Manga",
            "status": "tamat",
            "timeAgo": "40m",
            "up": false,
            "views": "5.2M",
            "rawViews": 5200000,
            "latestRelease": "CH.271",
            "score": 8.5,
            "year": 2018
        },
        {
            "id": 18,
            "title": "Chainsaw Man",
            "url": "https://myanimelist.net/manga/116778",
            "image": "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx105778-euxXZEIfDY2u.png",
            "aura": [
                "high-energy",
                "mind-bending",
                "melancholy"
            ],
            "genre": [
                "Action",
                "Supernatural",
                "Demon",
                "Drama"
            ],
            "format": "Manga",
            "type": "Manga",
            "status": "ongoing",
            "timeAgo": "41m",
            "up": true,
            "views": "4.9M",
            "rawViews": 4900000,
            "latestRelease": "CH.180",
            "score": 8.7,
            "year": 2018
        },
        {
            "id": 19,
            "title": "Omniscient Reader's Viewpoint",
            "url": "https://myanimelist.net/manga/132214",
            "image": "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx119257-Pi21aq3ey9GG.jpg",
            "aura": [
                "mind-bending",
                "binge",
                "high-energy"
            ],
            "genre": [
                "Action",
                "Fantasy",
                "Psychological",
                "Supernatural"
            ],
            "format": "Manhwa",
            "type": "Manga",
            "status": "ongoing",
            "timeAgo": "42m",
            "up": true,
            "views": "6.8M",
            "rawViews": 6800000,
            "latestRelease": "CH.225",
            "score": 9.1,
            "year": 2020
        },
        {
            "id": 20,
            "title": "Berserk",
            "url": "https://myanimelist.net/manga/2",
            "image": "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30002-Cul4OeN7bYtn.jpg",
            "aura": [
                "melancholy",
                "high-energy"
            ],
            "genre": [
                "Action",
                "Fantasy",
                "Demons",
                "Psychological"
            ],
            "format": "Manga",
            "type": "Manga",
            "status": "ongoing",
            "timeAgo": "45m",
            "up": false,
            "views": "3.9M",
            "rawViews": 3900000,
            "latestRelease": "CH.376",
            "score": 9.5,
            "year": 1989
        },
        {
            "id": 21,
            "title": "Steins;Gate",
            "url": "https://myanimelist.net/anime/9253",
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx9253-tIUXF2gfU8Sg.jpg",
            "aura": [
                "mind-bending",
                "melancholy",
                "binge"
            ],
            "genre": [
                "Sci-Fi",
                "Psychological",
                "Thriller",
                "Drama"
            ],
            "format": "TV",
            "type": "Anime",
            "status": "tamat",
            "timeAgo": "50m",
            "up": false,
            "views": "3.5M",
            "rawViews": 3500000,
            "latestRelease": "EP.24",
            "score": 9.1,
            "year": 2011
        },
        {
            "id": 22,
            "title": "Spy x Family",
            "url": "https://myanimelist.net/manga/119161",
            "image": "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx108556-NHjkz0BNJhLx.jpg",
            "aura": [
                "chill",
                "binge"
            ],
            "genre": [
                "Comedy",
                "Action",
                "Slice of Life"
            ],
            "format": "Manga",
            "type": "Manga",
            "status": "ongoing",
            "timeAgo": "55m",
            "up": true,
            "views": "3.2M",
            "rawViews": 3200000,
            "latestRelease": "CH.105",
            "score": 8.5,
            "year": 2019
        },
        {
            "id": 23,
            "title": "[Oshi no Ko]",
            "url": "https://myanimelist.net/manga/126146",
            "image": "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx117195-r3kf8eF0xkDJ.png",
            "aura": [
                "mind-bending",
                "melancholy",
                "binge"
            ],
            "genre": [
                "Drama",
                "Mystery",
                "Supernatural",
                "Psychological"
            ],
            "format": "Manga",
            "type": "Manga",
            "status": "tamat",
            "timeAgo": "1h",
            "up": false,
            "views": "2.9M",
            "rawViews": 2900000,
            "latestRelease": "CH.166",
            "score": 8.6,
            "year": 2020
        },
        {
            "id": 24,
            "title": "Blue Lock",
            "url": "https://myanimelist.net/manga/114745",
            "image": "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx106130-yPNeuSu75ey1.jpg",
            "aura": [
                "high-energy",
                "binge"
            ],
            "genre": [
                "Action",
                "Psychological",
                "Drama"
            ],
            "format": "Manga",
            "type": "Manga",
            "status": "ongoing",
            "timeAgo": "1h",
            "up": true,
            "views": "2.7M",
            "rawViews": 2700000,
            "latestRelease": "CH.280",
            "score": 8.3,
            "year": 2018
        },
        {
            "id": 25,
            "title": "Attack on Titan",
            "url": "https://myanimelist.net/anime/16498",
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16498-m5htTQbb8UB4.jpg",
            "aura": [
                "high-energy",
                "melancholy"
            ],
            "genre": [
                "Action",
                "Drama",
                "Fantasy",
                "Mystery"
            ],
            "format": "TV",
            "type": "Anime",
            "status": "tamat",
            "timeAgo": "1h",
            "up": false,
            "views": "8.9M",
            "rawViews": 8900000,
            "latestRelease": "EP.87",
            "score": 9,
            "year": 2013
        },
        {
            "id": 26,
            "title": "One Piece",
            "url": "https://myanimelist.net/manga/13",
            "image": "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30013-1466YjJc507m.jpg",
            "aura": [
                "binge",
                "high-energy"
            ],
            "genre": [
                "Action",
                "Adventure",
                "Comedy",
                "Fantasy"
            ],
            "format": "Manga",
            "type": "Manga",
            "status": "ongoing",
            "timeAgo": "1h",
            "up": true,
            "views": "12.4M",
            "rawViews": 12400000,
            "latestRelease": "CH.1130",
            "score": 9.2,
            "year": 1997
        },
        {
            "id": 27,
            "title": "Death Note",
            "url": "https://myanimelist.net/anime/1535",
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1535-4r88uZzpvDvd.jpg",
            "aura": [
                "mind-bending",
                "binge"
            ],
            "genre": [
                "Mystery",
                "Psychological",
                "Supernatural",
                "Thriller"
            ],
            "format": "TV",
            "type": "Anime",
            "status": "tamat",
            "timeAgo": "2h",
            "up": false,
            "views": "7.8M",
            "rawViews": 7800000,
            "latestRelease": "EP.37",
            "score": 8.9,
            "year": 2006
        },
        {
            "id": 28,
            "title": "Vinland Saga Season 2",
            "url": "https://myanimelist.net/anime/49387",
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx136430-mQ9eL8v5xT2z.jpg",
            "aura": [
                "melancholy",
                "chill"
            ],
            "genre": [
                "Action",
                "Adventure",
                "Drama",
                "Historical"
            ],
            "format": "TV",
            "type": "Anime",
            "status": "tamat",
            "timeAgo": "2h",
            "up": false,
            "views": "3.6M",
            "rawViews": 3600000,
            "latestRelease": "EP.24",
            "score": 9.1,
            "year": 2023
        },
        {
            "id": 29,
            "title": "Nano Machine",
            "url": "https://myanimelist.net/manga/149880",
            "image": "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx120012-oQWz78pL8k3n.jpg",
            "aura": [
                "high-energy",
                "binge"
            ],
            "genre": [
                "Action",
                "Fantasy",
                "Martial Arts",
                "Sci-Fi"
            ],
            "format": "Manhwa",
            "type": "Manga",
            "status": "ongoing",
            "timeAgo": "2h",
            "up": true,
            "views": "4.8M",
            "rawViews": 4800000,
            "latestRelease": "CH.218",
            "score": 8.8,
            "year": 2020
        },
        {
            "id": 30,
            "title": "Demon Slayer: Kimetsu no Yaiba",
            "url": "https://myanimelist.net/anime/38000",
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101922-WBsBlCoPuQ75.jpg",
            "aura": [
                "high-energy",
                "binge"
            ],
            "genre": [
                "Action",
                "Fantasy",
                "Demon",
                "Historical"
            ],
            "format": "TV",
            "type": "Anime",
            "status": "tamat",
            "timeAgo": "3h",
            "up": false,
            "views": "9.5M",
            "rawViews": 9500000,
            "latestRelease": "EP.26",
            "score": 8.8,
            "year": 2019
        },
        {
            "id": 31,
            "title": "Hunter x Hunter (2011)",
            "url": "https://myanimelist.net/anime/11061",
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx11061-n5gHD4eZzW1P.jpg",
            "aura": [
                "mind-bending",
                "high-energy"
            ],
            "genre": [
                "Action",
                "Adventure",
                "Fantasy"
            ],
            "format": "TV",
            "type": "Anime",
            "status": "tamat",
            "timeAgo": "3h",
            "up": false,
            "views": "8.1M",
            "rawViews": 8100000,
            "latestRelease": "EP.148",
            "score": 9.3,
            "year": 2011
        },
        {
            "id": 32,
            "title": "Bleach: Thousand-Year Blood War",
            "url": "https://myanimelist.net/anime/41467",
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx114446-MwfTzO4yP2oX.jpg",
            "aura": [
                "high-energy",
                "binge"
            ],
            "genre": [
                "Action",
                "Adventure",
                "Supernatural"
            ],
            "format": "TV",
            "type": "Anime",
            "status": "ongoing",
            "timeAgo": "3h",
            "up": true,
            "views": "4.3M",
            "rawViews": 4300000,
            "latestRelease": "EP.26",
            "score": 9,
            "year": 2022
        },
        {
            "id": 33,
            "title": "Fullmetal Alchemist: Brotherhood",
            "url": "https://myanimelist.net/anime/5114",
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx5114-1m2eK4zO9pQv.jpg",
            "aura": [
                "mind-bending",
                "high-energy"
            ],
            "genre": [
                "Action",
                "Adventure",
                "Drama",
                "Fantasy"
            ],
            "format": "TV",
            "type": "Anime",
            "status": "tamat",
            "timeAgo": "4h",
            "up": false,
            "views": "9.8M",
            "rawViews": 9800000,
            "latestRelease": "EP.64",
            "score": 9.5,
            "year": 2009
        },
        {
            "id": 34,
            "title": "Wind Breaker",
            "url": "https://myanimelist.net/manga/135338",
            "image": "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx106322-zV9gMvO6zW2Z.jpg",
            "aura": [
                "high-energy",
                "chill"
            ],
            "genre": [
                "Action",
                "Comedy",
                "Drama",
                "Slice of Life"
            ],
            "format": "Manhwa",
            "type": "Manga",
            "status": "ongoing",
            "timeAgo": "4h",
            "up": true,
            "views": "3.9M",
            "rawViews": 3900000,
            "latestRelease": "CH.490",
            "score": 8.7,
            "year": 2013
        },
        {
            "id": 35,
            "title": "Mob Psycho 100",
            "url": "https://myanimelist.net/anime/32182",
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21507-OguN612999m6.jpg",
            "aura": [
                "high-energy",
                "comedy"
            ],
            "genre": [
                "Action",
                "Comedy",
                "Supernatural"
            ],
            "format": "TV",
            "type": "Anime",
            "status": "tamat",
            "timeAgo": "5h",
            "up": false,
            "views": "5.5M",
            "rawViews": 5500000,
            "latestRelease": "EP.12",
            "score": 8.9,
            "year": 2016
        },
        {
            "id": 36,
            "title": "Return of the Mount Hua Sect",
            "url": "https://myanimelist.net/manga/141097",
            "image": "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx132100-qP9kL2x5zT3e.jpg",
            "aura": [
                "high-energy",
                "binge"
            ],
            "genre": [
                "Action",
                "Comedy",
                "Fantasy",
                "Martial Arts"
            ],
            "format": "Manhwa",
            "type": "Manga",
            "status": "ongoing",
            "timeAgo": "5h",
            "up": true,
            "views": "4.7M",
            "rawViews": 4700000,
            "latestRelease": "CH.124",
            "score": 8.9,
            "year": 2021
        },
        {
            "id": 37,
            "title": "Cyberpunk: Edgerunners",
            "url": "https://myanimelist.net/anime/42310",
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx120377-p5yZ74h7Y31r.jpg",
            "aura": [
                "high-energy",
                "melancholy"
            ],
            "genre": [
                "Action",
                "Sci-Fi",
                "Psychological"
            ],
            "format": "TV",
            "type": "Anime",
            "status": "tamat",
            "timeAgo": "6h",
            "up": false,
            "views": "4.2M",
            "rawViews": 4200000,
            "latestRelease": "EP.10",
            "score": 8.8,
            "year": 2022
        },
        {
            "id": 38,
            "title": "Overlord IV",
            "url": "https://myanimelist.net/anime/48895",
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx133844-32lMh748zQ3x.jpg",
            "aura": [
                "mind-bending",
                "binge"
            ],
            "genre": [
                "Action",
                "Fantasy",
                "Isekai"
            ],
            "format": "TV",
            "type": "Anime",
            "status": "tamat",
            "timeAgo": "6h",
            "up": false,
            "views": "3.7M",
            "rawViews": 3700000,
            "latestRelease": "EP.13",
            "score": 8.6,
            "year": 2022
        },
        {
            "id": 39,
            "title": "The Beginning After The End",
            "url": "https://myanimelist.net/manga/133547",
            "image": "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx106086-Y5mQ7pL8wZ3e.jpg",
            "aura": [
                "binge",
                "high-energy"
            ],
            "genre": [
                "Action",
                "Adventure",
                "Fantasy",
                "Isekai"
            ],
            "format": "Manhwa",
            "type": "Manga",
            "status": "ongoing",
            "timeAgo": "7h",
            "up": true,
            "views": "6.1M",
            "rawViews": 6100000,
            "latestRelease": "CH.185",
            "score": 8.8,
            "year": 2018
        },
        {
            "id": 40,
            "title": "Tokyo Ghoul",
            "url": "https://myanimelist.net/manga/33327",
            "image": "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx63327-0N2LpW9xTqB3.jpg",
            "aura": [
                "melancholy",
                "mind-bending"
            ],
            "genre": [
                "Action",
                "Drama",
                "Horror",
                "Mystery",
                "Psychological"
            ],
            "format": "Manga",
            "type": "Manga",
            "status": "tamat",
            "timeAgo": "8h",
            "up": false,
            "views": "5.1M",
            "rawViews": 5100000,
            "latestRelease": "CH.143",
            "score": 8.8,
            "year": 2011
        },
        {
            "id": 41,
            "title": "Haikyuu!! Final",
            "url": "https://myanimelist.net/anime/52742",
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx153284-884m9yvX9wzL.jpg",
            "aura": [
                "high-energy",
                "chill"
            ],
            "genre": [
                "Comedy",
                "Drama",
                "Slice of Life"
            ],
            "format": "TV",
            "type": "Anime",
            "status": "tamat",
            "timeAgo": "9h",
            "up": false,
            "views": "4.5M",
            "rawViews": 4500000,
            "latestRelease": "Movie",
            "score": 8.9,
            "year": 2024
        },
        {
            "id": 42,
            "title": "SSS-Class Revival Hunter",
            "url": "https://myanimelist.net/manga/134606",
            "image": "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx124080-mQ9eL8v5xT2z.jpg",
            "aura": [
                "mind-bending",
                "binge"
            ],
            "genre": [
                "Action",
                "Adventure",
                "Comedy",
                "Fantasy"
            ],
            "format": "Manhwa",
            "type": "Manga",
            "status": "ongoing",
            "timeAgo": "10h",
            "up": true,
            "views": "2.8M",
            "rawViews": 2800000,
            "latestRelease": "CH.102",
            "score": 8.7,
            "year": 2020
        },
        {
            "id": 43,
            "title": "Monster",
            "url": "https://myanimelist.net/anime/19",
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx19-kM91KqL283zX.jpg",
            "aura": [
                "mind-bending",
                "melancholy"
            ],
            "genre": [
                "Drama",
                "Mystery",
                "Psychological",
                "Thriller"
            ],
            "format": "TV",
            "type": "Anime",
            "status": "tamat",
            "timeAgo": "11h",
            "up": false,
            "views": "4.1M",
            "rawViews": 4100000,
            "latestRelease": "EP.74",
            "score": 9.3,
            "year": 2004
        },
        {
            "id": 44,
            "title": "Mushoku Tensei Season 2",
            "url": "https://myanimelist.net/anime/51179",
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx146065-oQWz78pL8k3n.jpg",
            "aura": [
                "binge",
                "chill"
            ],
            "genre": [
                "Action",
                "Adventure",
                "Drama",
                "Fantasy",
                "Isekai"
            ],
            "format": "TV",
            "type": "Anime",
            "status": "tamat",
            "timeAgo": "12h",
            "up": false,
            "views": "5.8M",
            "rawViews": 5800000,
            "latestRelease": "EP.24",
            "score": 8.8,
            "year": 2023
        },
        {
            "id": 45,
            "title": "Tales of Demons and Gods",
            "url": "https://myanimelist.net/manga/92451",
            "image": "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx86707-1466YjJc507m.jpg",
            "aura": [
                "binge",
                "high-energy"
            ],
            "genre": [
                "Action",
                "Adventure",
                "Fantasy",
                "Martial Arts",
                "Demon"
            ],
            "format": "Manhua",
            "type": "Manga",
            "status": "ongoing",
            "timeAgo": "13h",
            "up": true,
            "views": "7.1M",
            "rawViews": 7100000,
            "latestRelease": "CH.458.5",
            "score": 8.4,
            "year": 2015
        },
        {
            "id": 46,
            "title": "Chainsaw Man Part 2",
            "url": "https://myanimelist.net/manga/145690",
            "image": "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx117195-r3kf8eF0xkDJ.png",
            "aura": [
                "high-energy",
                "mind-bending"
            ],
            "genre": [
                "Action",
                "Comedy",
                "Demon",
                "Demons",
                "Horror"
            ],
            "format": "Manga",
            "type": "Manga",
            "status": "ongoing",
            "timeAgo": "14h",
            "up": true,
            "views": "6.5M",
            "rawViews": 6500000,
            "latestRelease": "CH.170",
            "score": 8.8,
            "year": 2022
        },
        {
            "id": 47,
            "title": "Martial Peak",
            "url": "https://myanimelist.net/manga/117963",
            "image": "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx105948-4r88uZzpvDvd.jpg",
            "aura": [
                "binge",
                "high-energy"
            ],
            "genre": [
                "Action",
                "Adventure",
                "Fantasy",
                "Martial Arts"
            ],
            "format": "Manhua",
            "type": "Manga",
            "status": "ongoing",
            "timeAgo": "15h",
            "up": true,
            "views": "18.2M",
            "rawViews": 18200000,
            "latestRelease": "CH.3720",
            "score": 8.5,
            "year": 2018
        },
        {
            "id": 48,
            "title": "Tower of God",
            "url": "https://myanimelist.net/manga/122663",
            "image": "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx85143-m5htTQbb8UB4.jpg",
            "aura": [
                "mind-bending",
                "binge"
            ],
            "genre": [
                "Action",
                "Adventure",
                "Drama",
                "Fantasy",
                "Mystery"
            ],
            "format": "Manhwa",
            "type": "Manga",
            "status": "ongoing",
            "timeAgo": "16h",
            "up": true,
            "views": "8.4M",
            "rawViews": 8400000,
            "latestRelease": "CH.618",
            "score": 8.9,
            "year": 2010
        }
    ]
};

// State utama data aplikasi yang diambil dari API JSON
let appData = null;

/**
 * Mengambil data dari file data.json sebagai representasi API
 */
async function loadAppData() {
    try {
        const response = await fetch(API_ENDPOINT);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        appData = await response.json();
        console.log('Berhasil memuat data dari API JSON (data.json)');
    } catch (error) {
        console.warn('Gagal fetch data.json secara langsung (kemungkinan berjalan di protokol file:/// tanpa server lokal). Menggunakan dataset internal.', error);
        appData = fallbackDataInternal;
    }
    return appData;
}

// ============================================
// 2. NAVIGASI MOBILE
// ============================================

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        const open = mobileMenu.classList.toggle('hidden') === false;
        mobileMenu.classList.toggle('flex', open);
        menuBtn.setAttribute('aria-expanded', open);
    });
}

// ============================================
// 3. KOMPONEN UI UMUM (SKELETON & CARD)
// ============================================

// Template Literal: Skeleton Loading State
function renderLoadingSkeleton(count = 5) {
    return Array.from({ length: count }).map(() => `
        <div class="flex flex-col animate-pulse">
            <div class="relative w-full aspect-[2/3] rounded-xl bg-slate-800/80 border border-white/5 overflow-hidden flex items-center justify-center">
                <i class="fa-regular fa-image text-slate-700 text-3xl"></i>
            </div>
            <div class="flex flex-col gap-1.5 mt-2.5">
                <div class="h-8 bg-slate-800/80 rounded-lg border border-white/5"></div>
                <div class="h-8 bg-slate-800/80 rounded-lg border border-white/5"></div>
            </div>
        </div>
    `).join('');
}

// Template Literal: Error Message State
function renderErrorMessage(message, type, target = 'rekomendasi') {
    const retryId = target === 'update' ? 'btn-retry-update' : 'btn-retry';
    const fallbackId = target === 'update' ? 'btn-fallback-update' : 'btn-fallback';
    return `
        <div class="col-span-full py-10 px-6 bg-slate-900/80 border border-red-500/30 rounded-2xl text-center max-w-xl mx-auto shadow-2xl">
            <div class="w-12 h-12 bg-red-500/10 text-red-400 border border-red-500/20 rounded-full flex items-center justify-center mx-auto mb-3 text-xl">
                <i class="fa-solid fa-triangle-exclamation"></i>
            </div>
            <h3 class="text-base font-bold text-white mb-2">Pengambilan Data Gagal</h3>
            <p class="text-xs text-slate-400 mb-5 leading-relaxed">${message}</p>
            <div class="flex flex-wrap items-center justify-center gap-3">
                <button id="${retryId}" class="bg-orange-600 hover:bg-orange-500 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition flex items-center gap-2 shadow-lg shadow-orange-600/20 cursor-pointer">
                    <i class="fa-solid fa-rotate-right"></i>
                    <span>Coba Lagi</span>
                </button>
                <button id="${fallbackId}" class="bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-white/10 text-xs font-medium px-4 py-2.5 rounded-xl transition flex items-center gap-2 cursor-pointer">
                    <i class="fa-solid fa-database"></i>
                    <span>Tampilkan Data Cadangan</span>
                </button>
            </div>
        </div>
    `;
}

// Template Literal: Individual Card
function createCardHtml(item, type, isUpdate = false) {
    const imageUrl = item.images?.jpg?.large_image_url || item.images?.jpg?.image_url || 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-qQTzQnEJJ3oB.jpg';
    const scoreText = item.score ? Number(item.score).toFixed(1) : 'N/A';
    const typeText = item.type || (type === 'anime' ? 'TV' : 'Manga');
    const itemStatus = (item.status === 'Finished Airing' || item.status === 'Finished') ? 'Tamat' : 'Ongoing';
    const epOrChapter = type === 'anime'
        ? `Episode ${item.episodes || 'Baru'}`
        : `Chapter ${item.chapters || 'Baru'}`;
    const metaInfo = item.year ? `${item.year}` : (item.rank ? `Rank #${item.rank}` : 'Top');
    const membersCount = item.members
        ? (item.members >= 1000000 ? `${(item.members / 1000000).toFixed(1)}M` : `${Math.round(item.members / 1000)}k`)
        : 'Populer';

    return `
        <article class="flex flex-col group">
            <div class="relative w-full aspect-[2/3] rounded-xl overflow-hidden cursor-pointer border border-white/5 group-hover:border-orange-500/50 transition shadow-lg">
                <img src="${imageUrl}" alt="${item.title}" loading="lazy" referrerpolicy="no-referrer" class="w-full h-full object-cover group-hover:scale-110 transition duration-500" onerror="this.onerror=null; this.src='https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-qQTzQnEJJ3oB.jpg'">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-70 transition duration-500"></div>
                
                <div class="absolute top-2 left-2 bg-black/60 text-white text-[10px] font-bold px-2 py-1 rounded-md backdrop-blur-sm flex items-center gap-1 border border-white/10">
                    <i class="fa-solid fa-star text-orange-400"></i> ${scoreText} 
                    <span class="bg-orange-500/20 text-orange-400 px-1 rounded ml-1 text-[9px] font-medium">${typeText}</span>
                    ${isUpdate ? '<span class="bg-red-500 text-white px-1 rounded ml-1 text-[8px] font-bold">UP</span>' : ''}
                </div>
                
                <div class="absolute bottom-4 left-3 right-3 text-center">
                    <h3 class="text-sm font-bold text-white leading-tight group-hover:text-orange-400 transition drop-shadow-md line-clamp-2" title="${item.title}">
                        ${item.title}
                    </h3>
                </div>
            </div>

            <div class="flex flex-col gap-1.5 mt-2.5">
                <a href="${item.url || '#'}" target="_blank" rel="noopener noreferrer" class="flex items-center justify-between bg-slate-900 hover:bg-slate-800 border border-white/5 px-3 py-1.5 rounded-lg text-xs text-slate-200 hover:text-orange-400 transition">
                    <span class="font-medium">${epOrChapter}</span>
                    <span class="text-[11px] text-slate-400">${itemStatus}</span>
                </a>
                <a href="${item.url || '#'}" target="_blank" rel="noopener noreferrer" class="flex items-center justify-between bg-slate-900 hover:bg-slate-800 border border-white/5 px-3 py-1.5 rounded-lg text-xs text-slate-200 hover:text-orange-400 transition">
                    <span class="font-medium text-orange-400/90"><i class="fa-solid fa-fire text-[10px] mr-1"></i>${membersCount}</span>
                    <span class="text-[11px] text-slate-400">${metaInfo}</span>
                </a>
            </div>
        </article>
    `;
}

// Pengolahan data menggunakan array method: filter() dan map()
function renderCards(items, type, isUpdate = false) {
    const validItems = items.filter(item => Boolean(item && item.title));
    return validItems.map(item => createCardHtml(item, type, isUpdate)).join('');
}

// ============================================
// 4. SECTION UPDATE TERBARU (5 CARD)
// ============================================

let currentUpdateCategory = 'anime';
let isFetchingUpdate = false;

async function fetchUpdateTerbaruData(type = 'anime') {
    const grid = document.getElementById('update-terbaru-grid');
    if (!grid) return;

    grid.innerHTML = renderLoadingSkeleton(5);
    isFetchingUpdate = true;

    try {
        if (!appData) await loadAppData();
        const items = appData?.updateTerbaru?.[type] || fallbackDataInternal.updateTerbaru[type] || [];
        if (items.length === 0) throw new Error('Data Update Terbaru kosong');
        grid.innerHTML = renderCards(items.slice(0, 5), type, true);
    } catch (err) {
        console.warn('Gagal memuat Update Terbaru dari API JSON:', err);
        const fallbackItems = fallbackDataInternal.updateTerbaru[type] || fallbackDataInternal.updateTerbaru.anime;
        grid.innerHTML = renderCards(fallbackItems.slice(0, 5), type, true);
    } finally {
        isFetchingUpdate = false;
    }
}

// Filter Kategori Update Terbaru (Anime / Manga)
const updateFilterButtons = document.querySelectorAll('#update-kategori-filter .update-kategori-btn');
updateFilterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedType = button.getAttribute('data-type');
        if (!selectedType || (selectedType === currentUpdateCategory && !isFetchingUpdate)) return;

        currentUpdateCategory = selectedType;

        updateFilterButtons.forEach(b => {
            b.className = 'update-kategori-btn bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-4 md:px-6 py-2 rounded-lg text-sm font-semibold transition cursor-pointer';
        });
        button.className = 'update-kategori-btn bg-orange-600 text-white px-4 md:px-6 py-2 rounded-lg text-sm font-semibold transition cursor-pointer';

        fetchUpdateTerbaruData(currentUpdateCategory);
    });
});

// ============================================
// 5. SECTION REKOMENDASI (DYNAMIC LIST & PAGINATION)
// ============================================

let currentCategory = 'anime';
let currentPage = 1;
let isFetching = false;

async function fetchJikanData(type = 'anime', page = 1, append = false) {
    const grid = document.getElementById('rekomendasi-grid');
    const loadMoreBtn = document.getElementById('btn-load-more');
    if (!grid) return;

    if (!append) {
        grid.innerHTML = renderLoadingSkeleton(10);
    } else if (loadMoreBtn) {
        loadMoreBtn.disabled = true;
        loadMoreBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin text-xs"></i><span>Memuat...</span>`;
    }

    isFetching = true;

    try {
        if (!appData) await loadAppData();
        const allItems = appData?.rekomendasi?.[type] || fallbackDataInternal.rekomendasi[type] || [];
        
        // Paginasi dinamis dari dataset JSON
        const itemsPerPage = 10;
        const startIndex = (page - 1) * itemsPerPage;
        const items = allItems.slice(startIndex, startIndex + itemsPerPage);

        if (items.length === 0 && append) {
            if (loadMoreBtn) {
                loadMoreBtn.disabled = true;
                loadMoreBtn.innerHTML = `<i class="fa-solid fa-check text-xs"></i><span>Semua Konten Telah Dimuat</span>`;
            }
            return;
        }

        const cardsMarkup = renderCards(items.length > 0 ? items : allItems, type, false);

        if (append) {
            grid.insertAdjacentHTML('beforeend', cardsMarkup);
        } else {
            grid.innerHTML = cardsMarkup;
        }

        if (loadMoreBtn) {
            loadMoreBtn.disabled = false;
            loadMoreBtn.innerHTML = `<i class="fa-solid fa-arrows-rotate text-xs"></i><span>Muat Lebih Banyak</span>`;
        }
    } catch (err) {
        console.warn('Gagal memuat Rekomendasi dari API JSON:', err);
        const fallbackItems = fallbackDataInternal.rekomendasi[type] || fallbackDataInternal.rekomendasi.anime;
        grid.innerHTML = renderCards(fallbackItems, type, false);
    } finally {
        isFetching = false;
    }
}

// Filter Kategori Rekomendasi (Anime / Manga)
const filterButtons = document.querySelectorAll('#kategori-filter .kategori-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedType = button.getAttribute('data-type');
        if (!selectedType || (selectedType === currentCategory && !isFetching)) return;

        currentCategory = selectedType;
        currentPage = 1;

        filterButtons.forEach(b => {
            b.className = 'kategori-btn bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-4 md:px-6 py-2 rounded-lg text-sm font-semibold transition cursor-pointer';
        });
        button.className = 'kategori-btn bg-orange-600 text-white px-4 md:px-6 py-2 rounded-lg text-sm font-semibold transition cursor-pointer';

        fetchJikanData(currentCategory, currentPage, false);
    });
});

// Tombol Muat Lebih Banyak Rekomendasi
document.getElementById('btn-load-more')?.addEventListener('click', () => {
    if (isFetching) return;
    currentPage++;
    fetchJikanData(currentCategory, currentPage, true);
});

// ============================================
// 6. MAIN FEATURED BANNER (HERO CAROUSEL)
// ============================================

function renderBannerSkeleton() {
    return `
        <div class="w-full h-full p-6 md:p-10 flex flex-col justify-center animate-pulse relative bg-slate-900">
            <div class="h-8 md:h-10 bg-slate-800/80 rounded-xl w-3/4 mb-4 border border-white/5"></div>
            <div class="flex gap-2 mb-6">
                <div class="h-6 w-14 bg-slate-800/80 rounded-md"></div>
                <div class="h-6 w-12 bg-slate-800/80 rounded-md"></div>
                <div class="h-6 w-16 bg-slate-800/80 rounded-md"></div>
            </div>
            <div class="h-4 bg-slate-800/80 rounded w-full mb-2"></div>
            <div class="h-4 bg-slate-800/80 rounded w-5/6 mb-2"></div>
            <div class="h-4 bg-slate-800/80 rounded w-2/3"></div>
        </div>
    `;
}

function renderBannerError(message) {
    return `
        <div class="w-full h-full p-6 md:p-10 flex flex-col items-center justify-center text-center relative z-10">
            <div class="w-12 h-12 bg-red-500/10 text-red-400 border border-red-500/20 rounded-full flex items-center justify-center mb-3 text-xl">
                <i class="fa-solid fa-triangle-exclamation"></i>
            </div>
            <h3 class="text-base font-bold text-white mb-2">Gagal Memuat Featured Banner</h3>
            <p class="text-xs text-slate-400 mb-4 max-w-md">${message}</p>
            <div class="flex items-center gap-3">
                <button id="btn-retry-banner" class="bg-orange-600 hover:bg-orange-500 text-white text-xs font-semibold px-4 py-2 rounded-xl transition flex items-center gap-2 cursor-pointer shadow">
                    <i class="fa-solid fa-rotate-right"></i>
                    <span>Coba Lagi</span>
                </button>
                <button id="btn-fallback-banner" class="bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-white/10 text-xs font-medium px-4 py-2 rounded-xl transition flex items-center gap-2 cursor-pointer">
                    <i class="fa-solid fa-database"></i>
                    <span>Tampilkan Cadangan</span>
                </button>
            </div>
        </div>
    `;
}

function createBannerHtml(anime) {
    const imageUrl = anime.images?.jpg?.large_image_url || anime.images?.jpg?.image_url || 'https://images.unsplash.com/photo-1542451313056-b7c8e626645f?w=800&fit=crop';
    const scoreText = anime.score ? Number(anime.score).toFixed(1) : 'N/A';
    const typeText = anime.type || 'TV';
    const yearText = anime.year ? `${anime.year}` : (anime.rank ? `Rank #${anime.rank}` : 'Top');
    const synopsisText = anime.synopsis 
        ? (anime.synopsis.length > 210 ? anime.synopsis.slice(0, 210) + '...' : anime.synopsis) 
        : 'Saksikan kisah petualangan luar biasa dalam serial animasi terpopuler ini.';

    return `
        <div class="absolute inset-0">
            <img src="${imageUrl}" referrerpolicy="no-referrer" class="w-full h-full object-cover opacity-35 mix-blend-luminosity group-hover:scale-105 transition duration-700" alt="${anime.title}" onerror="this.onerror=null; this.src='https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-qQTzQnEJJ3oB.jpg'">
            <div class="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent"></div>
            <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/20 via-transparent to-transparent opacity-50 mix-blend-color"></div>
        </div>
        
        <div class="relative z-10 w-full md:w-3/4 lg:w-2/3 p-6 md:p-10 flex flex-col justify-center h-full">
            <h2 class="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-4 group-hover:text-orange-400 transition drop-shadow-md line-clamp-2" title="${anime.title}">
                ${anime.title}
            </h2>
            
            <div class="flex items-center gap-2 mb-5">
                <span class="text-orange-500 font-extrabold text-sm flex items-center gap-1 drop-shadow"><i class="fa-solid fa-star"></i> ${scoreText}</span>
                <span class="bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">${typeText}</span>
                <span class="bg-[#ff4d4f] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">Popular</span>
                <span class="bg-slate-800 text-slate-300 text-[10px] font-bold px-2 py-0.5 rounded border border-white/10">${yearText}</span>
            </div>
            
            <p class="text-slate-300 text-sm md:text-base line-clamp-3 leading-relaxed">
                ${synopsisText}
            </p>
        </div>

        <a href="${anime.url || '#'}" target="_blank" rel="noopener noreferrer" class="absolute inset-0 z-20" aria-label="Lihat detail ${anime.title}"></a>
    `;
}

function renderBannerDots(total, activeIndex) {
    return Array.from({ length: total }).map((_, i) => {
        const isActive = i === activeIndex;
        return isActive
            ? `<div class="w-2.5 h-2.5 rounded-full bg-slate-600 ring-2 ring-orange-500 ring-offset-4 ring-offset-slate-950 cursor-pointer" data-slide="${i}"></div>`
            : `<div class="w-1.5 h-1.5 rounded-full bg-slate-600 cursor-pointer hover:bg-slate-400 transition" data-slide="${i}"></div>`;
    }).join('');
}

let featuredBannerData = [];
let currentBannerIndex = 0;
let bannerTimer = null;

function updateBannerDisplay() {
    const bannerCard = document.getElementById('featured-banner-card');
    const bannerDots = document.getElementById('banner-dots');
    if (!bannerCard || featuredBannerData.length === 0) return;

    bannerCard.innerHTML = createBannerHtml(featuredBannerData[currentBannerIndex]);
    if (bannerDots) {
        bannerDots.innerHTML = renderBannerDots(featuredBannerData.length, currentBannerIndex);
        bannerDots.querySelectorAll('[data-slide]').forEach(dot => {
            dot.addEventListener('click', () => {
                currentBannerIndex = parseInt(dot.getAttribute('data-slide'), 10);
                updateBannerDisplay();
                resetBannerTimer();
            });
        });
    }
}

function resetBannerTimer() {
    if (bannerTimer) clearInterval(bannerTimer);
    bannerTimer = setInterval(() => {
        if (featuredBannerData.length > 1) {
            currentBannerIndex = (currentBannerIndex + 1) % featuredBannerData.length;
            updateBannerDisplay();
        }
    }, 6000);
}

async function fetchFeaturedBanner() {
    const bannerCard = document.getElementById('featured-banner-card');
    if (!bannerCard) return;

    bannerCard.innerHTML = renderBannerSkeleton();

    try {
        if (!appData) await loadAppData();
        const items = appData?.banner || fallbackDataInternal.banner || [];
        if (items.length === 0) throw new Error('Data banner kosong');

        featuredBannerData = items;
        currentBannerIndex = 0;
        updateBannerDisplay();
        resetBannerTimer();
    } catch (err) {
        console.warn('Gagal memuat Featured Banner dari API JSON:', err);
        featuredBannerData = fallbackDataInternal.banner;
        currentBannerIndex = 0;
        updateBannerDisplay();
        resetBannerTimer();
    }
}

// Kontrol Carousel Banner
document.getElementById('banner-prev-btn')?.addEventListener('click', () => {
    if (featuredBannerData.length === 0) return;
    currentBannerIndex = (currentBannerIndex - 1 + featuredBannerData.length) % featuredBannerData.length;
    updateBannerDisplay();
    resetBannerTimer();
});

document.getElementById('banner-next-btn')?.addEventListener('click', () => {
    if (featuredBannerData.length === 0) return;
    currentBannerIndex = (currentBannerIndex + 1) % featuredBannerData.length;
    updateBannerDisplay();
    resetBannerTimer();
});

// ============================================
// 7. KATALOG KONTEN (SEARCH & AURA DISCOVERY)
// ============================================

function initDiscoverySection() {
    const allGenres = [
        'Action', 'Adaptation', 'Adult', 'Adventure', 'Comedy', 'Cooking', 'Crime',
        'Demon', 'Demons', 'Drama', 'Fantasy', 'Historical', 'Isekai', 'Magic',
        'Martial Arts', 'Mystery', 'Psychological', 'Romance', 'Sci-Fi', 'Slice of Life',
        'Supernatural', 'Thriller'
    ];

    let currentAura = 'all';
    let currentSearchQuery = '';
    let selectedGenres = [];
    let currentFormat = 'all';
    let currentType = 'all';
    let currentStatus = 'all';
    let currentSort = 'terbaru';
    let sortAscending = false;
    let currentViewMode = 'grid';
    let genreInclusionMode = 'or';
    let genreExclusionMode = 'or';
    let discoveryCurrentPage = 1;
    const itemsPerPage = 20; // 5 baris kebawah x 4 card per baris = 20 card per halaman

    const gridContainer = document.getElementById('discovery-grid');
    const searchInput = document.getElementById('unified-search-input');
    const clearSearchBtn = document.getElementById('btn-clear-unified-search');
    const genreContainer = document.getElementById('genre-pills-container');
    const genreSearchInput = document.getElementById('genre-search-input');
    const countEl = document.getElementById('discovery-item-count');
    const emptyState = document.getElementById('discovery-empty-state');
    const activeFilterBadges = document.getElementById('active-filter-badges');
    const quickResetBtn = document.getElementById('btn-quick-reset');
    const paginationEl = document.getElementById('discovery-pagination');

    if (!gridContainer) return;

    // Ambil data katalog dari API JSON
    const catalogData = appData?.catalog || fallbackDataInternal.catalog || [];

    // Render Genre Pills
    function renderGenrePills(filterText = '') {
        if (!genreContainer) return;
        const filter = filterText.toLowerCase().trim();
        const filtered = allGenres.filter(g => g.toLowerCase().includes(filter));

        genreContainer.innerHTML = filtered.map(genre => {
            const isSelected = selectedGenres.includes(genre);
            const activeClasses = isSelected
                ? 'bg-orange-600 text-white border-orange-500 shadow-sm'
                : 'bg-slate-950/80 hover:bg-slate-800 text-slate-300 hover:text-white border-white/5';
            return `
                <button type="button" data-genre="${genre}" class="genre-pill-btn text-[11px] font-medium px-2.5 py-1 rounded-md border transition cursor-pointer ${activeClasses}">
                    ${genre}
                </button>
            `;
        }).join('');

        genreContainer.querySelectorAll('.genre-pill-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const g = btn.getAttribute('data-genre');
                if (selectedGenres.includes(g)) {
                    selectedGenres = selectedGenres.filter(item => item !== g);
                } else {
                    selectedGenres.push(g);
                }
                discoveryCurrentPage = 1;
                renderGenrePills(genreSearchInput ? genreSearchInput.value : '');
                filterAndRender();
            });
        });
    }

    // Template Literal: Discovery Card
    function createDiscoveryCard(item, viewMode) {
        const imageUrl = item.image || 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-qQTzQnEJJ3oB.jpg';
        const scoreText = item.score ? Number(item.score).toFixed(1) : '8.5';
        const typeText = item.format || (item.type === 'Anime' ? 'TV' : 'Manga');
        const itemStatus = (item.status === 'tamat' || item.status === 'Finished' || item.status === 'Finished Airing') ? 'Tamat' : 'Ongoing';
        
        let epOrChapter;
        if (item.type === 'Anime') {
            const epClean = item.latestRelease ? item.latestRelease.replace(/^(EP\.|Episode\s*)/i, '') : (item.episodes || '1');
            epOrChapter = `Episode ${epClean}`;
        } else {
            const chClean = item.latestRelease ? item.latestRelease.replace(/^(CH\.|Chapter\s*)/i, '') : '1';
            epOrChapter = `Chapter ${chClean}`;
        }

        const metaInfo = item.year ? `${item.year}` : '2023';
        const viewsCount = item.views || '1.0M';

        if (viewMode === 'list') {
            return `
                <article class="flex items-center gap-3 md:gap-4 p-3 bg-slate-900 border border-white/5 hover:border-orange-500/40 rounded-xl transition group">
                    <div class="relative w-16 md:w-20 aspect-[2/3] rounded-lg overflow-hidden flex-shrink-0 bg-slate-950">
                        <img src="${imageUrl}" alt="${item.title}" loading="lazy" referrerpolicy="no-referrer" class="w-full h-full object-cover group-hover:scale-105 transition duration-300" onerror="this.onerror=null; this.src='https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-qQTzQnEJJ3oB.jpg'">
                    </div>
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-1.5 mb-1">
                            <span class="bg-orange-500/20 text-orange-400 text-[10px] font-semibold px-1.5 py-0.5 rounded">${typeText}</span>
                            ${item.up ? '<span class="bg-red-500 text-white text-[8px] font-bold px-1 rounded">UP</span>' : ''}
                        </div>
                        <h3 class="text-sm font-bold text-white group-hover:text-orange-400 transition truncate" title="${item.title}">${item.title}</h3>
                        <div class="flex items-center gap-2 mt-1.5 text-xs text-slate-400">
                            <span class="text-orange-400 font-semibold"><i class="fa-solid fa-star text-[10px]"></i> ${scoreText}</span>
                            <span>•</span>
                            <span class="text-orange-400/90 font-medium"><i class="fa-solid fa-fire text-[10px] mr-1"></i>${viewsCount}</span>
                            <span>•</span>
                            <span class="text-slate-300">${epOrChapter}</span>
                            <span>•</span>
                            <span class="text-slate-400">${itemStatus}</span>
                        </div>
                    </div>
                    <div class="flex-shrink-0 text-right pr-2">
                        <a href="${item.url || '#'}" target="_blank" rel="noopener noreferrer" class="text-xs font-semibold text-orange-400 hover:text-white bg-slate-950 hover:bg-orange-600 px-3 py-1.5 rounded-lg border border-white/10 transition">
                            Buka
                        </a>
                    </div>
                </article>
            `;
        }

        return `
            <article class="flex flex-col group">
                <div class="relative w-full aspect-[2/3] rounded-xl overflow-hidden cursor-pointer border border-white/5 group-hover:border-orange-500/50 transition shadow-lg bg-slate-950">
                    <img src="${imageUrl}" alt="${item.title}" loading="lazy" referrerpolicy="no-referrer" class="w-full h-full object-cover group-hover:scale-110 transition duration-500" onerror="this.onerror=null; this.src='https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-qQTzQnEJJ3oB.jpg'">
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-70 transition duration-500"></div>
                    
                    <div class="absolute top-2 left-2 bg-black/60 text-white text-[10px] font-bold px-2 py-1 rounded-md backdrop-blur-sm flex items-center gap-1 border border-white/10">
                        <i class="fa-solid fa-star text-orange-400"></i> ${scoreText} 
                        <span class="bg-orange-500/20 text-orange-400 px-1 rounded ml-1 text-[9px] font-medium">${typeText}</span>
                        ${item.up ? '<span class="bg-red-500 text-white px-1 rounded ml-1 text-[8px] font-bold">UP</span>' : ''}
                    </div>
                    
                    <div class="absolute bottom-4 left-3 right-3 text-center">
                        <h3 class="text-sm font-bold text-white leading-tight group-hover:text-orange-400 transition drop-shadow-md line-clamp-2" title="${item.title}">
                            ${item.title}
                        </h3>
                    </div>
                </div>

                <div class="flex flex-col gap-1.5 mt-2.5">
                    <a href="${item.url || '#'}" target="_blank" rel="noopener noreferrer" class="flex items-center justify-between bg-slate-900 hover:bg-slate-800 border border-white/5 px-3 py-1.5 rounded-lg text-xs text-slate-200 hover:text-orange-400 transition">
                        <span class="font-medium">${epOrChapter}</span>
                        <span class="text-[11px] text-slate-400">${itemStatus}</span>
                    </a>
                    <a href="${item.url || '#'}" target="_blank" rel="noopener noreferrer" class="flex items-center justify-between bg-slate-900 hover:bg-slate-800 border border-white/5 px-3 py-1.5 rounded-lg text-xs text-slate-200 hover:text-orange-400 transition">
                        <span class="font-medium text-orange-400/90"><i class="fa-solid fa-fire text-[10px] mr-1"></i>${viewsCount}</span>
                        <span class="text-[11px] text-slate-400">${metaInfo}</span>
                    </a>
                </div>
            </article>
        `;
    }

    // Main filter & render function
    function filterAndRender() {
        let items = catalogData.slice();

        // 1. Unified Search (real-time filtering by title)
        if (currentSearchQuery.trim()) {
            const q = currentSearchQuery.toLowerCase().trim();
            items = items.filter(item => item.title.toLowerCase().includes(q));
        }

        // 2. Aura-Based Discovery
        if (currentAura !== 'all') {
            items = items.filter(item => Array.isArray(item.aura) && item.aura.includes(currentAura));
        }

        // 3. Genre filtering (Inclusion Mode)
        if (selectedGenres.length > 0) {
            if (genreInclusionMode === 'and') {
                items = items.filter(item => selectedGenres.every(g => item.genre.includes(g)));
            } else {
                items = items.filter(item => selectedGenres.some(g => item.genre.includes(g)));
            }
        }

        // 4. Format filter
        if (currentFormat !== 'all') {
            items = items.filter(item => item.format === currentFormat);
        }

        // 5. Type filter
        if (currentType !== 'all') {
            items = items.filter(item => item.type === currentType);
        }

        // 6. Status filter
        if (currentStatus !== 'all') {
            items = items.filter(item => item.status === currentStatus);
        }

        // 7. Sort
        items.sort((a, b) => {
            let diff = 0;
            if (currentSort === 'populer') {
                diff = (b.rawViews || 0) - (a.rawViews || 0);
            } else if (currentSort === 'rating') {
                diff = (b.score || 0) - (a.score || 0);
            } else if (currentSort === 'bookmark') {
                diff = ((b.score || 0) * (b.rawViews || 1)) - ((a.score || 0) * (a.rawViews || 1));
            } else if (currentSort === 'az') {
                diff = a.title.localeCompare(b.title);
            } else {
                // terbaru (id descending)
                diff = (b.id || 0) - (a.id || 0);
            }
            return sortAscending ? -diff : diff;
        });

        // Update count and active badges
        if (countEl) countEl.textContent = items.length;

        renderActiveBadges();

        // Empty state handling
        if (items.length === 0) {
            gridContainer.innerHTML = '';
            if (emptyState) emptyState.classList.remove('hidden');
            if (paginationEl) {
                paginationEl.innerHTML = '';
                paginationEl.classList.add('hidden');
            }
        } else {
            if (emptyState) emptyState.classList.add('hidden');
            if (currentViewMode === 'list') {
                gridContainer.className = 'flex flex-col gap-2.5 pb-6 min-h-[400px]';
            } else {
                gridContainer.className = 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 pb-6 min-h-[400px]';
            }

            // 5 baris kebawah (4 card per baris = 20 card per halaman), sisanya taruh di halaman berikutnya
            const totalPages = Math.ceil(items.length / itemsPerPage) || 1;
            if (discoveryCurrentPage > totalPages) {
                discoveryCurrentPage = 1;
            }
            const startIndex = (discoveryCurrentPage - 1) * itemsPerPage;
            const pageItems = items.slice(startIndex, startIndex + itemsPerPage);

            gridContainer.innerHTML = pageItems.map(item => createDiscoveryCard(item, currentViewMode)).join('');
            renderDiscoveryPagination(totalPages, discoveryCurrentPage);
        }
        syncStickyControls();
    }

    // Render Pagination Navigasi (< 1 2 3 > sesuai desain referensi)
    function renderDiscoveryPagination(totalPages, activePage) {
        if (!paginationEl) return;

        if (totalPages <= 1) {
            paginationEl.innerHTML = '';
            paginationEl.classList.add('hidden');
            return;
        }

        paginationEl.classList.remove('hidden');

        let html = '';

        // Previous Button
        const isPrevDisabled = activePage <= 1;
        html += `
            <button type="button" 
                class="discovery-page-btn w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-xs transition border select-none ${
                    isPrevDisabled 
                        ? 'border-white/5 bg-slate-950/60 text-slate-600 cursor-not-allowed opacity-40' 
                        : 'border-white/10 bg-slate-900 text-slate-300 hover:text-orange-400 hover:bg-slate-800 hover:border-orange-500/40 cursor-pointer shadow-sm'
                }" 
                data-page="${activePage - 1}" 
                ${isPrevDisabled ? 'disabled' : ''} 
                aria-label="Halaman sebelumnya">
                <i class="fa-solid fa-chevron-left text-[11px]"></i>
            </button>
        `;

        // Page Number Buttons (1, 2, 3...)
        for (let p = 1; p <= totalPages; p++) {
            const isActive = p === activePage;
            html += `
                <button type="button" 
                    class="discovery-page-btn w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-xs sm:text-sm font-bold transition border select-none ${
                        isActive 
                            ? 'bg-orange-600 border-orange-500 text-white shadow-md shadow-orange-600/30 cursor-default' 
                            : 'border-white/10 bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-orange-500/40 cursor-pointer shadow-sm'
                    }" 
                    data-page="${p}" 
                    ${isActive ? 'aria-current="page"' : ''} 
                    aria-label="Ke halaman ${p}">
                    ${p}
                </button>
            `;
        }

        // Next Button
        const isNextDisabled = activePage >= totalPages;
        html += `
            <button type="button" 
                class="discovery-page-btn w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-xs transition border select-none ${
                    isNextDisabled 
                        ? 'border-white/5 bg-slate-950/60 text-slate-600 cursor-not-allowed opacity-40' 
                        : 'border-white/10 bg-slate-900 text-slate-300 hover:text-orange-400 hover:bg-slate-800 hover:border-orange-500/40 cursor-pointer shadow-sm'
                }" 
                data-page="${activePage + 1}" 
                ${isNextDisabled ? 'disabled' : ''} 
                aria-label="Halaman berikutnya">
                <i class="fa-solid fa-chevron-right text-[11px]"></i>
            </button>
        `;

        paginationEl.innerHTML = html;

        // Bind click events to active pagination buttons
        paginationEl.querySelectorAll('.discovery-page-btn:not([disabled])').forEach(btn => {
            btn.addEventListener('click', () => {
                const targetPage = parseInt(btn.getAttribute('data-page'), 10);
                if (targetPage && targetPage !== activePage && targetPage >= 1 && targetPage <= totalPages) {
                    discoveryCurrentPage = targetPage;
                    filterAndRender();

                    const discoverySection = document.getElementById('discovery');
                    if (discoverySection) {
                        const yOffset = -80;
                        const y = discoverySection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                    }

                    setTimeout(syncStickyControls, 150);
                }
            });
        });
    }

    // Render Active Filter Badges
    function renderActiveBadges() {
        if (!activeFilterBadges) return;
        const badges = [];

        if (currentSearchQuery.trim()) {
            badges.push(`
                <span class="inline-flex items-center gap-1 bg-slate-800 text-orange-400 px-2 py-0.5 rounded text-[11px] border border-orange-500/30">
                    <span>"${currentSearchQuery.trim()}"</span>
                    <i class="fa-solid fa-xmark cursor-pointer hover:text-white" data-clear="search"></i>
                </span>
            `);
        }

        if (currentAura !== 'all') {
            const auraLabels = {
                'high-energy': 'High Energy',
                'melancholy': 'Melancholy',
                'binge': 'Binge Mode',
                'mind-bending': 'Mind Bending',
                'chill': 'Chill Vibes'
            };
            badges.push(`
                <span class="inline-flex items-center gap-1 bg-orange-600/20 text-orange-300 px-2 py-0.5 rounded text-[11px] border border-orange-500/40">
                    <span>${auraLabels[currentAura] || currentAura}</span>
                    <i class="fa-solid fa-xmark cursor-pointer hover:text-white" data-clear="aura"></i>
                </span>
            `);
        }

        selectedGenres.forEach(g => {
            badges.push(`
                <span class="inline-flex items-center gap-1 bg-slate-800 text-slate-200 px-2 py-0.5 rounded text-[11px] border border-white/10">
                    <span>${g}</span>
                    <i class="fa-solid fa-xmark cursor-pointer hover:text-white" data-clear-genre="${g}"></i>
                </span>
            `);
        });

        if (currentFormat !== 'all') {
            badges.push(`
                <span class="inline-flex items-center gap-1 bg-slate-800 text-slate-200 px-2 py-0.5 rounded text-[11px] border border-white/10">
                    <span>Format: ${currentFormat}</span>
                    <i class="fa-solid fa-xmark cursor-pointer hover:text-white" data-clear="format"></i>
                </span>
            `);
        }

        activeFilterBadges.innerHTML = badges.join('');

        if (badges.length > 0) {
            quickResetBtn?.classList.remove('hidden');
        } else {
            quickResetBtn?.classList.add('hidden');
        }

        // Add click listener to clear badges
        activeFilterBadges.querySelectorAll('[data-clear]').forEach(el => {
            el.addEventListener('click', () => {
                const type = el.getAttribute('data-clear');
                discoveryCurrentPage = 1;
                if (type === 'search') {
                    currentSearchQuery = '';
                    if (searchInput) searchInput.value = '';
                    clearSearchBtn?.classList.add('hidden');
                } else if (type === 'aura') {
                    setAura('all');
                    return;
                } else if (type === 'format') {
                    setFormat('all');
                    return;
                }
                filterAndRender();
            });
        });

        activeFilterBadges.querySelectorAll('[data-clear-genre]').forEach(el => {
            el.addEventListener('click', () => {
                const g = el.getAttribute('data-clear-genre');
                selectedGenres = selectedGenres.filter(item => item !== g);
                discoveryCurrentPage = 1;
                renderGenrePills(genreSearchInput ? genreSearchInput.value : '');
                filterAndRender();
            });
        });
    }

    // Helper to set active Aura and sync buttons
    function setAura(aura) {
        currentAura = aura;
        discoveryCurrentPage = 1;

        // Sync header quick pills
        document.querySelectorAll('.aura-quick-btn').forEach(btn => {
            if (btn.getAttribute('data-aura') === aura) {
                btn.className = 'aura-quick-btn active bg-orange-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-orange-500 transition cursor-pointer whitespace-nowrap shadow-sm';
            } else {
                btn.className = 'aura-quick-btn bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-medium px-3 py-1.5 rounded-lg border border-white/10 transition cursor-pointer whitespace-nowrap';
            }
        });

        // Sync sidebar aura buttons
        document.querySelectorAll('.aura-side-btn').forEach(btn => {
            if (btn.getAttribute('data-aura') === aura) {
                btn.className = 'aura-side-btn active bg-orange-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-orange-500 transition cursor-pointer shadow-sm';
            } else {
                btn.className = 'aura-side-btn bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-medium px-3 py-1.5 rounded-lg border border-white/5 transition cursor-pointer';
            }
        });

        filterAndRender();
    }

    function setFormat(format) {
        currentFormat = format;
        discoveryCurrentPage = 1;
        document.querySelectorAll('.format-btn').forEach(btn => {
            if (btn.getAttribute('data-format') === format) {
                btn.className = 'format-btn active bg-orange-600 text-white text-xs px-2.5 py-1 rounded-md font-semibold cursor-pointer';
            } else {
                btn.className = 'format-btn bg-slate-950 hover:bg-slate-800 text-slate-300 text-xs px-2.5 py-1 rounded-md border border-white/5 cursor-pointer';
            }
        });
        filterAndRender();
    }

    function setType(type) {
        currentType = type;
        discoveryCurrentPage = 1;
        document.querySelectorAll('.type-btn').forEach(btn => {
            if (btn.getAttribute('data-type') === type) {
                btn.className = 'type-btn active bg-orange-600 text-white text-xs px-2.5 py-1 rounded-md font-semibold cursor-pointer';
            } else {
                btn.className = 'type-btn bg-slate-950 hover:bg-slate-800 text-slate-300 text-xs px-2.5 py-1 rounded-md border border-white/5 cursor-pointer';
            }
        });
        filterAndRender();
    }

    function setStatus(status) {
        currentStatus = status;
        discoveryCurrentPage = 1;
        document.querySelectorAll('.status-btn').forEach(btn => {
            if (btn.getAttribute('data-status') === status) {
                btn.className = 'status-btn active bg-orange-600 text-white text-xs px-2.5 py-1 rounded-md font-semibold cursor-pointer';
            } else {
                btn.className = 'status-btn bg-slate-950 hover:bg-slate-800 text-slate-300 text-xs px-2.5 py-1 rounded-md border border-white/5 cursor-pointer';
            }
        });
        filterAndRender();
    }

    function resetAllFilters() {
        discoveryCurrentPage = 1;
        currentSearchQuery = '';
        if (searchInput) searchInput.value = '';
        clearSearchBtn?.classList.add('hidden');
        selectedGenres = [];
        if (genreSearchInput) genreSearchInput.value = '';
        renderGenrePills('');
        currentFormat = 'all';
        currentType = 'all';
        currentStatus = 'all';
        currentSort = 'terbaru';
        sortAscending = false;

        const sortLabel = document.getElementById('sort-dropdown-selected-label');
        if (sortLabel) sortLabel.textContent = 'Terbaru';
        document.querySelectorAll('.sort-option-btn').forEach(btn => {
            const val = btn.getAttribute('data-value');
            const check = btn.querySelector('.sort-check');
            if (val === 'terbaru') {
                btn.className = 'sort-option-btn w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-orange-400 bg-orange-500/10 hover:bg-orange-500/15 rounded-xl transition cursor-pointer text-left';
                check?.classList.remove('is-hidden');
            } else {
                btn.className = 'sort-option-btn w-full flex items-center justify-between px-3 py-2 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-xl transition cursor-pointer text-left';
                check?.classList.add('is-hidden');
            }
        });

        // Reset Inclusion & Exclusion custom dropdowns
        genreInclusionMode = 'or';
        genreExclusionMode = 'or';
        const incLabel = document.getElementById('inclusion-dropdown-selected-label');
        if (incLabel) incLabel.textContent = 'Or';
        document.querySelectorAll('.inclusion-option-btn').forEach(btn => {
            const val = btn.getAttribute('data-value');
            const check = btn.querySelector('.inclusion-check');
            if (val === 'or') {
                btn.className = 'inclusion-option-btn w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-orange-400 bg-orange-500/10 hover:bg-orange-500/15 rounded-xl transition cursor-pointer text-left';
                check?.classList.remove('is-hidden');
            } else {
                btn.className = 'inclusion-option-btn w-full flex items-center justify-between px-3 py-2 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-xl transition cursor-pointer text-left';
                check?.classList.add('is-hidden');
            }
        });

        const excLabel = document.getElementById('exclusion-dropdown-selected-label');
        if (excLabel) excLabel.textContent = 'Or';
        document.querySelectorAll('.exclusion-option-btn').forEach(btn => {
            const val = btn.getAttribute('data-value');
            const check = btn.querySelector('.exclusion-check');
            if (val === 'or') {
                btn.className = 'exclusion-option-btn w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-orange-400 bg-orange-500/10 hover:bg-orange-500/15 rounded-xl transition cursor-pointer text-left';
                check?.classList.remove('is-hidden');
            } else {
                btn.className = 'exclusion-option-btn w-full flex items-center justify-between px-3 py-2 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-xl transition cursor-pointer text-left';
                check?.classList.add('is-hidden');
            }
        });

        const sortIcon = document.getElementById('sort-order-icon');
        if (sortIcon) sortIcon.className = 'fa-solid fa-arrow-down-wide-short';

        setAura('all');
        setFormat('all');
        setType('all');
        setStatus('all');
        filterAndRender();
    }

    // Real-time Unified Search (Input event)
    searchInput?.addEventListener('input', (e) => {
        discoveryCurrentPage = 1;
        currentSearchQuery = e.target.value;
        if (currentSearchQuery.trim()) {
            clearSearchBtn?.classList.remove('hidden');
        } else {
            clearSearchBtn?.classList.add('hidden');
        }
        filterAndRender();
    });

    clearSearchBtn?.addEventListener('click', () => {
        discoveryCurrentPage = 1;
        currentSearchQuery = '';
        if (searchInput) searchInput.value = '';
        clearSearchBtn.classList.add('hidden');
        filterAndRender();
    });

    // Aura Quick & Side Button Clicks
    document.querySelectorAll('.aura-quick-btn, .aura-side-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const aura = btn.getAttribute('data-aura');
            if (aura) setAura(aura);
        });
    });

    // Genre Search Filter
    genreSearchInput?.addEventListener('input', (e) => {
        discoveryCurrentPage = 1;
        renderGenrePills(e.target.value);
    });

    // Reset buttons (Quick reset, Sidebar reset all, Empty state reset)
    document.getElementById('btn-reset-all-filters')?.addEventListener('click', resetAllFilters);
    quickResetBtn?.addEventListener('click', resetAllFilters);
    document.getElementById('btn-empty-reset')?.addEventListener('click', resetAllFilters);

    // Format, Type, Status buttons
    document.querySelectorAll('.format-btn').forEach(btn => {
        btn.addEventListener('click', () => setFormat(btn.getAttribute('data-format') || 'all'));
    });
    document.querySelectorAll('.type-btn').forEach(btn => {
        btn.addEventListener('click', () => setType(btn.getAttribute('data-type') || 'all'));
    });
    document.querySelectorAll('.status-btn').forEach(btn => {
        btn.addEventListener('click', () => setStatus(btn.getAttribute('data-status') || 'all'));
    });

    // Accordion Toggles
    document.querySelectorAll('.accordion-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            const targetEl = document.getElementById(targetId);
            const icon = btn.querySelector('.fa-solid');
            if (!targetEl) return;

            const isHidden = targetEl.classList.contains('hidden');
            if (isHidden) {
                targetEl.classList.remove('hidden');
                if (icon) {
                    icon.classList.remove('fa-chevron-down');
                    icon.classList.add('fa-chevron-up');
                }
            } else {
                targetEl.classList.add('hidden');
                if (icon) {
                    icon.classList.remove('fa-chevron-up');
                    icon.classList.add('fa-chevron-down');
                }
            }
            setTimeout(syncStickyControls, 50);
        });
    });

    // Custom Sort Dropdown Logic
    const sortTrigger = document.getElementById('sort-dropdown-trigger');
    const sortMenu = document.getElementById('sort-dropdown-menu');
    const sortLabel = document.getElementById('sort-dropdown-selected-label');
    const sortChevron = document.getElementById('sort-dropdown-chevron');
    const sortOptions = document.querySelectorAll('.sort-option-btn');

    function toggleSortMenu(open) {
        const isCurrentlyHidden = sortMenu?.classList.contains('hidden');
        const shouldOpen = typeof open === 'boolean' ? open : isCurrentlyHidden;
        if (!sortMenu) return;

        if (shouldOpen) {
            toggleInclusionMenu(false);
            toggleExclusionMenu(false);
            sortMenu.classList.remove('hidden');
            sortTrigger?.setAttribute('aria-expanded', 'true');
            sortTrigger?.classList.add('border-orange-500/60');
            sortChevron?.classList.add('rotate-180');
        } else {
            sortMenu.classList.add('hidden');
            sortTrigger?.setAttribute('aria-expanded', 'false');
            sortTrigger?.classList.remove('border-orange-500/60');
            sortChevron?.classList.remove('rotate-180');
        }
    }

    sortTrigger?.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleSortMenu();
    });

    sortOptions.forEach(opt => {
        opt.addEventListener('click', (e) => {
            e.stopPropagation();
            const val = opt.getAttribute('data-value') || 'terbaru';
            const label = opt.getAttribute('data-label') || opt.querySelector('span')?.textContent.trim() || 'Terbaru';
            currentSort = val;
            if (sortLabel) sortLabel.textContent = label;
            discoveryCurrentPage = 1;

            sortOptions.forEach(btn => {
                const check = btn.querySelector('.sort-check');
                if (btn === opt) {
                    btn.className = 'sort-option-btn w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-orange-400 bg-orange-500/10 hover:bg-orange-500/15 rounded-xl transition cursor-pointer text-left';
                    check?.classList.remove('is-hidden');
                } else {
                    btn.className = 'sort-option-btn w-full flex items-center justify-between px-3 py-2 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-xl transition cursor-pointer text-left';
                    check?.classList.add('is-hidden');
                }
            });

            toggleSortMenu(false);
            filterAndRender();
        });
    });

    // Custom Inclusion Mode Dropdown
    const inclusionTrigger = document.getElementById('inclusion-dropdown-trigger');
    const inclusionMenu = document.getElementById('inclusion-dropdown-menu');
    const inclusionLabel = document.getElementById('inclusion-dropdown-selected-label');
    const inclusionChevron = document.getElementById('inclusion-dropdown-chevron');
    const inclusionOptions = document.querySelectorAll('.inclusion-option-btn');

    function toggleInclusionMenu(open) {
        const isCurrentlyHidden = inclusionMenu?.classList.contains('hidden');
        const shouldOpen = typeof open === 'boolean' ? open : isCurrentlyHidden;
        if (!inclusionMenu) return;

        if (shouldOpen) {
            toggleSortMenu(false);
            toggleExclusionMenu(false);
            inclusionMenu.classList.remove('hidden');
            inclusionTrigger?.setAttribute('aria-expanded', 'true');
            inclusionTrigger?.classList.add('border-orange-500', 'ring-1', 'ring-orange-500/50');
            inclusionChevron?.classList.add('rotate-180');
        } else {
            inclusionMenu.classList.add('hidden');
            inclusionTrigger?.setAttribute('aria-expanded', 'false');
            inclusionTrigger?.classList.remove('border-orange-500', 'ring-1', 'ring-orange-500/50');
            inclusionChevron?.classList.remove('rotate-180');
        }
    }

    inclusionTrigger?.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleInclusionMenu();
    });

    inclusionOptions.forEach(opt => {
        opt.addEventListener('click', (e) => {
            e.stopPropagation();
            const val = opt.getAttribute('data-value') || 'or';
            const label = opt.getAttribute('data-label') || 'Or';
            genreInclusionMode = val;
            discoveryCurrentPage = 1;
            if (inclusionLabel) inclusionLabel.textContent = label;

            inclusionOptions.forEach(btn => {
                const check = btn.querySelector('.inclusion-check');
                if (btn === opt) {
                    btn.className = 'inclusion-option-btn w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-orange-400 bg-orange-500/10 hover:bg-orange-500/15 rounded-xl transition cursor-pointer text-left';
                    check?.classList.remove('is-hidden');
                } else {
                    btn.className = 'inclusion-option-btn w-full flex items-center justify-between px-3 py-2 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-xl transition cursor-pointer text-left';
                    check?.classList.add('is-hidden');
                }
            });

            toggleInclusionMenu(false);
            filterAndRender();
        });
    });

    // Custom Exclusion Mode Dropdown
    const exclusionTrigger = document.getElementById('exclusion-dropdown-trigger');
    const exclusionMenu = document.getElementById('exclusion-dropdown-menu');
    const exclusionLabel = document.getElementById('exclusion-dropdown-selected-label');
    const exclusionChevron = document.getElementById('exclusion-dropdown-chevron');
    const exclusionOptions = document.querySelectorAll('.exclusion-option-btn');

    function toggleExclusionMenu(open) {
        const isCurrentlyHidden = exclusionMenu?.classList.contains('hidden');
        const shouldOpen = typeof open === 'boolean' ? open : isCurrentlyHidden;
        if (!exclusionMenu) return;

        if (shouldOpen) {
            toggleSortMenu(false);
            toggleInclusionMenu(false);
            exclusionMenu.classList.remove('hidden');
            exclusionTrigger?.setAttribute('aria-expanded', 'true');
            exclusionTrigger?.classList.add('border-orange-500', 'ring-1', 'ring-orange-500/50');
            exclusionChevron?.classList.add('rotate-180');
        } else {
            exclusionMenu.classList.add('hidden');
            exclusionTrigger?.setAttribute('aria-expanded', 'false');
            exclusionTrigger?.classList.remove('border-orange-500', 'ring-1', 'ring-orange-500/50');
            exclusionChevron?.classList.remove('rotate-180');
        }
    }

    exclusionTrigger?.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleExclusionMenu();
    });

    exclusionOptions.forEach(opt => {
        opt.addEventListener('click', (e) => {
            e.stopPropagation();
            const val = opt.getAttribute('data-value') || 'or';
            const label = opt.getAttribute('data-label') || 'Or';
            genreExclusionMode = val;
            discoveryCurrentPage = 1;
            if (exclusionLabel) exclusionLabel.textContent = label;

            exclusionOptions.forEach(btn => {
                const check = btn.querySelector('.exclusion-check');
                if (btn === opt) {
                    btn.className = 'exclusion-option-btn w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-orange-400 bg-orange-500/10 hover:bg-orange-500/15 rounded-xl transition cursor-pointer text-left';
                    check?.classList.remove('is-hidden');
                } else {
                    btn.className = 'exclusion-option-btn w-full flex items-center justify-between px-3 py-2 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-xl transition cursor-pointer text-left';
                    check?.classList.add('is-hidden');
                }
            });

            toggleExclusionMenu(false);
            filterAndRender();
        });
    });

    // Close all dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        const sortContainer = document.getElementById('custom-sort-dropdown');
        if (sortContainer && !sortContainer.contains(e.target)) {
            toggleSortMenu(false);
        }
        const inclusionContainer = document.getElementById('custom-inclusion-dropdown');
        if (inclusionContainer && !inclusionContainer.contains(e.target)) {
            toggleInclusionMenu(false);
        }
        const exclusionContainer = document.getElementById('custom-exclusion-dropdown');
        if (exclusionContainer && !exclusionContainer.contains(e.target)) {
            toggleExclusionMenu(false);
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            toggleSortMenu(false);
            toggleInclusionMenu(false);
            toggleExclusionMenu(false);
        }
    });

    // Sort Order Toggle
    document.getElementById('discovery-sort-order-btn')?.addEventListener('click', () => {
        sortAscending = !sortAscending;
        discoveryCurrentPage = 1;
        const sortIcon = document.getElementById('sort-order-icon');
        if (sortIcon) {
            sortIcon.className = sortAscending
                ? 'fa-solid fa-arrow-up-wide-short'
                : 'fa-solid fa-arrow-down-wide-short';
        }
        filterAndRender();
    });

    // View Mode Toggle
    const gridBtn = document.getElementById('view-mode-grid-btn');
    const listBtn = document.getElementById('view-mode-list-btn');

    gridBtn?.addEventListener('click', () => {
        currentViewMode = 'grid';
        gridBtn.className = 'w-8 h-8 rounded-lg flex items-center justify-center text-xs bg-orange-600 text-white transition shadow cursor-pointer';
        listBtn.className = 'w-8 h-8 rounded-lg flex items-center justify-center text-xs text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer';
        filterAndRender();
    });

    listBtn?.addEventListener('click', () => {
        currentViewMode = 'list';
        listBtn.className = 'w-8 h-8 rounded-lg flex items-center justify-center text-xs bg-orange-600 text-white transition shadow cursor-pointer';
        gridBtn.className = 'w-8 h-8 rounded-lg flex items-center justify-center text-xs text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer';
        filterAndRender();
    });

    // Sinkronisasi Sticky Controls Container dengan Sidebar Filter
    const sidebarFilterEl = document.getElementById('discovery-sidebar-filter');
    const stickyControlsEl = document.getElementById('discovery-sticky-controls');
    const stickyTopOffset = 72;
    let isSyncTicking = false;

    function syncStickyControls() {
        if (!isSyncTicking) {
            requestAnimationFrame(() => {
                if (sidebarFilterEl && stickyControlsEl && window.innerWidth >= 1024) {
                    const sidebarRect = sidebarFilterEl.getBoundingClientRect();
                    if (sidebarRect.top < stickyTopOffset) {
                        const pushUpOffset = stickyTopOffset - sidebarRect.top;
                        stickyControlsEl.style.transform = `translateY(-${pushUpOffset}px)`;
                    } else {
                        stickyControlsEl.style.transform = '';
                    }
                } else if (stickyControlsEl) {
                    stickyControlsEl.style.transform = '';
                }
                isSyncTicking = false;
            });
            isSyncTicking = true;
        }
    }

    window.addEventListener('scroll', syncStickyControls, { passive: true });
    window.addEventListener('resize', syncStickyControls, { passive: true });

    // Initial Renders
    renderGenrePills('');
    filterAndRender();
    syncStickyControls();
}

// ============================================
// 8. INISIALISASI APLIKASI
// ============================================

document.addEventListener('DOMContentLoaded', async () => {
    // 1. Ambil data API JSON terlebih dahulu
    await loadAppData();

    // 2. Inisialisasi masing-masing section
    fetchFeaturedBanner();
    fetchUpdateTerbaruData('anime');
    fetchJikanData('anime', 1, false);
    initDiscoverySection();
});
