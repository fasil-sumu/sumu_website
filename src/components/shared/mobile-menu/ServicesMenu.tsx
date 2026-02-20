import Link from "next/link";

const ServicesMenu = () => {
  return (
    <li>
      <Link
        href="/coming-soon"
        className="text-tagline-1 text-secondary/60 dark:text-accent/60 border-stroke-4 dark:border-stroke-6 
                   block w-full border-b py-3 text-left font-normal transition-all duration-200 hover:text-brand"
      >
        Services
      </Link>
    </li>
  );
};

export default ServicesMenu;
