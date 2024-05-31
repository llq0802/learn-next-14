'use client';

import { createToDoDirectly } from './actions';
import { Button } from '@/components/ui/button';

export default function MyButton({ children }) {
  return (
    <Button
      onClick={async () => {
        const data = await createToDoDirectly('运动');
        alert(JSON.stringify(data));
      }}
    >
      {children}
    </Button>
  );
}
