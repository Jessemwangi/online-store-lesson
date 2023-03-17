import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import StoreNavbar from "./app/components/StoreNavbar";
import { List } from "./app/components/List";
import Cart from "./app/components/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <StoreNavbar />
        <Routes>
          <Route path="/" element={<List/>}>
List
          </Route>
          <Route path="/cart" element={<Cart/>}>
Cart
          </Route>
         
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
