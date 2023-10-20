import React from 'react';

// Project banner imports
import vrcolorsBanner from '../assets/images/banners/vrcolors.png';
import alleyBanner from '../assets/images/banners/theAlley.png';
import kareBanner from '../assets/images/banners/KAREproject.png';

import { Skill } from '../components/Skill';

export const Home = () => {
	return (
		<div className="text-white tracking-wide bg-slate-950">
			{/* Hero Banner */}
			<div className="from-neutral-950 to-slate-950 bg-gradient-to-b relative">
				<div className="container mx-auto min-h-screen flex flex-1 flex-col justify-center items-start">
					<div className="text-left">
						<h1 className="text-6xl tracking-wide font-light text-white filter brightness-200">
							Hi, I'm <span className="text-teal-400">Logan</span>.
						</h1>
						<h2 className="text-3xl font-light mt-8">A software engineer by trade, a designer at heart.</h2>
						<div className="flex flex-row gap-x-6">
							<a
								href="#latest-works"
								className="mt-8 text-2xl font-light border-slate-800 border-2 hover:border-slate-600 hover:bg-slate-800 transition group rounded-md px-4 py-3 flex items-center text-center w-fit">
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
							</a>
							<a
								href="https://drive.google.com/file/d/1KxCVNtJlw7PyXjL6gLTpgz68qXwWMvx4/view"
								className="mt-8 text-2xl font-light border-slate-800 border-2 hover:border-slate-600 hover:bg-slate-800 transition group rounded-md px-4 py-3 flex items-center text-center w-fit">
								<span>See my résumé</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="group-hover:scale-125 translate-y-0.5 transition duration-200 ml-3 w-5 h-5">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
									/>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* --- About Me Section --- */}
			<div id="about-me" className="container mx-auto border-t border-blue-950" />
			<div className="container mx-auto py-8 flex flex-1 flex-col justify-center items-center">
				{/* Header */}
				<h2 className="text-5xl tracking-wide font-light text-white">About Me</h2>

				<div className="mt-16 grid grid-cols-12 px-16 relative">
					{/* Portrait */}
					<div className="col-span-4 col-start-1 row-span-full relative mb-3">
						<div className="absolute h-full scale-x-105 bg-teal-600 rounded-lg -top-4 left-0 w-full" />
						{/* <div className="absolute h-full bg-slate-950 rounded-md scale-x-[1.025] -top-[0.5rem] left-0 w-full" /> */}
						<img src="https://i.imgur.com/OTnE1B5.jpeg" alt="portrait" className="rounded-lg object-cover filter brightness-90" />
					</div>
					{/* Blurb */}
					<div className="col-start-6 col-end-13 row-span-full flex flex-col flex-1 justify-center gap-y-6">
						<p className="prose text-white text-lg font-thin">
							I graduated from Central Washington University with a <span className="text-teal-200 font-normal">Bachelor of Science in computer science</span>{' '}
							in 2023. I am currently seeking employment but enjoying my time building projects until that day comes.
						</p>
						<p className="prose text-white text-lg font-thin">
							I first set hands on a keyboard at five years old in 2006, although it was much more mashing stubby fingers against it than typing. My father
							worked as a network engineer, so it was only natural I'd be taught early how to use a computer. Ever since, I've been fascinated with them
							throughout my schooling and beyond.
						</p>
						<p className="prose text-white text-lg font-thin">
							Outside of programming, my favorite past time is reading. You can find what I'm currently reading on my{' '}
							<a href="https://app.thestorygraph.com/profile/edelstein" className="text-amber-400 underline">
								storygraph profile
							</a>
							. When among friends, we play video games like we have been since elementary school.
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

			{/* --- Latest Works Section --- */}
			<div id="latest-works" className="container mx-auto border-t border-blue-950" />
			<div className="container mx-auto py-8 flex flex-1 flex-col justify-center items-center">
				<h2 className="text-5xl tracking-wide font-light text-white text-center">Latest Works</h2>

				<div className="px-16">
					{/* VRColors Card */}
					<div className="grid grid-cols-10 mt-16 group">
						<div className="col-span-6 col-start-1 row-span-full self-center rounded-md relative">
							<div className="absolute w-full h-full top-0 left-0 from-blue-950 to-teal-950 opacity-50 bg-gradient-to-br transition group-hover:opacity-10 delay-75 duration-500 rounded-md"></div>
							<img className="rounded-md object-cover" src={vrcolorsBanner} alt="VRColors Banner" />
						</div>
						<div className="col-span-6 col-start-5 row-span-full self-center rounded-md bg-gradient-to-br from-neutral-950 to-gray-950 p-8 text-white z-10 flex flex-col gap-y-2">
							{/* Title */}
							<h1 className="font-thin text-4xl uppercase tracking-wide text-teal-400">VRColors</h1>
							{/* Description */}
							<p className="mt-2 prose">
								A theme creation and sharing website for VRChat. Created to solve a problem within the community, I learned how to build a complex web
								application using <span className="text-teal-200 font-semibold">modern React principles</span>. A significant focus of the app was user
								experience. This was developed by <span className="text-teal-200 font-semibold">conducting user interviews</span> with several people, adjusting
								the design and clarifying features of the website based on the feedback receieved.
							</p>
							{/* Skills */}
							<div className="mt-4 flex flex-row gap-x-3">
								<span className="rounded-md bg-teal-900 px-2 py-1 text-center font-semibold text-teal-50">React</span>
								<span className="rounded-md bg-teal-900 px-2 py-1 text-center font-semibold text-teal-50">Tailwind CSS</span>
							</div>
							{/* Links */}
							<div>
								<a href="https://warm-empanada-0fb072.netlify.app/" className="mt-6 inline-flex items-center mr-4 group/link hover:text-amber-400 transition">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline mr-2">
										<path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
										<path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
									</svg>
									<span className="group-hover/link:underline">Live Site</span>
								</a>
								<a href="https://github.com/loganhalverson/vrcolors" className="mt-6 inline-flex items-center mr-4 group/link hover:text-amber-400 transition">
									<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 inline mr-2" viewBox="0 0 24 24">
										<path
											fill="currentColor"
											d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
										/>
									</svg>
									<span className="group-hover/link:underline">Source Code</span>
								</a>
							</div>
						</div>
					</div>

					{/* KARE Card */}
					<div className="grid grid-cols-10 mt-16 group">
						<div className="col-span-6 col-end-11 row-span-full self-center rounded-md relative">
							<div className="absolute w-full h-full top-0 left-0 from-blue-950 to-teal-950 opacity-50 bg-gradient-to-br transition group-hover:opacity-10 delay-75 duration-500 rounded-md"></div>
							<img className="rounded-md object-cover" src={kareBanner} alt="KARE Banner" />
						</div>
						<div className="col-span-6 col-start-1 row-span-full self-center rounded-md bg-gradient-to-br from-neutral-950 to-gray-950 p-8 text-white z-10 flex flex-col gap-y-2">
							{/* Title */}
							<h1 className="font-thin text-4xl uppercase tracking-wide text-teal-400">KARE Project</h1>
							{/* Description */}
							<p className="mt-2 prose">
								Medical software developed by a team of <span className="font-semibold text-teal-200">nine developers</span> for my college capstone course. The
								purpose of KARE is to help parents of medically complex children care for them in a domestic environment. I was responsible for the{' '}
								<span className="font-semibold text-teal-200">mobile development and design</span> of the software, along with gathering and clarifying
								requirements from the client. I acted as the <span className="font-semibold text-teal-200">scrum master</span> for the mobile team, ensuring our
								development went smoothly.
							</p>
							{/* Skills */}
							<div className="mt-4 flex flex-row gap-x-3">
								<span className="rounded-md bg-teal-900 px-2 py-1 text-center font-semibold text-teal-50">React Native</span>
								<span className="rounded-md bg-teal-900 px-2 py-1 text-center font-semibold text-teal-50">Expo GO</span>
								<span className="rounded-md bg-teal-900 px-2 py-1 text-center font-semibold text-teal-50">LAMP Stack</span>
							</div>
							{/* Links */}
							<a
								href="https://docs.google.com/presentation/d/1XarBl_QDAfMsQfs9jbCJ5wgOAwlmfGGLSa14Xk8ef8A/edit#slide=id.g24bd759f86a_1_363"
								className="mt-6 inline-flex items-center mr-4 group/link hover:text-amber-400 transition">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline mr-2">
									<path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
									<path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
								</svg>
								<span className="group-hover/link:underline">Presentation</span>
							</a>
						</div>
					</div>

					{/* The Alley Card */}
					<div className="grid grid-cols-10 mt-16 group">
						<div className="col-span-6 col-start-1 row-span-full self-center rounded-md relative">
							<div className="absolute w-full h-full top-0 left-0 from-blue-950 to-teal-950 opacity-50 bg-gradient-to-br transition group-hover:opacity-10 delay-75 duration-500 rounded-md"></div>

							<img className="rounded-md object-cover" src={alleyBanner} alt="The Alley Banner" />
						</div>
						<div className="col-span-6 col-start-5 row-span-full self-center rounded-md bg-gradient-to-br from-neutral-950 to-gray-950 p-8 text-white z-10 flex flex-col gap-y-2">
							{/* Title */}
							<h1 className="font-thin text-4xl uppercase tracking-wide text-teal-400">The Alley</h1>
							{/* Description */}
							<p className="mt-2 prose">
								A simple website for a local music venue. Developed as my first project with <span className="text-teal-200 font-semibold">Tailwind</span>, it
								was a way for me to learn the library and create something for a place I loved.
							</p>
							{/* Skills */}
							<div className="mt-4 flex flex-row gap-x-3">
								<span className="rounded-md bg-teal-900 px-2 py-1 text-center font-semibold text-teal-50">HTML</span>
								<span className="rounded-md bg-teal-900 px-2 py-1 text-center font-semibold text-teal-50">Tailwind CSS</span>
							</div>
							{/* Links */}
							<div>
								<a href="https://regal-cactus-f42c40.netlify.app/" className="mt-6 inline-flex items-center mr-4 group/link hover:text-amber-400 transition">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline mr-2">
										<path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
										<path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
									</svg>
									<span className="group-hover/link:underline">Live Site</span>
								</a>
								<a href="https://github.com/loganhalverson/the-alley" className="mt-6 inline-flex items-center mr-4 group/link hover:text-amber-400 transition">
									<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 inline mr-2" viewBox="0 0 24 24">
										<path
											fill="currentColor"
											d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
										/>
									</svg>
									<span className="group-hover/link:underline">Source Code</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* --- Contact Section --- */}
			<div id="contact" className="container mx-auto border-t border-blue-950" />
			<div className="container mx-auto py-8">
				<div className="min-h-[80vh]"></div>
			</div>

			<footer className="flex justify-center items-center w-full">
				<a
					href="https://github.com/loganhalverson/portfolio"
					className="cursor-pointer hover:text-amber-400 tracking-wide py-4 text-neutral-400 font-mono text-sm text-center transition">
					<p>
						Designed & Built by Logan Halverson <br /> Source Code available on GitHub
					</p>
				</a>
			</footer>
		</div>
	);
};
