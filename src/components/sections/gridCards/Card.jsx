import React from "react";

const Card = (props) => {
  // Card for the Display Stream
  return (
    <div className="rounded-xl mt-6 p-5 bg-white">
      <h2 className="pb-6 pl-3 pt-2">
        <b className="text-lg text-[#213838] font-semibold">{props.title} </b>
        <b className="font-light text-lg">{props.description}</b>
      </h2>

      <div className="text-md text-right font-medium text-[#213838]">
        {props.details}
      </div>
    </div>
  );
};

export default Card;
