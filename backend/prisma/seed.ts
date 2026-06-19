const wilayas = [
  { code: 1, name: "Adrar", slug: "adrar" },
  { code: 2, name: "Chlef", slug: "chlef" },
  { code: 3, name: "Laghouat", slug: "laghouat" },
  { code: 4, name: "Oum El Bouaghi", slug: "oum-el-bouaghi" },
  { code: 5, name: "Batna", slug: "batna" },
  { code: 6, name: "Béjaïa", slug: "bejaia" },
  { code: 7, name: "Biskra", slug: "biskra" },
  { code: 8, name: "Béchar", slug: "bechar" },
  { code: 9, name: "Blida", slug: "blida" },
  { code: 10, name: "Bouira", slug: "bouira" },
  { code: 11, name: "Tamanrasset", slug: "tamanrasset" },
  { code: 12, name: "Tébessa", slug: "tebessa" },
  { code: 13, name: "Tlemcen", slug: "tlemcen" },
  { code: 14, name: "Tiaret", slug: "tiaret" },
  { code: 15, name: "Tizi Ouzou", slug: "tizi-ouzou" },
  { code: 16, name: "Algiers", slug: "algiers" },
  { code: 17, name: "Djelfa", slug: "djelfa" },
  { code: 18, name: "Jijel", slug: "jijel" },
  { code: 19, name: "Sétif", slug: "setif" },
  { code: 20, name: "Saïda", slug: "saida" },
  { code: 21, name: "Skikda", slug: "skikda" },
  { code: 22, name: "Sidi Bel Abbès", slug: "sidi-bel-abbes" },
  { code: 23, name: "Annaba", slug: "annaba" },
  { code: 24, name: "Guelma", slug: "guelma" },
  { code: 25, name: "Constantine", slug: "constantine" },
  { code: 26, name: "Médéa", slug: "medea" },
  { code: 27, name: "Mostaganem", slug: "mostaganem" },
  { code: 28, name: "M'Sila", slug: "msila" },
  { code: 29, name: "Mascara", slug: "mascara" },
  { code: 30, name: "Ouargla", slug: "ouargla" },
  { code: 31, name: "Oran", slug: "oran" },
  { code: 32, name: "El Bayadh", slug: "el-bayadh" },
  { code: 33, name: "Illizi", slug: "illizi" },
  { code: 34, name: "Bordj Bou Arréridj", slug: "bordj-bou-arreridj" },
  { code: 35, name: "Boumerdès", slug: "boumerdes" },
  { code: 36, name: "El Tarf", slug: "el-tarf" },
  { code: 37, name: "Tindouf", slug: "tindouf" },
  { code: 38, name: "Tissemsilt", slug: "tissemsilt" },
  { code: 39, name: "El Oued", slug: "el-oued" },
  { code: 40, name: "Khenchela", slug: "khenchela" },
  { code: 41, name: "Souk Ahras", slug: "souk-ahras" },
  { code: 42, name: "Tipaza", slug: "tipaza" },
  { code: 43, name: "Mila", slug: "mila" },
  { code: 44, name: "Aïn Defla", slug: "ain-defla" },
  { code: 45, name: "Naâma", slug: "naama" },
  { code: 46, name: "Aïn Témouchent", slug: "ain-temouchent" },
  { code: 47, name: "Ghardaïa", slug: "ghardaia" },
  { code: 48, name: "Relizane", slug: "relizane" },
  { code: 49, name: "El M'Ghair", slug: "el-mghair" },
  { code: 50, name: "El Meniaa", slug: "el-meniaa" },
  { code: 51, name: "Ouled Djellal", slug: "ouled-djellal" },
  { code: 52, name: "Bordj Baji Mokhtar", slug: "bordj-baji-mokhtar" },
  { code: 53, name: "Béni Abbès", slug: "beni-abbes" },
  { code: 54, name: "Timimoun", slug: "timimoun" },
  { code: 55, name: "Touggourt", slug: "touggourt" },
  { code: 56, name: "Djanet", slug: "djanet" },
  { code: 57, name: "In Salah", slug: "in-salah" },
  { code: 58, name: "In Guezzam", slug: "in-guezzam" },
  { code: 59, name: "Megaer", slug: "megaer" },
  { code: 60, name: "Damous", slug: "damous" },
  { code: 61, name: "Bougtob", slug: "bougtob" },
  { code: 62, name: "Cherchell", slug: "cherchell" },
  { code: 63, name: "Ghriss", slug: "ghriss" },
  { code: 64, name: "Ain Sefra", slug: "ain-sefra" },
  { code: 65, name: "M'daourouch", slug: "mdaourouch" },
  { code: 66, name: "Raïs Hamidou", slug: "rais-hamidou" },
  { code: 67, name: "Mesra", slug: "mesra" },
  { code: 68, name: "Aflou", slug: "aflou" },
  { code: 69, name: "Tigzirt", slug: "tigzirt" }
];
const skills = [
  // Core Engineering Sectors
  { name: "Frontend Development", slug: "frontend" },
  { name: "Backend Development", slug: "backend" },
  { name: "Fullstack Development", slug: "fullstack" },
  { name: "Mobile Development", slug: "mobile" },
  { name: "DevOps & Infrastructure", slug: "devops" },
  { name: "Data Analysis & AI", slug: "data-ai" },
  { name: "Cybersecurity", slug: "cybersecurity" },
  { name: "UI/UX Design", slug: "ui-ux" },

  // Languages & Primary Runtimes
  { name: "TypeScript", slug: "typescript" },
  { name: "JavaScript", slug: "javascript" },
  { name: "Python", slug: "python" },
  { name: "Go", slug: "go" },
  { name: "PHP", slug: "php" },
  { name: "Java", slug: "java" },

  // Frameworks & Libraries
  { name: "Next.js", slug: "next-js" },
  { name: "React", slug: "react" },
  { name: "Node.js", slug: "node-js" },
  { name: "Express", slug: "express" },
  { name: "Laravel", slug: "laravel" },
  { name: "Flutter", slug: "flutter" },
  { name: "React Native", slug: "react-native" },

  { name: "PostgreSQL", slug: "postgresql" },
  { name: "MySQL", slug: "mysql" },
  { name: "MongoDB", slug: "mongodb" }
];
import "dotenv/config";
import { prisma } from "../src/prisma.js";

async function main() {
  console.log("Seeding started...");

  // Seed Wilayas (Skipping duplicates if run twice)
  for (const w of wilayas) {
    await prisma.wilaya.upsert({
      where: { code: w.code },
      update: {},
      create: w,
    });
  }
  console.log(`Successfully seeded ${wilayas.length} Wilayas.`);

  // Seed Core Skills
  for (const s of skills) {
    await prisma.skill.upsert({
      where: { slug: s.slug },
      update: {},
      create: s,
    });
  }
  console.log(`Successfully seeded ${skills.length} Core Tech Skills.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });