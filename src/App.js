//import { BrowserRouter, useParams } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

import NavBar from "./components/NavBar";
import Main from './components/Main';
import ItemListContainer from "./components/ItemListContainer";

const App = () => {

	return (
	<>
		<NavBar />
		<Main />
		<Toaster position="top-right" reverseOrder={false} />

	</>)
}

export default App;