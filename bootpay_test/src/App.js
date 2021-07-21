import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import MainPage from "./components/main_page/main_page";
import Navbar from "./components/navbar/navbar";
import Join from "./components/join/join";
import Login from "./components/login/login";
import MyPage from "./components/my_page/my_page";
import AddItem from "./components/add_Item/add_item";

const App = ({bootpayAPI, userAPI, itemAPI, imageUploader}) => {
  const [user,setUser] = useState({});
  const [items, setItems] = useState([]);

  const readAllItem = () => {
    itemAPI.readItems()
    .then((response) => {
      setItems(response.data.items);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  useEffect(() => {
    readAllItem();
    setUser(JSON.parse(window.localStorage.getItem("user")));
  },[]);
  return (
      <Router>
        <Navbar user={user} />
        <Switch>
          <Route exact path="/">
            <MainPage user={user} items={items} bootpayAPI={bootpayAPI} userAPI={userAPI}/> 
          </Route>
          <Route exact path="/join" >
            <Join userAPI={userAPI}/>
          </Route>
          <Route exact path="/login">
            <Login userAPI={userAPI} setUser={setUser}/>
          </Route>
          <Route exact path="/mypage">
            <MyPage />
          </Route>
          <Route exact path="/addItem">
            <AddItem imageUploader={imageUploader} itemAPI={itemAPI} />
          </Route>
        </Switch>
      </Router>
  )
}

export default App;
