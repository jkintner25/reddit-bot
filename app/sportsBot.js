import getGames from "./index.js";
import { gameIsTomorrow } from "./utils.js";

const alabamaGames = await getGames();

for (let i = 0; i < alabamaGames.games.length; i++) {
  
}

let gameTime = gameIsTomorrow(alabamaGames.games[0].date)

console.log(gameTime)
