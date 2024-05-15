import { VStack, Text } from "@chakra-ui/react"

export default function PlaylistTile({ playlistprops }: any) {
    return (
        <VStack>
            <Text>Top of component</Text>
            <Text> {playlistprops.name} </Text>
        </VStack>
    )
}

const demoPlaylist = {
    "href": "https://api.spotify.com/v1/users/4etrmxcgfbnfwmbylpo45rh4e/playlists?offset=0&limit=100&locale=en-US%2Cen%3Bq%3D0.9",
    "limit": 100,
    "next": null,
    "offset": 0,
    "previous": null,
    "total": 15,
    "items": [
        {
            "collaborative": false,
            "description": "A musical time capsule from the past has been unsealed…!",
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/02hfE7onttl86UDXLC5o3X"
            },
            "href": "https://api.spotify.com/v1/playlists/02hfE7onttl86UDXLC5o3X",
            "id": "02hfE7onttl86UDXLC5o3X",
            "images": [
                {
                    "height": null,
                    "url": "https://image-cdn-fa.spotifycdn.com/image/ab67706c0000da8446682893ae6bde01764fbf52",
                    "width": null
                }
            ],
            "name": "My 2023 Playlist in a Bottle",
            "owner": {
                "display_name": "Ian_McCabe",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/4etrmxcgfbnfwmbylpo45rh4e"
                },
                "href": "https://api.spotify.com/v1/users/4etrmxcgfbnfwmbylpo45rh4e",
                "id": "4etrmxcgfbnfwmbylpo45rh4e",
                "type": "user",
                "uri": "spotify:user:4etrmxcgfbnfwmbylpo45rh4e"
            },
            "primary_color": null,
            "public": true,
            "snapshot_id": "AAAABBbEwEO8gWbqFWUwB6zRTIH16ARd",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/02hfE7onttl86UDXLC5o3X/tracks",
                "total": 9
            },
            "type": "playlist",
            "uri": "spotify:playlist:02hfE7onttl86UDXLC5o3X"
        },
        {
            "collaborative": false,
            "description": "",
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/0G2fBxePSmG1o00PUiVd3u"
            },
            "href": "https://api.spotify.com/v1/playlists/0G2fBxePSmG1o00PUiVd3u",
            "id": "0G2fBxePSmG1o00PUiVd3u",
            "images": [
                {
                    "height": null,
                    "url": "https://i.scdn.co/image/ab67616d00001e02922dcd3cfd71d78b11bc4870",
                    "width": null
                }
            ],
            "name": "Sibelius Piano Vol.3",
            "owner": {
                "display_name": "Ian_McCabe",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/4etrmxcgfbnfwmbylpo45rh4e"
                },
                "href": "https://api.spotify.com/v1/users/4etrmxcgfbnfwmbylpo45rh4e",
                "id": "4etrmxcgfbnfwmbylpo45rh4e",
                "type": "user",
                "uri": "spotify:user:4etrmxcgfbnfwmbylpo45rh4e"
            },
            "primary_color": null,
            "public": true,
            "snapshot_id": "AAAABhDMkW2eGRo3Jdo5ci2t9MFuMLUa",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/0G2fBxePSmG1o00PUiVd3u/tracks",
                "total": 7
            },
            "type": "playlist",
            "uri": "spotify:playlist:0G2fBxePSmG1o00PUiVd3u"
        },
        {
            "collaborative": false,
            "description": "More of my favorite pieces by Sibelius.",
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/0v8B2dRX1IA0A2cxeL6sSi"
            },
            "href": "https://api.spotify.com/v1/playlists/0v8B2dRX1IA0A2cxeL6sSi",
            "id": "0v8B2dRX1IA0A2cxeL6sSi",
            "images": [
                {
                    "height": null,
                    "url": "https://i.scdn.co/image/ab67616d00001e02d73962a9a6869562515f2d25",
                    "width": null
                }
            ],
            "name": "Sibelius Piano Vol.2",
            "owner": {
                "display_name": "Ian_McCabe",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/4etrmxcgfbnfwmbylpo45rh4e"
                },
                "href": "https://api.spotify.com/v1/users/4etrmxcgfbnfwmbylpo45rh4e",
                "id": "4etrmxcgfbnfwmbylpo45rh4e",
                "type": "user",
                "uri": "spotify:user:4etrmxcgfbnfwmbylpo45rh4e"
            },
            "primary_color": null,
            "public": true,
            "snapshot_id": "AAAADZ1RvE67zuZ1qyhnyV+Y56yqvk3W",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/0v8B2dRX1IA0A2cxeL6sSi/tracks",
                "total": 9
            },
            "type": "playlist",
            "uri": "spotify:playlist:0v8B2dRX1IA0A2cxeL6sSi"
        },
        {
            "collaborative": false,
            "description": "Some of my favorite piano pieces by Sibelius.",
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/6zkKii807Ako3y9ApRLsfE"
            },
            "href": "https://api.spotify.com/v1/playlists/6zkKii807Ako3y9ApRLsfE",
            "id": "6zkKii807Ako3y9ApRLsfE",
            "images": [
                {
                    "height": null,
                    "url": "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8495dde6afebca03b177a6889e",
                    "width": null
                }
            ],
            "name": "Sibelius Piano",
            "owner": {
                "display_name": "Ian_McCabe",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/4etrmxcgfbnfwmbylpo45rh4e"
                },
                "href": "https://api.spotify.com/v1/users/4etrmxcgfbnfwmbylpo45rh4e",
                "id": "4etrmxcgfbnfwmbylpo45rh4e",
                "type": "user",
                "uri": "spotify:user:4etrmxcgfbnfwmbylpo45rh4e"
            },
            "primary_color": null,
            "public": true,
            "snapshot_id": "AAAAFGVcuD1bYZV+CLhOfzndkmnRHQ6G",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/6zkKii807Ako3y9ApRLsfE/tracks",
                "total": 15
            },
            "type": "playlist",
            "uri": "spotify:playlist:6zkKii807Ako3y9ApRLsfE"
        },
        {
            "collaborative": false,
            "description": "And other songs I discovered through the discover weekly playlist.",
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/18d2BEwD8rnvFzaFYDDeRk"
            },
            "href": "https://api.spotify.com/v1/playlists/18d2BEwD8rnvFzaFYDDeRk",
            "id": "18d2BEwD8rnvFzaFYDDeRk",
            "images": [
                {
                    "height": 640,
                    "url": "https://mosaic.scdn.co/640/ab67616d00001e021486201545a05ec3ce9e0834ab67616d00001e0246c0210d81ce5f162a2cca46ab67616d00001e0284498215ae18c5527827ca81ab67616d00001e02d948458a5407c9a4592ceb07",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://mosaic.scdn.co/300/ab67616d00001e021486201545a05ec3ce9e0834ab67616d00001e0246c0210d81ce5f162a2cca46ab67616d00001e0284498215ae18c5527827ca81ab67616d00001e02d948458a5407c9a4592ceb07",
                    "width": 300
                },
                {
                    "height": 60,
                    "url": "https://mosaic.scdn.co/60/ab67616d00001e021486201545a05ec3ce9e0834ab67616d00001e0246c0210d81ce5f162a2cca46ab67616d00001e0284498215ae18c5527827ca81ab67616d00001e02d948458a5407c9a4592ceb07",
                    "width": 60
                }
            ],
            "name": "A: Bops from Discover Weekly",
            "owner": {
                "display_name": "Ian_McCabe",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/4etrmxcgfbnfwmbylpo45rh4e"
                },
                "href": "https://api.spotify.com/v1/users/4etrmxcgfbnfwmbylpo45rh4e",
                "id": "4etrmxcgfbnfwmbylpo45rh4e",
                "type": "user",
                "uri": "spotify:user:4etrmxcgfbnfwmbylpo45rh4e"
            },
            "primary_color": null,
            "public": true,
            "snapshot_id": "AAAAOqCo/+y0Ucf5NBz0LvCyrxoGQh0T",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/18d2BEwD8rnvFzaFYDDeRk/tracks",
                "total": 54
            },
            "type": "playlist",
            "uri": "spotify:playlist:18d2BEwD8rnvFzaFYDDeRk"
        },
        {
            "collaborative": false,
            "description": "",
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/1uOwr3nxHMizasKgGtljCy"
            },
            "href": "https://api.spotify.com/v1/playlists/1uOwr3nxHMizasKgGtljCy",
            "id": "1uOwr3nxHMizasKgGtljCy",
            "images": [
                {
                    "height": null,
                    "url": "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84306173a14c5387c03ad94da2",
                    "width": null
                }
            ],
            "name": "Gay HyperPop-ElectroMetal Workout Mix",
            "owner": {
                "display_name": "Ian_McCabe",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/4etrmxcgfbnfwmbylpo45rh4e"
                },
                "href": "https://api.spotify.com/v1/users/4etrmxcgfbnfwmbylpo45rh4e",
                "id": "4etrmxcgfbnfwmbylpo45rh4e",
                "type": "user",
                "uri": "spotify:user:4etrmxcgfbnfwmbylpo45rh4e"
            },
            "primary_color": null,
            "public": true,
            "snapshot_id": "AAAAI9yrOOcixCAJjqo0chKPYpenzRVa",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/1uOwr3nxHMizasKgGtljCy/tracks",
                "total": 23
            },
            "type": "playlist",
            "uri": "spotify:playlist:1uOwr3nxHMizasKgGtljCy"
        },
        {
            "collaborative": false,
            "description": "",
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/0ZHoae7JVG4vVRl6GHjGDf"
            },
            "href": "https://api.spotify.com/v1/playlists/0ZHoae7JVG4vVRl6GHjGDf",
            "id": "0ZHoae7JVG4vVRl6GHjGDf",
            "images": [
                {
                    "height": 640,
                    "url": "https://mosaic.scdn.co/640/ab67616d00001e02142dbc04884c70537a8ef194ab67616d00001e022d1cd7080afa7abd238f5274ab67616d00001e028e5b28d1863f1ff8607ff3deab67616d00001e02a2c7813fa56ebf5d93a0e8f3",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://mosaic.scdn.co/300/ab67616d00001e02142dbc04884c70537a8ef194ab67616d00001e022d1cd7080afa7abd238f5274ab67616d00001e028e5b28d1863f1ff8607ff3deab67616d00001e02a2c7813fa56ebf5d93a0e8f3",
                    "width": 300
                },
                {
                    "height": 60,
                    "url": "https://mosaic.scdn.co/60/ab67616d00001e02142dbc04884c70537a8ef194ab67616d00001e022d1cd7080afa7abd238f5274ab67616d00001e028e5b28d1863f1ff8607ff3deab67616d00001e02a2c7813fa56ebf5d93a0e8f3",
                    "width": 60
                }
            ],
            "name": "Ian's Classical Essentials",
            "owner": {
                "display_name": "Ian_McCabe",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/4etrmxcgfbnfwmbylpo45rh4e"
                },
                "href": "https://api.spotify.com/v1/users/4etrmxcgfbnfwmbylpo45rh4e",
                "id": "4etrmxcgfbnfwmbylpo45rh4e",
                "type": "user",
                "uri": "spotify:user:4etrmxcgfbnfwmbylpo45rh4e"
            },
            "primary_color": null,
            "public": true,
            "snapshot_id": "AAAAD1O1sdeOsIQRum7oUwMxFtfm8GY8",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/0ZHoae7JVG4vVRl6GHjGDf/tracks",
                "total": 45
            },
            "type": "playlist",
            "uri": "spotify:playlist:0ZHoae7JVG4vVRl6GHjGDf"
        },
        {
            "collaborative": false,
            "description": "",
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/226UGpDqH6xCDyRjU6vAXZ"
            },
            "href": "https://api.spotify.com/v1/playlists/226UGpDqH6xCDyRjU6vAXZ",
            "id": "226UGpDqH6xCDyRjU6vAXZ",
            "images": [
                {
                    "height": 640,
                    "url": "https://mosaic.scdn.co/640/ab67616d00001e021c759d19f8e81cbe803ce4c1ab67616d00001e0228fddd54e010d03c33d37f3fab67616d00001e0288f266993a05835b79d201ffab67616d00001e02b2d187dea6a8d8a773e59172",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://mosaic.scdn.co/300/ab67616d00001e021c759d19f8e81cbe803ce4c1ab67616d00001e0228fddd54e010d03c33d37f3fab67616d00001e0288f266993a05835b79d201ffab67616d00001e02b2d187dea6a8d8a773e59172",
                    "width": 300
                },
                {
                    "height": 60,
                    "url": "https://mosaic.scdn.co/60/ab67616d00001e021c759d19f8e81cbe803ce4c1ab67616d00001e0228fddd54e010d03c33d37f3fab67616d00001e0288f266993a05835b79d201ffab67616d00001e02b2d187dea6a8d8a773e59172",
                    "width": 60
                }
            ],
            "name": "To Listen To Classical",
            "owner": {
                "display_name": "Ian_McCabe",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/4etrmxcgfbnfwmbylpo45rh4e"
                },
                "href": "https://api.spotify.com/v1/users/4etrmxcgfbnfwmbylpo45rh4e",
                "id": "4etrmxcgfbnfwmbylpo45rh4e",
                "type": "user",
                "uri": "spotify:user:4etrmxcgfbnfwmbylpo45rh4e"
            },
            "primary_color": null,
            "public": true,
            "snapshot_id": "AAAACW9ZbDtKSJnB58Gk2A/ccgvjBMKt",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/226UGpDqH6xCDyRjU6vAXZ/tracks",
                "total": 82
            },
            "type": "playlist",
            "uri": "spotify:playlist:226UGpDqH6xCDyRjU6vAXZ"
        },
        {
            "collaborative": false,
            "description": "",
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/5Ma5Y8J4v8vDlS5TJ5jGZc"
            },
            "href": "https://api.spotify.com/v1/playlists/5Ma5Y8J4v8vDlS5TJ5jGZc",
            "id": "5Ma5Y8J4v8vDlS5TJ5jGZc",
            "images": [
                {
                    "height": 640,
                    "url": "https://mosaic.scdn.co/640/ab67616d00001e0238282fa6417d545be250cad1ab67616d00001e02c082bddcee3620437f9d61e6ab67616d00001e02c2bf0733685ce9984c84e1b8ab67616d00001e02cb18b8151116a63f95ebcd8a",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://mosaic.scdn.co/300/ab67616d00001e0238282fa6417d545be250cad1ab67616d00001e02c082bddcee3620437f9d61e6ab67616d00001e02c2bf0733685ce9984c84e1b8ab67616d00001e02cb18b8151116a63f95ebcd8a",
                    "width": 300
                },
                {
                    "height": 60,
                    "url": "https://mosaic.scdn.co/60/ab67616d00001e0238282fa6417d545be250cad1ab67616d00001e02c082bddcee3620437f9d61e6ab67616d00001e02c2bf0733685ce9984c84e1b8ab67616d00001e02cb18b8151116a63f95ebcd8a",
                    "width": 60
                }
            ],
            "name": "Ian's Mega Classical Playlist",
            "owner": {
                "display_name": "Ian_McCabe",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/4etrmxcgfbnfwmbylpo45rh4e"
                },
                "href": "https://api.spotify.com/v1/users/4etrmxcgfbnfwmbylpo45rh4e",
                "id": "4etrmxcgfbnfwmbylpo45rh4e",
                "type": "user",
                "uri": "spotify:user:4etrmxcgfbnfwmbylpo45rh4e"
            },
            "primary_color": null,
            "public": true,
            "snapshot_id": "AAAAGDFgHQWa6vMmnvivWvEwsdm7IHpI",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/5Ma5Y8J4v8vDlS5TJ5jGZc/tracks",
                "total": 62
            },
            "type": "playlist",
            "uri": "spotify:playlist:5Ma5Y8J4v8vDlS5TJ5jGZc"
        },
        {
            "collaborative": false,
            "description": "",
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/0sSh3pOiO6IqrBWl61febp"
            },
            "href": "https://api.spotify.com/v1/playlists/0sSh3pOiO6IqrBWl61febp",
            "id": "0sSh3pOiO6IqrBWl61febp",
            "images": [
                {
                    "height": 640,
                    "url": "https://mosaic.scdn.co/640/ab67616d00001e020a2eb9a5a4d871040f871681ab67616d00001e0261404603e0266ba121e9a458ab67616d00001e02a2c7813fa56ebf5d93a0e8f3ab67616d00001e02c2bf0733685ce9984c84e1b8",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://mosaic.scdn.co/300/ab67616d00001e020a2eb9a5a4d871040f871681ab67616d00001e0261404603e0266ba121e9a458ab67616d00001e02a2c7813fa56ebf5d93a0e8f3ab67616d00001e02c2bf0733685ce9984c84e1b8",
                    "width": 300
                },
                {
                    "height": 60,
                    "url": "https://mosaic.scdn.co/60/ab67616d00001e020a2eb9a5a4d871040f871681ab67616d00001e0261404603e0266ba121e9a458ab67616d00001e02a2c7813fa56ebf5d93a0e8f3ab67616d00001e02c2bf0733685ce9984c84e1b8",
                    "width": 60
                }
            ],
            "name": "Adagios",
            "owner": {
                "display_name": "Ian_McCabe",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/4etrmxcgfbnfwmbylpo45rh4e"
                },
                "href": "https://api.spotify.com/v1/users/4etrmxcgfbnfwmbylpo45rh4e",
                "id": "4etrmxcgfbnfwmbylpo45rh4e",
                "type": "user",
                "uri": "spotify:user:4etrmxcgfbnfwmbylpo45rh4e"
            },
            "primary_color": null,
            "public": true,
            "snapshot_id": "AAAADbr+yfFATpqhruZ7E2rEsoz3dvei",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/0sSh3pOiO6IqrBWl61febp/tracks",
                "total": 11
            },
            "type": "playlist",
            "uri": "spotify:playlist:0sSh3pOiO6IqrBWl61febp"
        },
        {
            "collaborative": false,
            "description": "",
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/5upWIYMXKRhXN6tNaVED5h"
            },
            "href": "https://api.spotify.com/v1/playlists/5upWIYMXKRhXN6tNaVED5h",
            "id": "5upWIYMXKRhXN6tNaVED5h",
            "images": [
                {
                    "height": 640,
                    "url": "https://mosaic.scdn.co/640/ab67616d00001e020d0621554b1c6c9dbf3556beab67616d00001e0245fefe45b11cde997046d567ab67616d00001e02747de7362e80274878719786ab67616d00001e02bb03cb8be389e0471cf26508",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://mosaic.scdn.co/300/ab67616d00001e020d0621554b1c6c9dbf3556beab67616d00001e0245fefe45b11cde997046d567ab67616d00001e02747de7362e80274878719786ab67616d00001e02bb03cb8be389e0471cf26508",
                    "width": 300
                },
                {
                    "height": 60,
                    "url": "https://mosaic.scdn.co/60/ab67616d00001e020d0621554b1c6c9dbf3556beab67616d00001e0245fefe45b11cde997046d567ab67616d00001e02747de7362e80274878719786ab67616d00001e02bb03cb8be389e0471cf26508",
                    "width": 60
                }
            ],
            "name": "Mount Lafayette Pop",
            "owner": {
                "display_name": "Ian_McCabe",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/4etrmxcgfbnfwmbylpo45rh4e"
                },
                "href": "https://api.spotify.com/v1/users/4etrmxcgfbnfwmbylpo45rh4e",
                "id": "4etrmxcgfbnfwmbylpo45rh4e",
                "type": "user",
                "uri": "spotify:user:4etrmxcgfbnfwmbylpo45rh4e"
            },
            "primary_color": null,
            "public": true,
            "snapshot_id": "AAAAIcX+d4ZkcHzEFU/q9Tpx1g78k/t0",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/5upWIYMXKRhXN6tNaVED5h/tracks",
                "total": 31
            },
            "type": "playlist",
            "uri": "spotify:playlist:5upWIYMXKRhXN6tNaVED5h"
        },
        {
            "collaborative": false,
            "description": "A variety of tunes for our journey to&#x2F;from Mount Lafayett.",
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/1EpWS4xM95q5haGHnajNPs"
            },
            "href": "https://api.spotify.com/v1/playlists/1EpWS4xM95q5haGHnajNPs",
            "id": "1EpWS4xM95q5haGHnajNPs",
            "images": [
                {
                    "height": 640,
                    "url": "https://mosaic.scdn.co/640/ab67616d00001e020b697be3706f05c2d9c5a13aab67616d00001e02142dbc04884c70537a8ef194ab67616d00001e022d1cd7080afa7abd238f5274ab67616d00001e02a2c7813fa56ebf5d93a0e8f3",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://mosaic.scdn.co/300/ab67616d00001e020b697be3706f05c2d9c5a13aab67616d00001e02142dbc04884c70537a8ef194ab67616d00001e022d1cd7080afa7abd238f5274ab67616d00001e02a2c7813fa56ebf5d93a0e8f3",
                    "width": 300
                },
                {
                    "height": 60,
                    "url": "https://mosaic.scdn.co/60/ab67616d00001e020b697be3706f05c2d9c5a13aab67616d00001e02142dbc04884c70537a8ef194ab67616d00001e022d1cd7080afa7abd238f5274ab67616d00001e02a2c7813fa56ebf5d93a0e8f3",
                    "width": 60
                }
            ],
            "name": "Mount Lafayett Classical",
            "owner": {
                "display_name": "Ian_McCabe",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/4etrmxcgfbnfwmbylpo45rh4e"
                },
                "href": "https://api.spotify.com/v1/users/4etrmxcgfbnfwmbylpo45rh4e",
                "id": "4etrmxcgfbnfwmbylpo45rh4e",
                "type": "user",
                "uri": "spotify:user:4etrmxcgfbnfwmbylpo45rh4e"
            },
            "primary_color": null,
            "public": true,
            "snapshot_id": "AAAAObPk2gRA9Of/XY7tkfEZ1TeH9a6r",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/1EpWS4xM95q5haGHnajNPs/tracks",
                "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:1EpWS4xM95q5haGHnajNPs"
        },
        {
            "collaborative": false,
            "description": "",
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/1zpJ5EaiFzRmHOdfcAD79N"
            },
            "href": "https://api.spotify.com/v1/playlists/1zpJ5EaiFzRmHOdfcAD79N",
            "id": "1zpJ5EaiFzRmHOdfcAD79N",
            "images": [
                {
                    "height": 640,
                    "url": "https://mosaic.scdn.co/640/ab67616d00001e020b697be3706f05c2d9c5a13aab67616d00001e02142dbc04884c70537a8ef194ab67616d00001e029c6332396dc6307ab7a90e99ab67616d00001e02c26bef07889059f8141e628e",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://mosaic.scdn.co/300/ab67616d00001e020b697be3706f05c2d9c5a13aab67616d00001e02142dbc04884c70537a8ef194ab67616d00001e029c6332396dc6307ab7a90e99ab67616d00001e02c26bef07889059f8141e628e",
                    "width": 300
                },
                {
                    "height": 60,
                    "url": "https://mosaic.scdn.co/60/ab67616d00001e020b697be3706f05c2d9c5a13aab67616d00001e02142dbc04884c70537a8ef194ab67616d00001e029c6332396dc6307ab7a90e99ab67616d00001e02c26bef07889059f8141e628e",
                    "width": 60
                }
            ],
            "name": "Sibelius",
            "owner": {
                "display_name": "Ian_McCabe",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/4etrmxcgfbnfwmbylpo45rh4e"
                },
                "href": "https://api.spotify.com/v1/users/4etrmxcgfbnfwmbylpo45rh4e",
                "id": "4etrmxcgfbnfwmbylpo45rh4e",
                "type": "user",
                "uri": "spotify:user:4etrmxcgfbnfwmbylpo45rh4e"
            },
            "primary_color": null,
            "public": true,
            "snapshot_id": "AAAACriAIuKqltM/XXtJ/8OVAnTejh9y",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/1zpJ5EaiFzRmHOdfcAD79N/tracks",
                "total": 9
            },
            "type": "playlist",
            "uri": "spotify:playlist:1zpJ5EaiFzRmHOdfcAD79N"
        },
        {
            "collaborative": false,
            "description": "",
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/5STk5mr05y3sGehH3DcyHh"
            },
            "href": "https://api.spotify.com/v1/playlists/5STk5mr05y3sGehH3DcyHh",
            "id": "5STk5mr05y3sGehH3DcyHh",
            "images": [
                {
                    "height": null,
                    "url": "https://i.scdn.co/image/ab67616d00001e020d0621554b1c6c9dbf3556be",
                    "width": null
                }
            ],
            "name": "Good Vibes",
            "owner": {
                "display_name": "Ian_McCabe",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/4etrmxcgfbnfwmbylpo45rh4e"
                },
                "href": "https://api.spotify.com/v1/users/4etrmxcgfbnfwmbylpo45rh4e",
                "id": "4etrmxcgfbnfwmbylpo45rh4e",
                "type": "user",
                "uri": "spotify:user:4etrmxcgfbnfwmbylpo45rh4e"
            },
            "primary_color": null,
            "public": true,
            "snapshot_id": "AAAABRl+lxTI74FX1w1GK38mqvGyBqhB",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/5STk5mr05y3sGehH3DcyHh/tracks",
                "total": 2
            },
            "type": "playlist",
            "uri": "spotify:playlist:5STk5mr05y3sGehH3DcyHh"
        },
        {
            "collaborative": false,
            "description": "",
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/41LtRtO0H6QNXyOrd9boFT"
            },
            "href": "https://api.spotify.com/v1/playlists/41LtRtO0H6QNXyOrd9boFT",
            "id": "41LtRtO0H6QNXyOrd9boFT",
            "images": [
                {
                    "height": 640,
                    "url": "https://mosaic.scdn.co/640/ab67616d00001e020a2eb9a5a4d871040f871681ab67616d00001e024dc2fbc86598d21bf3c18844ab67616d00001e0261404603e0266ba121e9a458ab67616d00001e02adbd5ceccaa374937452c400",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://mosaic.scdn.co/300/ab67616d00001e020a2eb9a5a4d871040f871681ab67616d00001e024dc2fbc86598d21bf3c18844ab67616d00001e0261404603e0266ba121e9a458ab67616d00001e02adbd5ceccaa374937452c400",
                    "width": 300
                },
                {
                    "height": 60,
                    "url": "https://mosaic.scdn.co/60/ab67616d00001e020a2eb9a5a4d871040f871681ab67616d00001e024dc2fbc86598d21bf3c18844ab67616d00001e0261404603e0266ba121e9a458ab67616d00001e02adbd5ceccaa374937452c400",
                    "width": 60
                }
            ],
            "name": "Piano Concertos",
            "owner": {
                "display_name": "Ian_McCabe",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/4etrmxcgfbnfwmbylpo45rh4e"
                },
                "href": "https://api.spotify.com/v1/users/4etrmxcgfbnfwmbylpo45rh4e",
                "id": "4etrmxcgfbnfwmbylpo45rh4e",
                "type": "user",
                "uri": "spotify:user:4etrmxcgfbnfwmbylpo45rh4e"
            },
            "primary_color": null,
            "public": true,
            "snapshot_id": "AAAADpp5qitCXe5f+usSziiFYJHDgIZZ",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/41LtRtO0H6QNXyOrd9boFT/tracks",
                "total": 12
            },
            "type": "playlist",
            "uri": "spotify:playlist:41LtRtO0H6QNXyOrd9boFT"
        }
    ]
}