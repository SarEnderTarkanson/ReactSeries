import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("Alpy");
  const [count, setCount] =useState(0)

  const handleNameChange = () => {
    const names = ["Bob", "Kevin", "Alpy"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  };

  const handleClick = () => {
    setCount(count +1)
    setCount(count +1)
    console.log(count);
  };
  const handleClick2 = () => {
    console.log(count);
  };

  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {name} </p>
      <button onClick={handleNameChange}>Change Name</button>
      <button
        onClick={handleClick}
      >
        Click it!
      </button>
      <button onClick={handleClick2}>Click it!</button>
    </main>
  );
};

export default Content;
