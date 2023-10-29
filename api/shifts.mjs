import {kv} from "@vercel/kv";

export default async function handler(request, response) {
  let shifts = await kv.hgetall("shifts");
  shifts.names = Array(18).map(() => Array(2).fill(""));
  // for (let key in shifts) {
  //   if (key.startsWith("names")) {
  //     let name = shifts[key];
  //     let [_, shiftNum, nameNum] = key.split(".");
  //     shifts.names[shiftNum][nameNum] = name;
  //     delete shifts[key];
  //   }
  // }
  response.json(shifts);
}