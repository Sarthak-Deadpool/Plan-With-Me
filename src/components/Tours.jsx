/** @format */

import Card from "./Card";

function Tours({ tours, removeTour }) {
  return (
    <div className="w-300 flex flex-col justify-between items-center ms-auto me-auto mt-10 gap-5 mb-15">
      <div className=" border-4 border-slate-500 rounded-4xl border-dashed p-5 mb-5">
        <h1 className="text-5xl text-black font-bold">Tour with Sarthak</h1>
      </div>
      <div className="grid grid-cols-3 gap-6 ">
        {tours.map((tour) => {
          return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>;
        })}
      </div>
    </div>
  );
}

export default Tours;
