import MyPageItem from "../my_page_item/my_page_item";

const MyPage = ({userAPI, bought, setLoading}) => {
  return (
    <div>
      <h1>마이페이지</h1>
      <h2>구매목록</h2>
      {bought.map((item,index) => {
        return <MyPageItem key={index} userAPI={userAPI} item={item} setLoading={setLoading}/>
      })}
    </div>
  )
}

export default MyPage;