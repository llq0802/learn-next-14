'use server';

import { revalidatePath, revalidateTag } from 'next/cache';

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms || 1000));

const data = ['阅读', '写作', '冥想'];

export async function findToDos() {
  return data;
}

export async function createToDo(prevState, formData: FormData) {
  await sleep(500);
  const todo = formData.get('todo');
  data.push(todo);
  revalidatePath('/learn/server-action');
  return {
    message: `add ${todo} success!`,
  };
}
