import { readFileSync } from "fs";

export default function handler(request, response) {
  return response.send(readFileSync("shifts.json", { encoding: "utf-8" }));
}
