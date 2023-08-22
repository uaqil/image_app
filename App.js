import searchImage from "./api"
import "./App.css"
import SearchBar from "./components/SearchBar"
import ImageList from './components/ImageList'
import { useState } from "react"


function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImage(term);
    setImages(result);
  }
  return (
    <div className="App">
      <SearchBar onSubmit={handleSubmit}></SearchBar>
      <ImageList images={images} />
    </div>
  )
}

export default App