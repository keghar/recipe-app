import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const user = await prisma.user.upsert({
        where: { email: 'test@test.com'},
        update: {},
        create:{
            email: 'test@test.com',
            name: 'Test User',
            password: 'password'

        }
    })
    console.log({user})
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

//   https://www.prisma.io/docs/guides/migrate/seed-database