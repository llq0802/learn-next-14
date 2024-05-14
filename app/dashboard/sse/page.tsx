'use client';

import { useEffect, useState } from 'react';

function SSEPage() {
  const [serverTime, setServerTime] = useState(null);

  useEffect(() => {
    const eventSource = new EventSource('/api/sse');
    eventSource.onmessage = (event) => {

      console.log('==event.data====>',event.data)

      const data = JSON.parse(event.data);
      setServerTime(data.timestamp);
    };
    return () => {
      eventSource.close();
    };
    // fetch('/api/sse', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ type: 'sse' }),
    // })
    //   .then(async (response: Response) => {
    //     const decoder = new TextDecoder('utf-8');
    //     const reader = response.body!.getReader();
    //     let buffer = '';
    //     reader.read().then(function process({ done, value }) {
    //       if (done) {
    //         console.log('Stream closed');
    //         return;
    //       }
    //       buffer += decoder.decode(value);
    //       const lines = buffer.split('\n');
    //       buffer = lines.pop() || '';
    //       lines.forEach((line) => {
    //         console.log('line', line);
    //       });
    //       // Continue reading
    //       return reader.read().then(process);
    //     });
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });
  }, []);

  return (
    <div>
      <h1>Server Time: {serverTime || 'Connecting...'}</h1>
    </div>
  );
}

export default SSEPage;
