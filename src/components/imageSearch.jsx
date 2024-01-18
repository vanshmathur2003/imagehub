const API = import.meta.env.VITE_API_KEY

const ImageSearch = async ({ query, setQuery }) => {
    const formattedQuery = query.toLowerCase().split(' ').join('+');
    setQuery('');
        const response = await fetch(`https://pixabay.com/api/?key=${API}&q=${encodeURIComponent(formattedQuery)}&image_type=photo&pretty=true`);    
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // Handle the data returned from the API
        console.log(data);
  };
  
  export default ImageSearch;
  