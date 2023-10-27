import { writeFileSync } from "fs";

export default function handler(request, response) {
  writeFileSync("shifts.json", '{"foo":"bar"}');
  return response.send("OK");
}
