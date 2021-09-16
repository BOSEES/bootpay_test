import axios from "axios";

class UserApi {
  join = async (user) => {
    const data = await axios.post("http://localhost:5000/user/join", user);
    return data;
  }

  login = async (user) => {
    const data = await axios.post("http://localhost:5000/user/login", user);
    return data;
  }

  check = async (token) => {
    const data = await axios.post("http://localhost:5000/user/check",null,token);
    return data;
  }

  getBoughtAll = async (email,token) => {
    const data = await axios.get(`http://localhost:5000/user/bought/${email}`, token);
    return data;
  }

  cancelBought = async (item, token) => {
    const data = await axios.post("http://localhost:5000/verify/cancel",item,token);
    return data;
  }
}

export default UserApi;