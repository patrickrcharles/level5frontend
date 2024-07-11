
import * as React from 'react';


class HighScoreApi{


  async fetchHighscores(): Promise<Highscore[]> {
    console.log("fetchHighscores");
    const response = await fetch('https://localhost:44304/api/highscores');
    const data = await response.json();
    console.log("data: ", data);
    return data;
  }

}
export default new HighScoreApi()