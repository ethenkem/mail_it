import jwt from "jsonwebtoken"
import { TOKEN_KEY } from "../configs/constants.js"
import { StatusCodes } from "http-status-codes"

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(StatusCodes.UNAUTHORIZED)
  jwt.verify(token, TOKEN_KEY, (err, user) => {
    if (err) return res.sendStatus(StatusCodes.FORBIDDEN)
    req.user = user
    console.log(user);
    next()
  })
}
