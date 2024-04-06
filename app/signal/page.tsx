import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import CategoryCard from "./_components/CategoryCard";
/**
export default function Signal() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <p> hello from signal </p>
      <CategoryCard value="Nutrition" id={1} />
    </div>
  );
}
 */
const projects = [
  {
    name: "Nutrition",
    initials: "N",
    href: "#",
    bgColor: "bg-pink-600",
  },
  {
    name: "Médicaments",
    initials: "CD",
    href: "#",
    bgColor: "bg-purple-600",
  },
  {
    name: "Chûte",
    initials: "T",
    href: "#",
    bgColor: "bg-yellow-500",
  },
  {
    name: "Souffrance Psychique",
    initials: "RC",
    href: "#",
    bgColor: "bg-green-500",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-sm font-medium text-gray-500">
        Sélectionner une catégorie
      </h2>
      <ul
        role="list"
        className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
      >
        {projects.map((project) => (
          <li
            key={project.name}
            className="col-span-1 flex rounded-md shadow-sm"
          >
            <div
              className={classNames(
                project.bgColor,
                "flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white"
              )}
            >
              {project.initials}
            </div>
            <div className="flex flex-1 items-center justify-between h-16 truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
              <div className="flex-1 truncate px-4 py-2 text-sm">
                <a
                  href={project.href}
                  className="font-medium text-gray-900 hover:text-gray-600"
                >
                  {project.name}
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
