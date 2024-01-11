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
			<a href={link.href} className="mt-2 lg:mt-6 inline-flex items-center mr-4 group/link hover:text-amber-400 transition">
				{link.icon}
				<span className="group-hover/link:underline">{link.label}</span>
			</a>
		);
	});

	const toolElements = tools.map((tool) => {
		return <Tool text={tool} />;
	});

	return (
		<div className="flex flex-col lg:grid grid-cols-10 mt-16 mx-4">
			<div className={`col-span-6 ${flip ? 'col-start-1' : 'col-end-11'} row-span-full self-center rounded-md relative`}>
				<a href={links[0].href}>
					<div className="absolute opacity-0 w-full h-full top-0 left-0 from-blue-950 to-sky-950 lg:opacity-30 bg-gradient-to-br transition hover:opacity-10 duration-500 rounded-md rounded-b-none lg:rounded-b-md" />
					<img
						className="rounded-b-none rounded-md lg:rounded-b-md object-cover border border-slate-700 border-b-0 md:border-0"
						src={banner}
						alt={`${title} banner`}
					/>
				</a>
			</div>
			<div
				className={`col-span-6 row-span-full self-center rounded-md rounded-t-none lg:rounded-t-md  ${
					flip ? 'col-start-5' : 'col-start-1'
				} bg-gradient-to-br from-slate-950 to-gray-950 border border-t-0 md:border-t rounded-md border-slate-700 p-8 z-10 flex flex-col gap-y-2 
				`}>
				{/* Title */}
				<h3 className="font-thin text-4xl uppercase tracking-wide text-sky-400">{title}</h3>
				{/* Description */}
				<p className="prose text-sm lg:text-md mt-3">{description}</p>
				{/* Tools */}
				<div>
					<p className="mt-2 font-thin text-lg uppercase tracking-wide text-sky-500">Tools Used</p>
					<div className=" mt-2 flex flex-row gap-x-3 gap-y-3 flex-wrap">{toolElements}</div>
				</div>
				{/* Links */}
				<div>{linkElements}</div>
			</div>
		</div>
	);
};
