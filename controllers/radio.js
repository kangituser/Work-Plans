const { MondayData, TableData } = require("../utils/config");
const RADIO = require("../models/radio");

const getRadioValues = async (req, res, next) => {
  const query = {
    query: `query {
    boards(ids: 587632402, limit: 25) {
      groups { 
        title
        items (limit:25) {
          name
          column_values {
            id
            title
            type
            value
          }
        }
      }
    }
  }
  `,
  };
  const dataRes = await MondayData(query);
  mapMonday(dataRes.boards[0].groups);
};

const mapMonday = (data) => {
  data.forEach((group) => {
    group.items.forEach((item) => {
        mapMondayColumns(item.column_values, group.title, item.name);
    });
  });
};

const mapMondayColumns = (items, title, name) => {
  let mapped = [], person, txt, nums, currVal, ratings, stat6, date, date1;
 items.forEach(col => {
   JSON.parse(col.value)
  switch (col.id) {
    case "person": person = col.value ? col.value : ' ';
      break;
    case "text": txt = col.value ? col.value.split('"')[1] : ' ';
      break;
    case "numbers": nums = col.value ? +col.value.split('"')[1] : ' ';
      break;
    case "current___value": currVal = col.value ? +col.value.split('"')[1] : ' ';
      break;
    case "rating": ratings = col.value ? +col.value.split('"')[1] : ' ';
      break;
    case "status6": stat6 = col.value ? +col.value.split('"')[1] : ' ';
      break;
    case "date": date = col.value ? JSON.parse(col.value).date.toLocaleString('he-IL', { timeZone: 'Asia/Jerusalem'}) : ' ';
      break;
    case "date_1": date1 = col.value ? col.value : ' ';
      break;
  }  
 })
  mapped.push({
    group_name: title,
    item_name: name,
    board_member: person,
    stage: txt,
    budget_nis: nums,
    budget_excess_nis: currVal,
    satisfaction: ratings,
    status: stat6,
    insert_date: new Date().toLocaleString('he-IL', { timeZone: 'Asia/Jerusalem'}),
    due_date: date,
    due_date_exceeded: date1
  })  
  console.log(mapped);
};

const getRadioTableData = async () => await TableData(RADIO);

module.exports = { getRadioValues };
