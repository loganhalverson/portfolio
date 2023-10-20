interface ToolProps {
	text: string;
}

export const Tool = ({ text }: ToolProps) => {
	return <span className="rounded-md border border-teal-900 tracking-tight px-2 py-1 text-center text-teal-50">{text}</span>;
};
