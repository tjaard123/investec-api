import { getAccessToken, getTransactions } from "./investec/index.js";

getAccessToken()
  .then(token => getTransactions(token, "2023-01-01", "2023-01-22"))
  .catch((error) => {
    console.error(error.code);
    console.error(error.message);
    console.error(error.response.status);
    console.error(error.response.statusText);
  });