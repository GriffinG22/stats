import fs from "fs";

const matches = fs
  .readFileSync("football.csv", {
    encoding: "utf-8",
  })
  .split("\n")
  .map((row: string): string[] => {
    return row.split(",");
  });

const winAnalyzer = (
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
winAnalyzer("Fulham", 0, 0);
