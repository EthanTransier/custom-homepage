import Playlist from './components/Playlist'
import SearchBar from './components/SearchBar'
import Navbar from './components/Navbar'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Playlist/>
      <h1 className='searchTitle'>GOOGLE</h1>
      <SearchBar/>
    </div>
  );
}

export default App;
