import axios from "axios";

class UserApi {
  join = async (user) => {
    const data = await axios.post("http://localhost:7351/user/join", user);
    return data;
  }

  login = async (user) => {
    const data = await axios.post("http://localhost:7351/user/login", user)
    return data
  }

}

export default UserApi;