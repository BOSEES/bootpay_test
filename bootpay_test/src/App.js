import moment from "moment";
const onPayment = () => {
  console.log(guid());
}

function guid() {
  function s4() {
    return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

const getDate = () => {
  console.log(moment().add(2, "d"));
}

const App = () => { 
  return (
    <div>
      <button onClick={onPayment}>결재하기</button>
      <button onClick={getDate}>날짜 체크</button>
    </div>
  )
}

export default App;
