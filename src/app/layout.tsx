// app/layout.tsx
import { Box, Text, VStack } from '@chakra-ui/react'
import { Providers } from './providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en'>
      <body>
        <Box bg='#F0F8FF' borderRadius={20}>
          <VStack>

            <Text fontSize={36} as='b' paddingLeft={12}>Save Your Music Library</Text>
            <Text paddingLeft={12} paddingRight={12} as='b'>Protect your Spotify and Apple Music libraries from potential data loss.
              Download your music library to your computer and upload it to a cloud storage
              provider to keep it safe. </Text>
            <Providers>{children}</Providers>

            <Text paddingLeft={12} paddingRight={12}>Note: This application only downloads the various metadata associated with your music library.
              It does not download the audio files themselves.</Text>

          </VStack>
        </Box>
      </body>
    </html>
  )
}