import { useParams } from "react-router-dom";
import { products } from "../../data/sales";

const Checkout = () => {
  const { id } = useParams();
  const selectedProduct = products.find((p) => p.id === id);

  if (!selectedProduct) {
    return <div className="text-center mt-10 text-red-500">Product not found.</div>;
  }

  return (
    <div className="p-10 text-white bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <div className="flex items-center gap-6">
        <img src={selectedProduct.image} alt={selectedProduct.name} className="w-40 h-40 object-cover rounded" />
        <div>
          <h2 className="text-2xl">{selectedProduct.name}</h2>
          <p className="text-xl mt-2">Price: ₦{selectedProduct.price.toLocaleString()}.00</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
