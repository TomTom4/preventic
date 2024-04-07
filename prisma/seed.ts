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
    /*await prisma.careReceiver.upsert({
      where: { email: "albertdupontel@email.com" },
      update: {},
      create: {
        firstname: "Albert",
        lastname: "Dupontel",
        email: "albertdupontel@email.com",
        age: new Date(1935, 1, 1),
      },
    }),
    await prisma.item.deleteMany({}),
    await prisma.category.deleteMany({}),*/
    await prisma.category.upsert({
      where: {id:1},
      update:{},
      create: {
        value: "NUTRITION",
        important_threshold: 1,
        critical_threshold: 3,
        icone: "/publics/assets",
        items: {
          create: [
            {value: "Diminution de l'alimentation"},
            {value: "Arret/refus de l'alimentation"},
            {value: "Diminution de l'hydratation"},
            {value: "Arret/refus de l'hydratation"},
            {value: "Poubelle pleine / repas jeté"},
            {value: "Frigo plein / perimé"},
            {value: "Mastication, probleme dentaire"},
          ]
        },
      }
    }),
    await prisma.category.upsert({
      where: {id:2},
      update:{},
      create: {
        value: "MEDICAMENTS",
        important_threshold: 1,
        critical_threshold: 3,
        icone: "/publics/assets",
        items: {
          create: [
            {value: "Non utilisation  du pilulier"},
            {value: "Mauvaise utilisation  du pilulier"},
            {value: "Auto-medication "},
            {value: "Traitement supplementaire pour episode aigu ou sortie d'hopital"},
            {value: "Plainte par rapport aux medicaments (forme, etc..)"},
            {value: "Stockage de medicaments, medicaments perimés, "},
          ]
        },
      }
    }),
    await prisma.category.upsert({
      where: {id:3},
      update:{},
      create: {
        value: "SOUFRANCE PHYSIQUE",
        important_threshold: 1,
        critical_threshold: 3,
        icone: "/publics/assets",
        items: {
          create: [
            {value: "Trouble de l'equilibre et de la marche"},
            {value: "Ne sort plus"},
            {value: "Surconsomation Alcool et/ou produit nocifs"},
            {value: "Refus d'aide technique (deambulateur, lunette, …)"},
            {value: "Equipement inadapté (canne, lunette, chaussure..)"},
            {value: "Logement inadapté et/ou mal entretenu"},
          ]
        },
      }
    }),
    await prisma.category.upsert({
      where: {id:4},
      update:{},
      create: {
        value: "CHANGEMENT DE COMPORTEMENT",
        important_threshold: 1,
        critical_threshold: 3,
        icone: "/publics/assets",
        items: {
          create: [
            {value: "Repli sur soi / desinvestissement"},
            {value: "Trouble d'humeur (aggressivité, tristesse, envie de mourir..)"},
            {value: "Evenement important (date anniversaire, deces d'un proche,..)"},
            {value: "Deambulation"},
            {value: "Animal de compagnie delaissé"},
          ]
        },
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
