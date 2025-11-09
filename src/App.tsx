import { useState } from "react";
import TypingText from "@/components/ui/shadcn-io/typing-text";

const App = () => {
	const [count, setCount] = useState(0);

	return (
		<main className="flex h-dvh w-screen items-center justify-center overflow-y-auto overflow-x-hidden bg-background px-4 py-6 text-foreground">
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
		</main>
	);
};

export default App;
