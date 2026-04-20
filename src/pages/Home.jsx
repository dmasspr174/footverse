import { useEffect, useState } from "react";
import { getImages } from "../api";
import heroImage from "../assets/1.jpg";
import shoeCareImage from "../assets/4.jpg";
import img2 from "../assets/3.jpg";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Memanggil getImages lalu menyimpan array hits yang dikembalikan ke products state
    getImages("shoes", 8).then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div className="bg-white font-sans overflow-hidden">
      {/* Hero Section */}
      <div className="relative min-h-[100svh] md:min-h-[90vh] flex items-center pt-20 pb-16 md:py-0">
        <div className="container mx-auto px-4  md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-6md:gap-0">
          {/* Left Content */}
          <div className="w-full md:w-1/2 z-10 flex flex-col items-center text-center md:items-start md:text-left pt-12 md:pt-0">
            <h1 className="text-[4rem] min-[400px]:text-[5rem] sm:text-8xl md:text-[5.5rem] lg:text-[7.5rem] xl:text-[9rem] font-black text-[#1c1c1c] leading-[0.85] tracking-tighter uppercase pb-2 w-full">
              Move
              <br />
              Bold
            </h1>
            <p className="mt-6 md:mt-8 text-gray-600 text-base sm:text-lg md:text-xl max-w-sm sm:max-w-md leading-relaxed px-2 md:px-0">
              Discover comfort, performance, and design in every step you take.
            </p>
            <button className="mt-8 md:mt-10 bg-[#1c1c1c] text-white px-8 py-3.5 rounded-full flex items-center gap-2 transition-colors font-medium w-fit">
              <Link to="/product">
                Shop Now <span className="text-xl leading-none">&rarr;</span>
              </Link>
            </button>
          </div>

          {/* Right Content */}
          <div className="mt-4 w-full md:w-1/2 relative flex justify-center items-center z-0 px-4 md:px-0">
            {/* Shoe image */}
            <img
              src={heroImage}
              alt="Crazy Shoes"
              className=" h-[450px]  aspect-auto rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-500 ease-out object-cover"
            />
          </div>
        </div>

        {/* Scroll Down text */}
        <div className="hidden md:flex absolute right-6 lg:right-12 bottom-32 -rotate-90 origin-right text-gray-500 text-sm tracking-widest items-center gap-2 font-light">
          Scroll Down
        </div>
      </div>
      {/* Products Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
        <div className="flex items-center justify-between mb-8 border-b pb-4">
          <h2 className="text-3xl font-bold text-gray-800">BEST SELLERS</h2>
          <Link
            to="/product"
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 transition-colors"
          >
            Show more <span className="text-lg leading-none">&rarr;</span>
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full"
            >
              <div className="relative w-full overflow-hidden bg-gray-100">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    // API Pixabay menyimpan link gambar di webformatURL atau largeImageURL
                    src={product.webformatURL}
                    alt={product.tags}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-6 line-clamp-2 capitalize">
                    {/* API Pixabay tidak punya title, tapi punya 'tags' */}
                    {product.tags}
                  </h3>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-2xl font-bold text-blue-500">
                    {/* Karena getImages (Pixabay) tidak punya price, kita buat harga unik berdasarkan likes atau sekadar rata-rata */}
                    ${product.likes}
                  </span>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 whitespace-nowrap">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Shoes Care Section */}
      <h1 className="text-center mt-6 text-3xl font-bold text-gray-800 tracking-wider">
        SHOE CARE
      </h1>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-12 flex flex-col md:flex-row items-center md:gap-8 lg:gap-16">
        <div className="w-full md:w-1/2 flex justify-center md:justify-center mb-8 md:mb-0">
          <img
            src={shoeCareImage}
            alt="Shoe Care"
            className="h-[450px]  aspect-auto rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-500 ease-out object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col md:items-start text-left px-2 md:px-0 max-w-xl">
          <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-[#1c1c1c] tracking-tight leading-tight mb-4">
            Caring for Your Shoes the Right Way
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
            It’s not just about the buy—it's about the care. Master everything
            from brushing techniques to storage hacks, and keep your kicks
            looking like they just came out of the box.
          </p>

          <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-2">
            Essential Care Tips:
          </h3>

          <ul className="space-y-4">
            {[
              "Clean Immediately",
              "Match the Material",
              "Air Dry Only",
              "Store Dry",
              "Rotate Pairs",
            ].map((tip, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-700">
                <svg
                  className="w-6 h-6 text-gray-900 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span className="font-medium text-base sm:text-lg">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/**/}
      <div className="relative mx-auto lg:mx-16 px-4 ">
        <div>
          <img
            src={img2}
            alt=""
            className="w-full mt-6 h-[600px] aspect-auto rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-500 ease-out object-cover"
          />
        </div>
        <div className="my-12 w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="relative flex flex-col px-4 text-center rounded-2xl items-center justify-center w-full max-w-[400px] mx-auto h-[200px] border-2 border-gray-100 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                clipRule="evenodd"
              />
            </svg>
            <h1 className="text-2xl font-bold">The Durability</h1>
            <p className="text-gray-800 text-base mb-8 sm:text-lg leading-relaxed text-center">
              Built to handle maximum weight without losing shape
            </p>
          </div>
          <div className="relative flex flex-col px-4 text-center rounded-2xl items-center justify-center w-full max-w-[400px] mx-auto h-[200px]  border-2 border-gray-100 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                clipRule="evenodd"
              />
            </svg>
            <h1 className="text-2xl font-bold">The Speed</h1>
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-8">
              Express shipping if you order today, you will wear them sooner.
            </p>
          </div>
          <div className="relative flex flex-col px-4 text-center rounded-2xl items-center justify-center w-full max-w-[400px] mx-auto h-[200px] border-2 border-gray-100 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clipRule="evenodd"
              />
            </svg>
            <h1 className="text-2xl font-bold">The Guarantee</h1>
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-8">
              100% satisfaction guarantee or your money back.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
