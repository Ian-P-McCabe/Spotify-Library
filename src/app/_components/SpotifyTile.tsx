import { Center, VStack, Text, Box, HStack, Button, Spacer, Spinner } from "@chakra-ui/react";

import { Image } from "@chakra-ui/next-js";

import styles from './MusicAppTile.module.css'

import { useEffect, useState } from "react";

import PlusInCirlce from '../../../public/plusincircle.svg'
import TriangleInCircle from '../../../public/triangleincircle.svg'
import SpotifyLogin from "../_lib/SpotifyLogin";

export default function SpotifyTile({ profileProps }: any) {

    var spotifyLoginHandler = new SpotifyLogin()

    const [loggedIn, setloggedIn] = useState(false)

    //An integer to correspond to the total field
    const [playlists, setPlaylists] = useState(-1)
    const [savedSongs, setSavedSongs] = useState(-1)
    const [code, setCode] = useState("")
    const [accessToken, setAccessToken] = useState("")
    const [loginLoading, setLoginLoading] = useState(true)
    const [profile, setProfile] = useState(null)


    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        setCode(params.get("code") || "")

        console.log("In use effect, the token is: " + accessToken)

        if (code != "") {
            spotifyLoginHandler.loggedIn = true
            setloggedIn(true)

            const myfunc = async () => {
                spotifyLoginHandler.code = code
                const a_token = await spotifyLoginHandler.getAccessToken(spotifyLoginHandler.code)
                setAccessToken(a_token)

                const user_profile = await fetchProfile(a_token)

                setProfile(user_profile)

                return [a_token, user_profile]
            }
            myfunc().then(async (result) => {
                const playlistdata = await fetchPlaylists(result[0], result[1])
                setPlaylists(playlistdata.total)

                const savedTracks = await fetchTracks(result[0])
                setSavedSongs(savedTracks.total)

            })
        }
        setLoginLoading(false)


    }, [code])


    if (!loggedIn) {
        return (
            <Box backgroundColor="#ECECEC" borderRadius={10} paddingBottom={2}>
                <VStack paddingInline={0} align={"center"}>

                    <div className={styles.MusicAppTitle}>
                        <Text>Spotify Library</Text>
                    </div>

                    <Button backgroundColor={"#1ED760"} onClick={() => handleLogin()} isLoading={loginLoading}>Login to Spotify</Button>

                </VStack>
            </Box>
        )
    } else {
        return (
            <Box backgroundColor="#ECECEC" borderRadius={10} paddingBottom={2}>
                <VStack paddingInline={0} align={"center"}>

                    <div className={styles.MusicAppTitle}>
                        <Text>Spotify Library</Text>
                    </div>

                    <VStack>
                        <div className={styles.box}>
                            <Image src={TriangleInCircle} alt='play symbol' height={6} width={6}></Image>
                            {playlists === -1 &&
                                <HStack>
                                    <Spinner size={'sm'}> </Spinner>
                                    <Text>Playlists</Text>
                                </HStack>
                            }

                            {playlists !== -1 &&
                                <Text> {playlists} Playlists  </Text>
                            }
                            <div className={styles.push}>
                                <Button backgroundColor={"#1ED760"} size={'sm'}> Download </Button>
                            </div>
                        </div>

                        <div className={styles.box}>
                            <Image src={PlusInCirlce} alt='plus symbol' height={6} width={6}></Image>

                            {savedSongs === -1 &&
                                <HStack>
                                    <Spinner size={'sm'}> </Spinner>
                                    <Text>Tracks</Text>
                                </HStack>
                            }
                            {savedSongs !== -1 &&
                                <Text> {savedSongs} Saved Songs </Text>
                            }

                            <div className={styles.push}>
                                <Button backgroundColor={"#1ED760"} size={'sm'} onClick={() => printToken()}> Download </Button>
                            </div>
                        </div>

                    </VStack>
                </VStack>
            </Box>
        )
    }

    async function handleLogin() {
        SpotifyLogin.redirectToAuthCodeFlow()
    }

    async function printToken() {
        console.log("The token is:")
        console.log(accessToken)
    }

    async function fetchPlaylists(token: string, profile: any): Promise<any> {

        console.log("REQEST TOKEN")
        console.log(token)

        const playlists = await fetch(`https://api.spotify.com/v1/users/${profile.id}/playlists`, {
            method: "GET", headers: { Authorization: `Bearer ${token}` }
        });

        const myjson = await playlists.json()
        console.log("Playlist data\n")
        console.log(myjson)

        return myjson
    }

    async function fetchProfile(token: string) {

        const result = await fetch("https://api.spotify.com/v1/me", {
            method: "GET", headers: { Authorization: `Bearer ${token}` }
        });

        const myresult = await result.json();

        console.log(myresult)

        return myresult
    }

    async function fetchTracks(token: string) {
        const result = await fetch("https://api.spotify.com/v1/me/tracks", {
            method: "GET", headers: { Authorization: `Bearer ${token}` }
        });

        const myresult = await result.json();

        return myresult

    }

}