import styles from "./join.module.css";
import {useRef} from "react";

const Join = ({userAPI}) => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();
  const passwordRef = useRef();
  
  const onJoin = (event) => {
    event.preventDefault();
    const user = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      address: addressRef.current.value,
      password: passwordRef.current.value
    }

    // console.log(user);
    userAPI.join(user)
    .then((response) => {
      if (response.data.success) {
        return console.log(response);
      } else {
        console.log(response);
        return alert("입력을 바르게 해주세요");
      }
    })
  }

  return (
    <div>
      <h1>회원가입</h1>
      <form className={styles.form}>
        <input ref={nameRef} type="text" placeholder="이름"></input>
        <input ref={emailRef} type="text" placeholder="이메일"></input>
        <input ref={phoneRef} type="text" placeholder="전화번호"></input>
        <input ref={addressRef} type="text" placeholder="주소"></input>
        <input ref={passwordRef} type="text" placeholder="패스워드"></input>
        <button onClick={onJoin}>가입하기</button>
      </form>
    </div>
  )
}

export default Join;