import { Center, VStack, Image, Text, Box, HStack, Button, Spacer } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import styles from './MusicAppTile.module.css'
import MusicProvider from '../_lib/MusicProvider'

export default function AppleTile({ profileProps }: any) {

    const [AppleMusicInstance, setAppleMusicInstance] = useState(null)

    useEffect(() => {
        const script = document.createElement('script');

        script.src = "https://js-cdn.music.apple.com/musickit/v3/musickit.js";
        script.async = true;

        document.body.appendChild(script);


        document.addEventListener('musickitloaded', async function () {
            console.log("Shit loaded")
            try {
                await MusicKit.configure({
                    developerToken: '',
                    app: {
                        name: 'My Cool Web App',
                        build: '1978.4.1',
                    },
                });
            } catch (err) {
                console.log(err)
                console.log("there was an error")
            }

            // MusicKit instance is available
            const music = MusicKit.getInstance();
            console.log("got the music instance")
            setAppleMusicInstance(music)
        });

    }, [])



    return (
        <Box backgroundColor="#ECECEC" borderRadius={10} paddingBottom={2}>
            <VStack paddingInline={0} align={"center"}>

                <div className={styles.MusicAppTitle}>
                    <Text>Apple Library</Text>
                </div>
                <Button backgroundColor={"#F94C57"} onClick={() => handleAppleLogin()}>Login to Apple Music</Button>

                <Button backgroundColor={"#F94C57"} onClick={() => getSomeMusic()}>Get Some Music</Button>
            </VStack>
        </Box>
    )

    async function handleAppleLogin() {

        AppleMusicInstance.authorize()
        console.log(AppleMusicInstance.isAuthorized)
    }

    async function getSomeMusic() {
        // let provider = MusicProvider.sharedProvider()
        // let musicInstance = provider.getMusicInstance()
        // await musicInstance.authorize();
        const instance = MusicKit.getInstance()
        console.log(instance.isAuthorized)
        instance.authorize()
        //Get the user's albums
        const { data: result } = await instance.api.music('v1/me/library/albums');
        console.log(result.data)

        const { data: playlist_result } = await instance.api.music('v1/me/library/playlists')
        console.log(playlist_result.data)

        const { data: specific } = await instance.api.music(playlist_result.data[0].href + "/tracks")
        console.log(specific.data)

    }
}