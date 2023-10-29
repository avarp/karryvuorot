import {kv} from "@vercel/kv";

export default async function handler(request, response) {
  let shifts = await kv.hgetall("shifts");
  let names = Array(18)
    .fill()
    .map(() => Array(2).fill(""));
  for (let key in shifts) {
    if (key.startsWith("names")) {
      let name = shifts[key];
      let [_, shiftNum, nameNum] = key.split(".");
      names[shiftNum][nameNum] = name;
    }
  }
  response.json({date: shifts.date, names});
}
