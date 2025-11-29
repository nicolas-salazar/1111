type RawEntry = {
	content: string[];
	date: string;
	media: Array<{ type: string; src: string }>;
	title: string;
};

export type Entry = RawEntry & { n: number };

const RAW_ENTRIES: RawEntry[] = [
	{
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
		content: [
			"Hoy tú me invitaste a mí, al Jam Rock en Chapinero.",
			"💬 Obviamente aquí se me hizo bolita el corazón: tú tomaste la iniciativa este vez y me invitaste a mí. Recuerdo ir saliendo del cumpleaños de Arturo para encontrarnos en la estación e ir juntos al evento; ese día sentí que tal vez sí podía pasar algo entre nosotros.",
		],
		date: "2024-08-07T10:01:42.834Z",
		media: [],
		title: "Jam Rock en Chapinero",
	},
	{
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
		content: [
			"Super luna azul y cena en usaquén (no recuerdo nombre del lugar).",
			'💬 El 08/18 pero de 2025 anoté: "fue en El Altillo, así se llamaba el lugar". Lo supe porque dejé una nota de la primera venta de NVL en el calendario y allí estaba lo de la super luna azul y anotado también el nombre "El Altillo".',
		],
		date: "2024-08-20T10:01:42.834Z",
		media: [],
		title: "El Altillo",
	},
	{
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
		content: [
			"No fue teatro en el centro sino cena en el peruano de la amiga. Guatavita.",
			"💬 La primera vez que nos paró un policía jajaja. Pero bueno, hoy quedan sólo risas. También tu primer Guatavizado; mareada y todo pero la pasaste bueno, ¿no?",
		],
		date: "2024-09-10T10:01:42.834Z",
		media: [],
		title: "Ceviche donde Diana",
	},
	{
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
		content: [
			"Me invitó a Quiebra Canto. Y bueno, conocí a medio mundo tuyo: allí estaban Juan; Angie; Natalia y Palita.",
		],
		date: "2024-09-19T10:01:42.834Z",
		media: [],
		title: "Quiebra Canto",
	},
	{
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
		content: [
			"La recojo en la noche del cumpleaños (ya era la 1am). Compramos gomitas. Ella lleva torta de zanahoria con una velita. Intentamos ver el diablo viste a la moda. Hicimos cosas malassssss.",
			"💬 Aunque no tengo fotos, sí tengo las bolsitas de las gomitas que nos comimos ese día. Qué romántico, ¿no? Mi guapa.",
		],
		date: "2024-10-19T10:01:42.834Z",
		media: [],
		title: "Nuestras primeras cochinadas",
	},
	{
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
		content: [
			"Ella fue al aeropuerto a esperarme de mi viaje a Mexicali/Tijuana.",
			"💬 😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭",
		],
		date: "2024-11-04T10:01:42.834Z",
		media: [],
		title: "El sueño 🛩️",
	},
	{
		content: [
			"Hicimos la prueba. Fuimos al café mágico de ella Ritmo y Aroma a esperar el resultado y a tomar té y chocolate, estuvo bien bonito, hasta le mostré cómo funciona lo básico de programación e hicimos un programita para calcular cuánto nos cuesta comprar x manzanas. Ya luego fuimos a la fábrica a recoger el uniforme para su papá, tomamos tinto y comimos pizza. Hablamos un rato con tu hermano de su viaje a Medellín. Fuimos al aeropuerto y le conté todo sobre cómo va a ser su viaje a Guayaquil el sábado. Regresamos a su casa y hablamos mucho, hasta la 1:00am. Qué día, ¿no?",
			"💬 A mira, nuestra primera prueba de embarazo. Jajaja 🤦‍♂️.",
		],
		date: "2024-11-07T10:01:42.834Z",
		media: [],
		title: "Un día, muchas cosas",
	},
	{
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
		content: [
			"Te recojo en el trabajo y estamos muy cansados ambos, nomás nos dormimos hasta el sábado bien tarde.",
		],
		date: "2024-11-15T10:01:42.834Z",
		media: [],
		title: "Dormir mucho después de Buenos Aires.",
	},
	{
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
		content: [
			"Nos vimos saliendo de la universidad, nos hicimos otra prueba para que ella esté tranquila. Caminamos de ida y vuelta hasta la 93 y fuimos a casa.",
			"💬 Otra prueba de embarazo 🤦‍♂️. Jajaja.",
		],
		date: "2024-11-25T10:01:42.834Z",
		media: [],
		title: "¿Qué título ponemos?",
	},
	{
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
		content: [
			"La recogí del trabajo después del monopoly. Nos dieron las 02:00; no fue mucho pero siempre vale la pena.",
		],
		date: "2024-11-29T10:01:42.834Z",
		media: [],
		title: "Después del monopoly",
	},
	{
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
		content: [
			"Chocolate a las diez de la noche con tu mamá y papá, después de llevar uniformes a Nayi. Nos dieron las 12:00 con ellos y las 02:00 a ti y a mi.",
			"💬 Obviamente lo de los unfiromes era una excusa. Jajaja. Mi guapa y sus planes de tía que a mi me enamoran y me enloquecen.",
		],
		date: "2024-12-02T10:01:42.834Z",
		media: [],
		title: "Chocolate nocturno",
	},
	{
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
		content: [
			"Celebramos el cumpleaños de Josué con un monopoly aunque tú no jugaste. Ahí conociste a Sebas y a Nayi. Nos quedamos juntos y dormimos hasta muy tarde el lunes.",
		],
		date: "2024-12-08T10:01:42.834Z",
		media: [],
		title: "Monpoly con Josué",
	},
	{
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
		content: [
			"Novena en casa de las tías Soraya y Yanis. Todo muy lindo, como todo contigo. Conocimos al nuevo hermano del pirata Ivo 🏴‍☠️.",
			"💬 El Inky bebecitooooooo 🐱.",
		],
		date: "2024-12-17T10:01:42.834Z",
		media: [],
		title: "Inky 🐱",
	},
	{
		content: [
			"Novena en tu casa. Y además almorzamos con Valeria y fuimos a comprar mercado tú, ella, Arturo, Simona, Fito y yo. AH, y además me quedé contigo esa noche, en tu cama, por aquello del robo y así. Qué día, ¿no?",
			"💬 Aquí fue cuando valió verga mi celular y por eso no hay fotos de ninguno de estos días :( jajaja.",
		],
		date: "2024-12-18T10:01:42.834Z",
		media: [],
		title: "Novena en tu casita",
	},
	{
		content: [
			"Te recogí en la noche saliendo del trabajo para quedarnos juntos e irnos al evento de los abuelitos en el pueblo de Lili. Dormimos como dos horas.",
		],
		date: "2024-12-23T10:01:42.834Z",
		media: [],
		title: "Dos horas de sueño para llevar cobijas",
	},
	{
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
	{
		content: [
			"Llegaste en moto del trabajo a mi apartamento y estuvo bien lindo porque sí nos levantamos temprano y sí desayunamos y sí nos dio el tiempo para almorzar (chino en San Miguel) y hasta alcanzamos a comer tu postre favorito en riquísimo yyyyy casi llegamos a tiempo al trabajo jajaja. La quiero.",
			"💬 Perdóneme, hasta aquí alcancé a subir las fotos :(, es re demorado eso usté viera.",
		],
		date: "2025-01-03T10:01:42.834Z",
		media: [],
		title: "Nuestro primer Riquísimo",
	},
	{
		content: [
			"Nos vimos en la nochecita para hacer la avena de Lili y lo que yo no sabía es que tú tenías planeado hacer los tacos de parmesano. A los tacos le doy un 6 jajaja, nos salieron mal; a la avena un 10 y al cocinar contigo en la noche un 3000. Me auedé contigo en tu camita y me levanté temprano porque el topo tenía pico y placa.",
		],
		date: "2025-01-06T10:01:42.834Z",
		media: [],
		title: "Tacos de parmesano",
	},
	{
		content: [
			"Hoy fue uno de esos días que se sintieron perfectos: amanecí contigo en tu camita; nos vimos al medio día para almorzar con Lili y llevarle su avena; estuvimos un rato en la fábrica y hablaste con la señora Flor; conociste a Diego quien estaba estampando unas camisetas; me viste jugar chutias en el parque mientras bajaban Valeria y Arturo con Fito y Simona; hicimos la visita donde Valeria y cerramos el día tomando tinto y echando chisme donde mi mamá. ¿Ah? Qué día Laura ✨❤️. Y además cerramos viendo La Maldición del Perla Negra y durmiendo juntos. Es el sueño.",
		],
		date: "2025-01-07T10:01:42.834Z",
		media: [],
		title: "Uno de esos días perfectos",
	},
	{
		content: [
			"Aunque hoy amanecimos juntos y no nos separamos, esta la cuento como un día diferente porque tiene que quedar en el registro que hoy fuimos a La Lupe 😮‍💨😮‍💨😮‍💨😮‍💨. Y además estaban don Armando y la señora Milena. Y además nos terminamos de ver Piratas del Caribe nonono. Y nos despertamos al medio día y desayunamos mantecados de San Gil que nos trajeron mi mamá y Valeria.",
		],
		date: "2025-01-08T10:01:42.834Z",
		media: [],
		title: "Juntos todo el día, hasta en La Lupe",
	},
	{
		content: [
			"Como mañana tengo que abrir la fábrica, me invitaste a pasar la noche en tu camita, imagínate lo bonito ❤️. Te recogí del trabajo y nomás fueron como cinco horas pero siempre vale la pena.",
		],
		date: "2025-01-09T10:01:42.834Z",
		media: [],
		title: "Noche en tu camita",
	},
	{
		content: [
			"Hoy pasaste por la fábrica con tu mamá y me llevaste lasaña para el almuerzo, ¿AH? Fue en los quince minutos que tenías libre antes de tu cita al médico. Ese es el sueño Laura.",
		],
		date: "2025-01-10T10:01:42.834Z",
		media: [],
		title: "Lasaña en la fábrica con tu mamita",
	},
	{
		content: [
			"Como sabes que ando raro, me invitaste a almorzar antes del trabajo. Fuimos al verde limón y como nos sobró tiempo, nos comimos una oblea ahí cerca al monkey. Estuvo rico. Gracias por tenerme paciencia Lau.",
		],
		date: "2025-01-11T10:01:42.834Z",
		media: [],
		title: "Verde limón antes del trabajo",
	},
	{
		content: [
			"Te recogí para que habláramos de lo de los bares y eso y terminamos haciendo un par de acuerdos y quedándonos juntos para vernos mañana con Arnold y Cami. Se nos hizo un poquito tarde pero al final sí nos vimos con ellos; fuimos a la Autogermana; vimos carros; almorzamos todos y te dejamos en el trabajo. Y todo eso con Robin, imagínate 🐝.",
		],
		date: "2025-01-12T10:01:42.834Z",
		media: [],
		title: "Robin",
	},
	{
		content: [
			"Hoy fuimos al centro con Arnold y Cami y a Magola y la pasamos rico. Llegamos a dormir un rato en la casa de mi mamá antes de irnos al blackbear y después al jam de blues en el bar de la 45. No terminó bien nuestro día pero al menos lo hablamos y no dejamos que quedara así. Nos quedamos juntos.",
		],
		date: "2025-01-14T10:01:42.834Z",
		media: [],
		title: "Centro con Arnold y Cami",
	},
	{
		content: [
			"Aunque amanecimos mal, nos vimos y conversamos. Y en la noche iba a recogerte pero Valeria se puso mala y nos acompañaste a la clínica. Cuando llegamos a casa hablamos de nuestros no negociables y tuvimos una conversación muy linda y sincera sobre lo que creemos que está bien o mal y sobre lo que nos gusta y lo que no; sentí que hoy sí hablamos desde el corazón y sin orgullo ni rivalidades, como que ahora sí vamos en la dirección correcta. Nos fuimos a dormir muy contentos ❤️.",
		],
		date: "2025-01-16T10:01:42.834Z",
		media: [],
		title: "Sin ponernos palos de orgulo...",
	},
	{
		content: [
			"HOY-FUIMOS-POR-CEVICHE-A-COTA-AAAAAAH 🥰. Y justo estaba cerrado el de Cota pueblo entonces fuimos al de vía a Siberia y vimos una cabra y fue muy lindo 🐐. Y te gustó el jugo de feijoa en leche.",
		],
		date: "2025-01-17T10:01:42.834Z",
		media: [],
		title: "Ceviche en Cota 😮‍💨",
	},
	{
		content: [
			"Mangonada de LaLupe en visita rápida al Monkey. Te ves tan tan tan linda con tu trajecito de trabajo 🥰. Y como iba en el Porsche Daniela aprovechó y le dimos una vuelta 🏎️.",
		],
		date: "2025-01-18T10:01:42.834Z",
		media: [],
		title: "Mangonada de LaLupe",
	},
	{
		content: [
			"Hoy tuvimos una cita porque saliste temprano del trabajo. Íbamos a ir al cine en Colina pero entonces la cartelera estaba re mala jajaja. Terminamos visitando a Juan en su trabajo comiendo mochis y después nomás nos quedamos hablando un montón por ahí.",
		],
		date: "2025-01-19T10:01:42.834Z",
		media: [],
		title: "Mochis con Juan",
	},
	{
		content: [
			"Almorzamos pastas con tus tías allá en San Miguel y le dimos al chisme y a las historias toooooooda la tarde; ellas me hacen sentir como en casa ❤️. Comimos un heladito en metrópolis (por fin probaste el de curuba pero no te gustó) mientras bajaba el trancón y nos quedamos juntos porque mañana toca madrugar para abrir la fábrica e ir a tu cita médica. Todo contigo se siente como en un sueño.",
		],
		date: "2025-01-21T10:01:42.834Z",
		media: [],
		title: "Pastas en casa de tus tías",
	},
	{
		content: [
			"Hoy fue bien lindo yyyyy madrugamos pero dormimos un montón también ✨: fuimos bien temprano a abrir la fábrica; tomamos tinto con la señora Flor y de ahí salimos a tu cita médica en la autopista; comimos un desayuno malo por ahí cerca y agarramos un sitp que nos trajo a casa desde la 19 con 95. Llegamos y estaba haciendo un solazzzzzo ☀️ a eso de las 10:30 y nos arrunchamos hasta bien tarde. Terminamos pidiendo una pizza y haciendo aseo juntos y nos vimos un pedacito de película pero se fue el internet.",
		],
		date: "2025-01-22T10:01:42.834Z",
		media: [],
		title: "Tinto con la señora Flor bien madrugados",
	},
	{
		content: [
			"Fue un día loquísisisisimo. Anoche te recogí en el trabajo y hablamos hasta muy tarde y me quedé en tu camita a escondidas de tus papás pero nos agarró el sueño y no me fui temprano y me tocó quedarme escondido en tu clóset hasta que tus papás se subieran y justo un minuto después de que me pude escapar ellos entraron a tu habitación a despedirse 🥷🥷🥷🥷. Todo de infarto jajaja. Y como estábamos con las temperaturas subidas me regresé a verte a escondidas y me los encontré saliendo del parqueadero. Imagínate todo eso nonono. Vinimos a casa antes del trabajo y comimos huevitos con arepa y creo que te quiero mucho.",
		],
		date: "2025-01-25T10:01:42.834Z",
		media: [],
		title: "Escondido yo en tu clóset (no homo jajaja)",
	},
	{
		content: [
			"Te preparé la cena: arroz con pollo de American y para el postre tu tentación de maracuyá del riquísimo. De camino del trabajo pasamos por el éxito y compramos algunas cositas para hacer el ceviche de mango de almuerzo al otro día, todo en el topo 🚗🚗🚗. Se nos hizo muy muy tarde pero igual no importó; hoy sentimos esa calicatencia y como que no queríamos irnos.",
		],
		date: "2025-01-26T10:01:42.834Z",
		media: [],
		title: "Ceviche de mango",
	},
	{
		content: [
			"Nos entregaron el local de NVL y tú fuiste y llevaste flores y torta ❤️🌼 y nos ayudaste a organizar y entonces yo te quiero y no puedo dejarte ir nunca. Y como si fuera poco, me diste posada en la noche antes de mi vuelo a Medellín.",
		],
		date: "2025-01-28T10:01:42.834Z",
		media: [],
		title: "Flores amarillas para NVL",
	},
	{
		content: [
			"Estamos mal pero igual quisimos vernos para almorzar. Y entonces de repente tu papá se nos fue subiendo al carro jajaja para que lo acercáramos a San Miguel. Tú y yo terminamos comiendo en el Eneldo y antes de eso caminamos por ahí y me mostraste dónde era tu casita. Me gusta aprender de ti y de tu pasado.",
		],
		date: "2025-01-31T10:01:42.834Z",
		media: [],
		title: "Almuerzo en el Eneldo, en San Miguel",
	},
	{
		content: [
			"Hoy fuimos al cumpleaños de la abuela Yolanda yyyyy me tuve que quedar solo cuando te fuiste al trabajo para conseguirte tu pedazo de torta. Todo muy lindo ❤️. La tía Gloria me dijo que te cuide o que si no me las veré con ella. Jajaja. Y el secreto es que medio nos bañamos en tu casa justo antes de que llegaran Nata y tu mamá 🥷.",
		],
		date: "2025-02-01T10:01:42.834Z",
		media: [],
		title: "Cumpleaños de la abuela Yolanda",
	},
	{
		content: [
			"Hoy fue desayuno muy muy temprano, con tu mamá de cómplice, para que comiences tu semestre con energía 💪 jajaja. Y por ahí nos vimos un ratito en la noche después de clases.",
		],
		date: "2025-02-03T10:01:42.834Z",
		media: [],
		title: "🍗🍗🍗👩‍🏫",
	},
	{
		content: [
			"Entonces nos vimos de sorpresa en la oficina de los pasaportes y fuimos a pie hasta gurús para almorzar y después a la clínica a tu clase. Y en el camino paramos en el oxxo y nos compramos esas gomitas de bonbonbum que estaban buenísimasssss 😮‍💨.",
		],
		date: "2025-02-04T10:01:42.834Z",
		media: [],
		title: "Pasaportes",
	},
	{
		content: [
			"Llegaste al local después de clases a conocer los maniquís y Lili nos gastó postre al salir. Lili te quiere y eso me hace feliz. Yyyyy de ahí nos fuimos a casa; hicimos palomitas; nos dormimos juntos y nos levantamos tardísimo 👌👌👌👌.",
		],
		date: "2025-02-06T10:01:42.834Z",
		media: [],
		title: "Postre con Lili",
	},
	{
		content: [
			"Cumpleaños de tu mamá AAAAAAAAA 🫶🫶🫶🫶🫶🫶. Fue express porque tenías trabajo pero ahí alcanzamos a comer torta. Y antes de que llegaras me quedé dándole al chismesito con tus tías (sí, yo llegué antes y cuando llegaste me viste asomado por la ventana) y Yanis me invitó a su cumpleaños el otro domingo.",
		],
		date: "2025-02-08T10:01:42.834Z",
		media: [],
		title: "Cumpleaños de tu mamita",
	},
	{
		content: [
			"Asadito con Angie y Mathiu allá en la fábrica ✨. Y se quedaron un buen rato hablando solos y nosotros somos bien chismosas y ojalá se hayan besado o algo así jsjsj.",
		],
		date: "2025-02-10T10:01:42.834Z",
		media: [],
		title: "Asao con Angie y Mathiu",
	},
	{
		content: [
			"Hoy cumplimos tres meses de novios ennnnnn el local de héroes grabando tu entrevista como doctora y la de Angie como psicóloga y todo fue muy mágico. Almorzamos todos y luego llevamos a Lili y luego vinimos a dormir un ratico antes de que te fueras al trabajo. Escribo esto cinco minuticos después de que te fuiste; ya te extraño y ya no sé cómo expresarte lo mucho que te quiero pero más tardecito te llevo a casa y te beso ❤️. PD: sí nos vimos en la noche y comimos pizza y te arrunché un rato en tu camita y me fui y todo muy mágico 🧙‍♂️.",
		],
		date: "2025-02-11T10:01:42.834Z",
		media: [],
		title: "Nuestros primeros tres meses",
	},
	{
		content: [
			"Llegó el día de viajar a México AAAAAA y entonces fuimos a celebrarle el cumpleaños a Yanis y la tía Soraya hizo chimba de sancocho. Nos vimos en la nochecita y arrancamos.",
		],
		date: "2025-02-14T10:01:42.834Z",
		media: [],
		title: "Nos vamos a Méxicooooooo 🛩️",
	},
	{
		content: [
			"Llegamos a México, a la Ciudad de México.",
			"💬 Perdóneme, se la debo :(",
		],
		date: "2025-02-15T10:01:42.834Z",
		media: [],
		title: "Tú y yo en CDMX",
	},
	{
		content: [
			"Seguimos en La Ciudad de México.",
			"💬 Perdóneme, se la debo :(",
		],
		date: "2025-02-16T10:01:42.834Z",
		media: [],
		title: "",
	},
	{
		content: [
			"AH Mérida. No estaba abierto el restaurante de André :(",
			"💬 Perdóneme, se la debo :(",
		],
		date: "2025-02-17T10:01:42.834Z",
		media: [],
		title: "Mérida sin taco",
	},
	{
		content: [
			"Mérida 2: Conocimos a don Apolinare Campos yendo a los cenotes.",
			"💬 Perdóneme, se la debo :(",
		],
		date: "2025-02-18T10:01:42.834Z",
		media: [],
		title: "Cenotes",
	},
	{
		content: [
			"Monterrey y conociste al sayocean ❤️.",
			"AAAAAAAAAAAAAA",
			"💬 Perdóneme, se la debo :(",
		],
		date: "2025-02-19T10:01:42.834Z",
		media: [],
		title: "Hoy conociste al SayOcean",
	},
	{
		content: [
			"AH Guadalajara ❤️. Y conociste al patito extremo.",
			"💬 Perdóneme, se la debo :(",
		],
		date: "2025-02-20T10:01:42.834Z",
		media: [],
		title: "Mi bella Guadalajara con mi bella Laura",
	},
	{
		content: ["Guadalajara día 2.", "💬 Perdóneme, se la debo :("],
		date: "2025-02-21T10:01:42.834Z",
		media: [],
		title: "Seguimos en Guadalajara",
	},
	{
		content: ["Querétaro.", "💬 Perdóneme, se la debo :("],
		date: "2025-02-22T10:01:42.834Z",
		media: [],
		title: "Llegamos a Querétaro",
	},
	{
		content: ["Regresamos a Colombia.", "💬 Perdóneme, se la debo :("],
		date: "2025-02-23T10:01:42.834Z",
		media: [],
		title: "Volviendo de México",
	},
	{
		content: [
			"Hoy quisiste que habláramos porque eres la más linda del mundo y no solo sí lo hablamos bien, con corazón, sino que terminamos jugando bolos con Mathiu y Angie; estuvo bien bonito y yo gané porque soy incontenible 🎳🔥🔥🔥. Nos quedamos juntos y nos fuimos temprano a tu casa para que hicieras tarea.",
		],
		date: "2025-02-24T10:01:42.834Z",
		media: [],
		title: "Bolos con Angie y Mathiu",
	},
	{
		content: [
			"Como al parecer no podemos estar un día sin vernos ❤️ nos vimos en la nochecita porque tú salías de la shaio con Angie y yo de Porsche con Mathiu. Tomamos cafecito con Angie y Mathiu y luego compramos pizza y hablamos un montón y entonces ellos obvio que se gustan y isssss jajaja. tequieromuchozarigüeya.",
			"💬 Anda mira todo lo que salíamos los cuatro.",
		],
		date: "2025-02-25T10:01:42.834Z",
		media: [],
		title: "Mil Delicias con Angie y Mathiu",
	},
	{
		content: [
			"Hoy tenías tarea entonces viniste a casa a hacer tarea acá. Llegaste a la estación en la Suba donde te recogí y nos regresamos a pie, de camino pasamos por el éxito y compramos mercado para hacer perritos calientes. Quedaron ricos; tú adelantaste tu tarea y te quedaste 🌭🌭🌭🌭.",
		],
		date: "2025-02-26T10:01:42.834Z",
		media: [],
		title: "Perritos calientes con tarea en casa",
	},
	{
		content: [
			"Fuimos por arepas y pasteles a San Fernando pero me porté mal y salió mal. Lo bueno fue que no dejamos que se agrandara la pelea y terminamos donde tus días haciendo visita y ya cuando íbamos a casa, pasamos por cocheros y compartimos un perro. Íbamos a ver Lilo y Stitch pero nos dormimos jaja.",
		],
		date: "2025-02-28T10:01:42.834Z",
		media: [],
		title: "Cocheritos",
	},
	{
		content: [
			"Te recogimos con Mathiu del trabajo yyyyy nos quedamos dándole al chismesito hasta bien tarde, de Angie y así. También conociste a sus papás lo cual me hace feliz. Yo te quiero, mi guapa ❤️.",
		],
		date: "2025-03-02T10:01:42.834Z",
		media: [],
		title: "Chismesito con Mathiu y sus papás",
	},
	{
		content: [
			"HOYPORFINVIMOSLILOYSTITCH y además nos comimos un heladito en metrópolis y conociste el apartamento a donde me voy a mudar y dijiste yo queiro un helao jsjsjs más linda 🥰🥰🥰🥰😭😭😭😭.",
		],
		date: "2025-03-03T10:01:42.834Z",
		media: [],
		title: "Lilo & Stitch: hoy sí",
	},
	{
		content: [
			"Te llevé pizza en la noche y pedimos permiso para quedarnos en tu camita. Me fui tarde, como a las 10am después del desayuno rico que te hiciste.",
		],
		date: "2025-03-04T10:01:42.834Z",
		media: [],
		title: "Tu camita, pero con permiso",
	},
	{
		content: [
			"Cumpleaños de mi mamá. Ella con su tiramisú y Lili y tú con tu tentación de maracuyá.",
		],
		date: "2025-03-05T10:01:42.834Z",
		media: [],
		title: "Cumpleaños de mi mamita",
	},
	{
		content: [
			"Noche en el observatorio de tu universidad con Angie y Mathiu. Y salimos y comimos cocheros y me quedé en tu casita hasta las 5am para que no nos pillaran tus papás.",
		],
		date: "2025-03-06T10:01:42.834Z",
		media: [],
		title: "Jueves de observación",
	},
	{
		content: [
			"Este fin de semana tuvimos muchos problemas y fue difícil, pero así y todo ambos quisimos vernos en la noche del lunes saliendo de clases. Fue bonito; como que queríamos besarnos pero nos daba pena y nos tocábamos las manos de a poquitos y jugamos y fue divertido y comimos postre en Turquesa (AH, turquesa; debe ser de los lugares con los que más cariño guardo por ahí). Fuimos a tu casita y tu papá nos regaló unos cogollos con los que vamos a hacer una ensalada mañana con mango.",
		],
		date: "2025-03-10T10:01:42.834Z",
		media: [],
		title: "Postrecito en Turquesa",
	},
	{
		content: [
			"Viniste después de clases a hacer la ensalada pero como yo me pasé toda la tarde haciendo aseo, no almorcé y terminamos yendo al wok a comer algo y entonces ya no hicimos la ensalada jaja. Lo que sí hicimos fue que fuimos al Goyurt y estuvo bien bonito porque pensamos que lo habían quitado y cuando ya estábamos bien decepcionados lo encontramos (golazo); el tuyo fue de chocolate con guanábana y leche condensada y el mío de mango con guanábana y salsa de mora y ambos estaban potentes.",
		],
		date: "2025-03-11T10:01:42.834Z",
		media: [],
		title: "No hicimos la ensalada de cogollos",
	},
	{
		content: [
			"Hoy sí hicimos la ensalada. Quedó RE elegante 😮‍💨😮‍💨😮‍💨😮‍💨😮‍💨; le pusimos pechuga de pollo cocinada y un poquito sofreída; mango; los cogollos y alguito de granola. Y nos la comimos mientras terminábamos de ver Dodgeball. Y sobró algo de pollo que fritamos y dejamos para el desayuno de mañana. Va a ser bonito recordar que hoy me diste la llave de tu casita para traer tus pastas del tratamiento y que todos estuvieron de acuerdo, y que saliste de clases y llegaste a mi casa en moto pero te daba miedo cruzar la avenida. También hiciste tarea acá, antes de que hiciéramos la ensalada.",
		],
		date: "2025-03-12T10:01:42.834Z",
		media: [],
		title: "Hoy sí hicimos la ensalada de cogollos",
	},
	{
		content: [
			"Nos vimos un ratito en la noche para grabar el comercial de tu empresa de confecciones de mentiras para tu clase allá en la fábrica; estuvo bonito. Y además comimos perro donde el vecino de la reina. Y me trajiste una gelatina de colores y me encanta y me gustas tú.",
		],
		date: "2025-03-13T10:01:42.834Z",
		media: [],
		title: "Tu empresa de confecciones",
	},
	{
		content: [
			"Hoy yo estaba triste y tu también y entonces me dijiste que si podías visitarme en la noche después del trabajo y eso siempre es un sí. Hablamos un ratito y nos fuimos a dormir; fue lindo; gracias por venir y hacerme sentir querido cuando estoy triste ❤️.",
		],
		date: "2025-03-14T10:01:42.834Z",
		media: [],
		title: "tristes-ya-no-tristes",
	},
	{
		content: [
			"Hoy fue noche de nachos en el Monkey, hace mucho no iba y definitivamente me encantas y me siento perdidamente enamorado viéndote en el trabajo. Saliste tempranito y nos fuimos a tu casa y te arranché; yo me levanté a las 4am para regresarme a casa y ni te diste cuenta, ahí te dejé tu besote en la frente y me fui como el ninja 🥷🥷🥷🥷🥷.",
		],
		date: "2025-03-15T10:01:42.834Z",
		media: [],
		title: "Qué guapa te ves en el trabajo",
	},
	{
		content: [
			"Hoy fue otra vez tarde/noche en el Monkey pero fui con Mathiu. Hablamos de Angie y vimos el partido y comimos muy rico y nos regresamos todos juntos; dejamos a Mathiu en su casa y nos regresamos tú y yo a la mía que ahora se siente como la nuestra. Vimos Maze Runner y me gustó excepto por el cliché de que mataran al gordito, pero estuvo buena; a ver cuándo nos vemos la 2 que según tú es mala pero que toca ver (o ver el resumen) para poder ver la 3 que según tú está buenísima.",
		],
		date: "2025-03-16T10:01:42.834Z",
		media: [],
		title: "Maze Runner I",
	},
	{
		content: [
			"Hoy nos comimos un heladito express en el goyurt de metrópolis, no pudimos quedarnos mucho rato pero estuvo rico rico.",
			"💬 Muchas gracias por siempre encontrar el tiempo para vernos, así sea solo un poquito antes del trabajo.",
		],
		date: "2025-03-18T10:01:42.834Z",
		media: [],
		title: "Gurús express",
	},
	{
		content: [
			"Jugó Argentina contra Uruguay y Mathiu y yo nos vimos el partido en el Monkey pero no nos encontramos allá sino que pasamos a recogerte a la Universidad. Comimos mucho y nos reímos y te quiero y entonces me quedé en tu casita esa noche y pudimos dormir hasta tarde porque tu mamá estaba donde tus tías y además de todo fuimos a almorzar con ella y la tía Yanis allá en la casa de San Miguel un chino que estaba buenísimo. Ya luego te fuiste a trabajar y qué pesar :(",
		],
		date: "2025-03-21T10:01:42.834Z",
		media: [],
		title: "Dormimos hasta tarde en tu casita",
	},
	{
		content: [
			"AAAAAA hoy fue un día muy lindo Laura. No tuviste que trabajar el domingo y entonces decidiste pasarlo conmigo ❤️❤️❤️❤️❤️. Y hasta el lunes bien tarde. Hoy nos vimos las otras dos de Maze Runner y sí sí, estuvo bien bueno e intentamos ir a comer arepa en Cota pero valió verga porque quitaron el sitio jaja :( pero entonces mejor porque terminamos comiendo pizza mexicana y estaba severa y nos quedamos dormidos como gordas el lunes hasta tardecita y comimos más pizza y jugaste el de The Last of Us un ratico y nos volvimos a quedar dormidos y luego te hiciste severo arroz con leche y sobró para tu mamá y la mía y a ambas les gusto y entonces te fuiste qué pesar otra vez :(. Te quiero mucho mi guapa, gracias por darme tu único domingo libre quién sabe en cuánto tiempo.",
		],
		date: "2025-03-23T10:01:42.834Z",
		media: [],
		title: "Tu primer domingo libre en años, conmigo ❤️",
	},
	{
		content: [
			"Hoy jugó Colombia contra Paraguay y a mi la verdad ni me gusta eso pero era la excusa perfecta para ir a visitarte al Monkey y verte un ratito. Y sí, me encantas, yo te veía de a poquitos por allá bien guapa mientras le chambeadas. Después del trabajo fuimos a tu casita, aprendimos algo de excel juntos, te comiste la hamburguesa que te preparó Juan y fuimos a dormir. Yo me fui muy a las 3:30 de la mañana con el corazón en la mano de dejarte ahí solita pero bueno, tocaba.",
		],
		date: "2025-03-25T10:01:42.834Z",
		media: [],
		title: "Excusa para verte en el trabajo",
	},
	{
		content: [
			"Hoy celebramos el grado de Juan y la despedida de Papita. Todo muy nostálgico :(",
			"💬 Nooooooo :(",
		],
		date: "2025-03-27T10:01:42.834Z",
		media: [],
		title: "Grado de Juan",
	},
	{
		content: [
			"Hiciste arepitas con chocolate para la cena y yo me mueroooooooo. Te imagino yendo a comprar la harina y el queso y se me derrite todo 🥰🥰🥰🥰❤️❤️❤️❤️.",
		],
		date: "2025-03-31T10:01:42.834Z",
		media: [],
		title: "Arepitas con chocolate",
	},
	{
		content: [
			"Hoy fue el trasteo y viniste después del trabajo a pasar la primera noche en la nueva casa juntos ❤️. ",
		],
		date: "2025-04-04T10:01:42.834Z",
		media: [],
		title: "Trasteo juntos",
	},
	{
		content: [
			"Este fue nuestro primer domingo en forma en la nueva casa y dormimos hasta muy tarde y todo muy lindo excepto por aquello de que dejé las llaves por dentro cuando salimos con Mathiu a recogerte. Jajaj :(. Pero hey, las risas no faltaron. Y estuvo rico el Goyurt aunque se nos congeló un poquito. Y además me trajiste mi cactus de acuarelas y yo me muero ❤️❤️❤️❤️ y mi plantita y uvas chéveres nononono. Yo te quiero.",
		],
		date: "2025-04-06T10:01:42.834Z",
		media: [],
		title: "Primer domingo en la nueva casa",
	},
	{
		content: [
			"Nos asustó tu hermano escapándose de casa pero hey, las risas no faltaron :'v. ",
		],
		date: "2025-04-15T10:01:42.834Z",
		media: [],
		title: "Juan se fue",
	},
	{
		content: [
			"Hoy querías que almorzáramos juntos pero como yo tenía muchas entrevistas, trajiste pasta y pollo e hiciste el almuerzo tú misma 🍝, más linnnnnnnda 🫶. Y además viniste en la noche después del trabajo y nos dormimos hasta no tan tarde porque te tocaba trabajar también.",
			"💬 ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️",
		],
		date: "2025-04-16T10:01:42.834Z",
		media: [],
		title: "Me hiciste el almuerzo porque andaba yo en muchas entrevistas",
	},
	{
		content: [
			"Vinieron Tati y Mateo y Mathiu e hicimos brownies con tu liderazgo de estrella ⭐️ y jugamos stop y parqués y que la revisa semana y te quedaste porque mañana vamos a comer pescado a donde tus tías 🥰. ",
		],
		date: "2025-04-17T10:01:42.834Z",
		media: [],
		title: "Brownies con Tati, Mateo y Mathiu",
	},
	{
		content: [
			"Laura amaneció enferma, parecía un muerto 🤢, pero le ayudé a ponerse bien (dormimos dos horas más). Fuimos a casa de su familia, comimos pescado y le eché limón en el ojo a su primo (fue sin querer). La familia de Laura me quiere mucho y agradece mucho que yo haga parte. Pero Laura me quiere más, ella me quiere mucho mucho y me hace muy feliz porque yo también quiero mucho a Laura. Cómo te quiero ❤️❤️❤️❤️. Y además hicimos tinto y fuimos unas celebridades porque como que a todos les gustó; ¿o todos fingieron?",
		],
		date: "2025-04-18T10:01:42.834Z",
		media: [],
		title: "Mojarra en casa de tus tías",
	},
	{
		content: [
			"Hoy nos vimos un ratito antes del trabajo, fueron nomás como 20 minutos pero yo feliz comiendo goyurt contigo. Lo único triste es que te fuiste :(",
		],
		date: "2025-04-19T10:01:42.834Z",
		media: [],
		title: "Otro goyurt express",
	},
	{
		content: [
			"hoytuvimosunacitaparacomernoselarrozconlechequemetrajomimamá❤️. ",
		],
		date: "2025-04-20T10:01:42.834Z",
		media: [],
		title: "Arroz con leche",
	},
	{
		content: [
			"Aunque estás en parciales, me dijiste que si quería pasar un rato en la nochecita a vernos. Y yo obvio fui y además llevé mi pijama y un skwinklote. Me terminé quedando y nos levantamos ya de día, hiciste el desayuno y salimos juntos tú a tu clase y yo a mi casa que ahora queda bien cerca porque somos vecinos y entonces me regresé a pie.",
		],
		date: "2025-04-22T10:01:42.834Z",
		media: [],
		title: "Llevé yo mi pijama",
	},
	{
		content: [
			"Hoy de nuevo te visité en la nochecita tú a contarme de tu 5 en el parcial de educación porque eres una ⭐️ y yo a contarte que voy a trabajar en GoDaddy. Yyyy otra vez llevé mi pijama y nos levantamos ya de día y todo muy lindo y calientito ❤️❤️⭐️⭐️⭐️⭐️❤️❤️⭐️. ",
		],
		date: "2025-04-23T10:01:42.834Z",
		media: [],
		title: "Una ⭐️",
	},
	{
		content: [
			"Yo ando desde ayer y todo el fin de semana haciendo mi prueba técnica de Snappr y tú la más hermosa me trajiste arroz chino para el almuerzo. Cómo te quiero ❤️❤️❤️.",
		],
		date: "2025-04-26T10:01:42.834Z",
		media: [],
		title: "Chino para la prueba de Snappr",
	},
	{
		content: [
			"Hoy estuvimos de paseo en el topolino hasta la Lupe a llevarles la dotación. Estuvo bien bonito el viaje y el almuerzo 😮‍💨😮‍💨😮‍💨😮‍💨😮‍💨. Y además la señora Milena nos enseñó a hacer chamoy AAAAAAAAAA 😭😭. ",
		],
		date: "2025-04-30T10:01:42.834Z",
		media: [],
		title: "El Topo -> La Lupe",
	},
	{
		content: [
			"Hoy vimos Jump Street y estuvo severa. Y volvimos a hacer avena juntos para el desayuno de mañana ❤️. ",
			"💬 Hagamos más avena; todos los días; siempre :(",
		],
		date: "2025-05-04T10:01:42.834Z",
		media: [],
		title: "Jump Street",
	},
	{
		content: [
			"Fuimos al cine, ¿puedes creerlo? Jajaja 🍿🍿🍿🍿. Vimos la de Until Dawn y estuvo chimba y compramos gomitas y entonces salimos y estabas asustada y vinimos a casa y nos vimos al Rubius jugando PT y nos dormirnos y todo muy mágico. ",
			"💬 El primero de muchos, ¿no? Me encanta ir al cine contigo guapetona.",
		],
		date: "2025-05-05T10:01:42.834Z",
		media: [],
		title: "Nuestro primer cine",
	},
	{
		content: [
			"Me quedé en tu casita y eso siempre es especial. Hiciste huevos costeños jajaja -con queso- para el desayuno y salimos juntitos, tú a tu yoga y yo a mi casa.",
		],
		date: "2025-05-06T10:01:42.834Z",
		media: [],
		title: "Huevos costeños en tu casita.",
	},
	{
		content: [
			"Como se nos entró la goma del cine y las películas y eso, nos vimos la de la Isla Siniestra y estuvo seeeeeevera 👌👌👌. Lástima que te quedaste dormida faltando como quince minutos de película.",
		],
		date: "2025-05-07T10:01:42.834Z",
		media: [],
		title: "La Isla Siniestra",
	},
	{
		content: [
			"Como mañana me voy para Medellín nos vimos saliendo del trabajo y nos quedamos juntos en mi camita. Sí estuvo muy triste irme y dejarte ahí solita durmiendo pero a la vez me hace feliz sentirte tan cerquita y tan parte de mi vida. Paisas hijueputas jaja :( 🛫. ",
		],
		date: "2025-05-11T10:01:42.834Z",
		media: [],
		title: "El Ovejo antes de Medellín",
	},
	{
		content: [
			"HOY-ABRÍ-MI-CAJA-DE-EMERGENCIAS-AAAAAAAAAA cómo la quiero y como la extraño yo por acá tan lejos 😭❤️❤️🥰🚔🚔⭐️❤️🍿🥰🚔. ",
		],
		date: "2025-05-12T10:01:42.834Z",
		media: [],
		title: "Caja de Emergencias",
	},
	{
		content: [
			"Yo sigo por acá en Medellín pero con todo y lo que nos gusta hacernos videollamada, seguimos llamándonos en la noche a contarnos nuestro día y yo te siento bien cerquita. Ya mero regreso, mi guapa 🛬. ",
		],
		date: "2025-05-14T10:01:42.834Z",
		media: [],
		title: "Videollamada desde Medellín",
	},
	{
		content: [
			"Hoy tuvimos una cita para ir a ver esta de destino final al cine y yo me puse guapo para ti pero el que te dio la sorpresa de las boletas fue el pollito 🐥🐥🐥🐥🐥. Estuvo chimba chimba y comimos de los dulces esos re severos como de yogurt y nos quedamos juntos, como debe ser ❤️.",
		],
		date: "2025-05-18T10:01:42.834Z",
		media: [],
		title: "Pollito 🐥",
	},
	{
		content: [
			"Me quedé en tu casita de incógnito, como los ninjas 🥷. Cuando llegué me diste un huevo jajaja y una infusión de té que me hiciste porque huelo a chunchullo y yo me muero de amor 🥰🐥🥷. ",
		],
		date: "2025-05-20T10:01:42.834Z",
		media: [],
		title: "De incógnito en tu camita",
	},
	{
		content: [
			"Cita médica en la mañana y mucha tarea en la noche. Almorzamos en wok y estuvo rico y nos regresamos caminando hacia tu universidad y me dejaste en el sitp para ir a la fábrica así bien romántico 🚐.",
		],
		date: "2025-05-22T10:01:42.834Z",
		media: [],
		title: "Días de adultos mayores",
	},
	{
		content: [
			'Y entonces tu mamá dice: "Laura para eso de la cicla, para eso de la motricidad nunca sirvió". JAJAJA. Eso mientras almorzábamos lentejas en tu casita con ella. 🚲🚲🚲🚲🚵🚵‍♀️🚵‍♀️🚵‍♂️🚴🚲🚲. ',
		],
		date: "2025-05-24T10:01:42.834Z",
		media: [],
		title: "Laura y la bici",
	},
	{
		content: [
			"Hoy nos vimos Lilo & Stitch con Juan, la Chica y Carreño 🧌 (<— imagina que ese es Stitch jajaja). Y además te quedaste en mi casita después de eso. Gracias por invitarme a tu grupito y a compartir con ellos.",
		],
		date: "2025-05-28T10:01:42.834Z",
		media: [],
		title: "Lilo & Stitch con Juan y la Chica, en cine",
	},
	{
		content: [
			"pobreLauralesacaronsangre:(. Y fuimos al Unicentro a cambiar tus Vans y entonces te ves bien punk y ready para el trabajo. Y como me dio moco, en la nochecita me hiciste aguamiel con jengibre y cómo te quiero 🫚🫚🫚.",
			"💬 ¿Soy los vans que están bajo tu cama?",
			"💬 Alta referencia al SayOcean 😮‍💨.",
		],
		date: "2025-05-29T10:01:42.834Z",
		media: [],
		title: "Buscando tus vans",
	},
	{
		content: [
			"Hoy fue la final de la champions y fuimos al monkey a “ver el partido” pero mientras tanto yo te veía a ti. Más linnnnnnda mi guapa.",
		],
		date: "2025-06-01T10:01:42.834Z",
		media: [],
		title: "Otra excusa para verte en el trabajo",
	},
	{
		content: [
			"Llegamos del monkey juntos tan tan cansados que nos dormimos rapidito. El lunes te fuiste temprano a casa que a hacer tarea y así ya no es divertido 😒.",
		],
		date: "2025-06-02T10:01:42.834Z",
		media: [],
		title: "¿Muy cansados?",
	},
	{
		content: [
			"Fuimos a tu cita al dermatólogo allá en El Bosque en la tardecita y saliendo pasamos por instituto donde yo dictaba clases y comimos la sopa de cebolla esa re severa en Chez Jack. Y un pescado rico también. Me hizo muy feliz que estuviéramos allá porque recuerdo que descubrimos el restaurante con Valeria recién yo te estaba conociendo y desde ahí quería que viniéramos juntos ♥️.",
		],
		date: "2025-06-03T10:01:42.834Z",
		media: [],
		title: "Chez Jack",
	},
	{
		content: [
			"Llegaste en la nochecita a la fábrica con una gelatina DE-LI-CI-OOOOOO-SA con dibujo de 🌸 y me ayudaste a poner los herrajes en el uniforme de Jean. AH Y ADEMÁS VISITAMOS A ARTURO Y ESTÁ GRANDOTE Y PANZÓN 👶👶👶👶👶.",
		],
		date: "2025-06-04T10:01:42.834Z",
		media: [],
		title: "Gelatina de 🌸",
	},
	{
		content: ["Día de tintura allá en Cajicá con tus tías. Esssstilo 💅."],
		date: "2025-06-05T10:01:42.834Z",
		media: [],
		title: "De tintura con las tías 💅",
	},
	{
		content: [
			"Nos vimos saliendo del trabajo para ir a casa a dormir y te quedaste y entonces al otro día (sábado) fuimos a las ferias y compramos tus boticas para Buenos Aires y además el hilo para mi cortina y terminamos comiendo hamburguesas de pescado en la Begonia 🙂‍↔️🙂‍↔️🙂‍↔️🙂‍↔️. ",
			"💬 Cómo me gustan esas boticas 😍😍😍😍😍😍",
		],
		date: "2025-06-06T10:01:42.834Z",
		media: [],
		title: "Boticas para Buenos Aires",
	},
	{
		content: ["Guayaquil.", "💬 Perdóneme, se la debo :("],
		date: "2025-06-09T10:01:42.834Z",
		media: [],
		title: "Escala en Guayaquil",
	},
	{
		content: ["BA 1 (306).", "💬 Perdóneme, se la debo :("],
		date: "2025-06-10T10:01:42.834Z",
		media: [],
		title: "De nuevo en Buenos Aires - I",
	},
	{
		content: ["BA 2.", "💬 Perdóneme, se la debo :("],
		date: "2025-06-11T10:01:42.834Z",
		media: [],
		title: "Buenos Aires II - II",
	},
	{
		content: ["BA 3.", "💬 Perdóneme, se la debo :("],
		date: "2025-06-12T10:01:42.834Z",
		media: [],
		title: "Buenos Aires II - III",
	},
	{
		content: ["BA 4.", "💬 Perdóneme, se la debo :("],
		date: "2025-06-13T10:01:42.834Z",
		media: [],
		title: "Buenos Aires II - IV",
	},
	{
		content: ["BA 5. "],
		date: "2025-06-14T10:01:42.834Z",
		media: [],
		title: "Buenos Aires II - V",
	},
	{
		content: [
			"De BA a Colonia (Agustina) en ⛴️. ",
			"💬 Perdóneme, se la debo :(",
		],
		date: "2025-06-15T10:01:42.834Z",
		media: [],
		title: "A Colina, en ferry.",
	},
	{
		content: ["Colonia 2.", "💬 Perdóneme, se la debo :("],
		date: "2025-06-16T10:01:42.834Z",
		media: [],
		title: "En Colonia del Sacramento, tú y yo",
	},
	{
		content: [
			"Colonia 3 y llegamos a Montevideo (1006).",
			"💬 Perdóneme, se la debo :(",
		],
		date: "2025-06-17T10:01:42.834Z",
		media: [],
		title: "Mar en Montevideo, Uruguay",
	},
	{
		content: [
			"Nos caminamos todo el centro de Montevideo y se nos acabó el paseo :(",
			"💬 Perdóneme, se la debo :(",
		],
		date: "2025-06-18T10:01:42.834Z",
		media: [],
		title:
			"Que ya nos toca irnos a la casa pero yo me quiero quedar en Uruguay, contigo",
	},
	{
		content: [
			"Llegamos a casita. Y como yo traía antojo de pollo, fuimos del aeropuerto a American 🍗🍗🍗.",
		],
		date: "2025-06-19T10:01:42.834Z",
		media: [],
		title: "Del aeropuerto a American Broasted",
	},
	{
		content: [
			"Hoy fue tarde de sancocho allá donde tus tías. Y de camino pasamos a visitar a Arturo y estaba mi mamá y entonces nos dieron arroz con pollo del que hace Josué.",
			"💬 Estuvo una go-no-rre-a 😮‍💨😮‍💨😮‍💨😮‍💨😮‍💨😮‍💨😮‍💨😮‍💨",
		],
		date: "2025-06-21T10:01:42.834Z",
		media: [],
		title: "Sancocho en casa de tus tías",
	},
	{
		content: [
			"HOY-SALIMOS-CON-KWAN AAAAAAAAAAA. Tomamos aguadepanela allá en vía a la Calera. Y fuimos con Mathiu.",
		],
		date: "2025-06-23T10:01:42.834Z",
		media: [],
		title: "Kwan",
	},
	{
		content: [
			"Nos vimos un ratito en la noche para celebrar con el pollo con ensalada de mango del Wok que entraste a la Inmaculada. Mi guapa ♥️🌸, me siento tan tan orgulloso de ti.",
			"💬 Sí, tan tan orgulloso de ti ❤️.",
		],
		date: "2025-06-24T10:01:42.834Z",
		media: [],
		title: "La Inmaculada 🤝 Lau",
	},
	{
		content: [
			"Me invitaste a ver la película de la fórmula 1 y yo muy feliz porque me escuchaste hace dos meses cuando te hice la pataleta y invitaste pero entonces triste porque no nací rico para ser piloto.",
			"💬 ¿Y si vamos al cine a ver otra vez la película de la fórmula 1?",
		],
		date: "2025-06-25T10:01:42.834Z",
		media: [],
		title: "La película de la Fórmula 1",
	},
	{
		content: [
			"Como estoy teniendo mi semana de mierda con los paisas esos hjijueputas (jajaja, va a dar risa cuando leamos esto años después), me visitaste en la nochecita y nos quedamos juntos así bien romántico y vimos la del dragón para poder ir al cine a ver la nueva del live action y me gustó; yo digo que tenía que haber muerto Hipo, que quedara como un mártir, pero así y todo me gustó 🐉🐉🐉🐉.",
		],
		date: "2025-06-26T10:01:42.834Z",
		media: [],
		title: "Cómo entrenar a tu dragón",
	},
	{
		content: [
			"Una visita rápida al Monkey para verte a ti con la excusa de ver el partido del Flamengo. Y además perdieron.",
		],
		date: "2025-06-29T10:01:42.834Z",
		media: [],
		title: "Sigo buscando excusas para verte en el trabajo",
	},
	{
		content: [
			"Pasé en la nochecita a saludarte después del trabajo y terminé amaneciendo allá en tu casa jajaja. Todo mal. Mi guapa ❤️.",
		],
		date: "2025-07-01T10:01:42.834Z",
		media: [],
		title: "Amaneciendo en tu casita, otra vez",
	},
	{
		content: [
			"Hoy nos vimos la de cómo entregar a tu dragón pero la nueva, la live action, me invitaste y yo muy agradecido. Estuvo buena buena 🙂‍↔️🙂‍↔️. Y además antes del cine fui a encontrarme contigo allá donde tus días y comimos mogolla con chocolate.",
			"💬 Estuvo muy buena muchas gracias.",
		],
		date: "2025-07-02T10:01:42.834Z",
		media: [],
		title: "Cómo entrenar a tu dragón, pero Live Action",
	},
	{
		content: [
			"Hicimos noche de arepitas quesudas y nos quedaron reeeee severas 🫓🫓🫓🫓. Mucho talento. Y además te quedaste acá en mi casa y nos levantamos bien tarde.",
		],
		date: "2025-07-03T10:01:42.834Z",
		media: [],
		title: "Arepitas quesudas",
	},
	{
		content: [
			"¿Viste cómo ya cumplimos un año desde esa primera vez que te vi y me gustaste? 🫶. Estuvimos un ratito por allá en el Monkey nomás viéndote yo bien enamorado y te llevé a casita. El Monkey no va a ser lo mismo sin ti :(",
		],
		date: "2025-07-04T10:01:42.834Z",
		media: [],
		title: "Un año desde que te vi",
	},
	{
		content: [
			"Como hoy cumplimos un año de nuestra primera primera cita 🎂🎉 y además te tocó trabajar el lunes, quise que reviviéramos ese día: pasé y te recogí en el camperito saliendo del trabajo, fuimos hacia el McDonald’s de Chía por la Calera, nos comimos unas papitas y llevamos el adivina quién. La única diferencia fue que hoy nos quedamos juntitos, no como la vez pasada que te llevé a tu casita.",
		],
		date: "2025-07-07T10:01:42.834Z",
		media: [],
		title: "Un año desde nuestra primera cita",
	},
	{
		content: [
			"Íbamos a ir a visitar a Juli a la BMW Store peeeeeero él se embolató y entonces terminamos allá donde tus tías tomando chocolate y haciendo la visita. Cómo me gusta verte así de contenta donde las tías, cómo las quieres y cómo te quieren ellas y cómo te quiero yo a ti ♥️.",
		],
		date: "2025-07-08T10:01:42.834Z",
		media: [],
		title: "Chocolate con las tías, en plan de tías",
	},
	{
		content: [
			"Hoy sí fuimos a vistar a Juli y la pasamos bueno bueno, él nomás se la pasaba preguntándonos que cómo nos habíamos hecho novios y así jajaja. Y salimos motivados llenos de arcoíris por su discurso coach y fuimos a comer al Wok y nos regresamos a tu casita.",
		],
		date: "2025-07-09T10:01:42.834Z",
		media: [],
		title: "Con Juli y BMW",
	},
	{
		content: [
			"Como ya me voy esta noche a México con mi mamá a ver al sayocean porfindioshacemuchonopasabaesto, viniste a mi casa e hicimos arepitas quesudas con aguadepanela con mi mamá y con Mathiu 🫓🫓🫓. Muy fan de que hagamos arepas juntos. ¿Y viste cómo mi mamá se trajo la cobija que le regalaste que para no sentir frío en el avión?",
		],
		date: "2025-07-10T10:01:42.834Z",
		media: [],
		title: "Arepitas quesudas pero con mi mamita y Mathiu",
	},
	{
		content: [
			"Yayayayaya ya volví de ver al sayocean y entonces nos vimos y nos besamos y fuimos con Valeria y a Arturo al parque de Toy Story allá en el Colina y se pasó muy bueno y comimos Goyurt con ella (Arturo no porque se durmió) y luego vinimos a la casa y hablamos mucho y nos besamos más y terminamos viendo la película de Yo Antes de Ti y qué triste que el William este se murió pero mejor jajaj. Te extrañé mucho, mi guapa 🌸.",
		],
		date: "2025-07-15T10:01:42.834Z",
		media: [],
		title: "Toy Story y goyurt con Arturo",
	},
	{
		content: [
			"Resultamos por coincidencia almorzando con Lili y Juan en el Ana y hablamos harto y Lili gastó tinto después y de ahí nos fuimos a tu casita tú a seguir con tu curso de Excel (cómoestoydeenamoraoahoraqueandashaciéndolealexcel) y yo al trabajo. Y luego nos quedamos hasta bien tarde hablando cositas y ya me tocó irme porque tengo que madrugar. ",
		],
		date: "2025-07-16T10:01:42.834Z",
		media: [],
		title: "Almuerzo con Lili y Juan en el Ana",
	},
	{
		content: [
			"Nos encontramos con mi mamá y Carmencita y terminamos dándole a la cocoa allá donde Valeria con Lili y Juan y Arturo y Josué y todos ☕️, nosotros llevamos el queso y los bombonbunes. Y después llevamos a mi mamá a su casa y nos arrunchamos tú y yo en la mía y nos levantamos bien tarde 🙂‍↔️.  AH, y además fuimos a Chopinar y te encantó y además fuimos a que manejaras un ratico el campero ahí en floresta y bajaste las rampas como una ⭐️🚗.",
		],
		date: "2025-07-17T10:01:42.834Z",
		media: [],
		title: "Conociste Chopinar y te gustó 🙂‍↔️",
	},
	{
		content: [
			"HOY VINIERON DE VISITA TUS TÍAS Y TÚ MAMÁ que a conocer la casa mía AAAAAAAAA ❤️❤️❤️❤️🙂‍↔️😍❤️🥷🥷⛴️🚚. ",
		],
		date: "2025-07-18T10:01:42.834Z",
		media: [],
		title: "Tus tías y tu mamita en la casa mía",
	},
	{
		content: [
			"Todos requetetristes porque fue tu último día de trabajo en el Monkey. Mentiras, todos muy felices pero sí va a estar bien raro ir y no verte ahí :(. Habrá sido paila el trabajo y Xiomara y Jhon y lo que sea, pero el Monkey nos dio la oportunidad de conocernos 🚚.",
		],
		date: "2025-07-21T10:01:42.834Z",
		media: [],
		title: "Adiós, Monkey House",
	},
	{
		content: [
			"Entonces con Mathiu las recogimos a ti y a Angie en la tarde noche para ir a La Lupe y vieras lo linda que te veías armándote tus mini tacos 😭😭😭😭❤️❤️❤️❤️❤️🌮. ",
		],
		date: "2025-07-23T10:01:42.834Z",
		media: [],
		title: "Lupe con Angie y Mathiu",
	},
	{
		content: [
			"EL-SAYOCEAN-ANUNCIÓ-AHORASÍCONFIRMADO100%REALKNOFAKE-QUE-VIENEN-A-COLOMBIA-AAAAAAAAAAAAA😭😭😭😭🐬🐬🐬🐬🐬🐬. Y para celebrarlo tú y Angie se hicieron unas arepas re pero RE cveras con chocolate. ",
		],
		date: "2025-07-24T10:01:42.834Z",
		media: [],
		title: "SayOcean viene a Sudamérica 😭🐬",
	},
	{
		content: [
			"En tu primer viernes libre Mire que nos levantamos re re re tarde y almorzamos allá en el Ana y nos encontramos a Lili y Juan y le dimos al chismesito y luego fuimos a tu casa y tu con el Excel y yo con el trabajo y qué romántico y luego hablamos mucho como hasta la media noche y ya me tocó irme porque hay que madrugar :(.",
			"💬 Gracias. De verdad gracias ❤️.",
		],
		date: "2025-07-25T10:01:42.834Z",
		media: [],
		title: "Tu primer viernes libre, conmigo también",
	},
	{
		content: [
			"Hoy fuimos a Hanashi y vieras cómo te veías de guapetona con los 🥢. Estuvo muy bueno el almuerzo chas gracias. Y a mí guapa como que le dio una gripa dura dura diosmio no vayas a pelar 🤧. ",
		],
		date: "2025-07-26T10:01:42.834Z",
		media: [],
		title: "Hanashi",
	},
	{
		content: [
			"Como es el primer domingo en quién sabe cuánto que estás en tu casita y no trabajando, tus tías nos invitaron a almorzar y fuimos toda la familia + yo (miguapacómotequiero), estuvimos tu mamá y tu papá y la tía Yanis y la tía Soraya y Juan y Nata, hasta Nata fue. ¿Y sabes qué fue lo más lindo? Que hicieron frijoles pero no con pezuña sino con pecho porque saben que entonces yo con la pezuña le inflo. Jajaja 🫃.",
		],
		date: "2025-07-27T10:01:42.834Z",
		media: [],
		title: "Fríjoles sin pezuña",
	},
	{
		content: [
			"HOY PORFIN FUIMOS A COMPRAR JEANS Y CALZONES 👖👖👖. Jajaja. Y nos divertimos mucho y la pasamos muy bueno y también nos comimos un heladito y por andar de callejeros en la noche se me pegó tu gripa y pailas, estoy que pelo. Estoy que pelo pero bien fashion con mi nueva ropa 💅. ",
		],
		date: "2025-07-28T10:01:42.834Z",
		media: [],
		title: "Jeans y calzones nuevos",
	},
	{
		content: [
			"Pues efectivamente nos dio por el culo la gripa jajaja. Pero así y todo nos vinimos de vagabundos tú, Mathiu y yo al chopinar a cenar y estuvo 😮‍💨😮‍💨🙂‍↔️🙂‍↔️🙂‍↔️😮‍💨🙂‍↔️🌮🤧. ",
		],
		date: "2025-07-29T10:01:42.834Z",
		media: [],
		title: "Jueputa pero qué gripa la que nos dio 🤧",
	},
	{
		content: [
			"Don Luna disque que nos trajo a tu familia y a mí también cositas de su viaje al eje cafetero 😭😭😭😭😭. Entonces pasamos en la tardecita a visitar a tus tías y a reclamar el mercado que tenía yuca y chorizos y aguacates que le vamos a dar a Arturo y plátanos y un queso re re re c-vero. Muy querido Don Luna ❤️. Y además salimos de donde tus tías con tu papá y fuimos a recoger a tu mamá y me terminé quedando yo arrunchado en tu casita hasta el otro día porque soy vagabundo.",
		],
		date: "2025-07-30T10:01:42.834Z",
		media: [],
		title: "Don Luna y su mercado",
	},
	{
		content: [
			"¿Recuerdas que puse ayer que me quedé en tu casita bien vagabundo? Pues me agarró el tarde porque tenía que estar en la fábrica a las 9:00am para grabar la entrevista esa re chimba que nos hizo Sindy pero me dieron las 7:45am en tu casa dios jajaja. Y lo peor es que entrando así bien amanecido a mi casa me encontré a Mathiu y me pilló infraganti 🕵️‍♂️🕵️‍♂️🕵️‍♂️. Lo bueno es que como vine en la bici para que me rindiera, tuvimos excusa para vernos en la nochecita que para recoger el mercado de Don Luna pero mentira, todo fue un sofisticado plan tuyo para que nos quedáramos juntitos en mi ksa. (Nota: seguimos re apestados, mas yo que tú, a ti ya te va pasando). ",
		],
		date: "2025-07-31T10:01:42.834Z",
		media: [],
		title: "Me pillaron infraganti, llegando amanecido",
	},
	{
		content: [
			"Pues imagínate que hoy íbamos a celebrar el cumpleaños de Arturo pero como está malito lo cancelaron y terminamos tú y yo comiendo carne oreada bien romántico allá en el Chicamocha 🙂‍↔️🙂‍↔️🙂‍↔️🙂‍↔️🙂‍↔️. Me hace muy feliz que te guste tanto y la yuca y la arepa de maíz.",
		],
		date: "2025-08-07T10:01:42.834Z",
		media: [],
		title: "Carne oreada en el Chicamocha",
	},
	{
		content: [
			"Mi pobre Laura se metió una lavada terrible de camino a la casa mía :(. Lo bueno fue que comimos pizza de Papa John's y nos vimos la película de Bob Esponja. Y además en la nochecita nos pusimos a darle al chisme con Mathiu y Juan y todo lo de su nuevo pelito Karen y terminamos comiendo salchichas alemanas.",
		],
		date: "2025-08-08T10:01:42.834Z",
		media: [],
		title: "Papa John's y Bob Esponja",
	},
	{
		content: [
			"Como andas juiciosa dándole al estudio, nomás nos vimos un momento pequeñito mientras me prestaste tu parqueadero para yo ir al titán a comprar el roku (pura excusa para verte eso de dejar el carro en tu casita). Te di tu torta de almojábana que traje de cota y un besote. ",
		],
		date: "2025-08-09T10:01:42.834Z",
		media: [],
		title: "Excusa para verte: ya no hace falta ir al trabajo",
	},
	{
		content: [
			"Hoy nos vimos la del viernes de locos y está buenísimaaaaaa AAAAAA. Me gustó resto. Y además almorzamos chino y nos terminamos de ver Piratas del Caribe ya toda la saga y re triste porque mataron a Barbosa pero quedó como un héroe entonces yo nomás lloro 😭😭😭😭😭. Y me hiciste la prueba esa wise allá en mi sala y eres una ⭐️ y además vamos a tener una cita para armar nuestro gato lego. ",
		],
		date: "2025-08-10T10:01:42.834Z",
		media: [],
		title: "Un viernes de locos",
	},
	{
		content: [
			"Hoy celebramos el cumpleaños de Arturo y fuimos muy felices alistado tus regalos, empacando el triciclo y estando juntos allá. ",
		],
		date: "2025-08-18T10:01:42.834Z",
		media: [],
		title: "Pumpe de Arturo",
	},
	{
		content: [
			"Nos vimos la película del poeta en el cinemark y la verdad estuvo muy buena muchas gracias. Y hoy llegó nuestra violeta 🪴 a casa. ",
			"💬 Anda mira ahora cómo nos la pasamos en el cine. Jajaja. Se pasa muy bueno por allá contigo muchas gracias.",
		],
		date: "2025-08-30T10:01:42.834Z",
		media: [],
		title: "El Poeta",
	},
	{
		content: [
			"¿Puedes creer que vino el rebelmate a Colombia y que fuimos juntos a verlos? 😭😭😭😭. ¿Pero y para cuándo un concierto tuyo? Y no tocaron caótica :(",
			"💬 Perdidos en la noche, viendo las estrellas brillar.",
		],
		date: "2025-09-06T10:01:42.834Z",
		media: [],
		title: "Rebelmate en Colombia 😱",
	},
	{
		content: [
			"Hoy nos hicimos un almuercito de tilapia con limón bien severo y además nos vimos el Conjuro 1 y estuvo bien buena. Y te quedaste y te acompañé a la clínica, llegamos puntuales.",
		],
		date: "2025-09-10T10:01:42.834Z",
		media: [],
		title: "El Conjuro I",
	},
	{
		content: [
			"¿Viste cómo no soy crack del fútbol? Jaja :(. Pero bueno, estuvimos con Arturo y Valeria allá en la cancha y luego cenamos en el Wok. Y además te quedaste y nos levantamos tarde e hicimos arepitas para el desayuno. Todo muy bueno y rico muchas gracias.",
		],
		date: "2025-09-13T10:01:42.834Z",
		media: [],
		title: "mesi",
	},
	{
		content: [
			"Te hiciste UN sudado 👌👌👌👌👌🙂‍↔️🙂‍↔️🙂‍↔️😮‍💨😮‍💨😮‍💨😮‍💨😮‍💨. Muchas gracias por hacerme almuerzo con amor. Y además nos vimos La Monja pero estuvo medio huesuda.",
		],
		date: "2025-09-16T10:01:42.834Z",
		media: [],
		title: "Almuerzo con amor",
	},
	{
		content: [
			"Hicimos nuestro primer intento de hacer pan, y de remolacha además, y nos salió re mal jajaja :(. Lo bueno es que nos estamos alistando ahora para irnos a México a ver a Vale y al sayocean 🛫🛫🛫🛫. ",
		],
		date: "2025-09-18T10:01:42.834Z",
		media: [],
		title: "Sale mal el pan de remolacha",
	},
	{
		content: [
			"Hoy conociste al Jaguar Negro y yo muy feliz. Y además te lo pasaste bombas en el mariposario. Y apenas llegamos a México comimos tortas y conocimos a don Joel de las tortas y muy querido porque él quiere a los colombianos y terminamos el día en el concierto del sayocean en Izcalli imagínate. Muy bueno todo muchas gracias 🐆🦋🦋🐆. ",
		],
		date: "2025-09-19T10:01:42.834Z",
		media: [],
		title: "El Jaguar Negro en Chapultepec",
	},
	{
		content: [
			"HOY FUE EL CONCIERTO DE VALE 😭😭😭😭😭. Todo muy bello. El evento de Coca-Cola estuvo severo y además probamos los tacos de carnitas y estaban 😮‍💨😮‍💨🙂‍↔️🙂‍↔️🙂‍↔️🙂‍↔️😮‍💨😮‍💨🙂‍↔️🙂‍↔️. ",
		],
		date: "2025-09-20T10:01:42.834Z",
		media: [],
		title: "Vale Garzón en el Coca-Cola Food Fest",
	},
	{
		content: [
			"Ya nos devolvimos a Colombia esta noche pero alcanzamos a ir a ver al Ajolote y a que tú probaras el taco de pastor, del puro trompo, y estuvo buenísssssimo 🌮. Así y todo lo del policía corrupto, la pasamos muy bueno en nuestro viaje express a México. ",
		],
		date: "2025-09-21T10:01:42.834Z",
		media: [],
		title: "Ajolote y pastor antes de volar de vuelta a casa",
	},
	{
		content: [
			"Hoy fuimos a visitar a mi mamita y nos dio almuerzo y muy rico todo: hizo crema de champiñones con pollito y plátanos en la freidora; nosotros llevamos el postre. La pasamos bueno y nos mostró fotos mías de bebé y así. Mi mamita. ",
		],
		date: "2025-09-23T10:01:42.834Z",
		media: [],
		title: "Almuerzo con mi mamita",
	},
	{
		content: [
			"Visitamos a Arturo y a Valeria y les llevaste donitas sin azúcar y sacamos a los perros y le dimos al chismesito y todo muy bueno muchas gracias por echarle ganas.",
		],
		date: "2025-09-29T10:01:42.834Z",
		media: [],
		title: "Donitas sin azúcar para Arturo",
	},
	{
		content: [
			"Hoy fuimos con mi mamá y Lili a almorzar a Lupe. Tú pediste un steak Lupe y mi mamá unas quesadillas y Lili un alambre y hablamos lo más de bueno y aguantamos harta hambre jajaja, nos agarró el tarde re feo. Y ya después fuimos a casa y nos despedimos porque me fui yo para Guadalajara. Pero vuelvo pronto, no me demoro, voy y le tomo una foto a los patos y me regreso.",
		],
		date: "2025-10-04T10:01:42.834Z",
		media: [],
		title: "La Lupe con mi mamita y Lili",
	},
	{
		content: [
			"Pues mire que le voy a llevar su pato. Y sus dulces y su pan de muerto. Es mi último día en Guadalajara en este viaje y aunque no vinimos juntos y no nos podemos ver, sí me emociona llevarte tus dulces y cositas y quiero que quede aquí en nuestras notas. También me saqué hartos dulces del hotel jajaja.",
		],
		date: "2025-10-06T10:01:42.834Z",
		media: [],
		title: "Alistándole su nuevo pato",
	},
	{
		content: [
			"Hoy volví a donde tus tías AAAAAAAAAA. Muy lindas ellas, así y todo lo que pasó me hicieron sentir bienvenido y como en casa. Comimos pan de muerto con tinto y tu tía nos contó hartas historias y todo muy bueno muchas gracias. Y te recogí en el Porsche ahí en la universidad así bien alerta ",
		],
		date: "2025-10-09T10:01:42.834Z",
		media: [],
		title: "En casa de tus tías, de nuevo ❤️",
	},
	{
		content: [
			"Fuimos a comer ceviche a cota pero al campestre y entonces la cabra se quería comer tu pantalón. Jajaja 🐐🐐🐐🐐🐐. Más linda la cabra. Y además vimos las casas esas gomelas de Amarilo que Alcalá y la otra.",
		],
		date: "2025-10-12T10:01:42.834Z",
		media: [],
		title: "Cabra en Cota 🐐",
	},
	{
		content: [
			"Cómo la quiero: el cumpleaños más lindo de la vida mía con el desayuno de dinosaurio y la torta de gelatina y mi capibara y mi súper cámara 9-11 😭😭😭😭😭😭❤️.",
		],
		date: "2025-10-18T10:01:42.834Z",
		media: [],
		title: "Mi pumpe - El más lindo de la vida ❤️",
	},
	{
		content: [
			"Imagínese que hoy nos vimos casi todo avatar y está buenísima pero además nos hicimos palomitas con papas de pollo y todo muy bueno muchas mgracias 😮‍💨🙂‍↔️. 😏😏😏😏😏.",
		],
		date: "2025-10-20T10:01:42.834Z",
		media: [],
		title: "muchas mgracias",
	},
	{
		content: [
			"Almorzamos juntos así express las hamburguesas ricas con piña del metrópolis. Muy rico todo muchas gracias y además nos compramos galguerías. Fue algo pequeñito pero estuvo bueno.",
		],
		date: "2025-10-22T10:01:42.834Z",
		media: [],
		title: "Hamburguesas con piña en el Metrópolis",
	},
	{
		content: [
			"Imagínese que nos vimos el cadáver de la novia y muy triste todo y me gustó harto y 😭😭😭😭 y muy bonita la Victoria y qué gei que el man se llame Víctor jajaja 💀.",
		],
		date: "2025-10-26T10:01:42.834Z",
		media: [],
		title: "El cadáver de la novia",
	},
];

export const ENTRIES: Entry[] = RAW_ENTRIES.map((entry, index) => ({
	...entry,
	n: index + 1,
}));
