import { kv } from "@vercel/kv";

export default async function handler(request, response) {
  return response.send(await kv.hgetall("shifts"));
}
