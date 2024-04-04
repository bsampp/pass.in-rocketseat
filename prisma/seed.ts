import { prisma } from "../src/lib/prisma"

async function seed(){

    const eventId = 'bc96c0b8-45fd-42b6-a83d-1b5ff4294943'

    await prisma.event.create({
        data: {
          id: eventId,
          title: 'Unite Summit',
          slug: 'unite-summit',
          details: 'Detalhes do evento',
          maximumAttendees: 120,
        }
      })

}

seed().then(() => {
    console.log('Database seedeed!')
    prisma.$disconnect()
})