import styles from "./item.module.css";
import {useRef} from "react";

const Item = ({item, bootpayAPI}) => {
  const nameRef = useRef();
  const qtyRef = useRef();
  const priceRef = useRef();
  const name = item.item_name;
  const price = item.price;

  const onPayment = (event) => {
    event.preventDefault();
    const prices = price * (qtyRef.current.value || 1);
    const userInfo = {
        username: '김영일',
        email: 'rladuddlf3@naver.com',
        addr: '사용자 주소',
        phone: '010-7358-7351'
      }
    const itemObj = {
      item_name: item.item_name,
      qty: qtyRef.current.value || 1,
      unique: item.unique,
      price: item.price * qtyRef.current.value || 1,
      cat1: item.cat1,
      cat2: item.cat2,
      cat3: item.cat3
    }

    bootpayAPI.payment(name,prices,itemObj,userInfo);
  }

  return (
    <form className={styles.item}>
      <img className={styles.img} src={item.img} alt="물건" />
      <h2 ref={nameRef} className={styles.name}>{name}</h2>
      <input ref={qtyRef} className={styles.qty} type="Number" placeholder="수량: 1" />
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