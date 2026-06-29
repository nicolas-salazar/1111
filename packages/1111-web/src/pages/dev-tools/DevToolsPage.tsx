import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export const DevToolsPage = () => {
	return (
		<div className="flex w-full flex-col gap-4">
			<h1>Dev Tools</h1>

			<Button
				onClick={() => {
					localStorage.clear();
					toast("Done!", { description: "Local storage cleared." });
				}}
			>
				Drop cache
			</Button>
		</div>
	);
};
