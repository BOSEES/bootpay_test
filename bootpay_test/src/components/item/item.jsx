import styles from "./item.module.css";
import {useRef} from "react";


const Item = ({item, bootpayAPI ,user}) => {
  const nameRef = useRef();
  const qtyRef = useRef();
  const priceRef = useRef();
  const name = item.itemName;
  const price = item.price;

  const onPayment = (event) => {
    event.preventDefault();
    const prices = price * (qtyRef.current.value || 1);
    const itemObj = {
      itemImage:item.itemImage,
      item_name: item.itemName,
      qty: Number(qtyRef.current.value) || 1,
      unique: item.unique,
      price: item.price * qtyRef.current.value || item.price,
      cat1: item.category[0] || "",
      cat2: item.category[1] || "",
      cat3: item.category[2] || ""
    }
    bootpayAPI.payment(name,prices,itemObj,user);
  }

  return (
    <form className={styles.item}>
      <img className={styles.img} src={item.itemImage} alt="물건" />
      <h2 ref={nameRef} className={styles.name}>{name}</h2>
      <input ref={qtyRef} className={styles.qty} type="Number" placeholder={`남은수량: ${item.qty}`} />
      <h3 ref={priceRef} className={styles.price}>가격: {price} </h3>
      <button className={styles.button} onClick={onPayment}>결제하기</button>
    </form>
    
  )
}

export default Item;

// item_name: "신라면", //상품명
//       qty: 1, //수량
//       unique: '1', //해당 상품을 구분짓는 primary key
//       price: 1000, //상품 단가
//       cat1: '라면', // 대표 상품의 카테고리 상, 50글자 이내
//       cat2: '농심', // 대표 상품의 카테고리 중, 50글자 이내
//       cat3: '매운맛', // 대표상품의 카테고리 하, 50글자 이내