import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import AddUser from './Components/AddUser';
import NoPage from './Components/NoPage';
import UserContent from './Components/Usercontent';
import { ViewUser } from './Components/ViewUser';
import EditUser from './Components/EditUser';

function App() {

  return (
    <div className="App">
        <Switch>
          <Route exact path="/">
            <UserContent/>
          </Route>

          <Route path="/adduser">
            <AddUser/>
          </Route>

          <Route path={"/user/:id"}>
            <ViewUser/>
          </Route>

          <Route path={"/edit/:id"}>
            <EditUser/>
          </Route>

          <Route path={"**"}>
            <NoPage/>
          </Route>

        </Switch>
    </div>
  );
}

export default App;
