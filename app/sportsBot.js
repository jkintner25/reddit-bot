import dayjs from "dayjs";
// import getGames from "./index.js";
import { gameIsToday, createPost } from "./utils.js";
import Snoowrap from "snoowrap";
import dotenv from 'dotenv'

dotenv.config();

// const alabama = await getGames();

// let futureGames = alabama.games.filter(game => {
//   if (game.date.includes('2022')) return false;
//   else {
//     let dateString = game.date.split('2023');
//     let newDate = dateString[0].concat('2023');
//     let date = dayjs(newDate, 'MMMM D, YYYY');
//     return dayjs().isBefore(date);
//   }
// });

// console.log(futureGames)

const r = new Snoowrap({
  userAgent: 'Bama Sports Posts',
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  refreshToken: process.env.REFRESH_TOKEN
});

// for (let i = 0; i < futureGames.length; i++) {
//   let game = futureGames[i];
//   r.getSubreddit('choctaws').submitSelfpost(createPost(game, alabama.rank));
// };

r.getSubreddit('rolltide').getLinkFlairTemplates().then(console.log)

// let todaysGame = alabama.games.filter((game) => {
//   console.log(game.date, gameIsToday(game.date))
// })
