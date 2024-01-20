/* eslint-disable react/prop-types */

const ImageCard = ({ image }) => {
  // const tags = image.tags.split(',');
  console.log(image)
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white ">
      <img src={image.webformatURL} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 mb-2">
          Photo By {image.user}
        </div>
        <ul>
          <li>
            <strong>Total Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Total Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Total Likes: </strong>
            {image.likes}
          </li>
          <li>
            <button onClick={() => window.location.href = image.previewURL} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-3">
              Free Download
            </button>
          </li>
        </ul>
      </div>
      {/* <div className="px-6 py-4">

        {tags.map((tag, index) => (
          <span key={index} className="inline-block bg-grey-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{tag}</span>
        ))}


      </div> */}

    </div>
  )
}

export default ImageCard
