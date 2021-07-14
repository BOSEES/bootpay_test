import styles from "./navbar.module.css";
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/"><i>단골손님</i></Link>
      <ul>
        <Link to="login"><li>로그인</li></Link>
        <Link to="join"><li>회원가입</li></Link>
      </ul>
    </nav>
  )
}

export default Navbar;