import { Center, VStack, Image, Text, Box, HStack, Button, Spacer } from "@chakra-ui/react";

import styles from './MusicAppTile.module.css'

export default function AppleTile({ profileProps }: any) {

    return (
        <Box backgroundColor="#ECECEC" width={300} height={100} borderRadius={10}>
            <VStack paddingInline={0} align={"center"}>

                <div className={styles.MusicAppTitle}>
                    <Text>Apple Library</Text>
                </div>
                <Button backgroundColor={"#F94C57"}>Login to Apple Music</Button>
            </VStack>
        </Box>
    )
}