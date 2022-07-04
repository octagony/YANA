import { useState } from "react";
import Header from "./components/Header";
import NotesGrid from "./components/NotesGrid";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "sample text 1",
      date: "04.07.2022",
    },
    {
      id: 2,
      text: "sample text 2",
      date: "03.07.2022",
    },
    {
      id: 3,
      text: "sample text 4",
      date: "06.07.2022",
    },
  ]);
  return (
    <div className="container bg-yellow-200 font-sans mx-auto px-4 h-screen">
      <Header />
      <NotesGrid notes={notes} />
    </div>
  );
}

export default App;
