import homeImg from '../assets/mo-TunS36a18R0-unsplash.jpg';

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
            <div className='relative flex items-center justify-center pt-10 mt-5'>
                <div className='relative'>
                    <span className='bg-zinc-300  rounded-md flex items-center px-4'>
                        <svg className="h-6 w-6 text-white mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                        <input
                            type="text"
                            placeholder='Search For Images'
                            className=' bg-zinc-300 bg-opacity-55 text-gray-800 outline-none pl-2 pr-12 py-4 w-96'
                        />
                        <button className=' text-white pl-3 py-3 rounded-md hover:text-black'>
                            Search
                        </button>
                    </span>
                </div>
            </div>
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
