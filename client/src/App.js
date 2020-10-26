import { printComponent } from "react-print-tool";
import Report from "./Report";

const App = () => {
  const printReport = async () => await printComponent(<Report name="mario" />);

  return (
    <div>
      <h2>React print tool</h2>
      <button onClick={printReport}>Print</button>
    </div>
  );
};

export default App;
