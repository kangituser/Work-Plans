const axios = require("axios");

const headers = {
  "Content-Type": "application/json",
  Authorization: process.env.API_KEY,
};

const MondayData = async (body) => {
  let result;
  try {
    result = await axios.post(process.env.API_URL, body, {
      headers: headers,
    });
  } catch (err) {
    console.log(err.message);
  }
  return result.data.data;
};

const TableData = async model => await model.findAll();

module.exports = { MondayData, TableData };
