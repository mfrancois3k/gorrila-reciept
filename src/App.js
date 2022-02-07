import "./App.css";
import Data from "./Data/Records";
import { useState } from "react";
import Receipt from "./components/Receipt";
import records from "./Data/Records";

function App() {
  const [receipts, setReceipts] = useState(records);
  console.log(receipts);
  return (
    <div className="App">
      {records.map((current, index) => {
        return <Receipt {...current} key={index} />;
      })}
    </div>
  );
}

export default App;
