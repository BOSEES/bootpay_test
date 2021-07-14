import styles from "./main_page.module.css";
import Item from "../item/item";

const MainPage = ({items,bootpayAPI}) => {
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