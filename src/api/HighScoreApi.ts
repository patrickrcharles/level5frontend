
import * as React from 'react';


class HighScoreApi {


  async fetchHighscores(url: string): Promise<Highscore[]> {
    console.log("fetchHighscores");
    const response = await fetch(url);
    const data = await response.json();
    console.log("data: ", data);
    return data;
  }

  async get(requestOptions?: { headers: Headers; }): Promise<Highscore[] | String | any> {

    const request = new Request('http://api.sweatthis.com/api/highscores');

    // const response = await fetch('http://api.sweatthis.com/api/highscores',
    //   {
    //     mode: 'no-cors',
    //     method: "get",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Access-Control-Allow-Origin": "*",
    //       "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"

    //     },
    //     credentials:"include"
    const response = await fetch(request);

    var data = await response.json();
    console.log(data);
    console.log(response);
    return data;
  }
}

export default new HighScoreApi();