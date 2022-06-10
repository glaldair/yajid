import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

// Componentes
    import Navbar from "./components/navbar/Navbar";
    import Intro from "./components/sections/intro/Index";
    import Productos from "./components/sections/productos/Index";
// 

import { getProductos } from "./api/Productos";
import ItemDetail from "./components/sections/filtros/itemDetail";
import SubCategoria from "./components/sections/filtros/subcategoria/Index";
import Categoria from "./components/sections/filtros/categoria/Index";
import Departamento from "./components/sections/filtros/departamento/Index";
import CartContextProvider from "./components/context/CartContext";
import AppContextProvider from "./components/context/AppContext";
import Cart from "./components/cart/Index";
import Checkout from "./components/cart/Checkout";

function App() {
	useEffect(() => {
		getProductos();
	}, []);

	return (
    	<>

			<AppContextProvider>
				<CartContextProvider>
					<Router>
						<Navbar></Navbar>
						<Routes>
							<Route path="/" element={<Intro />} />
							<Route path="/productos" element={<Productos />} />
							<Route path="/nosotros" element={<h2>Nosotros</h2>} />
							<Route path="/contacto" element={<h2>Contacto</h2>} />
							<Route path="/cart" element={<Cart />} />
							<Route path="/cart/checkout" element={<Checkout />} />

							<Route path="/productos/:departamento" element={<Departamento />} />
							<Route path="/productos/:departamento/:categoria" element={<Categoria />} />
							<Route path="/productos/:departamento/:categoria/:subcategoria" element={<SubCategoria />} />
							<Route path="/productos/:departamento/:categoria/:subcategoria/:codigo/:nombre/:id" element={<ItemDetail />} />
						</Routes>
					</Router>
				</CartContextProvider>
			</AppContextProvider>
    	</>
  	);
}

export default App;