import {kv} from "@vercel/kv";

export default async function handler(request, response) {
  const {shiftNum, nameNum, name} = request.query;

  if (
    typeof shiftNum != "number" ||
    !Number.isInteger(shiftNum) ||
    shiftNum < 0 ||
    shiftNum >= 18 ||
    typeof nameNum != "number" ||
    !Number.isInteger(nameNum) ||
    nameNum < 0 ||
    nameNum > 1 ||
    typeof name != "string"
  ) {
    response.status(400);
    return;
  }

  await kv.hset("shifts", {
    [`names.${shiftNum}.${nameNum}`]: name,
  });
  response.status(200);
}
