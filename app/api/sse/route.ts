import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
  console.log('==res.headers====>', res.headers);

  return new NextResponse(`data: {"timestamp": ${Date.now()}}\n\n`, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
      'Content-Encoding': 'none',
    },
  });
}
export async function POST(req: NextRequest, res: NextResponse) {
  return new NextResponse(`data: {"timestamp": ${Date.now()}}\n\n`, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    },
  });
  // 设置 Content-Type 为 text/event-stream
  // res.setHeader('Content-Type', 'text/event-stream');
  // // 设置 Cache-Control 以防止缓存
  // res.setHeader('Cache-Control', 'no-cache');
  // // Connection: keep-alive 保持连接打开
  // res.setHeader('Connection', 'keep-alive');

  // // 发送初始数据
  // res.write('data: {"message": "Initial message"}\n\n');

  // // 使用 setInterval 发送定期更新
  // const interval = setInterval(() => {
  //   res.write(`data: {"timestamp": ${Date.now()}}\n\n`);
  // }, 1000); // 每秒发送一次更新

  // res.end();

  // 当客户端断开连接时清理 interval
  // req.on('close', () => {
  //   clearInterval(interval);
  //   console.log('Client disconnected');
  // });
}
