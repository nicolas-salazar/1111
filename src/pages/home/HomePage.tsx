import { EntryCard } from "@/components/ui/entry-card";

export const HomePage = () => {
	return (
		<EntryCard
			date="2025-09-12T03:01:42.834Z"
			description="Hoy fuimos con mi mamá y Lili a almorzar a Lupe. Tú pediste un steak Lupe y mi mamá unas quesadillas y Lili un alambre y hablamos lo más de bueno y aguantamos harta hambre jajaja, nos agarró el tarde re feo. Y ya después fuimos a casa y nos despedimos porque me fui yo para Guadalajara. Pero vuelvo pronto, no me demoro, voy y le tomo una foto a los patos y me regreso."
			media={[
				{ src: "http://tmpfiles.org/dl/7761482/img_8386.jpg", type: "image" },
			]}
			title="Lupazo con mamá y Lili"
		/>
	);
};
