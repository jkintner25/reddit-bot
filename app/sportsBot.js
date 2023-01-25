// import getGames from "./index.js";
import { gameIsToday } from "./utils.js";
import Snoowrap from "snoowrap";
import dotenv from 'dotenv'
dotenv.config();

const alabamaGames = await getGames();

const r = new Snoowrap({
  userAgent: 'Bama Sports Posts',
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  refreshToken: process.env.REFRESH_TOKEN
});

r.getSubreddit('bamasportspostsbot').submitLink({
  title: 'Men\'s Basketball',
  url: 'https://rolltide.com/sports/mens-basketball'
});

for (let i = 0; i < alabamaGames.games.length; i++) {
  let game = alabamaGames.games[i];
  if (gameIsToday(game.date)) {

  } else {
    continue
  };
};
