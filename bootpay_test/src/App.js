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
  const items = [
    {
      img: "https://www.costco.co.kr/medias/sys_master/images/h64/h96/9867844452382.jpg",
      item_name: "신라면", //상품명
      qty: 1, //수량
      unique: '1', //해당 상품을 구분짓는 primary key
      price: 850, //상품 단가
      cat1: '라면', // 대표 상품의 카테고리 상, 50글자 이내
      cat2: '농심', // 대표 상품의 카테고리 중, 50글자 이내
      cat3: '매운맛', // 대표상품의 카테고리 하, 50글자 이내
    },
    {
      img: "https://ww.namu.la/s/52a3387a9a149f39f3e059b87a80929f16705a670ade4f72da21d5c3613ce16743f33954e80b916508214161187ac97788ee3ee6349556e4e62797b910b1500de8bf3ea95acd4c04d1333b5ba249261dcdd47fa67f2a0ba57353e7ecd6659f614af3abced3f709077a540349b02a0d0d",
      item_name: '고향만두', //상품명
      qty: 2, //수량
      unique: '2', //해당 상품을 구분짓는 primary key
      price: 4000, //상품 단가
      cat1: '만두', // 대표 상품의 카테고리 상, 50글자 이내
      cat2: '오뚜기', // 대표 상품의 카테고리 중, 50글자 이내
      cat3: '고향', // 대표상품의 카테고리 하, 50글자 이내
    },
    {
      img: "https://dimg.donga.com/wps/NEWS/IMAGE/2016/12/27/82046886.1.jpg",
      item_name: '계란', //상품명
      qty: 3, //수량
      unique: '3', //해당 상품을 구분짓는 primary key
      price: 5000, //상품 단가
      cat1: '계란', // 대표 상품의 카테고리 상, 50글자 이내
      cat2: '신선', // 대표 상품의 카테고리 중, 50글자 이내
      cat3: '무정란', // 대표상품의 카테고리 하, 50글자 이내
    },
  ]

  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem("user")));
  },[]);
  return (
      <Router>
        <Navbar user={user} />
        <Switch>
          <Route exact path="/">
            <MainPage items={items} bootpayAPI={bootpayAPI} userAPI={userAPI}/> 
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
