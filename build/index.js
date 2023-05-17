"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const matches = fs_1.default
    .readFileSync("football.csv", {
    encoding: "utf-8",
})
    .split("\n")
    .map((row) => {
    return row.split(",");
});
const winAnalyzer = (team, counterHome, counterAway) => {
    for (let match of matches) {
        if (match[1] === team && match[5] === "H") {
            counterHome++;
        }
        else if (match[2] === team && match[5] === "A") {
            counterAway++;
        }
    }
    console.log(`${team} won ${counterAway + counterHome} games in 2018. Of those wins ${counterHome} were at home and ${counterAway} were away.`);
};
winAnalyzer("Cardiff", 0, 0);
winAnalyzer("Man United", 0, 0);
