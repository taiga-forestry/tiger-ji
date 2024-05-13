import { ValidLink, linksMap } from "./types";

interface MainProjectProps {
  title: string
  description: string
  src: string
  tools: string[]
  links: Partial<Record<ValidLink, string>>
}

export default function MainProject({
  title, description, src, tools, links,
}: MainProjectProps) {
  return (
    <div className={`relative l-column gap-[100px] sm:gap-[200px] p-24 rounded-xl bg-${src}`}>
      {/* THIS DIV DOES NOTHING -- it is used to preload the hovered image to prevent glitches */}
      <span className="absolute w-full h-full top-0 left-0" style={{ background: `url(../../../public/bg-${src}-hover)` }} />

      <figcaption>
        <h1 className="text-20">
          { title }
        </h1>
        <p className="text-14">
          { description }
        </p>
      </figcaption>

      <div className="row justify-between gap-16 items-center">
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
