const reducerFunction = (
  state = {
    data: [
      { label: "Bijli Bill", cost: "" },
      { label: "Mali", cost: "-175" },
      { label: "Dukaan", cost: "1250" },
    ],
    isTableVisible: false,
    totalSum: 0,
  },
  action
) => {
  switch (action.type) {
    case "data":
      return { ...state, data: action.payload };
    case "table":
      return { ...state, isTableVisible: action.payload };
    case "sum":
      return { ...state, totalSum: action.payload };
    default:
      return state;
  }
};

export default reducerFunction;
