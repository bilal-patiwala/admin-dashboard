import './App.css'
import { DataProvider } from './context/DataContext'
import { AiOutlineDelete } from "react-icons/ai";
import Row from './components/Row'
import Search from './components/Search'
import Table from './components/Table';
const App = () => {

  return (
    <>
      <DataProvider>
        <Search/>
        <div><AiOutlineDelete color='white'width="50px" height="50px"/></div>
        <Table/>
      </DataProvider>
    </>
  )
}

export default App
