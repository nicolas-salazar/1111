import { useState } from "react";
import TypingText from "@/components/ui/shadcn-io/typing-text";

const App = () => {
	const [count, setCount] = useState(0);

	return (
		<main className="flex h-dvh w-screen items-center justify-center bg-background text-foreground px-8 py-6 overflow-x-hidden overflow-y-auto">
			<TypingText
				text={[
					"Beautiful components for React",
					"Built with shadcn/ui",
					"Ship faster than ever!",
				]}
				className="text-4xl font-bold"
				cursorCharacter="|"
				pauseDuration={1500}
				loop={false}
				showCursor={true}
				typingSpeed={75}
				variableSpeed={{ min: 50, max: 120 }}
			/>
		</main>
	);
};

export default App;
