import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import MainPage from "./components/main_page/main_page";
import Navbar from "./components/navbar/navbar";
import Join from "./components/join/join";
import Login from "./components/login/login";
import MyPage from "./components/my_page/my_page";
import AddItem from "./components/add_Item/add_item";
import Loading from "./components/loading/loading";

const App = ({bootpayAPI, userAPI, itemAPI, imageUploader}) => {
  const [user,setUser] = useState({});
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [bought, setBought] = useState([]);

  //상품 전체 보기
  const readItemAll = () => {
    itemAPI.readItems()
    .then((response) => {
      setItems(response.data.items);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  //내가 구매한 물품 목록 보기
  const readBoughtAll = () => {
    const config = {
      headers: {
        token: window.localStorage.getItem("token")
      }
    }
    const email = JSON.parse(window.localStorage.getItem("user")).email;
    userAPI.getBoughtAll(email,config)
    .then((response) => {
      const items = response.data.buy;
      setBought(items);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  console.log(bought);
  useEffect(() => {
    // readBoughtAll();
    readItemAll();
    setUser(JSON.parse(window.localStorage.getItem("user")));
  },[]);
  return (
      <Router>
        <Navbar user={user} />
        {loading? <Loading/> : null }
        <Switch>
          <Route exact path="/">
            <MainPage user={user} items={items} bootpayAPI={bootpayAPI} userAPI={userAPI}/> 
          </Route>
          <Route exact path="/join" >
            <Join userAPI={userAPI} setLoading={setLoading}/>
          </Route>
          <Route exact path="/login">
            <Login userAPI={userAPI} setUser={setUser}/>
          </Route>
          <Route exact path="/mypage">
            <MyPage userAPI={userAPI} bought={bought} setLoading={setLoading}/>
          </Route>
          <Route exact path="/addItem">
            <AddItem imageUploader={imageUploader} itemAPI={itemAPI} setLoading={setLoading} />
          </Route>
        </Switch>
      </Router>
  )
}

export default App;
