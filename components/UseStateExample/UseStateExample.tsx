import { useState } from "react";

const UseStateExample = ({ className }: { className?: string }) => {
  const [food, setFood] = useState(true);
  return (
    <div className={`${className} w-full`}>
      <p>
        Minha comida favorita é{" "}
        <strong className="text-red-500">{food ? "pastel" : "pizza"}</strong>!
      </p>
      <button onClick={() => setFood(!food)} className="border w-1/4 my-2 p-1">
        ou
      </button>
    </div>
  );
};

export default UseStateExample;
