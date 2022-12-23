// const puppeteer = require("puppeteer");
import fetch from "node-fetch";

// (async () => {
//   const browswer = await puppeteer.launch({
//     headless: true, args: [
//       "--disable-gpu",
//       "--disable-dev-shm-usage",
//       "--no-sandbox",
//       "--disable-setuid-sandbox"
//     ]
//   });

//   const page = await browswer.newPage();
//   await page.goto('https://rolltide.com/sports/mens-basketball/schedule?path=mbball');

//   const games = await page.$$('.sidearm-schedule-game .sidearm-schedule-home-game .upcoming-game .W .sidearm-schedule-game-completed')

//   const gameTimes = await page.$$('.sidearm-schedule-game-opponent-date .flex-item-1')
//   console.log(gameTimes)
// const gameTimeDiv = await page.$$('.flex .flex flex-justify-between')

// const data3 = await page.evaluate(el => el.querySelector('li').innerText, games)

// const testData = await page.$$eval('li', lis => lis.length)
// console.log(testData)

// for (const game of games) {
//   const data = await page.evaluate(el => el.querySelector('div > div :nth-child(2) > div > div > span').textContent, game)
//   console.log(data)
// }

// for (const gameTime of gameTimeDiv) {
//   const data = await page.evaluate(el => el.innerText, gameTimeDiv)
//   console.log(data)
// }


//   await browswer.close();
// })();

let schedule;

const getSchedule = async () => {
  const res = await fetch('https://api.sportsdata.io/v3/cbb/scores/json/TeamSchedule/2023/ALA?key=167102da31ec4a78be178a65a37f1b53');
  schedule = await res.json();
  const homeGames = schedule.filter(game=>game.HomeTeam === 'ALA')
  console.log(schedule)
}

getSchedule()

//Ocp-Apim-Subscription-Key
//api key: 167102da31ec4a78be178a65a37f1b53
