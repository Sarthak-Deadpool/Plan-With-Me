/** @format */

import { useState } from "react";

function Card({ id, name, info, image, price, removeTour }) {
  const [flag, setFlag] = useState(false);
  const description = flag ? info : `${info.substring(0, 200)}.... `;

  function handleClick() {
    setFlag(!flag);
  }
  return (
    <div className="flex flex-col items-center justify-between gap-4 border-0 rounded-2xl shadow hover:shadow-xl transition-shadow duration-300">
      <div className="w-full h-75 overflow-hidden">
        <img
          src={image}
          className="w-full h-full object-cover rounded-t-2xl"
        ></img>
      </div>

      <div className="p-4 flex flex-col justify-between items-left gap-3 text-justify">
        <div className=" flex flex-col gap-3">
          <h4 className="text-green-500 text-xl font-bold">Rs-{price}</h4>
          <h4 className="text-2xl font-bold">{name}</h4>
        </div>

        <div>
          <div className=" inline">{description}</div>
          <span onClick={handleClick} className="text-blue-500 cursor-pointer">
            {flag ? "Show Less" : "Show More "}
          </span>
        </div>
      </div>

      <button
        onClick={() => {
          removeTour(id);
        }}
        className="mb-6 bg-red-300 p-2 w-65 rounded-2xl text-lg font-mono shadow hover:shadow-xl transition duration-300 hover:bg-red-400 cursor-pointer"
      >
        I am not Interested
      </button>
    </div>
  );
}

export default Card;
