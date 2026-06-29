import { type DetailedHTMLProps, useState } from "react";
import { twMerge } from "tailwind-merge";

export const LoadableImage = (
	props: DetailedHTMLProps<
		React.ImgHTMLAttributes<HTMLImageElement>,
		HTMLImageElement
	>,
) => {
	const [loaded, setLoaded] = useState(false);

	return (
		<img
			{...props}
			alt={props.alt || ""}
			className={twMerge(props.className, loaded ? "h-unset" : "h-0")}
			onLoad={(e) => {
				setLoaded(true);
				props.onLoad?.(e);
			}}
		/>
	);
};
