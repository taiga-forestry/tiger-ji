import Image from "next/image";
import { ValidLink, linksMap, projectsSrcMap } from "./types";

interface MainProjectProps {
  title: string
  description: string
  src: keyof typeof projectsSrcMap
  tools: string[]
  links: Partial<Record<ValidLink, string>>
}

export default function MainProject({
  title, description, src, tools, links,
}: MainProjectProps) {
  return (
    <div className="relative l-column gap-[100px] sm:gap-[200px] p-24 main-project">
      <Image className="absolute top-0 left-0 w-full h-full rounded-xl object-cover object-top" src={projectsSrcMap[src].hovered} alt={`Image for featured project ${title}`} />
      <Image className="absolute top-0 left-0 w-full h-full rounded-xl object-cover object-top main-project-img" src={projectsSrcMap[src].normal} alt={`Image for featured project ${title}`} />

      <figcaption className="z-10">
        <h1 className="text-20">
          { title }
        </h1>
        <p className="text-14">
          { description }
        </p>
      </figcaption>

      <div className="row justify-between gap-16 items-center z-10">
        <p className="text-14">
          { tools.join(", ") }
        </p>

        <div className="row gap-8">
          { links && Object.entries(links).map(([key, url]) => (
            <a href={url} target="_blank" className="flex text-24" key={key}>
              <i className={`${linksMap[key as ValidLink].icon} hover-darken h-full w-full`} aria-label="link to my github" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
