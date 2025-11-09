import TypingText from "@/components/ui/shadcn-io/typing-text";

export const WelcomePage = () => {
	return (
		<TypingText
			text={[
				"Beautiful components for React",
				"Built with shadcn/ui",
				"Ship faster than ever!",
			]}
			className="w-full hyphens-auto text-left font-bold text-4xl"
			cursorCharacter="|"
			pauseDuration={1500}
			loop={false}
			showCursor={true}
			typingSpeed={75}
			variableSpeed={{ min: 50, max: 120 }}
		/>
	);
};
