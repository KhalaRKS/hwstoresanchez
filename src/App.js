import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from "react-router-dom";

import NavBar from "./components/NavBar";
import Main from './components/Main';

const App = () => {
	return (
		<BrowserRouter >
			<NavBar />
			<Main />
			<Toaster position="top-right" reverseOrder={false} />
		</BrowserRouter>
	)
}

export default App;