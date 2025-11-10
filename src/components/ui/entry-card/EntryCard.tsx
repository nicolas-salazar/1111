import { format, formatDistanceToNowStrict } from "date-fns";
import { es } from "date-fns/locale/es";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { LoadableImage } from "@/components/ui/loadable-image";
import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";
import TypingText from "@/components/ui/shadcn-io/typing-text";

export const EntryCard = ({
	content,
	date,
	media,
	title,
}: {
	content: string[];
	date: string;
	media: Array<{ type: string; src: string }>;
	title: string;
}) => {
	const [typewriterDone, setTypewriterDone] = useState(false);

	const images = media.filter((item) => item.type === "image");
	// const videos = media.filter((item) => item.type === "video");

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
						initialDelay={1000}
						loop={false}
						onSentenceComplete={(_, index) => {
							if (index === content.length - 1) {
								setTimeout(() => setTypewriterDone(true), 250);
							}
						}}
						showCursor={true}
						text={content}
						typingSpeed={45}
					/>

					<p className="top-0 hyphens-auto text-left text-l text-muted-foreground text-transparent leading-relaxed">
						{content.join("\n")}
					</p>
				</div>

				<div
					className={twMerge(
						"flex flex-col gap-6",
						typewriterDone ? "h-unset opacity-100" : "h-0 opacity-0",
						"transition-opacity duration-500",
						"transition-height duration-500",
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

					<div className="h-[1px] w-full shrink-0 bg-border" />

					<div className="flex items-center justify-between gap-4">
						<div className="flex items-center gap-3">
							<span
								className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-bold text-lg"
								style={{ background: "#eaeaea", color: "#f5f5f5" }}
							>
								N
							</span>
							<div>
								<p className="font-semibold">Nicolás</p>
								<p className="text-muted-foreground text-xs">
									Tu novio que te quiere
								</p>
							</div>
						</div>

						<div className="flex flex-col items-end">
							<span className="text-xs">
								{format(date, "MMM dd, yyyy", {
									locale: es,
								})}
							</span>

							<span className="text-xs">
								{`(hace ${formatDistanceToNowStrict(date, {
									locale: es,
								})})`}
							</span>
						</div>
					</div>
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
