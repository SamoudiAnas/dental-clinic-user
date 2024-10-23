import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method Not Allowed" });
    }

    res.setHeader(
      "Set-Cookie",
      `token=${req.body.token}; HttpOnly; Path=/; SameSite=Strict; Max-Age=604800`
    );

    return res.status(200).json({ message: "Token updated" });
  } catch (error: any) {
    console.log("Error", error.meesage);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
