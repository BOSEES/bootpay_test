import styles from "./loading.module.css";

const Loading = () => {
  return(
    <div className={styles.loading}>
      <h1 className={styles.title}>잠시만 기다려주세요!!</h1>
    </div>
  )
}

export default Loading;