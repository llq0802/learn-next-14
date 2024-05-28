import { findToDos } from './actions';
import AddToDoForm from './AddToDoForm';

export default async function Page() {
  const todos = await findToDos();
  return (
    <>
      <AddToDoForm />
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
    </>
  );
}
