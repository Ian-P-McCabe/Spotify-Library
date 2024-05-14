// app/page.tsx
'use client'
import { Link } from '@chakra-ui/next-js'
import { Button, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react'


export default function Page() {

  async function login() {
      redirectToAuthCodeFlow(clientId)
  } 

  const clientId = "7bf27890085a4cf8ae39bbec7e1edd6f";
  const [code, setCode] = useState("")
  const [accessToken, setAccessToken] = useState("")

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setCode(params.get("code") || "")

    console.log("The code is: " + code)


    const myfunc = async () => {
        console.log("Setting the access token")
        const s_accessToken = await getAccessToken(clientId, code);
        setAccessToken(s_accessToken)
        //fetchProfile(accessToken)
    }
    
    myfunc()

  }, [code])

  return (
    <VStack>
      <Link href='/about' color='blue.400' _hover={{ color: 'blue.500' }}>
      About
      </Link>

      <Button onClick={login}>
        Spotify Login
      </Button>

      <Button onClick={() => fetchProfile(accessToken)}>
        Login
      </Button>
    </VStack>
  )
}

async function redirectToAuthCodeFlow(clientId: string) {
    const verifier = generateCodeVerifier(128);
    const challenge = await generateCodeChallenge(verifier);

    localStorage.setItem("verifier", verifier);

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("response_type", "code");
    params.append("redirect_uri", "http://localhost:3000/api/spotify-login");
    params.append("scope", "user-read-private user-read-email");
    params.append("code_challenge_method", "S256");
    params.append("code_challenge", challenge);

    document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
}
  
  function generateCodeVerifier(length: number) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

async function generateCodeChallenge(codeVerifier: string) {
    const data = new TextEncoder().encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode.apply(null, Array.from(new Uint8Array(digest)))) //May be broken
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}

async function getAccessToken(clientId: string, code: string): Promise<string> {
    const verifier = localStorage.getItem("verifier");

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("grant_type", "authorization_code");
    params.append("code", code);
    params.append("redirect_uri", "http://localhost:3000/api/spotify-login");
    params.append("code_verifier", verifier!);

    const result = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params
    });

    const { access_token } = await result.json();
    return access_token;
}

async function fetchPlaylists(token:string, profile: any): Promise<any> {
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
  