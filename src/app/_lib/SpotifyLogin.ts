class SpotifyLogin {
  static clientId = "7bf27890085a4cf8ae39bbec7e1edd6f";

  code: string;
  token: string;
  loggedIn: boolean;

  constructor() {
    this.code = "";
    this.token = "";
    this.loggedIn = false;
  }

  static async redirectToAuthCodeFlow() {
    const verifier = this.generateCodeVerifier(128);
    const challenge = await this.generateCodeChallenge(verifier);

    localStorage.setItem("verifier", verifier);

    const params = new URLSearchParams();
    params.append("client_id", SpotifyLogin.clientId);
    params.append("response_type", "code");
    params.append("redirect_uri", "http://localhost:3000/api/spotify-login");
    params.append("scope", "user-read-private user-read-email");
    params.append("code_challenge_method", "S256");
    params.append("code_challenge", challenge);

    document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
  }

  static generateCodeVerifier(length: number) {
    let text = "";
    let possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  static async generateCodeChallenge(codeVerifier: string) {
    const data = new TextEncoder().encode(codeVerifier);
    const digest = await window.crypto.subtle.digest("SHA-256", data);
    return btoa(
      String.fromCharCode.apply(null, Array.from(new Uint8Array(digest)))
    )
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");
  }

  async getAccessToken(code: string): Promise<string> {
    const verifier = localStorage.getItem("verifier");

    const params = new URLSearchParams();
    params.append("client_id", SpotifyLogin.clientId);
    params.append("grant_type", "authorization_code");
    params.append("code", code);
    params.append("redirect_uri", "http://localhost:3000/api/spotify-login");
    params.append("code_verifier", verifier!);

    const result = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params,
    });

    console.log(result);

    const { access_token } = await result.json();

    console.log("ACCESS TOKEN");
    console.log(access_token);

    return access_token;
  }
}

export default SpotifyLogin;
