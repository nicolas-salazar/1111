import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { LoadableImage } from "@/components/ui/loadable-image";
import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";
import TypingText from "@/components/ui/shadcn-io/typing-text";

export const EntryCard = ({
	description,
	media,
	title,
}: {
	description: string;
	media: Array<{ type: "image" | "video"; src: string }>;
	title: string;
}) => {
	const [typewriterDone, setTypewriterDone] = useState(false);

	const images = media.filter((item) => item.type === "image");
	const videos = media.filter((item) => item.type === "video");

	return (
		<div className="flex min-h-fit w-full flex-col rounded-xl border bg-background text-card-foreground shadow">
			<Header />

			<div className="flex flex-col gap-6 px-4 py-8">
				<h2 className="font-bold text-4xl leading-tight tracking-tight">
					{title}
				</h2>

				<div className="relative">
					<TypingText
						as="p"
						className="absolute hyphens-auto text-left text-l text-muted-foreground leading-relaxed"
						cursorCharacter="|"
						loop={false}
						onSentenceComplete={() =>
							setTimeout(() => setTypewriterDone(true), 50)
						}
						showCursor={true}
						text={description}
						typingSpeed={5}
					/>

					<p className="top-0 hyphens-auto text-left text-l text-muted-foreground text-transparent leading-relaxed">
						{description}
					</p>
				</div>

				<div
					className={twMerge(
						typewriterDone ? "h-unset opacity-100" : "h-0 opacity-0",
						"transition-opacity duration-500",
					)}
				>
					{images.length > 0 && (
						<ImageZoom backdropClassName='[&_[data-rmiz-modal-overlay="visible"]]:bg-black/80'>
							{images.map((image) => (
								<LoadableImage
									className="h-auto w-full rounded-2xl object-cover"
									key={`entry-card.image-${image.src}`}
									src={image.src}
								/>
							))}
						</ImageZoom>
					)}
				</div>
			</div>
		</div>
	);
};

const Header = () => (
	<div className="flex items-center justify-between rounded-t-xl border-b bg-card px-4 py-2">
		<div className="flex items-center gap-3">
			<div className="flex gap-2">
				<div className="size-3 rounded-full bg-red-500"></div>
				<div className="size-3 rounded-full bg-yellow-500"></div>
				<div className="size-3 rounded-full bg-green-500"></div>
			</div>
		</div>
	</div>
);
