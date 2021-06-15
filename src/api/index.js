import axios from "axios";

const url = "http://localhost:9000/productsAPI";
let apiResponse;

let flag;

export const fetchAPIData = async () => {
  let tempSession = sessionStorage.getItem("nodeAPIResponse");
  apiResponse = JSON.parse(tempSession);
  flag = "session---------------------------";
  if (!apiResponse) {
    try {
      apiResponse = await axios.get(url);
      console.log(apiResponse);
      sessionStorage.setItem("nodeAPIResponse", JSON.stringify(apiResponse));
      flag = "via api----------------------";
    } catch (error) {
      console.log("error");
    }
  }

  const fetchedapiResponse = apiResponse.data;
  console.log(flag);
  console.log(fetchedapiResponse);
  return fetchedapiResponse;
};
