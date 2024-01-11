// Project banner imports
import vrcolorsBanner from '../assets/images/banners/vrcolors.png';
import alleyBanner from '../assets/images/banners/theAlley.png';
import kareBanner from '../assets/images/banners/KAREproject.png';

import { Skill } from '../components/Skill';
import { Project } from '../components/Project';

import '../styles/waves.css';

const svgIconElements = {
	github: (
		<>
			<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 inline mr-2" viewBox="0 0 24 24">
				<path
					fill="currentColor"
					d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
				/>
			</svg>
		</>
	),
	chain: (
		<>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline mr-2">
				<path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
				<path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
			</svg>
		</>
	),
};

const kareData = {
	title: 'KARE Project',
	description: (
		<>
			Medical software developed by a team of <span className="font-semibold text-sky-300">nine developers</span> for my college capstone course. The purpose of
			KARE is to help parents of medically complex children care for them in a domestic environment. I was responsible for the{' '}
			<span className="font-semibold text-sky-300">mobile development and design</span> of the software, along with gathering and clarifying requirements from
			the client. I acted as the <span className="font-semibold text-sky-300">scrum master</span> for the mobile team, ensuring our development went smoothly.
		</>
	),
	tools: ['React Native', 'Expo GO', 'LAMP Stack'],
	links: [
		{
			label: 'Presentation',
			href: 'https://docs.google.com/presentation/d/1XarBl_QDAfMsQfs9jbCJ5wgOAwlmfGGLSa14Xk8ef8A/edit#slide=id.g24bd759f86a_1_363',
			icon: svgIconElements['chain'],
		},
	],
	banner: kareBanner,
};

const vrcolorsData = {
	title: 'VRColors',
	description: (
		<>
			A theme creation and sharing website for VRChat built using <span className="text-sky-300 font-semibold">modern React principles</span>. I created a cache
			system using <span className="text-sky-300 font-semibold">Cloudflare Workers</span> to reduce the generation time of thumbnails{' '}
			<span className="text-amber-300 font-semibold">from 1150ms to 50ms</span>. A significant focus of the app was user experience. This was developed by{' '}
			<span className="text-sky-300 font-semibold">conducting user interviews</span>, adjusting the design and clarifying features based on the feedback
			receieved.
		</>
	),
	tools: ['React', 'Tailwind CSS', 'Express', 'Cloudflare', 'Node.js'],
	links: [
		{
			label: 'Live Site',
			href: 'https://vrcolors.app',
			icon: svgIconElements['chain'],
		},
		{
			label: 'Source Code',
			href: 'https://github.com/loganhalverson/vrcolors',
			icon: svgIconElements['github'],
		},
	],
	banner: vrcolorsBanner,
};

const alleyData = {
	title: 'The Alley',
	description: (
		<>
			A simple website for a local music venue. Developed as my first project with <span className="text-sky-300 font-semibold">Tailwind</span>, it was a way
			for me to learn the library and create something for a place I loved.
		</>
	),
	tools: ['HTML5', 'Tailwind CSS'],
	links: [
		{
			label: 'Live Site',
			href: 'https://regal-cactus-f42c40.netlify.app/',
			icon: svgIconElements['chain'],
		},
		{
			label: 'Source Code',
			href: 'https://github.com/loganhalverson/the-alley',
			icon: svgIconElements['github'],
		},
	],
	banner: alleyBanner,
};

