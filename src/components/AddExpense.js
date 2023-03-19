import React from "react";
import path from "../img/circle-plus-solid.svg";
import { useDispatch, useSelector } from "react-redux";

const AddExpense = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  const addExpenseHandler = async () => {
    const newData = [...data, { label: "", cost: "" }];
    dispatch({ type: "data", payload: newData });
    console.log(data);
  };
  return (
    <img
      className="h-[50px] m-auto mt-5"
      src={path}
      alt="+"
      onClick={addExpenseHandler}
    />
  );
};

export default AddExpense;
