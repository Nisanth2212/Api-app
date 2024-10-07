import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const url = 'https://jsonplaceholder.typicode.com/todos';

  const [count, setCount] = useState([]);
  const fun = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setCount(data);
  };
  useEffect(() => {
    fun();
  }, []);

  return (
    <>
      <h1>
        data
        {count.map((val) => {
          const { title ,id} = val;
          return <h2 key={id}>{title}</h2>;
        })}
      </h1>
    </>
  );
}

export default App;
