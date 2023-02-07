// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userProfileID } = req.query;
  const { username } = req.query;
  const { ingredientData } = req.query;
  res
    .status(200)
    .json({
      name: username,
      userID: userProfileID,
      ingredient: ingredientData,
    });

  //next-cors
  await NextCors(req, res, {
    methods: ["GET", "POST", "PUT", "DELETE", "POST", "DELETE"],
    origin: "http://localhost:3000",
    optionSuccessStatus: 200,
  });
}
