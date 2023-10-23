interface ToolProps {
	text: string;
}

export const Tool = ({ text }: ToolProps) => {
	return <span className="rounded-md font-thin border border-sky-900 tracking-tight px-2 py-1 text-center text-sky-50">{text}</span>;
};
