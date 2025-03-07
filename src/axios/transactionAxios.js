import axios from "axios";

const BASE_URL = import.meta.env.PROD ? "" : import.meta.env.VITE_BASE_API_URL;
const TRANSACTION_ENDPOINT = "/api/transaction";

const API_URL = `${BASE_URL}${TRANSACTION_ENDPOINT}`;

// CREATE transaction | POST
export const createTransaction = (transactionObject, userId) => {
  const response = axios
    .post(`${API_URL}`, transactionObject, {
      headers: {
        authorization: userId,
      },
    })
    .then((res) => res.data)
    .catch((error) => console.log(error));
  return response;
};

// INDEX | GET Transactions
export const getTransactions = (userId) => {
  const response = axios
    .get(`${API_URL}`, {
      headers: {
        authorization: userId,
      },
    })
    .then((res) => res.data)
    .catch((error) => console.log(error));
  return response;
};

// DELETE || Delete Transaction
export const deleteTransactions = (selectedIds, userId) => {
  const response = axios
    .delete(`${API_URL}`, {
      data: selectedIds,
      headers: {
        authorization: userId,
      },
    })
    .then((res) => res.data)
    .catch((error) => console.log(error));
  return response;
};