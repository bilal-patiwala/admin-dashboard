import "./App.css";
import DataContext, { DataProvider } from "./context/DataContext";
import Row from "./components/Row";
import Search from "./components/Search";
import Table from "./components/Table";
import PaginationButton from "./components/PaginationButton";
import { useContext } from "react";
import SelectedDelete from "./components/SelectedDelete";
const App = () => {
  return (
    <>
      <DataProvider>
        <div className="nav">
          <div>
            <Search />
          </div>
          <SelectedDelete/>
        </div>
        <Table />
      </DataProvider>
    </>
  );
};

export default App;
