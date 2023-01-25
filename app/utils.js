import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat.js';
dayjs.extend(customParseFormat)

export const gameIsToday = (date) => {
  let now = dayjs();
  if (date.includes('2022')) return false;
  else {
    let dateString = date.split('2023');
    let newDate = dateString[0].concat('2023')
    let timeToPost = dayjs(newDate, 'MMMM D, YYYY');
    if (timeToPost.isSame(now, 'day')) return true;
    return false;
  }
};

// console.log(gameIsTomorrow('January 25, 2023'))

let dateString = 'February 25, 2023 (Thursday)'
console.log(gameIsToday(dateString))
