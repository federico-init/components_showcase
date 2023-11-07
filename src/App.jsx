// components
import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: 1,
      label: "Can I use React on a project?",
      content: "Yes you can.",
    },
    {
      id: 2,
      label: "Can I use Javascript on a project?",
      content: "Yes you can.",
    },
    {
      id: 3,
      label: "Can I use CSS on a project?",
      content: "Yes you can.",
    },
  ];
  return <Accordion items={items} />;
}

export default App;
