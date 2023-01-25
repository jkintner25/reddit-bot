import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat.js';
dayjs.extend(customParseFormat)

export const gameIsTomorrow = (date) => {
  let now = dayjs();
  // let dateString = date.slice(0, -11);
  let timeToPost = dayjs(date, 'MMMM D, YYYY').subtract(1, 'day');
  if (timeToPost.isSame(now, 'day')) return true;
  return false;
};

console.log(gameIsTomorrow('January 25, 2023'))
