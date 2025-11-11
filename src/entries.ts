export type Entry = {
	content: string[];
	date: string;
	media: Array<{ type: string; src: string }>;
	n: number;
	title: string;
};

export const ENTRIES: Entry[] = [
	{
		n: 1,
		content: [
			"McDonalds chía y adivina quién.",
			"💬 Y bueno te cuento entre otras cosas que esta es la primer cita que cargo a la app y me estoy preguntando por qué no dejé escritos muchos más detalles de esa cita, ¿cómo se llamaba el personaje a adiviar? ¿Comimos algo además de papitas con helado? ¿El helado era solo de vainilla?",
			"💬 Como no tomamos fotos ese día, aquí te muestro la primera primera foto que te envié, muy romántico eso de la primera foto para el post de nuestra primera cita, ¿no? Estaba comprando arepas. Jajaja.",
		],
		date: "2024-07-07T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_4374.JPEG?alt=media&token=1dbff871-d535-4403-96d2-bd14ced7f672",
				type: "image",
			},
		],
		title: "Nuestra primera primera cita ❤️",
	},
	{
		n: 2,
		content: [
			"Desayuno Virgilio Barco. Compramos unos sanduchitos en San Miguel (¿cómo es eso de que crecimos en el mismo barrio?) y yo llevé fresitas y chocolate. Al final tuve que irme de afán porque vino Ari desde Venezuela y mi mamá y ella me están esperando en el Titán para almorzar, pero yo la verdad no quería irme.",
			"💬 Bueno bueno, no hay foto de nuestra cita romántica desayunando pero sí de mí esperándote afuera de tu casa. Jajaja.",
		],
		date: "2024-07-10T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FD15693EC-2FA9-4EC2-835A-53D4C726E72A.JPEG?alt=media&token=30243af0-5881-4baa-8cf8-64a674f16537",
				type: "image",
			},
		],
		title: "Desayunamos en la Virgilio Barco",
	},
	{
		n: 3,
		content: [
			"Después de mucha planeación, mover todos los hilos posibles y estando muy muy lejos por allá en Monterrey, hoy llegaste a casa y encontraste la cena.",
			"💬 ¿Lo recuerdas? Post-it por post-it, pista por pista.",
		],
		date: "2024-07-18T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2F6e9ff850-c78f-4279-823e-df9f5f40621e.JPEG?alt=media&token=7d953da5-c380-4f09-9795-70e19926f119",
				type: "image",
			},
		],
		title: "La cena :)",
	},
	{
		n: 4,
		content: [
			"Cena en mi casa. Eso y conociste el M5, nos hicimos unas donitas después de cenar.",
			"💬 Recuerdo que ese día compramos en el éxito, con puntos obviamente, carne y arepitas blancas y las cocinamos en casa en Colina. Tengo recuerdos muy bonitos de esa noche, sentados ahí en la cocina tú en la barra y yo en la banquita verde comiéndonos nuestra carne. Fue la primera de muchas cenas en casa juntos.",
		],
		date: "2024-07-28T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2F6894fb9b-3c9c-4115-8ac3-5b8298fede70.MP4?alt=media&token=7c93fbcb-010a-4a65-9341-713205054511",
				type: "video",
			},
		],
		title: "Cenamos en casa, juntos",
	},
	{
		n: 5,
		content: [
			"Ping pong y asado, nocturno, en la fábrica.",
			"💬 Todo empezó por tu naríz roja como un pinpon, ¿recuerdas? Entonces quedamos de ir a jugar ping-pong e hicimos un asadito, nuestro primer asadito, en la noche. Y es que a mí estaba que se me salía el corazón allá sentado contigo en el sofá, con tantas ganas de abrazarte y darte tu besote.",
		],
		date: "2024-08-03T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_5170.JPEG?alt=media&token=3d92b7f4-90e3-46eb-b07b-069cf65e9349",
				type: "image",
			},
		],
		title: "Ping pong y asado",
	},
	{
		n: 6,
		content: [
			"Hoy tú me invitaste a mí, al Jam Rock en Chapinero.",
			"💬 Obviamente aquí se me hizo bolita el corazón: tú tomaste la iniciativa este vez y me invitaste a mí. Recuerdo ir saliendo del cumpleaños de Arturo para encontrarnos en la estación e ir juntos al evento; ese día sentí que tal vez sí podía pasar algo entre nosotros.",
		],
		date: "2024-08-07T10:01:42.834Z",
		media: [],
		title: "Jam Rock en Chapinero",
	},
	{
		n: 7,
		content: [
			"Hoy llegó el patito extremo. Y sin saberlo, Lili empezó a hacer parte de nuestras vidas.",
			"💬 Y es que cómo me llenó el corazón que meses después hayamos ido juntos a conocer a los patos; verte feliz en Guadalajara tuvo que ser el pináculo de mi vida. Y haber ido hasta el DHL hizo que, por lo menos una parte chiquita de mi corazón, sea siempre tuya.",
		],
		date: "2024-08-17T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_6352.JPEG?alt=media&token=9ca383fe-4737-4236-9abc-5d1bced9641c",
				type: "image",
			},
		],
		title: "El patito extremo 🦆",
	},
	{
		n: 8,
		content: [
			"Super luna azul y cena en usaquén (no recuerdo nombre del lugar).",
			'💬 El 08/18 pero de 2025 anoté: "fue en El Altillo, así se llamaba el lugar". Lo supe porque dejé una nota de la primera venta de NVL en el calendario y allí estaba lo de la super luna azul y anotado también el nombre "El Altillo".',
		],
		date: "2024-08-20T10:01:42.834Z",
		media: [],
		title: "El Altillo",
	},
	{
		n: 9,
		content: [
			"Conocí a tu amiga Natalia, con todo y su dedo malo, y la llevamos a casa. Luego nomás andamos por ahí; sin tener claro a dónde ir, terminamos subiendo al mirador restaurante Usaquén",
			"💬 Sí confiabas en mí, ¿no? Jajaja.",
		],
		date: "2024-08-27T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_7815.MOV?alt=media&token=35ad997c-8469-4dda-98d3-cedb345ab09c",
				type: "video",
			},
		],
		title: "La Chica",
	},
	{
		n: 10,
		content: [
			"No fue teatro en el centro sino cena en el peruano de la amiga. Guatavita.",
			"💬 La primera vez que nos paró un policía jajaja. Pero bueno, hoy quedan sólo risas. También tu primer Guatavizado; mareada y todo pero la pasaste bueno, ¿no?",
		],
		date: "2024-09-10T10:01:42.834Z",
		media: [],
		title: "Ceviche donde Diana",
	},
	{
		n: 11,
		content: [
			"Luna de la cosecha. Fuimos a BlackBear y luego nos sentamos en banca parque Japón nomás a ver la luna. ¿Nos estamos enamorando de a poquitos?",
		],
		date: "2024-09-17T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_8228.JPEG?alt=media&token=fce2bccc-6dff-4886-a640-298babe24896",
				type: "image",
			},
		],
		title: "La luna de la Cosecha 🌕",
	},
	{
		n: 12,
		content: [
			"Me invitó a Quiebra Canto. Y bueno, conocí a medio mundo tuyo: allí estaban Juan; Angie; Natalia y Palita.",
		],
		date: "2024-09-19T10:01:42.834Z",
		media: [],
		title: "Quiebra Canto",
	},
	{
		n: 13,
		content: [
			"Te prometo que cada 21 de Septiembre te regalaré flores amarillas.",
		],
		date: "2024-09-21T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_8370.JPEG?alt=media&token=0c25efba-a429-48ce-845a-c5e51c72218e",
				type: "image",
			},
		],
		title: "Flores amarillas 🌼",
	},
	{
		n: 14,
		content: [
			"Plan de señora en las ferias. Lili le hizo probar un uniforme. Almuerzo en tu casa.",
			"💬 Nuestro primer almuerzo en tu casita: hubo carne guisada con arroz y mucha mucha felicidad en mi corazón.",
		],
		date: "2024-09-30T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_8522.JPEG?alt=media&token=2130edea-86ff-4ee6-aee1-4868e83d4df4",
				type: "image",
			},
		],
		title: "Las ferias",
	},
	{
		n: 15,
		content: [
			"💬 Según yo, aquí te enamoraste tú de mí. Yo nomás rogaba que hubiera mucho trancón del autódromo a tu trabajo, para que pudiéramos estar juntitos por horas.",
			"💬 Y conociste a Juli y a Mateito. Yo pude hablar más con Angie también la noche anterior mientras esperábamos a que salieras del trabajo.",
			"💬 YYYYYY... NUESTRA PRIMERA FOTO JUNTOSSSSS AAAAAAAA.",
		],
		date: "2024-10-05T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2F880ae8b6-39f1-45f2-8f72-cf3e52954a82.JPEG?alt=media&token=7b9c32ed-e74f-4520-ad27-44427664c2c6",
				type: "image",
			},
		],
		title: "Autódromo",
	},
	{
		n: 16,
		content: [
			"La recojo de salsa al parque y vemos Soul. Se queda toda la noche. Nos besamos. Y se quedaron tus guantecitos para que sea nuestro recuerdo para siempre.",
			'💬 Nuestro primer beso. Y ojalá la vida me permita recordarlo siempre: se acabó la película y estábamos muy arrunchados tomados de la mano; pusimos música y justo diosito nos puso a sonar "Como si fueras a morir mañana" de mi siempre amado Leiva, como reclamándote por qué te demorabas tanto. Y así pasó; tú me besaste a mí mientras escuchábamos Leiva, muy a las 4 de la mañana en mi camita.',
		],
		date: "2024-10-06T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_8602.JPEG?alt=media&token=9980bd0a-cb5e-4f33-ac39-480aa344e905",
				type: "image",
			},
		],
		title: "Nuestro primer beso",
	},
	{
		n: 17,
		content: [
			"Nos sentimos bien raros. Hablamos en la noche al frente del Jaime Duque. Me regala el libro.",
			"💬 Yo lloré ese día, me sentía tan confundido.",
		],
		date: "2024-10-07T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_8604.JPEG?alt=media&token=bf03d442-23fb-4d87-804a-23266cccfde7",
				type: "image",
			},
		],
		title: "No sé cómo mostrar dónde me duele",
	},
	{
		n: 18,
		content: [
			'FN6 con abuelitos para pintar botas navideñas en cerámica. Escuchamos Ambivalencia llegando al trabajo y me dijo "póngale cuidado a la letra".',
			"💬 Lo primero que hice fue contarle a Lili y se puso tan feliz. Jajaja. Es que era como la confirmación de que ese beso del otro día no fue ni error ni casualidad.",
			"💬 Tenemos que ir a visitar a don Aquileo.",
			'💬 "Dejemos que gire la ruerda, sin ponerle palos de orgullo".',
		],
		date: "2024-10-11T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_8726.JPEG?alt=media&token=4bfd1db3-3f39-4243-a318-c68f7e2bab7d",
				type: "image",
			},
		],
		title: "Ambivalencia",
	},
	{
		n: 19,
		content: [
			"En la noche la recojo en el trabajo (pero finge estar enferma para ir al concierto jaja). Escuchamos la canción (ambivalencia) y nos besamos. Nos despedimos bien bonito después de unas papitas en el McDonalds a las 03:45am.",
		],
		date: "2024-10-12T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_8735.JPEG?alt=media&token=1b3b6182-4e5e-448d-bb70-0c09696b6250",
				type: "image",
			},
		],
		title: "McDonald's a las 03:45am",
	},
	{
		n: 20,
		content: [
			"Fuimos a cenar de la nada a donde el vecino de la reina; yo iba a ir solo a Jenos, pasó lo del 1111 y terminamos viéndonos.",
			"💬 El Porsche tenía 1111 kms cuando llegué al Jeno's. Y fue como una señal divina de lo que venía para después. No fue sino hasta hoy, que paso las notas a tu app, que me di cuenta de que ese día apareció el 1111; nuestro número, por primera vez en nuestras vidas.",
		],
		date: "2024-10-14T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_8735.JPEG?alt=media&token=1b3b6182-4e5e-448d-bb70-0c09696b6250",
				type: "image",
			},
		],
		title: "11/11 - 0",
	},
	{
		n: 21,
		content: [
			"Guatavitazo con Angie, Mathiu, Mateo y Tati. Estuvo bien lindo todo pero en especial un rato en el que nos pusimos nomás a hablar en el Oxxo de la rotonda.",
			"💬 Yo obviamente quería hacerme el macho.",
		],
		date: "2024-10-15T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_8847.JPEG?alt=media&token=c8454c6f-b5dd-4693-879a-9d785386cfaf",
				type: "image",
			},
		],
		title: "Guatavitazo con amigos",
	},
	{
		n: 22,
		content: [
			"Cumpleaños; desayunamos en al agua patos de la 93. Me regaló avena y la plantita y esa carta bonita con acuarelas ❤️.",
			"💬 Re-escribiendo esto me doy cuenta de que no alcanzo ni a conceptualizar lo mucho que vales.",
		],
		date: "2024-10-18T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_9002.JPEG?alt=media&token=41273fb1-dbb0-40ab-9ed7-0fee2542b3e2",
				type: "image",
			},
		],
		title: "Cumpleaños feliz",
	},
	{
		n: 23,
		content: [
			"La recojo en la noche del cumpleaños (ya era la 1am). Compramos gomitas. Ella lleva torta de zanahoria con una velita. Intentamos ver el diablo viste a la moda. Hicimos cosas malassssss.",
			"💬 Aunque no tengo fotos, sí tengo las bolsitas de las gomitas que nos comimos ese día. Qué romántico, ¿no? Mi guapa.",
		],
		date: "2024-10-19T10:01:42.834Z",
		media: [],
		title: "Nuestras primeras cochinadas",
	},
	{
		n: 24,
		content: [
			"Otra vez la recojo en la noche. Fueron sólo 15 minutos que se sintieron como una noche entera.",
			'"Gracias por ir por mi por vernos solo 15 minutos. No me lo saqué de la cabeza en todo el día."',
			"💬 Te estabas enamorando...",
		],
		date: "2024-10-20T10:01:42.834Z",
		media: [],
		title: '"No me lo saqué de la cabeza en todo el día"',
	},
	{
		n: 25,
		content: [
			"Nos vemos de nuevo en la noche pero no la recojo en el trabajo sino después de jugar monopoly. Aprendimos a manejar el Jimny, nos sentamos en la parte de atrás a hablar un buen rato y pasamos la noche juntos en casa. Le digo lo de que se nos acabe la magia 🤦‍♂️.",
			"💬 Dejamos tiradas las clases Laura, más de un año ya. Cuando regrese a Colombia le seguimos.",
		],
		date: "2024-10-20T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_9078.MP4?alt=media&token=4c3d9dcf-c820-4b84-bbc9-0b4ef386f121",
				type: "video",
			},
		],
		title: "Monopoly y Jimny",
	},
	{
		n: 26,
		content: [
			"Nos vemos de nuevo en la noche pero no la recojo en el trabajo sino después de jugar monopoly. Aprendimos a manejar el Jimny, nos sentamos en la parte de atrás a hablar un buen rato y pasamos la noche juntos en casa. Le digo lo de que se nos acabe la magia 🤦‍♂️.",
			"💬 Dejamos tiradas las clases Laura, más de un año ya. Cuando regrese a Colombia le seguimos.",
		],
		date: "2024-10-20T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_9078.MP4?alt=media&token=4c3d9dcf-c820-4b84-bbc9-0b4ef386f121",
				type: "video",
			},
		],
		title: "Monopoly y Jimny",
	},
	{
		n: 27,
		content: [
			"Vamos a Cine Paraíso a ver a Montessori. Hablamos de nosotros, de su ex, de la mía, del amor. Yo viajaba a méxico en la madrugada, hasta me ayudó a empacar maleta, pero preferimos aplazar el vuelo un día y quedarnos juntos. ¿Será que sí va a CABA?",
			"💬 Mire, desde aquí yo ya andaba haciendo planes malvados de comprarle a la brava su vuelo a Buenos Aires.",
			"💬 Se me llena tanto tanto el corazón al pensar en esas primeras veces que nos quedamos juntitos.",
			"💬 Cómo me gustaban esos zapatotes tuyos.",
		],
		date: "2024-10-22T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_9087.JPEG?alt=media&token=d4b996f0-88ff-46a9-87aa-15e8f0ef30c3",
				type: "image",
			},
		],
		title: "Montessori",
	},
	{
		n: 28,
		content: [
			"Me fui a méxico pero me despedí de ella en el aeropuerto comiendo torta de zanahoria ❤️.",
			"💬 😭😭😭😭😭😭😭😭😭",
		],
		date: "2024-10-23T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_9093.JPEG?alt=media&token=5f6e740e-d315-4c7e-973d-4f7fccc38821",
				type: "image",
			},
		],
		title: "Torta de Zanahoria para Mexicali",
	},
	{
		n: 29,
		content: [
			"Hoy fue nuestra cita 26, sólo que no era una cita, nomás llegué de méxico de sorpresa a la cafetería turquesa. Terminamos comprando capas y yendo a la fiesta esta de halloween de Harry Potter. Hablamos mucho en tu cuarto, en tu cama, con tus luces cálidas mágicas y terminamos durmiendo juntos en mi casa. Qué cita 26 nuestra cita 26 ❤️.",
			"💬 El 26 estuvo muy presente en esos días porque recuerdo que yo me la pasaba botándote factos de números para enamorarte. ¿Cuál es el facto del 26 te preguntarás leyendo esto? Bueno, el único de todos los enteros que está justo por detrás de un cuadrado perfecto y antes de un cubo perfecto.",
		],
		date: "2024-10-29T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_0144.JPEG?alt=media&token=7ff2c98d-6954-4d43-900f-a1893eed88f8",
				type: "image",
			},
		],
		title: "26",
	},
	{
		n: 30,
		content: [
			"Fuimos al evento este de presentación del Porsche macan. Ya íbamos a despedirnos en tu casa pero mejor nos quedamos juntos de nuevo. Y hasta tarde porque no tuviste clase temprano. Te llevé al trabajo pero antes pasamos por tu casa a que te maquillaras; mientras tanto me conocí con tu papá.",
		],
		date: "2024-10-29T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_0193.JPEG?alt=media&token=778e55b1-f109-42dd-8732-9161ded1a7cd",
				type: "image",
			},
		],
		title: "Evento pipirisnais en Porsche",
	},
	{
		n: 31,
		content: [
			"Ella fue al aeropuerto a esperarme de mi viaje a Mexicali/Tijuana.",
			"💬 😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭",
		],
		date: "2024-11-04T10:01:42.834Z",
		media: [],
		title: "El sueño 🛩️",
	},
	{
		n: 32,
		content: [
			"Hicimos la prueba. Fuimos al café mágico de ella Ritmo y Aroma a esperar el resultado y a tomar té y chocolate, estuvo bien bonito, hasta le mostré cómo funciona lo básico de programación e hicimos un programita para calcular cuánto nos cuesta comprar x manzanas. Ya luego fuimos a la fábrica a recoger el uniforme para su papá, tomamos tinto y comimos pizza. Hablamos un rato con tu hermano de su viaje a Medellín. Fuimos al aeropuerto y le conté todo sobre cómo va a ser su viaje a Guayaquil el sábado. Regresamos a su casa y hablamos mucho, hasta la 1:00am. Qué día, ¿no?",
			"💬 A mira, nuestra primera prueba de embarazo. Jajaja 🤦‍♂️.",
		],
		date: "2024-11-07T10:01:42.834Z",
		media: [],
		title: "Un día, muchas cosas",
	},
	{
		n: 33,
		content: [
			"Te visité de la nada en el Monkey al cierre del turno para despedirme antes de irme a México y verte en Guayaquil. Fueron dos minutos pero estuvo bien bonito.",
			"💬 Sí, pensándolo bien y en retrospectiva, debías estar muy muy nerviosa. Gracias por confiar en mí.",
			"💬 La foto es la que envió Juan mostrándome cómo había quedado todo. Gracias a Juan.",
		],
		date: "2024-11-08T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2Fbbcd0c37-8071-4009-964c-aa2b075bee8b.JPEG?alt=media&token=23275469-0ab2-4f5f-9295-6d21ab787d4d",
				type: "image",
			},
		],
		title: "Te veo en Guayaquil",
	},
	{
		n: 34,
		content: ["AAAAAAAAAAA. De Guayaquil a Buenos Aires ❤️."],
		date: "2024-11-09T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_1466.MP4?alt=media&token=753e0767-2123-4cb3-80fc-ee1d6785b970",
				type: "video",
			},
		],
		title: "Te vi en Guayaquil",
	},
	{
		n: 35,
		content: [
			"¿Puedes creer que estamos acá? Fue un largo viaje pero qué día tan lindo, lindo como tú. Llegamos al hotel bien en la madrugada y tan pronto como subimos a la salita de espera te enamoraste de la ciudad; tantos libros y tan bonita la atmósfera de ese sofá. Salimos caminando por Retiro en un día hermoso y fuimos directo al metro para desayunar en Malvón; caminamos por tooooooda la Avenida Corrientes y fuimos a casa a dormir un rato. Hicimos el amor, nos alistamos y fuimos al concierto del Sentencia Previa. Y finalmente, para cerrar una noche mágica: un paseo de domingo por la noche por la Avenida Corrientes otra vez.",
			"💬 ¿El mejor día de mi vida? Tal vez. Que sean muchos más viajes con nuestros zapatotes. O sin ellos.",
		],
		date: "2024-11-10T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_1846.MP4?alt=media&token=e1818811-737a-45b4-b928-c3a3186e21ab",
				type: "video",
			},
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_1521.JPEG?alt=media&token=eb7f630d-3860-40a8-a7fb-5e8cf9da2024",
				type: "image",
			},
		],
		title: "Buenos Aires - Día I",
	},
	{
		n: 36,
		content: [
			'Ay guapa mía, ¿por dónde comenzar? Nos levantamos no ten tempranito la verdad porque ajá, todo lo que pasó ayer. Salimos a caminar a la torre Monumental, nos tomamos nuestra foto y seguimos nuestro camino a recoleta. Divina la flor y las Jacarandás y la Facultad de Derecho, pero te enamoraste perdidamente de Recoleta. Entre más caminábamos más fuerte nos sujetábamos la mano, yo me sentía totalmente fuera del planeta contigo allí, feliz y emocionado y nervioso y feliz otra vez. Y luego vienen las empanadas; la de humita. Y luego, dos cuadras más allá, El Ateneo: tú leyendo "Mujer Octubre" de Miguel Gane. Y luego, la Avenida Santa Fé. Y luego, el Obelisco. Y luego, tú y yo y "Bajo la misma estrella".',
			"Descansa, novia mía.",
			"💬 Aquí nuestra última foto de solteros, que quedó en digital pero también en la instantánea. Ojalá ambas duren para siempre, como nuestro amor bonito que aquel día pudimos afirmarnos con palabras.",
		],
		date: "2024-11-11T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_2142.JPEG?alt=media&token=f647e9bc-9dd8-4f8b-b9f5-d02ac0759f19",
				type: "image",
			},
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_1978.JPEG?alt=media&token=f68f7cac-14cc-4084-b1d4-3aaa5f8ff65c",
				type: "image",
			},
		],
		title: "11/11",
	},
	{
		n: 37,
		content: [
			"Hola, novia mía. ¿Qué tal si el primer plan de novios novios es ir a mi oficina? Bueno, justo eso pasó hoy. Jajaja 🤦‍♂️. Pero estuvo bueno, ¿no? Muy agradables Lucas y Juanma y comimos sanduchito de miga y milanesa. Y bueno, al ratito nos fuimos a Caminito, a conocer a Mafalda donde vimos un perrito bien bonito, a caminar y caminar y caminar hasta llegar a Casa Rosada donde nos besamos dando vueltas en toda la esquina de la plaza, para terminar en Puerto Madero donde te prometí que algún día volveríamos a tomarnos un vino.",
			"💬 Lástima que ya no trabajo con ellos, ¿no? :(",
		],
		date: "2024-11-12T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_2170.JPEG?alt=media&token=6a218dc4-0f53-411b-884f-8ae59847c4a1",
				type: "image",
			},
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_2540.MOV?alt=media&token=a514a04e-6a88-4248-a1dc-8ffce68bdf64",
				type: "video",
			},
		],
		title: "Hola, novia: Buenos Aires - Día III",
	},
	{
		n: 38,
		content: [
			"Tú y yo yendo en tren para visitar la Avenida Melián. Feliz. Luego un paseito por Palermo donde compramos mi cuadro en la casa de antigüedades; nos comimos una manzana; visitamos al barrio chino; pasamos por la Plaza Alberti y caminamos de regreso a Güerrín. Y bueno, hora de tomar el avión para volver a casa. Fue el viaje de mis sueños, con la novia de mis sueños.",
			"💬 Gracias por acompañarme a la Plaza Alberti, yo sé que no estuvo tan wow además de la niña que jugaba descalza y se ensuciaba, y sé que quisiste ir allí por mí.",
			"💬 Volvamos siempre a la Avenida Melián.",
		],
		date: "2024-11-13T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_2635.JPEG?alt=media&token=5ebe7664-58a6-4f55-95cc-967f01bbc9fe",
				type: "image",
			},
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_2540.MOV?alt=media&token=a514a04e-6a88-4248-a1dc-8ffce68bdf64",
				type: "video",
			},
		],
		title: "Avenida Melián.",
	},
	{
		n: 39,
		content: [
			"Te recojo en el trabajo y estamos muy cansados ambos, nomás nos dormimos hasta el sábado bien tarde.",
		],
		date: "2024-11-15T10:01:42.834Z",
		media: [],
		title: "Dormir mucho después de Buenos Aires.",
	},
	{
		n: 40,
		content: [
			"Te recogimos con Mathiu en El Topooooooo. Vimos el partido con Angie y con Mathiu y fuimos a casa a escoger las fotos de Buenos Aires; fue mágico: hablamos un montón en el sofá viendo la luna y luego fuimos a dormir. Me propones que intentemos lo de Camilo y Evaluna: decirnos tres cosas lindas que vimos en el otro hoy; fue muy especial.",
			"💬 Cuando leas esto dime, que yo quiero que volvamos a hacer lo de las tres cosas que nos gustaron, lo extraño mucho 🦔.",
			"💬 Cómo nos hemos divertido en el topo, ¿no?",
		],
		date: "2024-11-20T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_2725.JPEG?alt=media&token=01c513b7-b5a9-4e35-bf26-c75569665149",
				type: "image",
			},
		],
		title: "Tengamos una cita para pasarnos fotos de Buenos Aires.",
	},
	{
		n: 41,
		content: [
			"Te recogí en el trabajo, en el topo otra vez 🚗. Fueron sólo quince minuticos pero siempre es lindo verte. Y eso que estabas que te vomitabas. Jaja. Besos para usted.",
			"💬 La foto es de mí mismo sacando El Topo.",
		],
		date: "2024-11-21T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_2752.JPEG?alt=media&token=46fdf1aa-ae41-4bc9-b3ea-16440ec9d851",
				type: "image",
			},
		],
		title: "Excusas para salir en El Topo",
	},
	{
		n: 42,
		content: [
			"Te recogí del trabajo el día en el que dejé las llaves por dentro; hasta corrimos para alcanzar al cerrajero. Al otro día conocí a tu mamá AAAAAAA. CONOCÍ A TU MAMÁ y fue bien rápido y pequeñito pero qué bonito. Ya luego me quedé hablando un rato con Xiomi y te vi trabajar. Soy fan de ti en el trabajo; y por fuera. Ambos sentimos ese calorcito en el pecho al irnos. AH y le mandaste saluditos de cumpleaños a Valeria. Día redondo ❤️; que nunca se me olvide esta mañana de Domingo.",
		],
		date: "2024-11-23T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2F17d625ac-ede7-4a94-9416-3765e47d37f4.jpg?alt=media&token=08911db7-2855-45ac-854d-4532437e8a81",
				type: "image",
			},
		],
		title: "Tu mamita",
	},
	{
		n: 43,
		content: [
			"Nos vimos saliendo de la universidad, nos hicimos otra prueba para que ella esté tranquila. Caminamos de ida y vuelta hasta la 93 y fuimos a casa.",
			"💬 Otra prueba de embarazo 🤦‍♂️. Jajaja.",
		],
		date: "2024-11-25T10:01:42.834Z",
		media: [],
		title: "¿Qué título ponemos?",
	},
	{
		n: 44,
		content: [
			"Tu pumpe en casa con tu familia ❤️. Con tus tías. Con tus papás. Con tu hermano y Palita. Hasta con el Topo. A bueno y en la nochecita: yo haciendo el ridículo en Quibra Canto tocándote mi canción gei. Isssss.",
			"💬 Gracias Lau, por hacerme sentir bienvenido en tu vida. El más afortunado yo.",
		],
		date: "2024-11-26T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_2793.JPEG?alt=media&token=39b23752-37d6-4bcf-8ac8-7ceb96656ecd",
				type: "image",
			},
		],
		title: "Tu pumpe ❤️",
	},
	{
		n: 45,
		content: [
			'Su pumpe otra vez pero en casa de Palita con sus amigos. "Cómo te quiero Nico" me dice.',
			'💬 "Cómo te quiero Lau".',
		],
		date: "2024-11-27T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2F78c36201-1ce2-4fbe-b490-7373c9ddb7f6.JPEG?alt=media&token=4a04d796-1f6a-45d0-9a5e-0ea96fc5aaaa",
				type: "image",
			},
		],
		title: "Tu pumpe pero en casa de Palita",
	},
	{
		n: 46,
		content: [
			'Ella dijo que no iba a ir a clase mañana (viernes) y yo dije "ya que te vas a desvergonzar, de avergoncémonos full y quedemos juntos". Y sí, se quedó y nos levantamos tardísimo. Almorzamos en verde limón, ¿ah? ¿Algo más íntimo que eso?',
			'💬 "Permitirme ser frágil sin certeza".',
		],
		date: "2024-11-28T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2Faa97d42a-afac-4619-b064-c1edeb5b2e75.jpg?alt=media&token=0a2c3418-72ce-420c-9760-489804b3e60f",
				type: "image",
			},
		],
		title: "Durmamos hasta tarde",
	},
	{
		n: 47,
		content: [
			"La recogí del trabajo después del monopoly. Nos dieron las 02:00; no fue mucho pero siempre vale la pena.",
		],
		date: "2024-11-29T10:01:42.834Z",
		media: [],
		title: "Después del monopoly",
	},
	{
		n: 48,
		content: [
			"Fuimos a hacer su ritual del mes después del trabajo, en el andén de coordinadora en parcelas. Aprovechamos y manejó el mini un rato. Se quedó y nos levantamos tarde tarde.",
		],
		date: "2024-12-01T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_2874.MP4?alt=media&token=73087226-8f03-47f3-88f0-8bb916025d49",
				type: "video",
			},
		],
		title: "El primer día de Navidad",
	},
	{
		n: 49,
		content: [
			"Chocolate a las diez de la noche con tu mamá y papá, después de llevar uniformes a Nayi. Nos dieron las 12:00 con ellos y las 02:00 a ti y a mi.",
			"💬 Obviamente lo de los unfiromes era una excusa. Jajaja. Mi guapa y sus planes de tía que a mi me enamoran y me enloquecen.",
		],
		date: "2024-12-02T10:01:42.834Z",
		media: [],
		title: "Chocolate nocturno",
	},
	{
		n: 50,
		content: [
			"Conociste a mi mamá y de paso a Arturo, Valeria y a Josué. Carmencita también estaba por ahí. Comimos la primera natilla de la navidad juntos: la que hizo mi mamá de maracuyá. Llegamos a jugar Minecraft para tu tarea. Terminamos de ver bajo la misma estrella.",
			"💬 El maincraaaaaaaaa. Muchas gracias muy bueno estuvo. Y aún no puedo creer que hayan dado de baja a Augustus.",
		],
		date: "2024-12-02T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_2902.JPEG?alt=media&token=4d8bf193-aebf-43d9-94a0-5aca0656b27a",
				type: "image",
			},
		],
		title: "Mi mamita",
	},
	{
		n: 51,
		content: [
			"Lentejas con tus tías en la casa en la que creciste ❤️. Terminamos el Minecraft y llevamos a Nata a su casa en Cajicá. No fui a Puerto Vallarta.",
			"💬 La casita de labuela ♥️.",
			"💬 Esa casa de la cultura me quedó del putas. Gracias por el reconocimiento; lo merezco.",
			"💬 ¿Que si me arrepiento de no haber ido a Puerto Vallarta? Obvio, siempre, pero no si pienso en que no fui por quedarme contigo. Vamos un día de estos a Puerto Vallarta.",
		],
		date: "2024-12-04T10:01:42.834Z",
		media: [],
		title: "La casa de tus tías",
	},
	{
		n: 52,
		content: [
			'Visita rápida en el monkey para llevarte la tercer medía navideña con almendras. "Qué guapo Nico" dice Xiomara que tú andabas diciendo por ahí.',
			"💬 Este ha sido de mis favoritos: que la botita en el casillero; que luego la llevo yo; que luego en tu casita. Pero me falta una, ¿te acuerdas? Si sí, ¡dime!",
		],
		date: "2024-12-06T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FWhatsApp%20Image%202025-11-10%20at%203.44.16%20PM.jpeg?alt=media&token=cd864a6b-590c-4475-933a-6b80a764d656",
				type: "image",
			},
		],
		title: "Las botitas de Navidad",
	},
	{
		n: 53,
		content: [
			"Velitas: cinco normales + dos personalizadas que mandó a hacer Lau con nuestros nombres:",
			"- Una por los dos; para desenredar los nudos de cada uno que entorpecen nuestra relación.",
			"- Otra para que el otro año prendamos velitas juntos.",
			"- La tercera en agradecimiento de todas las cosas buenas que le trajo el año a Lau.",
			"- La cuarta por la salud de la tía Yanis y la bendición para nuestra relación de los abuelos que ya no están.",
			"- La quinta para que sanemos espiritualmente.",
			"- La de Laura: para que nunca le falte amor.",
			"- La de Nicolás: para que nunca pierda sus ganas de aprender y su virtud de encontrar luz en momentos oscuros.",
			"💬 Y es que este año definitivamente vamos a prender velita juntos. Gracias, velita número 2.",
		],
		date: "2024-12-07T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_2947.JPEG?alt=media&token=6a877315-fe13-4af3-977b-b3b084974154",
				type: "image",
			},
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_2948.JPEG?alt=media&token=a7fd2e73-e477-420f-a939-9f24e9c642f5",
				type: "image",
			},
		],
		title: "Velitas",
	},
	{
		n: 54,
		content: [
			"Celebramos el cumpleaños de Josué con un monopoly aunque tú no jugaste. Ahí conociste a Sebas y a Nayi. Nos quedamos juntos y dormimos hasta muy tarde el lunes.",
		],
		date: "2024-12-08T10:01:42.834Z",
		media: [],
		title: "Monpoly con Josué",
	},
	{
		n: 55,
		content: [
			"Fuimos a Girardot. Antes de irnos hicimos la natilla ❤️. Llegamos requetetarde a comer perro pero estoy muy feliz de verte tan feliz aquí.",
			"💬 ¿Desde aquí se empezó a adueñar de mi saco del SayOcean?",
		],
		date: "2024-12-09T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_2966.JPEG?alt=media&token=7437d3ca-2618-49dd-a812-24625ff329e2",
				type: "image",
			},
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_2964.JPEG?alt=media&token=bcbfdc9b-fda2-4a0f-8975-a024b4a123c1",
				type: "image",
			},
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_2986.JPEG?alt=media&token=44a4fa02-593a-479f-9398-0c098449237e",
				type: "image",
			},
		],
		title: "Girardó",
	},
	{
		n: 56,
		content: [
			"Nos vimos para hablar de nuestra primera pelea fea, la que tuvimos en Girardot. Volvió ese calorcito en el pecho bonito. Fuiste a verte con tus amigas del colegio y después llegaste a mi casa, me diste mi carta bonita y nos quedamos juntos de nuevo. Vimos Daria.",
			"💬 Ese día pensaba yo en que me había sacado la lotería, me sentí tan en paz hablando contigo y viendo cómo de verdad querías que reparáramos las cosas.",
			'💬 "Tus amigas del colegio" Jajaja. Me hace feliz que ahora ellas tienen nombre en mi cabeza: Aura Bella, Lu y Valentina.',
			"💬 Bueno y como que ya toca ir volviendo a Girardot, ¿no?",
		],
		date: "2024-12-11T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_3004.JPEG?alt=media&token=ec7f1ddc-b716-4a91-a161-936a02041fb5",
				type: "image",
			},
		],
		title: "Después de Girardot",
	},
	{
		n: 57,
		content: [
			"Me invitaste a almorzar en tu casa; fue pechuga con arroz, puré de papa y ensalada de zanahoria rayada con arándanos; estoy viviendo el sueño ❤️. Te recogí en la noche y hablamos un ratito antes de que te fueras a casa.",
			"💬 Soy tan fan de cuando me invitas a almorzar a tu casita...",
		],
		date: "2024-12-11T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_3013.JPEG?alt=media&token=2a2d889e-5183-4965-a009-f9cb5ac32db2",
				type: "image",
			},
		],
		title: "Puré de papa con pechuga",
	},
	{
		n: 58,
		content: [
			'Saliendo del trabajo hicimos algo de mercado para el almuerzo del otro día. Dormimos hasta muy tarde y desayunamos pizza de la cascada. Y ma pasaste esa canción bonita que se llama "Viernes 13"',
		],
		date: "2024-12-13T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_3026.PNG?alt=media&token=ceb85ab3-fd01-4de7-9a97-93972b6265f8",
				type: "image",
			},
		],
		title: "Viernes 13",
	},
	{
		n: 59,
		content: [
			"Hoy hicimos la cena: arroz quemado jajaja con murillo en la olla express. Nos quedamos hablando hasta tarde, nos dormimos y ambos nos dijimos que se sintió bien especial la noche sin saber bien porqué. De regreso a tu casa pusimos el casete de Carlos Gadel en el topo y funcionó ✨.",
			"💬 ESE MURILLO ESTUVO C-VERO.",
		],
		date: "2024-12-15T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_3040.JPEG?alt=media&token=4257f1c1-9480-4b1e-8f97-5f47068f15d7",
				type: "image",
			},
		],
		title: "Murillo para la cena",
	},
	{
		n: 60,
		content: [
			"Aunque nos vimos desde ayer, quiero poner aquí que hoy dormimos mucho y ya en la tarde te acompañé a tu casa a ponerte guapa para tus amigas; mientras eso, leímos un poquito y estuvo bonito.",
		],
		date: "2024-12-16T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_3051.JPEG?alt=media&token=8f45e636-fa57-459c-9687-39bf87f7d8b4",
				type: "image",
			},
		],
		title: "Nota sobre que dormimos mucho",
	},
	{
		n: 61,
		content: [
			"Novena en casa de las tías Soraya y Yanis. Todo muy lindo, como todo contigo. Conocimos al nuevo hermano del pirata Ivo 🏴‍☠️.",
			"💬 El Inky bebecitooooooo 🐱.",
		],
		date: "2024-12-17T10:01:42.834Z",
		media: [],
		title: "Inky 🐱",
	},
	{
		n: 62,
		content: [
			"Novena en tu casa. Y además almorzamos con Valeria y fuimos a comprar mercado tú, ella, Arturo, Simona, Fito y yo. AH, y además me quedé contigo esa noche, en tu cama, por aquello del robo y así. Qué día, ¿no?",
			"💬 Aquí fue cuando valió verga mi celular y por eso no hay fotos de ninguno de estos días :( jajaja.",
		],
		date: "2024-12-18T10:01:42.834Z",
		media: [],
		title: "Novena en tu casita",
	},
	{
		n: 63,
		content: [
			"Te recogí en la noche saliendo del trabajo para quedarnos juntos e irnos al evento de los abuelitos en el pueblo de Lili. Dormimos como dos horas.",
		],
		date: "2024-12-23T10:01:42.834Z",
		media: [],
		title: "Dos horas de sueño para llevar cobijas",
	},
	{
		n: 64,
		content: [
			"AH, navidad, y qué navidad, ¿no? Abuelitos en pueblo de Lili + Compramos juntos la carne del asado de mañana + Cerramos la noche viéndonos un rato en casa de tus tías + Nos dimos los regalos + Feliz navidad a la media noche en punto + tu carta hermosa de agradecimiento + todo juntos.",
			"La quiero mucho Laura ❤️🎄.",
			"💬 Sí, te quiero mucho, por ser tan noble y tierna y querer siempre que todos tengamos una bonita navidá.",
		],
		date: "2024-12-24T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_0156.JPEG?alt=media&token=651fbcd8-1d26-49d1-9866-dfc26181418d",
				type: "image",
			},
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_0061.JPEG?alt=media&token=c1a45cbd-c5b9-44f5-9292-f337467662e0",
				type: "image",
			},
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_0063.JPEG?alt=media&token=a70a9ad5-3db3-430f-93bb-ba479410570c",
				type: "image",
			},
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_0141.JPEG?alt=media&token=ea39e242-864f-44ac-aeb7-4479f5e808e9",
				type: "image",
			},
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_0249.JPEG?alt=media&token=1782d4ad-a2dc-40a3-93f9-3cff322b3e8f",
				type: "image",
			},
		],
		title: "Navidad navidad ❤️🎄",
	},
	{
		n: 65,
		content: [
			"EL-ASADO-CON-TU-FAMILIA-Y-LA-MÍA-EN-LA-FÁBIRCA-AAAAAAH. Y además, como si todo no fuera lo suficientemente mágico, te recogí en la noche y nos vimos el Grinch; un pedacito.",
			"💬 Mire cómo llevamos un año ya viviendo el sueño.",
		],
		date: "2024-12-25T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_0207.JPEG?alt=media&token=f94cf9da-a6af-45e6-9df9-92c84eb0ba13",
				type: "image",
			},
		],
		title: "Asadito de navidá",
	},
	{
		n: 66,
		content: [
			"Gastroenteritis :(. Veámoslo como una oportunidad para mostrarte lo mucho que te quiero.",
			"💬 diosmiomiguapaaaaaaa casi pela. Jajaja. tkm++ ❤️",
		],
		date: "2024-12-26T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_0225.JPEG?alt=media&token=b1e89927-d271-472b-8283-76a5a4aeab81",
				type: "image",
			},
		],
		title: "Gastroentiris por el asao",
	},
	{
		n: 67,
		content: [
			"Entonces hoy obvio la visité en la tarde para ver cómo seguía de su gastroenteritis. Estabas toda linda con tu pijama de snoopy 😍. Me acompañaste a la fábrica en pijama; compramos pollo y comimos con tu papá y tu hermana en tu casa y nos quedamos un ratito hablando en tu cuarto. Me fui a ganar la copa del monopoly y llegué a las 2 de la mañana y me metí de intruso a tu cama. Amanecimos juntos y me tocó volarme a escondidas para que tu mamá no se diera cuenta. Qué día Lau ❤️, estoy muy enamorado.",
		],
		date: "2024-12-26T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_0231.JPEG?alt=media&token=db34ff2b-41b4-46ef-accc-baa38736b728",
				type: "image",
			},
		],
		title: "De visita de médico en la tarde a visita de ninja en la noche.",
	},
	{
		n: 68,
		content: [
			"San Francisco con Angie. Urgencias de nuevo en la noche :(",
			"Te admiro; eres fuerte y valiente y así y con lo malita que estabas, caminaste mucho por nosotros ❤️.",
		],
		date: "2024-12-30T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_0275.JPEG?alt=media&token=d007c1c2-055a-4e07-a603-614fb87d91c2",
				type: "image",
			},
		],
		title: "San Francisco con Angie",
	},
	{
		n: 69,
		content: [
			"Nos fuimos a San Gil y nos dimos el año nuevo allá Laura, ¿es real esto que nos está pasando? ❤️. Ah pero primero un pasadín rápido por las ferias para comprar el año viejo. Muy fan yo de que tú seas fan de las ferias.",
			"💬 Cómo la quiero yo a usted ❤️",
			"💬 PDT: el perrito es uno de esos perritos vagabundos de Arcabuco, donde la aguadepanela.",
		],
		date: "2024-12-31T10:01:42.834Z",
		media: [
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_0301.MP4?alt=media&token=7ddfe2bd-02c2-4934-ba7f-2eceef0f0092",
				type: "video",
			},
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_0299.JPEG?alt=media&token=2859019c-e724-433c-bf50-a5227fe58105",
				type: "image",
			},
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_0298.JPEG?alt=media&token=99f0eb47-51ba-4e10-a9d0-08f73443be04",
				type: "image",
			},
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_0289.JPEG?alt=media&token=4a7f7d30-adf6-464a-a435-a2f4d5a5b98b",
				type: "image",
			},
			{
				src: "https://firebasestorage.googleapis.com/v0/b/onceonce-11413.firebasestorage.app/o/entries-media%2FIMG_0302.JPEG?alt=media&token=7bf957f7-c27e-454e-a120-e693cfd7759a",
				type: "image",
			},
		],
		title: "Año nuevo en San Gil",
	},
];
