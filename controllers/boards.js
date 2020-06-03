const axios = require("axios");
const { headers } = require('../utils/config');

const data = async (body) => {
  let result;
  try {
    result = await axios.post(
      process.env.API_URL, 
      body,  {
      headers: headers
    });
  } catch (err) {
    console.log(err.message);
  }
  console.log(result.data.data.boards);
};

const getAllBoards = () => {
  const body = { query: `query {
    boards (limit: 32, ids: [587632402,587680135, 587696219] ){
      name
      id
    }
  }`};
  data(body);
};

const getRadio = (req, res, next) => {
  const query = { query: `query: {
    boards (ids: [587632402]) {

    }
  }`}
}

module.exports = { getAllBoards, getRadio };
