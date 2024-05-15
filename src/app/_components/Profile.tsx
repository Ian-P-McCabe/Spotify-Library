
import { Center, VStack, Image, Text } from "@chakra-ui/react";
import { profile } from "console";


export default function Profile({ profileProps }: any) {

    return (
        <VStack>
            <Image src={profileProps.images[0].url} alt="" ></Image>
            <Text>{profileProps.display_name}</Text>
            <Text>holy shit it works</Text>
        </VStack >
    )
}
