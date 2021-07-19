import styles from "./navbar.module.css";
import { Link } from "react-router-dom"

const Navbar = ({user}) => {
  return (
    <nav className={styles.navbar}>
      <Link to="/"><i>단골손님</i></Link>
      <ul>
        {user? <h3>{user.username}님 반갑습니다.</h3> : null}
        <Link to="login"><li>로그인</li></Link>
        <Link to="join"><li>회원가입</li></Link>
        <Link to="mypage"><li>마이페이지</li></Link>
      </ul>
    </nav>
  )
}

export default Navbar;