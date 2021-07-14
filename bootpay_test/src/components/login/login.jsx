import {useRef} from "react";
import styles from "./login.module.css";

const Login = ({ userAPI }) => {
  const emailRef = useRef();
  const passwordRef = useRef();


  const onLogin = (event) => {
    event.preventDefault();
    const user = {
        email: emailRef.current.value,
        password: passwordRef.current.value
      }
    userAPI.login(user)
    .then((response) => {
      if (response.data.loginSuccess) {
        console.log(response)
        return alert("로그인 성공");
      } else {
        console.log(response);
        return alert("로그인 실패");
      }
    })
  }

  return (
    <form className={styles.login}>
      <input ref={emailRef} type="text" placeholder="이메일"></input>
      <input ref={passwordRef} type="text" placeholder="패스워드"></input>
      <button onClick={onLogin}>로그인</button>
    </form>
  )
}

export default Login;