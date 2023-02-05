import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadProducts } from "../components/allProducts/allProductsSlice";
import NavBar from "../components/nav/navigation";
import AllProducts from "../components/allProducts/allProducts";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <AllProducts />
    </div>
  );
}

export default App;
