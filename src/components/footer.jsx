
const Footer = () => {
  return (
    <footer className="bg-white py-5 mt-10 ">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center">
          <p className="text-gray-700 mb-4 font-bold">Made by Vansh</p>
          <div className="flex justify-center items-center">
            <button
              onClick={() => window.open('https://github.com/vanshmathur2003', '_blank')}
              className="bg-gray-700 text-white py-2 px-4 rounded mr-4 hover:bg-gray-600"
            >
              GitHub
            </button>
            {/* <button
              onClick={() => window.open('www.linkedin.com/in/vansh-nandan-mathur-93b059246', '_blank')}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400"
            >
              LinkedIn
            </button> */}
          </div> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
