import { NextResponse } from "next/server";

export function middleware(request) {
  const response = NextResponse.next();

  // 모든 요청에 CORS 헤더 추가
  response.headers.set("Access-Control-Allow-Origin", "*");
  return response;
}
