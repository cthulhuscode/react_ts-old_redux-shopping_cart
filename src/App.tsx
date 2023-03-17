import { Cart, Navbar, ProductsList } from "./components";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Cart />
      <Navbar />
      <ProductsList />
    </div>
  );
}

export default App;
