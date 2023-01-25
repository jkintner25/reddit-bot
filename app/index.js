import fetch from "node-fetch";
import puppeteer from "puppeteer";

const getGames = async () => {
  const browser = await puppeteer.launch({
    headless: true, args: [
      "--disable-gpu",
      "--disable-dev-shm-usage",
      "--no-sandbox",
      "--disable-setuid-sandbox"
    ]
  });

  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  await page.goto('https://rolltide.com/sports/mens-basketball/schedule/2022-23?grid=true');

  const tableRows = await page.evaluate(() => Array.from(document.querySelectorAll('tr'), (e) => e.innerText));
  tableRows.shift();

  const boxScoreLinks = await page.evaluate(() => Array.from(document.querySelectorAll('li.sidearm-schedule-game-links-boxscore > a'), (e) => e.href));
  let gameData = tableRows.map(row => {
    let rowArr = row.split('\t');
    rowArr.splice(6, 3);
    rowArr.pop();
    return rowArr;
  });

  const games = gameData.map(([date, time, home, opponent, location, tv]) => {
    return { date, time, home, opponent, location, tv }
  });

  const espn = await browser.newPage();
  await espn.setDefaultNavigationTimeout(0)
  await espn.goto('https://www.espn.com/mens-college-basketball/team/_/id/333/alabama-crimson-tide');

  const alabamaRank = await espn.evaluate(() => Array.from(document.querySelectorAll('span.ClubhouseHeader__Rank'), (e) => e.innerHTML));

  const [rank] = alabamaRank;

  await browser.close();
  return { games, rank };
};

export default getGames;

// ****************Object Data Structure*********************
/*
gameData = {
  date: '',
  time: '',
  home: '',
  opponent: '',
  location: '',
  tv: '',
  result: '',
  boxScores: ''
}
*/

// ************sports data api******************
// let schedule;

// const getSchedule = async () => {
  // const res = await fetch(process.env.SPORTS_DATA_API_ADDRESS);
//   schedule = await res.json();
//   const homeGames = schedule.filter(game => game.HomeTeam === 'ALA')
//   schedule.sort((a, b) => dayjs(a.DateTime) - dayjs(b.DateTime))
//   console.log(schedule[30])
// }

// getSchedule()
