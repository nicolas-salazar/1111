import type { ReactNode } from "react";
import { Button, type buttonVariants } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/tailwind-utils";
import type { VariantProps } from "class-variance-authority";
import type * as React from "react";

type ButtonWithLoadingProps = React.ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & {
		loading?: boolean;
		icon?: ReactNode;
	};

export function ButtonWithLoading({
	loading = false,
	icon,
	disabled,
	className,
	children,
	...props
}: LoadingButtonProps) {
	return (
		<Button
			aria-busy={loading}
			className={cn("cursor-pointer gap-2", className)}
			disabled={disabled ?? loading}
			{...props}
		>
			{icon}
			{children}
			{loading && <Spinner />}
		</Button>
	);
}
