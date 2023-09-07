import { PrismaClient } from "@prisma/client"

declare global {
  var Prisma: PrismaClient | undefined
}

const prismadb = globalThis.Prisma || new PrismaClient()
if (process.env.NODE_ENV !== "production") globalThis.Prisma = prismadb

export default prismadb;