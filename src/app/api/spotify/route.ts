import { cookies } from "next/headers";

export async function GET(request: Request) {

    cookies().set("MyCookie", "FirstCookie")
}