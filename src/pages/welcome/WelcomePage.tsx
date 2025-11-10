import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import TypingText from "@/components/ui/shadcn-io/typing-text";
import { WELCOME_SENTENCES } from "@/pages/welcome/welcome-sentences";

export const WelcomePage = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const scrollInterval = useRef<ReturnType<typeof setInterval> | null>(null);

	const [lastItemToBeShownIndex, setLastItemToBeShownIndex] = useState(0);

	useEffect(() => {
		scrollInterval.current = setInterval(() => {
			containerRef.current?.scrollTo({
				behavior: "smooth",
				top: containerRef.current.scrollHeight,
			});
		}, 100);

		return () => {
			if (scrollInterval.current) {
				clearInterval(scrollInterval.current);
			}
		};
	}, []);

	return (
		<div
			className="no-scrollbar flex w-full flex-1 flex-col gap-4 overflow-y-auto"
			ref={containerRef}
		>
			{WELCOME_SENTENCES.slice(0, lastItemToBeShownIndex + 1).map(
				(text, index) => (
					<TypingText
						className={twMerge(
							"w-full hyphens-auto text-left font-600 text-l",
							index === 0 || index === WELCOME_SENTENCES.length - 1
								? "font-bold"
								: "",
						)}
						cursorCharacter="|"
						initialDelay={1500}
						key={`welcome.text.${text}`}
						loop={false}
						showCursor={index === lastItemToBeShownIndex}
						text={text}
						variableSpeed={{ min: 45, max: 60 }}
						onSentenceComplete={() => {
							if (index < WELCOME_SENTENCES.length - 1) {
								setTimeout(() => setLastItemToBeShownIndex(index + 1), 0);
							} else {
								if (scrollInterval.current) {
									clearInterval(scrollInterval.current);
								}
							}
						}}
					/>
				),
			)}
		</div>
	);
};