export const Home = () => {
	return (
		<div className="text-white tracking-wide bg-slate-950">
			{/* Hero Banner */}
			<div className="bg-[#070c1d] relative px-16 md:px-0">
				<div className="container mx-auto min-h-screen flex flex-1 flex-col justify-center items-center md:items-start ">
					<div className="text-center md:text-left mx-8 lg:mx-0">
						<h1 className="text-5xl md:text-6xl tracking-wide font-light text-white filter brightness-200">
							Hi, I'm <span className="text-sky-800">Logan.</span>
						</h1>
						<p className="text-2xl md:text-3xl font-light mt-4 md:mt-8">A software engineer by trade, a designer at heart.</p>

						{/* Desktop Buttons */}
						<div className="hidden md:flex mt-8 flex-row gap-x-6">
							<a
								href="#latest-works"
								className="text-2xl font-light border-slate-800 border-2 hover:border-slate-600 hover:bg-slate-800 transition group rounded-md px-4 py-3 flex items-center text-center w-fit">
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
								href="https://drive.google.com/file/d/1jRcYa85ZwD8UZ1EEztVpCCaKenRfCO9q/view?usp=sharing"
								className="text-2xl font-light border-slate-800 border-2 hover:border-slate-600 hover:bg-slate-800 transition group rounded-md px-4 py-3 flex items-center text-center w-fit">
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

						{/* Mobile Buttons */}
						<div className="flex justify-center md:hidden mt-8 flex-row gap-x-6">
							<a
								href="#latest-works"
								className="text-2xl font-light border-slate-800 border-2 hover:border-slate-600 hover:bg-slate-800 transition group rounded-md px-4 py-3 flex items-center text-center w-fit">
								<span>Projects</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="rotate-90 translate-y-0.5 transition group-hover:scale-125 duration-200 ml-3 w-5 h-5">
									<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
								</svg>
							</a>
							<a
								href="https://drive.google.com/file/d/1eAaKsS5tTSuqr_rWW2LmYzZiZRqOXkbG/view?usp=drive_link"
								className="text-2xl font-light border-slate-800 border-2 hover:border-slate-600 hover:bg-slate-800 transition group rounded-md px-4 py-3 flex items-center text-center w-fit">
								<span>Résumé</span>
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
				{/* Waves */}
				<div className="absolute bottom-0 left-0 w-full scale-y-105">
					<svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
						<defs>
							<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
						</defs>
						<g className="parallax">
							<use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(2,6,23,0.7" />
							<use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(2,6,23,0.5)" />
							<use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(2,6,23,0.3)" />
							<use xlinkHref="#gentle-wave" x="48" y="7" fill="#020617" />
						</g>
					</svg>
				</div>
			</div>

			{/* --- About Me Section --- */}
			<div className="container mx-auto py-8 flex flex-1 flex-col justify-center items-center">
				{/* Header */}
				<h2 className="text-5xl tracking-wide font-light text-white text-center my-2">About Me</h2>

				{/* About Me */}
				<div className="flex flex-col text-center items-center lg:items-center lg:text-left justify-center row-span-full lg:grid grid-cols-12 px-16 relative mt-16">
					{/* Portrait */}
					<div className="col-span-4 col-start-1 row-span-full relative mb-3 max-w-md">
						<div className="absolute h-full scale-x-105 border-sky-400 border-2 object-cover rounded-lg -top-4 left-0 right-0 bottom-0 w-full" />
						<img src="https://i.imgur.com/OTnE1B5.jpeg" alt="portrait" className="rounded-lg max-h-fit object-cover filter brightness-90" />
					</div>
					{/* Blurb */}
					<div className="col-start-6 col-end-13 row-span-full flex flex-col flex-1 justify-center mt-8 lg:mt-0 gap-y-6 lg:gap-y-8">
						<p className="prose text-white text-lg">
							I earned my <span className="text-sky-300 font-semibold">Bachelor of Science in computer science</span> from Central Washington University in
							2023, and am currently on the lookout for employment opportunities. In the meantime, I've been building cool projects (like this one!) and
							learning new skills.
						</p>
						<p className="prose text-white text-lg">
							I first set hands on a keyboard at five years old in 2006, although it was more like mashing stubby fingers against it than typing. With my father
							working as a network engineer, it was only natural that I grew up around computers. Ever since, I've been fascinated with them throughout my
							schooling and beyond.
						</p>
						<p className="prose text-white text-lg">
							Outside of programming, my favorite pastime is reading. You can find what I'm currently reading on my{' '}
							<a href="https://app.thestorygraph.com/profile/edelstein" className="hover:text-amber-400 font-normal underline">
								storygraph profile
							</a>
							. Other than that, I have the standard assortment of nerd hobbies: board games, video games, art, and hiking. The picture is one I took in the Hoh
							Rainforest.
						</p>

						{/* Skills Header */}
						<div className="flex items-center justify-center mt-4">
							<div className="w-1/5 bg-sky-400 h-0.5" />
							<p className="mx-4 text-3xl -translate-y-0.5">Skills</p>
							<div className="w-1/5 bg-sky-400 h-0.5" />
						</div>

						<div className="flex items-center justify-center gap-x-4 gap-y-2 flex-wrap">
							<Skill option="JavaScript" />
							<Skill option="React" />
							<Skill option="Tailwind" />
							<Skill option="Python" />
							<Skill option="Java" />
							<Skill option="TypeScript" />
							<Skill option="Figma" />
							<Skill option="Cloudflare" />
							<Skill option="Git" />
						</div>
					</div>
				</div>
			</div>

			{/* --- Latest Works Section --- */}
			<div id="latest-works" className="container lg:mx-auto border-t border-blue-950" />
			<div className="container mx-auto py-8 flex flex-1 flex-col justify-center items-center">
				<h2 className="text-5xl tracking-wide font-light text-white text-center my-2">Latest Works</h2>
				<div className="mx-auto">
					<Project data={vrcolorsData} flip />
					<Project data={kareData} />
					<Project data={alleyData} flip />
				</div>
			</div>

			{/* --- Contact Section --- */}
			<div id="contact" className="container lg:mx-auto border-t border-blue-950" />
			<div className="container mx-auto py-8">
				<div className="min-h-[60vh] flex justify-center items-center flex-row px-16 relative">
					<div className="flex h-full max-w-3xl py-8 items-center justify-center rounded-lg border-b-2 border-blue-950 bg-slate-950">
						<div className="flex items-center justify-center px-8">
							<div className="text-center lg:text-left w-full lg:w-2/3">
								<p className="text-5xl font-semibold text-sky-400">Let's talk!</p>
								<p className="text-lg mt-8">
									Send me an email and I'll get back to you within 24 hours. You can also connect with me on any of the platforms below.
								</p>

								{/* Desktop Socials */}
								<div className="hidden lg:flex flex-col items-start mt-8 lg:mt-4 gap-y-2">
									<a
										href="mailto:lhalverson2001@gmail.com"
										className="hover:text-amber-400 focus:text-amber-400 text-sm items-center flex flex-nowrap transition">
										<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 inline mr-3" viewBox="0 0 24 24">
											<path
												fill="currentColor"
												d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4Zm8-7l8-5V6l-8 5l-8-5v2l8 5Z"
											/>
										</svg>
										<span>lhalverson2001@gmail.com</span>
									</a>
									<a
										href="https://github.com/loganhalverson"
										className="hover:text-amber-400 focus:text-amber-400 text-sm transition flex flex-nowrap items-center">
										<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 inline mr-3" viewBox="0 0 24 24">
											<path
												fill="currentColor"
												d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
											/>
										</svg>
										<span>@loganhalverson</span>
									</a>
									<a
										href="https://www.linkedin.com/in/logan-halverson/"
										className="hover:text-amber-400 focus:text-amber-400 text-sm transition flex flex-nowrap items-center">
										<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 inline mr-3" viewBox="0 0 24 24">
											<path
												fill="currentColor"
												d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
											/>
										</svg>
										<span>Logan Halverson</span>
									</a>
								</div>

								{/* Mobile Socials */}
								<div className="flex flex-row lg:hidden items-center justify-center mt-8 gap-x-16">
									<a
										href="mailto:lhalverson2001@gmail.com"
										className="hover:text-amber-400 focus:text-amber-400 text-sm items-center flex flex-nowrap transition">
										<svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 inline" viewBox="0 0 24 24">
											<path
												fill="currentColor"
												d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4Zm8-7l8-5V6l-8 5l-8-5v2l8 5Z"
											/>
										</svg>
									</a>
									<a
										href="https://github.com/loganhalverson"
										className="hover:text-amber-400 focus:text-amber-400 text-sm transition flex flex-nowrap items-center">
										<svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 inline" viewBox="0 0 24 24">
											<path
												fill="currentColor"
												d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
											/>
										</svg>
									</a>
									<a
										href="https://www.linkedin.com/in/logan-halverson/"
										className="hover:text-amber-400 focus:text-amber-400 text-sm transition flex flex-nowrap items-center">
										<svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 inline" viewBox="0 0 24 24">
											<path
												fill="currentColor"
												d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
											/>
										</svg>
									</a>
								</div>
							</div>
							<div className="w-2/3 text-center hidden lg:flex justify-center">
								<svg xmlns="http://www.w3.org/2000/svg" className="w-4/6 text-white" viewBox="0 0 24 24">
									<path
										fill="currentColor"
										d="M17 22q-.425 0-.713-.288T16 21v-1.25q-.975-.325-1.75-.988t-1.225-1.587q-.2-.375 0-.75t.6-.55q.35-.15.7.025t.55.525q.4.725 1.1 1.15T17.5 18h3q.625 0 1.063.438T22 19.5V21q0 .425-.288.713T21 22h-4Zm2-5q-.825 0-1.413-.588T17 15q0-.825.588-1.413T19 13q.825 0 1.413.588T21 15q0 .825-.588 1.413T19 17Zm-1.925-9.95q-2.35.3-4.013 1.975t-1.987 4.025q-.05.425-.35.688T10 14q-.425 0-.713-.288t-.237-.687q.35-3.2 2.613-5.425t5.462-2.55q.375-.05.625.238T18 6q0 .4-.263.7t-.662.35Zm.15 4.05q-.775.2-1.35.762T15.1 13.2q-.1.35-.412.575T14 14q-.425 0-.7-.263t-.225-.612q.275-1.575 1.413-2.675T17.2 9.075q.35-.05.575.238T18 10q0 .375-.213.688t-.562.412ZM3 11q-.425 0-.713-.288T2 10V8.5q0-.625.438-1.063T3.5 7h3q.825 0 1.525-.425t1.1-1.15q.2-.35.55-.563t.725-.087q.425.125.65.475t.075.725Q10.7 7 9.875 7.7T8 8.75V10q0 .425-.288.713T7 11H3Zm2-5q-.825 0-1.413-.588T3 4q0-.825.588-1.413T5 2q.825 0 1.413.588T7 4q0 .825-.588 1.413T5 6Z"
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>
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
