// import { PrismaClient } from '@prisma/client'
import prisma from "./prisma"

// const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  // const users = await prisma.user.create({
  //   data: {
  //     name: 'Alice',
  //     email: 'alidced@prisma.io',
  //   },
  // })
  const users = await prisma.user.deleteMany()
  console.log(users)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })