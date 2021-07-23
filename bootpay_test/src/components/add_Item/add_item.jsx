import styles from "./add_item.module.css";
import {useRef, useState} from "react";

const AddItem = ({ imageUploader,itemAPI, setLoading }) => {
  const titleRef = useRef();
  const qtyRef = useRef();
  const priceRef = useRef();

  const [image, setImage] = useState();

  const onFileChange = (event) => {
    setImage(event.target.files[0]);
  }

  const onAddItem = async (event) => {
    event.preventDefault();
    setLoading(true);
    const config = {
      headers: {
        token: window.localStorage.getItem("token")
      }
    }
    const imgUrl = await imageUploader.upload(image);
    const item = {
      itemImage: imgUrl.url,
      itemName : titleRef.current.value || "없음",
      unique: `${Math.floor(Math.random() * 100)}`,
      price: priceRef.current.value || 0 ,
      qty: qtyRef.current.value || 1,
      category: "없음",
    }
    

    itemAPI.addItem(item,config)
    .then((response) => {
      console.log(response);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    })
  }

  return(
    <div>
      <form>
        <input onChange={onFileChange} className={styles.img} type="file" accept="image/*" name="file" />
        <input ref={titleRef} className={styles.title} type="text"  placeholder="상품 이름"/>
        <input ref={qtyRef} className={styles.수량} type="number" placeholder="수량"/>
        <input ref={priceRef} className={styles.가격} type="number" placeholder="가격"/>
        <button onClick={onAddItem}>등록하기</button>
      </form>
    </div>
  )
}

export default AddItem;