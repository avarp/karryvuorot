import { kv } from "@vercel/kv";

export default async function handler(request, response) {
  return response.send(
    await kv.hset("shifts", {
      date: "22.11.23",
      name01: "Artem",
      name11: "Rita",
    })
  );
}
