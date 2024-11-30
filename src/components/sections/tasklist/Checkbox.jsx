import React, { useEffect, useState } from "react";
import menu from "../../../assets/menu.png";
import checked from "../../../assets/checked.png";
import unchecked from "../../../assets/unchecked.png";

const Checkbox = (props) => {
  // Task List's check box component
  const [marked, setIsMarked] = useState(props.checked || false);

  useEffect(()=> {
    setIsMarked(props.checked);
  }, [props.checked]);


  return (
    <div
      onClick={props.onClick}
      className={`flex my-2 cursor-pointer justify-between rounded-xl p-4 bg-[#F9F9F9] ${props.classes}`}
    >
      <div className="flex items-center">
        <div>
            {/* Setting checkbox based on the state of marked for each checkbox */}
            <img
            onClick={() => setIsMarked(!marked)}
            className="cursor-pointer pr-3 size-15"
            src={marked ? checked : unchecked}
            alt="Checkbox"
          />
        </div>
        <div className="flex flex-col">
            {/* Setting CSS based on the input of the "important" field of the add-task-form */}
          <h2
            className={` ${
              props.important ? "text-red-500 font-semibold " : "font-bold"
            }  ${marked ? `line-through decoration-2` : ``} `}
          >
            {props.title}
          </h2>
          <div className="flex items-center">
            <div className={`text-xs text-[#5A5B6A]`}>
              Assigned By {props.assignee}{" "}
            </div>
            <div
              className={`text-xs ml-1 text-[#5A5B6A]  ${
                props.dueClass ? "text-red-500" : ""
              }`}
            >
              {props.due}
            </div>
          </div>
        </div>
      </div>
      <img src={menu} className="w-4 h-4 " alt="" />
    </div>
  );
};

export default Checkbox;
