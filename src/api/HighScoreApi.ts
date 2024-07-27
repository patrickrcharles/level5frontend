
import * as React from 'react';


class HighScoreApi {

  async get(requestOptions?: { headers: Headers; }): Promise<Highscore[] | String | any> {

    const request = new Request('http://api.sweatthis.com/api/highscores');
    const response = await fetch(request);

    var data = await response.json();
    // console.log(data);
    // console.log(response);
    return data;
  }
}

export default new HighScoreApi();