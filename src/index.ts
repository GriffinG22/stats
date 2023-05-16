import fs from "fs";

const matches = fs
  .readFileSync("football.csv", {
    encoding: "utf-8",
  })
  .split("\n")
  .map((row: string): string[] => {
    return row.split(",");
  });

let manUnitedWinsHome = 0;
let manUnitedWinsAway = 0;

for (let match of matches) {
  if (match[1] === "Man United" && match[5] === "H") {
    manUnitedWinsHome++;
  } else if (match[2] === "Man United" && match[5] === "A") {
    manUnitedWinsAway++;
  }
}

console.log(
  `Man United won ${
    manUnitedWinsAway + manUnitedWinsHome
  } games in 2018. Of those wins ${manUnitedWinsHome} were at home and ${manUnitedWinsAway} were away.`
);
