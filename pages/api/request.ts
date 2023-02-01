import axios, { AxiosInstance, AxiosResponse } from "axios";


// test
export const testGetRecipes = async () => {
  try {
    const searchParams = {
      q: "chicken",
    };

    const response = await axios.get(``);
    const data = response.data;
    console.log(data);
    return { data };
  } catch (err) {
    console.log(err);
  }
};
testGetRecipes();
console.log("Hello world");


