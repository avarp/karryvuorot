import { put } from "@vercel/blob";

export default function handler(request, response) {
  let response = put("shifts.json", '{"foo":"bar"}', { access: "public" });
  return response.send(response);
}
