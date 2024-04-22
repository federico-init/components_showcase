import Table from "../components/Table";

const TablePage = () => {
  // data to be displayed in the table
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Banana", color: "bg-yellow-500", score: 1 },
    { name: "Lime", color: "bg-green-500", score: 4 },
  ];

  // configuration of how the data should be displayed
  const config = [
    { label: "Fruits", render: (fruit) => fruit.name },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      sort: (a, b) => a.score - b.score,
    },
  ];

  return (
    <div>
      <Table data={data} config={config} />
    </div>
  );
};

export default TablePage;
