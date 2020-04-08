import axios from "axios";

const serverURL = process.env.SERVER_URL || "http://localhost:5000";

export const getTodos = async (token) => {
  const res = await axios.get(`${serverURL}/api/v1/auth/todos`, {
    headers: { "x-access-token": token },
  });
  return res;
};
