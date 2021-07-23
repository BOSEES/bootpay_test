import styles from "./my_page_item.module.css";
import {useRef} from "react";

const MyPageItem = ({userAPI, item, setLoading}) => {
  const reasonRef = useRef();

  const onCancel = (event) => {
    event.preventDefault();
    setLoading(true);
    const config = {
      headers: {
        token : window.localStorage.getItem("token")
      }
    }

    const cancelItem = {
      email: JSON.parse(window.localStorage.getItem("user")).email,
      receipt_id : item.receiptId,
      price: item.price,
      name: item.name,
      reason: reasonRef.current.value || "없음"
    }

    userAPI.cancelBought(cancelItem,config)
    .then((response) => {
      if (response.data.success) {
        setLoading(false);
        return alert("취소 되었습니다.");
      } else {
        setLoading(false);
        return alert("취소 실패");
      }
    })
    .catch((error) => {
      setLoading(false);
      console.log(error);
      return alert("에러");
    })
  }

  return(
    <form className={styles.myPageItem}>
      <img  className={styles.image} src={item.itemImage} alt="사진"/>
      <h2 className={styles.name} >{item.name}</h2>
      <h3 className={styles.price} >가격: {item.price}원</h3>
      <h3 className={styles.qty} >구매수량: {item.qty}개</h3>
      <textarea ref={reasonRef} placeholder="취소사유"></textarea>
      <button onClick={onCancel}>구매 취소하기</button>
    </form>
  )
}

export default MyPageItem;