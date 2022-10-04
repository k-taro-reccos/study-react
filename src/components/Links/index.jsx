import classes from "src/components/Links/Links.module.css";

const ITEMS = [
  {
    href: "https://nextjs.org/docs",
    title: "Documentation →",
    description: " Find in-depth information about Next.js features and API.",
  },
  {
    href: "https://nextjs.org/learn",
    title: "Learn →",
    description: " Learn about Next.js in an interactive course with quizzes!",
  },
  {
    href: "https://github.com/vercel/next.js/tree/canary/examples",
    title: "Examples →",
    description: " Find in-depth information about Next.js features and API.",
  },
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Deploy \u2192",
    description:
      "Instantly deploy your Next.js site to a public URL with Vercel.",
  },
];

export function Links() {
  return (
    <div className={classes.grid}>
      {ITEMS.map((item) => (
        <a key={item.href} href={item.href} className={classes.card}>
          <h2 className={classes.title}>{item.title}</h2>
          <p className={classes.description}>{item.description}</p>
        </a>
      ))}
    </div>
  );
}
