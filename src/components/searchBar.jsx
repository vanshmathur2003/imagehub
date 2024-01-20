import { useState } from "react"

// eslint-disable-next-line react/prop-types
const SearchBar = ({ searchText }) => {
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        searchText(text);
    }
    return (
        <>
            <div className='relative flex items-center justify-center pt-10 mt-5 pb-10'>
                <div className='relative'>
                    <span className='bg-zinc-300  rounded-md flex items-center px-4'>
                        <svg className="h-6 w-6 text-white mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                        <form >
                            <input
                                onChange={(e) => setText(e.target.value)}
                                type="text"
                                placeholder='Search For Images'
                                className=' bg-zinc-300 bg-opacity-55 text-gray-800 outline-none pl-2 pr-12 py-4 w-96'
                            />
                            
                                <button onClick={onSubmit} className=' text-white pl-3 py-3 rounded-md hover:text-black'>
                                    Search
                                </button>
                        </form>
                    </span>
                </div>
            </div>
        </>
    )
}

export default SearchBar