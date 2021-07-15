import styles from "./main_page.module.css";
import Item from "../item/item";
import { useEffect } from "react";

const MainPage = ({items, bootpayAPI, userAPI}) => {

  const userCheck = () => {
    const config = {
      headers: {
        token: window.localStorage.getItem("token")
      }
    }

    userAPI.check(config)
    .then((response) => {
      return console.log(response);
    })
    .catch((error) => {
      window.localStorage.clear();
      return error;
    })
  }

  useEffect(() => {
    userCheck();
  },[]);

  return (
    <div>
      <nav>
        <h1>단골손님</h1>
      </nav>
      <div className={styles.box}>
        {items.map((item, index) => {
          return <Item key={index} item={item} bootpayAPI={bootpayAPI}/>
        })}
      </div>
    </div>
  )
}

export default MainPage;