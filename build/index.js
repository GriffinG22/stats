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
let manUnitedWinsHome = 0;
let manUnitedWinsAway = 0;
for (let match of matches) {
    if (match[1] === "Man United" && match[5] === "H") {
        manUnitedWinsHome++;
    }
    else if (match[2] === "Man United" && match[5] === "A") {
        manUnitedWinsAway++;
    }
}
console.log(`Man United won ${manUnitedWinsAway + manUnitedWinsHome} games in 2018. Of those wins ${manUnitedWinsHome} were at home and ${manUnitedWinsAway} were away.`);
