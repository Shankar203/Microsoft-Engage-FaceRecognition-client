import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "../routes/Login";
import Signup from "../routes/Signup";
import "../styles/App.css";

function App() {
	return (
		<HashRouter basename={process.env.PUBLIC_URL}>
			<Routes>
				<Route path="/signup" element={<Signup />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</HashRouter>
	);
}

export default App;
