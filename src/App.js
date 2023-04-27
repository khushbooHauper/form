import './App.css';
import Form from './Form';
import FormContainer from './FormContainer';
import Home from './Home';
import { FormDataList } from './List';
import { ListFilterExtraFile } from './ListFilterExtraFile';
import SimpleTable from './Table';
import Todo from './todo';
function App() {
  return (
    <div className="App">
      {/* <Todo/> */}
      {/* <Home/> */}
      <FormContainer />
      <FormDataList/>
      {/* <ListFilterExtraFile/> */}
      {/* <Form/>
      <SimpleTable/>  */}
    </div>
  );
}

export default App;
