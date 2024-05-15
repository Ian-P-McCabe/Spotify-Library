
import { Center, VStack, Image, Text, Box, HStack } from "@chakra-ui/react";


export default function Profile({ profileProps }: any) {

    return (
        <Box borderWidth="1px" borderRadius='lg' alignItems='baseline' padding="5px">
            <HStack>
                <Image src={profileProps.images[0].url} alt="" borderRadius='lg' ></Image>
                <Text>{profileProps.display_name}</Text>
            </HStack>
        </Box >
    )
}
