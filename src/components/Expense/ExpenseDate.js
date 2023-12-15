import Card from "../UI/Card";

const ExpenseDate = (props) => {
  console.log(props.date);
  const date = props.date.split("-")[2];
  // const month = props.date?.toString().split(' ')[1];
  const year = props.date.split("-")[0];
  return (
    <Card className="p-2 flex-none  bg-slate-800 border border-cyan-200 w-32">
      <span> {date} </span>
      {/* <span> {month||"dec"} </span> */}
      <span> {year} </span>
    </Card>
  );
};

export default ExpenseDate;
