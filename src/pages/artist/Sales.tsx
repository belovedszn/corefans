import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../../data/sales";

const Sales = () => {
  const navigate = useNavigate();
  const gridRef = useRef<HTMLDivElement>(null);

  const handleSelect = (productId: string) => {
    navigate(`/checkout/${productId}`);
  };

  const scroll = (direction: "left" | "right") => {
    const scrollAmount = 300;
    if (gridRef.current) {
      gridRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative mt-50">
      <div className="flex items-center justify-between mb-8">
        <div className="text-4xl font-semibold text-white max-lg:text-3xl max-md:text-2xl max-sm:text-xl">Exclusive</div>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="w-15 h-15 rounded-full max-lg:w-10 max-lg:h-10"
            style={{
              background: "linear-gradient(to right, #F18B1B, #E52053)",
            }}
          >
            <i className="text-white bi bi-arrow-left text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base"></i>
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-15 h-15 rounded-full max-lg:w-10 max-lg:h-10"
            style={{
              background: "linear-gradient(to right, #F18B1B, #E52053)",
            }}
          >
            <i className="text-white bi bi-arrow-right text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base"></i>
          </button>
        </div>
      </div>

      <div
        ref={gridRef}
        className="grid grid-flow-col grid-cols-4 overflow-x-auto scrollbar-hide scroll-smooth product-grid-box text-white"
      >
        {products.map((product) => (
          <div
            className="rounded-2xl p-4 relative flex flex-col shadow-lg w-sm inset-ring-2 inset-ring-gray-700 max-lg:w-xs max-md:w-2xs max-sm:w-3xs max-[480px]:w-50"
            style={{
              background: "linear-gradient(to right, #292828, #000000)",
            }}
            key={product.id}
          >
            <img
              src={product.image}
              alt="Vinyl's"
              className="w-full h-64 object-cover rounded-md"
            />
            <div className="flex-col flex items-start justify-start pt-4 gap-4">
              <span
                className="text-3xl font-semibold capitalize max-lg:text-2xl max-md:text-xl max-sm:text-lg"
                style={{ fontFamily: "Grotesk" }}
              >
                {product.name}
              </span>

              <span
                className="text-2xl font-semibold roboto max-lg:text-xl max-md:text-lg max-sm:text-base"
                style={{ fontFamily: "Gilroy-Reg" }}
              >
                ${product.price}
              </span>
            </div>
            <button
              className="relative overflow-hidden text-white px-6 py-4 mt-8 w-full rounded-md font-medium text-lg group cursor-pointer"
              style={{
                background: "linear-gradient(to right, #F18B1B, #E52053)",
              }}
            >
              <span className="relative z-10">Select Exclusive</span>

              <span className="absolute top-0 left-[-75%] w-[50%] h-full bg-white opacity-20 blur-sm skew-x-[-20deg] transition-transform duration-700 group-hover:translate-x-[300%]"></span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sales;

/**
 *  <div
        ref={gridRef}
        className="grid grid-flow-col grid-cols-4  gap-4 overflow-x-auto scrollbar-hide scroll-smooth product-grid-box text-white"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg w-full"
          >
            <div className="h-[200px]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            /> 
            </div>
            <div className="p-4">
              <div className="text-lg font-semibold">{product.name}</div>
              <div className="text-white font-bold text-xl my-1">
                ₦{product.price.toLocaleString()}.00
              </div>
              <button
                className="bg-gradient-to-r from-orange-500 to-pink-600 w-full py-2 rounded-md mt-2 font-semibold"
                onClick={() => handleSelect(product.id)}
              >
                Select Exclusive
              </button>
            </div>
          </div>
        ))}
      </div>
 */
