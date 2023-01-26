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

export const formatDateTime = (date, time) => {
  let removeDots = time.split('.').join('');
  let firstHalf = removeDots.split('C').join('CS');

  let secondHalfArray = date.split('2023')
  let secondHalfString = secondHalfArray[0].concat('2023');
  let secondHalf = dayjs(secondHalfString, 'MMMM D, YYYY').format('dddd, M/D')

  return firstHalf.concat(' - ', secondHalf)
}

export const createPost = (game, rank) => {
  let dateTime = formatDateTime(game.date, game.time)
  let title = '';
  if (game.home === 'Home') {
    title = `[Basketball Game Thread] #${rank} Alabama vs ${game.opponent}`
  } else {
    title = `[Basketball Game Thread] #${rank} Alabama @ ${game.opponent}`
  }
  let text = `When: ${dateTime}  \nWhere: ${game.location}  \nWatch: ${game.tv}`

  let newPost = { title, text }
  return newPost;
}

//8pm CST - Wednesday, 1/25

// console.log(formatDateTime('March 1, 2023 (Wednesday)', '6 p.m. CT'))
