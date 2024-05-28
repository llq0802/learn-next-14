import { NextResponse, NextRequest, userAgent } from 'next/server';

export async function middleware(request: NextRequest) {
  // const { device } = userAgent(request);
  // console.log('==device====>', device);
  // console.log('==request.====>', request.url);
  // const {pathname} = request.nextUrl;
  // // 重写请求
  // if (pathname.startsWith('/tk/')) {
  //     return NextResponse.rewrite(new URL(pathname.replace(/^\/tk/, ''), request.url));
  // }
  // 修改请求头
  // const requestHeaders = new Headers(request.headers);
  // requestHeaders.set('Language', 'zh');
  // return NextResponse.next(
  //     {request: {headers: requestHeaders}}
  // );
  // 代理
  // NextResponse.rewrite(new URL('/proxy', request.url))
  // return NextResponse.next();
}

// export const config = {
//   matcher: '/;dashboard/:path*',
// }

// export const config = {
//   matcher: '*'
// }

// export const config = {
//   matcher: [
//     /*
//      * 匹配所有的路径除了以这些作为开头的：
//      * - api (API routes)
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      */
//     '/((?!api|_next/static|_next/image|favicon.ico).*)',
//   ],
// }
