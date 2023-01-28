import axios from "axios";
import config from "./config/config.js";
import secrets from "./config/secrets.js";

const getAccounts = async (token) => {
  const { data } = await axios.get(`${config.ApiUrl}/accounts`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(data);
};

const getTransactions = async (token, fromDate, toDate) => {
  const { data } = await axios.get(`${config.ApiUrl}/accounts/${secrets.AccountId}/transactions?fromDate=${fromDate}&toDate=${toDate}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(data);
};

export {
  getAccounts,
  getTransactions
}