import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  //console.log(request)
  //console.log("NEW RUN")

  const requestURL = new URL(request.url);
  const args = new URLSearchParams(requestURL.search);

  const code = args.get("code");

  //console.log("The code is: " + code)

  var redirectURL = new URL("/", "http://localhost:3000");

  redirectURL.searchParams.set("code", code || "error");

  redirect(redirectURL.toString());
}
