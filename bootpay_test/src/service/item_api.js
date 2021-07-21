import axios from "axios";

class ItemAPI {
  addItem = async (item) => {
    const data = await axios.post("http://localhost:7351/item/item",item);
    return data;
  }

  readItems = async () => {
    const data = await axios.get("http://localhost:7351/item/items");
    return data;
  }
}

export default ItemAPI;