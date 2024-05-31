// app/layout.tsx
import { Box } from '@chakra-ui/react'
import { Providers } from './providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en'>
      <body>
        <Box bg='#00B9E8'>
          <Providers>{children}</Providers>
        </Box>
      </body>
    </html>
  )
}