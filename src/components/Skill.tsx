import figmaIcon from '../assets/images/icons/icons8-figma-100.png';
import gitIcon from '../assets/images/icons/icons8-git-100.png';
import javaIcon from '../assets/images/icons/icons8-java-100.png';
import jsIcon from '../assets/images/icons/icons8-javascript-100.png';
import pythonIcon from '../assets/images/icons/icons8-python-100.png';
import reactIcon from '../assets/images/icons/icons8-react-native-100.png';
import tsIcon from '../assets/images/icons/icons8-typescript-100.png';
import twIcon from '../assets/images/icons/icons8-tailwind-css-100.png';

type SkillOption = 'Git' | 'Python' | 'Figma' | 'Java' | 'JavaScript' | 'React' | 'TypeScript' | 'Tailwind';
interface SkillProps {
	option: SkillOption;
}

export const Skill = ({ option }: SkillProps) => {
	let icon: string;
	switch (option) {
		case 'Git':
			icon = gitIcon;
			break;
		case 'Python':
			icon = pythonIcon;
			break;
		case 'Figma':
			icon = figmaIcon;
			break;
		case 'Java':
			icon = javaIcon;
			break;
		case 'JavaScript':
			icon = jsIcon;
			break;
		case 'React':
			icon = reactIcon;
			break;
		case 'TypeScript':
			icon = tsIcon;
			break;
		case 'Tailwind':
			icon = twIcon;
			break;
	}

	return (
		<div className="relative group">
			<span className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-4 rounded-lg py-1 px-2 text-xl text-center text-gray-50 transition scale-0 group-hover:translate-y-12 group-hover:scale-100">
				{option}
			</span>
			<img src={icon} alt={option} className="h-16 w-16 group-hover:scale-110 transition" />
		</div>
	);
};
