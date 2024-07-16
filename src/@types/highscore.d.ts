
interface Highscore {
  id: number;
  userid: number;
  username: string;
  scoreid: string;
  modeid:string;
  modeName: string,
  characterid: number,
  levelid: number,
  character: string,
  level: string,
  os: string,
  version: string,
  date: string,
  difficulty: number,
  time: number,
  totalPoints: number,
  longestShot: number,
  totalDistance: number,
  consecutiveShots: number,
  trafficEnabled: number,
  hardcoreEnabled: number,
  enemiesEnabled: number,
  enemiesKilled: number,
  sniperEnabled: number,
  sniperMode: number,
  sniperModeName: string,
  sniperHits: number,
  sniperShots: number,
  maxShotMade: number,
  maxShotAtt: number,
  twoMade: number,
  twoAtt: number,
  threeMade: number,
  threeAtt: number,
  fourMade: number,
  fourAtt: number,
  sevenMade: number,
  sevenAtt: number,
  bonusPoints: number,
  moneyBallMade: number,
  moneyBallAtt: number,
  platform: string,
  device: string,
  ipaddress: string,
  p1TotalPoints: number,
  p2TotalPoints: number,
  p3TotalPoints: number,
  p4TotalPoints: number,
  firstPlace: string,
  secondPlace: string,
  thirdPlace: string,
  fourthPlace: string,
  p1IsCpu: number,
  p2IsCpu: number,
  p3IsCpu: number,
  p4IsCpu: number,
  numPlayers: number
}

interface Highscores extends Summary {
  content: Highscore[];
}
