import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";

const Table = () => {
  const data = useSelector((state) => state.data);
  const totalSum = useSelector((state) => state.totalSum);
  return (
    <div className="w-[90%] relative overflow-x-auto flex justify-content items-center ">
      <table className="w-full text-[18px] text-center">
        <thead className="text-xl uppercase bg-v-blue text-v-white">
          <tr>
            <th scope="col" className=" py-4">
              Reason
            </th>
            <th scope="col" className=" py-4">
              Cost
            </th>
          </tr>
        </thead>
        <tbody className="bg-v-white">
          {data.map((entry) => {
            let label, cost;
            if (entry.label === "Bijli Bill") {
              label = "Bijli Bill (30%)";
              cost = (entry.cost / 10) * 3;
              cost = Math.floor(cost);
            } else {
              cost = entry.cost;
              label = entry.label;
            }

            return (
              <tr className="bg-white border-b text-xl" key={uuidv4()}>
                <td className=" py-4 text-xl">{label}</td>
                <td className=" py-4 text-xl">{cost}</td>
              </tr>
            );
          })}
          <tr className="bg-v-green1 text-v-white">
            <td className=" py-4 text-xl font-bold">TOTAL</td>
            <td className=" py-4 text-xl font-bold">{totalSum}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
