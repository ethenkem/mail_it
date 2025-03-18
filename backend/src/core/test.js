import request from "supertest"
import app from "../app.js"
import mongoose from "mongoose"
import { MONGO_DB_URI } from "../configs/constants.js"

beforeEach(async () => {
  await mongoose.connect(MONGO_DB_URI);
})

afterEach(async () => {
  await mongoose.connection.close();
})

describe("GET /core/templates", () => {
  it('Testing getting templates', async () => {
    const res = await request(app).get("/core/templates")
    expect(res.statusCode).toBe(200)
  })
})
