export default function handler(request, response) {
  return response.send(process.cwd());
}
