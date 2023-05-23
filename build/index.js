"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
const WinsAnalysis_1 = require("./Analyzers/WinsAnalysis");
const ConsoleReport_1 = require("./reportTargets/ConsoleReport");
const csvFileReader = new CsvFileReader_1.CsvFileReader("football.csv");
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
const manUnitedWinsAnalysisSummary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis("Man United"), new ConsoleReport_1.ConsoleReport());
manUnitedWinsAnalysisSummary.buildAndPrintReport(matchReader.matches);
// ------Old-------
/* let teamWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    teamWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    teamWins++;
  }
}

console.log(`Man United won ${teamWins} games in 2018.`);
 */
/* const winAnalyzer = (
  team: string,
  counterHome: number,
  counterAway: number
): void => {
  for (let match of matches) {
    if (match[1] === team && match[5] === "H") {
      counterHome++;
    } else if (match[2] === team && match[5] === "A") {
      counterAway++;
    }
  }

  console.log(
    `${team} won ${
      counterAway + counterHome
    } games in 2018. Of those wins ${counterHome} were at home and ${counterAway} were away.`
  );
};

winAnalyzer("Cardiff", 0, 0);
winAnalyzer("Man United", 0, 0);
winAnalyzer("Everton", 0, 0);
winAnalyzer("Burnley", 0, 0);
winAnalyzer("Fulham", 0, 0); */
