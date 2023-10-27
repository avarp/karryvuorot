import { put } from "@vercel/blob";

export default async function handler(request, response) {
  return response.send(
    await put("shifts.json", '{"foo":"bar"}', {
      access: "public",
      token: "vercel_blob_rw_NIKSdiQV7xsOojuX_8JZtZQYd3M6pEbcHUkda8wfW95VOk2",
    })
  );
}
