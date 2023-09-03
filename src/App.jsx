import './App.css'
import Main from './components/Main'
import Map from './components/Map'
import Navbar from './components/Navbar'

const location = {
	address: '17 Henin Ibn Ishaq, Al-Hay As-Sabea, Nasr City, Cairo',
	lat: 30.0518522,
	lng: 31.3323257,
}

const App = () => {
	return (
		<>
			<Navbar />
			<Main />
			<br />
			<Map location={location} zoomLevel={17}/>
		</>
	)
}

export default App