import {kv} from "@vercel/kv";

export default async function handler(request, response) {
  const {date} = request.query;
  if (typeof date != "string" || date == "") {
    response.status(400);
    return;
  }
  await kv.del("shifts");
  await kv.hset("shifts", {date});
  response.status(200);
}
