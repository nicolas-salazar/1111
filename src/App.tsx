import { useState } from "react";

const App = () => {
	const [count, setCount] = useState(0);

	return (
		<div className="flex h-svh w-screen items-center justify-center bg-black-100">
			<h1>Hello there 26!</h1>
		</div>
	);
};

export default App;
