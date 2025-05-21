const { PrismaClient } = require("../generated/prisma")
const prisma = new PrismaClient()

async function main() {
  const oil = await prisma.resource.upsert({
    where: { name: 'Oil' },
    update: {},
    create: {
      name: 'Oil',
      base_price: 12.0,
    },
  })

  const saudiArabia = await prisma.country.upsert({
    where: { name: 'Saudi Arabia' },
    update: {},
    create: {
      name: 'Saudi Arabia',
      money_reserves: 3000,
      flag: '🇸🇦',
    },
  })

  const china = await prisma.country.upsert({
    where: { name: 'China' },
    update: {},
    create: {
      name: 'China',
      money_reserves: 2000,
      flag: '🇨🇳',
    },
  })

  await prisma.countryResource.createMany({
    data: [
      {
        country_id: saudiArabia.id,
        resource_id: oil.id,
        production: 20,
        consumption: 6,
        stockpile: 80,
      },
      {
        country_id: china.id,
        resource_id: oil.id,
        production: 4,
        consumption: 18,
        stockpile: 40,
      },
    ],
    skipDuplicates: true,
  })

  console.log('Seeded: Saudi Arabia and China')
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
