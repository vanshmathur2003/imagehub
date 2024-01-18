import homeImg from '../assets/mo-TunS36a18R0-unsplash.jpg';
import SearchBar from '../components/searchBar';

const Home = () => {
    return (
        <>
            {/* Background image */}
            <div className='absolute inset-0'>
                <img src={homeImg} className='w-full h-full object-cover' alt="Background" />
            </div>
            {/* *** */}
            {/* Navbar */}
            <div id='navbar' className='relative flex flex-col md:flex-row justify-between items-center px-5 py-7 mx-5 mt-5 bg-zinc-300 bg-opacity-75 rounded-lg'>
                <div className="relative text-white mb-4 md:mb-0 md:mr-4 text-2xl font-bold">Roc8</div>
                <div className="relative flex flex-col md:flex-row">
                    <button className='mr-3 mb-2 md:mb-0 text-white hover:text-black'>Log In</button>
                    <button className='border border-solid border-white bg-transparent text-white rounded-md py-1 px-4 hover:text-black hover:border-black'>
                        Create Account
                    </button>
                </div>
            </div>
            {/* *** */}
            {/* text */}
            <div className='relative text-white mt-10 text-6xl text-center px-20 pt-12 font-extrabold '>
                <h1>
                    Discover Over 2,000,000
                </h1>
                <h1 className='pt-2'>
                    Free Stock Images
                </h1>
            </div>
            {/* *** */}
            {/* searchbar */}
            <SearchBar/>
            {/* *** */}
            {/* trending */}
            <div className='mt-8 text-center'>
                <span className='relative bg-zinc-300 bg-opacity-75 text-white px-4 py-2 rounded-md'>
                    Trending - Birds, Winter, Clouds
                </span>
            </div>
            {/* *** */}
        </>
    );
}

export default Home;
