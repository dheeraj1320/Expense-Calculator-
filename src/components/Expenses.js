import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const Expense = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  let count = 1;

  const inputHandler = () => {
    const newData = [];
    for (let i = 1; i <= data.length; i++) {
      const currLabel = document.querySelector(`#label${i}`).value;
      const currCost = document.querySelector(`#cost${i}`).value;

      newData.push({ label: currLabel, cost: currCost });
    }

    dispatch({ type: "data", payload: newData });
  };

  return (
    <div className=" flex flex-col gap-3 justify-center ">
      {data.map((data) => {
        return (
          <div
            className="flex bg-v-white rounded-md"
            key={uuidv4()}
            onBlur={inputHandler}
          >
            <input
              type="text"
              id={`label${count}`}
              placeholder="enter label"
              defaultValue={data.label}
              className=" w-1/2 p-2 font-bold text-2xl text-center rounded-lg bg-gray-50 "
            />

            <input
              type="text"
              id={`cost${count++}`}
              placeholder="enter cost"
              defaultValue={data.cost}
              className=" w-1/2 p-2 text-2xl text-center rounded-lg "
            />
          </div>
        );
      })}
    </div>
  );
};

export default Expense;
