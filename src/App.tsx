import { useState } from "react";
import TypingText from "@/components/ui/shadcn-io/typing-text";

const App = () => {
	const [count, setCount] = useState(0);

	return (
		<div className="flex h-svh w-screen items-center justify-center bg-black-100">
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
		</div>
	);
};

export default App;
