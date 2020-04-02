import { get } from "axios";

export const get = async url => {
  try {
    const response = await get(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
