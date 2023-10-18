import React from 'react';
import { Skill } from '../components/Skill';

export const Home = () => {
	return (
		<div className="text-white tracking-wide bg-slate-950">
			{/* Hero Banner */}
			<div className="min-h-screen from-neutral-950 to-slate-950 bg-gradient-to-b">
				<div className="container mx-auto min-h-screen flex flex-1 flex-col justify-center items-start">
					<div className="text-left">
						<h1 className="text-6xl tracking-wide font-light text-white filter brightness-200">
							Hi, I'm <span className="text-teal-400">Logan</span>.
						</h1>
						<h2 className="text-3xl font-light mt-8">A software engineer by trade, a designer at heart.</h2>
						<button className="mt-8 text-2xl font-light border-slate-800 border-2 hover:border-slate-600 hover:bg-slate-800 transition group rounded-md px-4 py-3 flex items-center text-center">
							<span>See my work</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="group-hover:rotate-45 translate-y-0.5 transition duration-200 ml-3 w-5 h-5">
								<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
							</svg>
						</button>
					</div>
				</div>
			</div>

			{/* Separator Hero-About */}
			<div className="container mx-auto border-t border-blue-950" />

			<div className="container mx-auto py-8 flex flex-1 flex-col justify-center items-center">
				{/* Header */}
				<h2 className="text-5xl tracking-wide font-light text-white">About Me</h2>

				<div className="mt-16 grid grid-cols-12 px-16 relative">
					{/* Portrait */}
					<div className="col-span-4 col-start-1 row-span-full relative">
						<div className="absolute h-full scale-x-105 bg-teal-600 rounded-lg -top-4 left-0 w-full" />
						{/* <div className="absolute h-full bg-slate-950 rounded-md scale-x-[1.025] -top-[0.5rem] left-0 w-full" /> */}
						<img src="https://i.imgur.com/OTnE1B5.jpeg" alt="portrait" className="rounded-lg object-cover filter brightness-90" />
					</div>
					{/* Blurb */}
					<div className="col-start-6 col-end-13 row-span-full flex flex-col flex-1 justify-center gap-y-6">
						<p className="prose text-white text-lg font-thin">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam impedit culpa distinctio voluptas, libero atque minus autem blanditiis quo maxime
							quae? Voluptas, rem. Doloremque aliquam voluptas architecto, sint accusamus provident.
						</p>
						<p className="prose text-white text-lg font-thin">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam impedit culpa distinctio voluptas, libero atque minus autem blanditiis quo maxime
							quae? Voluptas, rem. Doloremque aliquam voluptas architecto, sint accusamus provident.
						</p>
						<p className="prose text-white text-lg font-thin">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam impedit culpa distinctio voluptas, libero atque minus autem blanditiis quo maxime
							quae? Voluptas, rem. Doloremque aliquam voluptas architecto, sint accusamus provident.
						</p>

						{/* Skills Header */}
						<div className="flex items-center justify-center mt-4">
							<div className="w-1/5 bg-teal-400 h-0.5" />
							<p className="mx-4 text-3xl -translate-y-0.5">Skills</p>
							<div className="w-1/5 bg-teal-400 h-0.5" />
						</div>

						<div className="flex items-center justify-center gap-x-4 gap-y-2 flex-wrap">
							<Skill option="JavaScript" />
							<Skill option="React" />
							<Skill option="Tailwind" />
							<Skill option="Python" />
							<Skill option="Java" />
							<Skill option="TypeScript" />
							<Skill option="Figma" />
							<Skill option="Git" />
						</div>
					</div>
				</div>
			</div>

			{/* Separator About-Projects */}
			<div className="container mx-auto border-t border-blue-950" />
		</div>
	);
};
