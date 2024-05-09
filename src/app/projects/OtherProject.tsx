import { ValidLink, linksMap } from "./types";

interface OtherProjectProps {
  title: string
  description: string
  tools: string[]
  links: Partial<Record<ValidLink, string>>
}

export default function OtherProject({
  title, description, tools, links,
}: OtherProjectProps) {
  return (
    <div className="p-24 hover-fill grid grid-rows-[auto_auto_1fr_auto]">
      <h1 className="text-20">
        { title }
      </h1>
      <p className="text-14">
        { description }
      </p>
      <div />

      <div className="row mt-16 justify-between items-center gap-20">
        <p className="text-14 opacity-50">
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