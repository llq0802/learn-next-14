import { NextRequest, NextResponse } from 'next/server';
import { cookies, headers } from 'next/headers';
// export const revalidate = 10  // 除了退出缓存，也可以设置缓存的时效，适用于一些重要性低、时效性低的页面。
export const dynamic = 'force-dynamic'; // defaults to auto

// 默认情况下，使用 `Response` 对象（`NextResponse` 也是一样的）的 GET 请求会被缓存。
export async function GET(request: NextRequest, context) {
  // const headersList = new Headers(request.headers)
  // const referer = headersList.get('referer')

  // const token = request.cookies.get('token')
  // const cookieStore = cookies()
  // const token = cookieStore.get('token')
  // const token = request.headers .get('token')

  // const body = await request.json()
  // const formData = await request.formData()

  // const { searchParams } = new URL(request.url);
  // const id = searchParams.get('id');
  // context.params // 动态路由参数的对象

  // //  访问 /home, pathname 的值为 /home
  // const pathname = request.nextUrl.pathname
  // // 访问 /home?name=lee, searchParams 的值为 { 'name': 'lee' }
  // const searchParams = request.nextUrl.searchParams

  // const res = await fetch('https://data.mongodb-api.com/...', {
  //   next: { revalidate: 60 }, // Revalidate every 60 seconds
  // })
  // const data = await res.json()

  // return new Response('Hello, Next.js!', {
  //   status: 200,
  //   headers: {
  //     'Access-Control-Allow-Origin': '*',
  //     'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  //     'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  //   },
  // });

  return NextResponse.json(
    {
      success: true,
      code: 1,
      message: 'success',
      data: '数据',
    },
    { status: 200 }
  );
}
export async function POST(request: Request) {}

export async function HEAD(request: Request) {}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}

// 如果 `OPTIONS` 没有定义, Next.js 会自动实现 `OPTIONS`
export async function OPTIONS(request: Request) {}
