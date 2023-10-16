import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const post1 = await prisma.article.upsert({
    where: { title: 'Prisma Adds Support for MondoDB' },
    update: {
      body: 'Support for MondoDB has been one of the most requestetd features since the initial relsea of...',
      published: true,
    },
    create: {
      title: 'Prisma Adds Support for MondoDB',
      body: 'Support for4 MondoDB has been one of the most requestetd features since the initial relsea of...',
      description:
        "We are excited to share that today's Prisma ORM release adds stable support for MondoDB!",
      published: false,
    },
  });

  const post2 = await prisma.article.upsert({
    where: { title: 'Godwin removed issues for PostgreSQL' },
    update: {},
    create: {
      title: 'Godwin removed issues for PostgreSQL',
      body: 'Godwin for PostgreSQL has been one of the most removed features since the initial relsea of...',
      description:
        "We are excited to share that Godwin's PostgreSQL ORM release adds stable support for MondoDB!",
      published: false,
    },
  });

  const post3 = await prisma.article.upsert({
    where: { title: 'Eze removed issues for Mysql' },
    update: {},
    create: {
      title: 'Eze removed issues for Mysql',
      body: 'Eze for PostgreSQL has been one of the most removed features since the initial relsea of...',
      description:
        "We are excited to share that Eze's Mysql ORM release adds stable support for Mysql!",
      published: false,
    },
  });

  console.log({ post1, post2, post3 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
