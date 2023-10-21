import { Tool } from './Tool';

interface LinkItems {
	label: string;
	href: string;
	icon: JSX.Element;
}
interface LinksArrayOptions extends Array<LinkItems> {}

interface ProjectData {
	data: {
		title: string;
		description: JSX.Element;
		tools: string[];
		links: LinksArrayOptions;
		banner: string;
	};
}

// This function header seems... awful. Maybe this is just how TypeScript is.
/*
	title: The name of the project.
	description: The blurb describing the project with emphasized sections to highlight what I learned from it.
	tools: Tools used to build the project.
	links: An array of links leading to more information on the project.
	banner: An image element representing the project.
	flip: An optional boolean that flips the card to the right side.
*/
export const Project = ({ data: { title, description, tools, links, banner }, flip }: ProjectData & { flip?: boolean }) => {
	// Render each link in links
	const linkElements = links.map((link) => {
		return (
			<a href={link.href} className="mt-6 inline-flex items-center mr-4 group/link hover:text-amber-400 transition">
				{link.icon}
				<span className="group-hover/link:underline">{link.label}</span>
			</a>
		);
	});

	const toolElements = tools.map((tool) => {
		return <Tool text={tool} />;
	});

	return (
		<div className="grid grid-cols-10 mt-16">
			<div className={`col-span-6 ${flip ? 'col-start-1' : 'col-end-11'} row-span-full self-center rounded-md relative`}>
				<a href={links[0].href}>
					<div className="absolute w-full h-full top-0 left-0 from-blue-950 to-sky-950 opacity-50 bg-gradient-to-br transition hover:opacity-10 delay-75 duration-500 rounded-md" />
					<img className="rounded-md object-cover" src={banner} alt={`${title} banner`} />
				</a>
			</div>
			<div
				className={`col-span-6 row-span-full self-center rounded-md ${
					flip ? 'col-start-5' : 'col-start-1'
				} bg-gradient-to-br from-neutral-950 to-gray-950 p-8 z-10 flex flex-col gap-y-2 
				`}>
				{/* Title */}
				<h3 className="font-thin text-4xl uppercase tracking-wide text-sky-400">{title}</h3>
				{/* Description */}
				<p className="mt-2 prose">{description}</p>
				{/* Tools */}
				<p className="mt-4 font-thin text-lg uppercase tracking-wide text-sky-500">Tools Used</p>
				<div className="flex flex-row gap-x-3">{toolElements}</div>
				{/* Links */}
				<div>{linkElements}</div>
			</div>
		</div>
	);
};
