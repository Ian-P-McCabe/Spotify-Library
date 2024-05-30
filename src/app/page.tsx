// app/page.tsx
'use client'
import { Link } from '@chakra-ui/next-js'
import { Button, VStack } from '@chakra-ui/react';
import { use, useEffect, useState } from 'react'
import SpotifyLogin from './_lib/SpotifyLogin';
import Profile from './_components/Profile';


export default function Page() {

  async function login() {
    SpotifyLogin.redirectToAuthCodeFlow()
  }

  var spotifyLoginHandler = new SpotifyLogin()

  const clientId = "7bf27890085a4cf8ae39bbec7e1edd6f";
  const [code, setCode] = useState("")
  const [accessToken, setAccessToken] = useState("")
  const [spotify_profile, setProfile] = useState(null)

  //TODO: Fix this it is messy, the token issue is fixed for now, but will likely return 
  useEffect(() => {
    console.log("use effect ran")

    const params = new URLSearchParams(window.location.search);

    console.log("Code from params: " + params.get("code"))
    setCode(params.get("code") || "")

    console.log("the code is: " + code)

    if (code != "") {
      spotifyLoginHandler.loggedIn = true

      console.log(spotifyLoginHandler.loggedIn)
      const myfunc = async () => {
        spotifyLoginHandler.code = code
        const a_token = await spotifyLoginHandler.getAccessToken(spotifyLoginHandler.code)
        setAccessToken(a_token)
      }
      myfunc()
    }

  }, [code])


  if (code == "") {
    return (
      <VStack>
        <Button onClick={login}>
          Spotify Login
        </Button>
      </VStack>
    )
  } else {
    return (
      <VStack>
        <Button onClick={() => fetchProfile(accessToken)}>
          Get Profile Data
        </Button>

        {spotify_profile &&
          <VStack>
            <Profile profileProps={spotify_profile} ></Profile>

            <Button onClick={() => fetchPlaylists(accessToken, spotify_profile)}>
              Get Playlists
            </Button>

            <Button onClick={() => getLibrary(accessToken, spotify_profile)}>
              Get Library
            </Button>

          </VStack>
        }


      </VStack>
    )
  }


  async function fetchPlaylists(token: string, profile: any): Promise<any> {

    console.log("REQEST TOKEN")
    console.log(token)

    const playlists = await fetch(`https://api.spotify.com/v1/users/${profile.id}/playlists`, {
      method: "GET", headers: { Authorization: `Bearer ${token}` }
    });

    const myjson = await playlists.json()

    console.log(myjson)
  }

  async function fetchProfile(token: string) {

    console.log("REQEST TOKEN")
    console.log(token)

    const result = await fetch("https://api.spotify.com/v1/me", {
      method: "GET", headers: { Authorization: `Bearer ${token}` }
    });

    const myresult = await result.json();

    console.log(myresult)

    setProfile(myresult)

    return myresult
  }

  async function getLibrary(token: string, profile: any) {
    console.log("The token is: " + token)

    console.log("The user id is: " + profile.id)

    const searchParams = new URLSearchParams({
      token: token,
      id: profile.id
    })

    const result = await fetch("http://localhost:3000/api/spotify/get-library?" + searchParams.toString(), {
      method: "GET"
    });

    const myjson = await result.json()
    console.log(myjson)
  }
}
