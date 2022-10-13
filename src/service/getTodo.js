import axios from "axios";

export const getTodo = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    if (response.data) return [response.data, false];
    return [false, true];
  } catch (error) {
    return [false, true];
  }
};
