import { put } from "@vercel/blob";

export default async function handler(request, response) {
  return response.send(
    await put("shifts.json", '{"foo":"bar"}', { access: "public" })
  );
}
