import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";
import { Analyzer } from "../Summary";

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let counterHome = 0;
    let counterAway = 0;

    for (let match of matches) {
      if (match[1] === this.team && match[5] === MatchResult.HomeWin) {
        counterHome++;
      } else if (match[2] === this.team && match[5] === MatchResult.AwayWin) {
        counterAway++;
      }
    }

    return `${this.team} won ${
      counterAway + counterHome
    } games in 2018. Of those wins ${counterHome} were at home and ${counterAway} were away.`;
  }
}
