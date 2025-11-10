import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export const DevToolsPage = () => {
	return (
		<div className="flex w-full flex-col gap-4">
			<h1>Dev Tools</h1>

			<Button
				onClick={() => {
					toast("Event has been created", {
						description: "Sunday, December 03, 2023 at 9:00 AM",
					});
				}}
			>
				Drop cache
			</Button>
		</div>
	);
};
