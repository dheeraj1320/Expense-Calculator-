import Expenses from "./components/Expenses";

import "./App.css";
import AddExpense from "./components/AddExpense";
import { useSelector, useDispatch } from "react-redux";
import Table from "./components/Table";

function App() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.data);
  const isTableVisible = useSelector((state) => state.isTableVisible);

  const calculateBtnHandler = () => {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].label === "Bijli Bill") {
        let cost = Math.floor((Number(data[i].cost) / 10) * 3);

        sum += cost;
      } else sum += Number(data[i].cost);
      console.log(sum);
    }

    dispatch({ type: "sum", payload: sum });
    dispatch({ type: "table", payload: true });
  };
  const backBtnHandler = () => {
    dispatch({ type: "table", payload: false });
  };
  return (
    <div className="h-screen flex justify-center content-center bg-v-green3 ">
      <h1 className="absolute top-7 w-full text-center mb-4 text-4xl font-bold leading-none tracking-tight">
        Expense Calculator
      </h1>
      {!isTableVisible && (
        <>
          <div className="w-4/5 m-auto ">
            <Expenses />
            <AddExpense />
            <button
              type="button"
              className="text-v-white absolute bottom-8 border border-v-green1 bg-v-blue font-semibold rounded-lg text-3xl w-4/5 px-5 py-2.5 text-center"
              onClick={calculateBtnHandler}
            >
              Calculate Bill
            </button>
          </div>
        </>
      )}
      {isTableVisible && (
        <>
          <Table />
          <button
            type="button"
            className="text-v-white absolute bottom-8 border border-v-green1 bg-v-blue font-semibold rounded-lg text-3xl w-4/5 px-5 py-2.5 text-center"
            onClick={backBtnHandler}
          >
            Back
          </button>
        </>
      )}
    </div>
  );
}

export default App;
