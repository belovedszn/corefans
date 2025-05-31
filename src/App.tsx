import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Homepage from "./pages/homepage/Homepage";
import Artists from "./pages/artist/Artists";
import Fans from "./pages/fans/Fans";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout/CheckOut";
//import Contact from "./component/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />

         <Route path="for-artists" element={<Artists />} />
         <Route path="for-fans" element={<Fans />} />
         <Route path="contact-us" element={<Contact />} />
          <Route path="/checkout/:id" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
