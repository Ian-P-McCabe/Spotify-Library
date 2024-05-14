// app/page.tsx
'use client'
import { Link } from '@chakra-ui/next-js'
import { Button, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react'
import SpotifyLogin from './_lib/SpotifyLogin';


export default function Page() {

  async function login() {
    SpotifyLogin.redirectToAuthCodeFlow()
  }

  var spotifyLoginHandler = new SpotifyLogin()

  const clientId = "7bf27890085a4cf8ae39bbec7e1edd6f";
  const [code, setCode] = useState("")
  const [accessToken, setAccessToken] = useState("")

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setCode(params.get("code") || "")

    if (code != "") {
      const myfunc = async () => {
        spotifyLoginHandler.code = code
        const a_token = await spotifyLoginHandler.getAccessToken(spotifyLoginHandler.code)
        spotifyLoginHandler.token = a_token
      }
      myfunc()
    }

  }, [])

  return (
    <VStack>
      <Link href='/about' color='blue.400' _hover={{ color: 'blue.500' }}>
        About
      </Link>

      <Button onClick={login}>
        Spotify Login
      </Button>

      <Button onClick={() => fetchProfile(spotifyLoginHandler.token)}>
        Login
      </Button>
    </VStack>
  )
}

async function fetchPlaylists(token: string, profile: any): Promise<any> {
  const playlists = await fetch(`https://api.spotify.com/v1/users/${profile.id}/playlists`, {
    method: "GET", headers: { Authorization: `Bearer ${token}` }
  });

  const myjson = await playlists.json()

  console.log(myjson)
}

async function fetchProfile(token: string): Promise<any> {
  const result = await fetch("https://api.spotify.com/v1/me", {
    method: "GET", headers: { Authorization: `Bearer ${token}` }
  });

  const myresult = await result.json();
  console.log(myresult)
}
