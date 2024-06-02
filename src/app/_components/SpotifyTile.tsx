import { Center, VStack, Image, Text, Box, HStack, Button, Spacer } from "@chakra-ui/react";

import styles from './MusicAppTile.module.css'

import { useState } from "react";

export default function SpotifyTile({ profileProps }: any) {

    const [loggedIn, setloggedIn] = useState(false)

    if (!loggedIn) {
        return (
            <Box backgroundColor="#ECECEC" borderRadius={10} paddingBottom={2}>
                <VStack paddingInline={0} align={"center"}>

                    <div className={styles.MusicAppTitle}>
                        <Text>Spotify Library</Text>
                    </div>
                    <Button backgroundColor={"#1ED760"} onClick={() => handleLogin()}>Login to Spotify</Button>
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
                            <Text> Playlists  </Text>
                            <div className={styles.push}>
                                <Button backgroundColor={"#1ED760"} size={'sm'}> Download </Button>
                            </div>
                        </div>

                        <div className={styles.box}>
                            <Text> Saved Songs  </Text>
                            <div className={styles.push}>
                                <Button backgroundColor={"#1ED760"} size={'sm'}> Download </Button>
                            </div>
                        </div>

                    </VStack>
                </VStack>
            </Box>
        )
    }

    async function handleLogin() {
        console.log("Loggin in")
        setloggedIn(true)
    }

}