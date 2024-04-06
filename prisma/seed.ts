import prisma from "../lib/prisma";

async function main() {
  const response = await Promise.all([
    prisma.users.upsert({
      where: { email: "rauchg@vercel.com" },
      update: {},
      create: {
        name: "Guillermo Rauch",
        email: "rauchg@vercel.com",
        image:
          "https://images.ctfassets.net/e5382hct74si/2P1iOve0LZJRZWUzfXpi9r/9d4d27765764fb1ad7379d7cbe5f1043/ucxb4lHy_400x400.jpg",
      },
    }),
    prisma.users.upsert({
      where: { email: "lee@vercel.com" },
      update: {},
      create: {
        name: "Lee Robinson",
        email: "lee@vercel.com",
        image:
          "https://images.ctfassets.net/e5382hct74si/4BtM41PDNrx4z1ml643tdc/7aa88bdde8b5b7809174ea5b764c80fa/adWRdqQ6_400x400.jpg",
      },
    }),
    await prisma.users.upsert({
      where: { email: "stey@vercel.com" },
      update: {},
      create: {
        name: "Steven Tey",
        email: "stey@vercel.com",
        image:
          "https://images.ctfassets.net/e5382hct74si/4QEuVLNyZUg5X6X4cW4pVH/eb7cd219e21b29ae976277871cd5ca4b/profile.jpg",
      },
    }),
    await prisma.careReceiver.upsert({
      where: { email: "albertdupontel@email.com" },
      update: {},
      create: {
        firstname: "Albert",
        lastname: "Dupontel",
        email: "albertdupontel@email.com",
        age: new Date(1935, 1, 1),
      },
    }),
    await prisma.category.upsert({
      where: {id: 1},
      update: {},
      create: {
        value: "NUTRITION",
        important_threshold: 1,
        critical_threshold: 3,
        icone: "./publics/assets",
      }
    }),
    await prisma.category.upsert({
      where: {id: 2},
      update: {},
      create: {
        value: "MEDICAMENTS",
        important_threshold: 1,
        critical_threshold: 3,
        icone: "./publics/assets",
      }
    }),
    await prisma.category.upsert({
      where: {id: 3},
      update: {},
      create: {
        value: "CHUTE",
        important_threshold: 0,
        critical_threshold: 2,
        icone: "./publics/assets",
      }
    }),
    await prisma.category.upsert({
      where: {id: 4},
      update: {},
      create: {
        value: "SOUFRANCE PSYCHIQUE",
        important_threshold: 1,
        critical_threshold: 2,
        icone: "./publics/assets",
      }
    }),
    await prisma.item.upsert({
      where: {catId: 1},
      update: {},
      create: {
        value: "Diminution des quantitiés ingerées alimentation et hydratation (repas laissé, refus…)",
        catId: 1
        }
    }),
    await prisma.item.upsert({
      where: {catId: 1},
      update: {},
      create: {
        id  : 2,
        value: "Augmentation  des quantitiés ingerées", 
        catId: 1
        }
    }),
    await prisma.item.upsert({
      where: {id: 3},
      update: {},
      create: {
        id  : 3,
        value: "Produit perimé, frigo plein ou vide, poubelle pleine ou vide",
        catId: 1
        }
    }),
    await prisma.item.upsert({
      where: {id: 4},
      update: {},
      create: {
        id  : 4,
        value: "Mastication, qualité des dents et appareil dentaire",
        catId: 1,
        }
    }),
    await prisma.item.upsert({
      where: {id: 5},
      update: {},
      create: {
        value: "Non utilisation  ou mauvaise utilisation du pilulier",
        catId: 2,
        }
    }),
    await prisma.item.upsert({
      where: {id: 6},
      update: {},
      create: {
        value: "Auto-medication / Stockage de medicaments, medicaments perimés, ",
        catId: 2,
        }
    }),
    await prisma.item.upsert({
      where: {id: 7},
      update: {},
      create: {
        value: "Effets secondaires liés à la prise de medicaments / ou plainte par rapport au traitements/medicaments",
        catId: 2,
        }
    }),
    await prisma.item.upsert({
      where: {id: 8},
      update: {},
      create: {
        value: "Traitement supplementaire pour episode aigu ou sortie d'hopital",
        catId: 2,
        }
    }),
    await prisma.item.upsert({
      where: {id: 9},
      update: {},
      create: {
        value: "Trouble de l'equilibre et de la marche / Ne sors plus",
        catId: 3,
        }
    }),
    await prisma.item.upsert({
      where: {id: 10},
      update: {},
      create: {
        value: "Surconsomation Alcool et/ou produit nocifs",
        catId: 3,
        }
    }),
    await prisma.item.upsert({
      where: {id: 11},
      update: {},
      create: {
        value: "Refus d'aide technique (deambulateur, lunette, …)",
        catId: 3,
        }
    }),
    await prisma.item.upsert({
      where: {id: 12},
      update: {},
      create: {
        value: "Logement inadapté et/ou mal entretenu",
        catId: 3,
        }
    }),
    await prisma.item.upsert({
      where: {id: 13},
      update: {},
      create: {
        value: "Evenement important (date anniversaire, deces d'un proche, animal de companie…)",
        catId: 4,
        }
    }),
    await prisma.item.upsert({
      where: {id: 14},
      update: {},
      create: {
        value: "Changement d'humeur, trouble du comportement, aggresivité, tristesse, envie de mourir, deambulation",
        catId: 4,
        }
    }),
    await prisma.item.upsert({
      where: {id: 15},
      update: {},
      create: {
        value: "Changement d'humeur, trouble du comportement, aggresivité, tristesse, envie de mourir, deambulation",
        catId: 4,
        }
    }),
    await prisma.item.upsert({
      where: {id: 16},
      update: {},
      create: {
        value: "Trouble du sommeil et de la sieste",
        catId: 4,
        }
    }),
    await prisma.event.upsert({
      where: {id: 1},
      update: {},
      create: {
        observation: "",
        itemId: 1,
        careId: 1,
      }
      }),
  ]);
  console.log(response);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
