import { NextResponse, NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  console.log('==开始.====>');
  console.log('==request.====>', request);

  // const isAuthenticated = authenticate(request)

  // // If the user is authenticated, continue as normal
  // if (isAuthenticated) {
  //   return NextResponse.next()
  // }

  // // Redirect to login page if not authenticated
  // return NextResponse.redirect(new URL('/login', request.url))
  return NextResponse.next();
}

// export const config = {
//   matcher: '/dashboard/:path*',
// }
