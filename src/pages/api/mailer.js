// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import NextCors from "nextjs-cors"

export default async function handler(req, res) {
  await NextCors(req, res, {
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200,
  })

  if (req.method === 'POST') {
    // Rest of the API logic
    res.status(200).json({ message: 'Hello Everyone!' })
  } else {
    res.status.json({ message: 'haruki' })
  }
}
