/** @format */
import { useState } from "react";

import Tours from "./components/Tours";

import data from "./data";
function App() {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  function refresh() {
    setTours(data);
  }

  if (tours.length === 0) {
    return (
      <div className="flex flex-col justify-between items-center gap-5 mt-[20%]">
        <h2 className="text-3xl font-mono font-bold">No Tour Left</h2>
        <button
          onClick={refresh}
          className="bg-blue-400 p-3 rounded-2xl w-30 text-xl font-mono hover:bg-blue-500 cursor-pointer mt-4"
        >
          Refresh
        </button>
      </div>
    );
  }

  return (
    <>
      <Tours tours={tours} removeTour={removeTour} />
    </>
  );
}

export default App;
