import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import Cart from "./pages/Cart";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;