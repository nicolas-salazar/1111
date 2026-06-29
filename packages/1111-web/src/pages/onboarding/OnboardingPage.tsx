import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { Button } from "@/components/ui/button";
import TypingText from "@/components/ui/shadcn-io/typing-text";
import { WELCOME_SENTENCES } from "@/pages/onboarding/welcome-sentences";

export const OnboardingPage = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const scrollInterval = useRef<ReturnType<typeof setInterval> | null>(null);

	const [lastItemToBeShownIndex, setLastItemToBeShownIndex] = useState(0);
	const [showContinueButton, setShowContinueButton] = useState(false);

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
						key={`onboarding.text.${text}`}
						loop={false}
						showCursor={index === lastItemToBeShownIndex}
						text={text}
						typingSpeed={45}
						onSentenceComplete={() => {
							if (index < WELCOME_SENTENCES.length - 1) {
								setTimeout(() => setLastItemToBeShownIndex(index + 1), 0);
							} else {
								setTimeout(() => {
									if (scrollInterval.current) {
										clearInterval(scrollInterval.current);
									}
								}, 500);
								setShowContinueButton(true);
							}
						}}
					/>
				),
			)}

			{showContinueButton && (
				<Link className="w-full" to="/home">
					<Button className="w-full">Hazme click</Button>
				</Link>
			)}
		</div>
	);
};
