import { kv } from "@vercel/kv";

export default function handler(request, response) {
  return response.send(kv.hgetall("shifts"));
}
