import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { Button } from "@/components/ui/button";
import TypingText from "@/components/ui/shadcn-io/typing-text";
import { WELCOME_SENTENCES } from "@/pages/welcome/welcome-sentences";

export const HAS_VISITED_THE_WELCOME_PAGE_PERSISTENCE_KEY =
	"has-visited-the-welcome-page";

export const WelcomePage = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const scrollInterval = useRef<ReturnType<typeof setInterval> | null>(null);

	const [lastItemToBeShownIndex, setLastItemToBeShownIndex] = useState(0);
	const [showContinueButton, setShowContinueButton] = useState(false);

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

	useEffect(() => {
		localStorage.setItem(
			HAS_VISITED_THE_WELCOME_PAGE_PERSISTENCE_KEY,
			JSON.stringify(true),
		);
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
