import { useState, useEffect } from 'react'
import ImageCard from '../components/imageCard.jsx'
import SearchBar from '../components/searchBar.jsx'
import ButtonSugg from '../components/buttonSugg.jsx'
import Footer from '../components/footer.jsx'
const API = import.meta.env.VITE_API_KEY


const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(
    () => {
      fetch(`https://pixabay.com/api/?key=${API}&q=${term}&image_type=photo`)
        .then((res) => res.json())
        .then(data => {
          setImages(data.hits);
          setisLoading(false)
        })
        .then(err => console.log(err));
    }, [term]
  );
  return (
    <div className='bg-gray-800  pt-5 md:pt-10'>
      {/* Navbar */}
      <div className='flex flex-col md:flex-row justify-between items-center px-5 py-3 md:py-7 mx-5 bg-zinc-300 bg-opacity-75 rounded-lg'>
        <div className='text-white mb-2 md:mb-0 md:mr-4 text-lg md:text-2xl font-bold'>
          ImageHub
        </div>
        <div className='flex flex-col md:flex-row'>
          <button className='mr-2 mb-2 md:mb-0 text-white hover:text-black'>
            Log In
          </button>
          <button className='border border-solid border-white bg-transparent text-white rounded-md py-1 px-2 md:px-4 hover:text-black hover:border-black'>
            Create Account
          </button>
        </div>
      </div>
      {/* Main Content */}
      <div className='container mx-auto'>
        <SearchBar searchText={(text) => setTerm(text)} />
        <ButtonSugg setTerm={setTerm} />
        {!isLoading && images.length === 0 && (
          <h1 className='text-3xl md:text-5xl text-center mx-auto mt-8 md:mt-32'>
            No Images Found
          </h1>
        )}
        {isLoading ? (
          <h1 className='text-4xl md:text-6xl text-center mx-auto mt-8 md:mt-32'>
            Loading...
          </h1>
        ) : (
          <div className=' grid grid-cols-1 md:grid-cols-3 gap-4'>
            {images.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </div>
        )}
      </div>
      <Footer/>
    </div>
    
  );
};

export default App