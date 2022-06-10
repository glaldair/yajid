import { getFirestore, getDocs, collection } from "firebase/firestore/lite";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyBXA-A7qxTsFOo0cXLhTk1mO7HcmCKZ4C4",
	authDomain: "yajid-65c8f.firebaseapp.com",
	projectId: "yajid-65c8f",
	storageBucket: "yajid-65c8f.appspot.com",
	messagingSenderId: "963446828433",
	appId: "1:963446828433:web:9af46731e9cef9ddaefe30"
};

const app = initializeApp(firebaseConfig);

const firestoreDB = getFirestore(app);

export default firestoreDB;

// Obtener todos los productos
export const getProductos = async () => {
    const miCollection = collection(firestoreDB, "productos");
    const getProducts = await getDocs(miCollection);

	// Si ya se obtuvo la información de los productos se para la ejecución
	if (getProducts.length > 0) {
		return getProducts;
	}

	// Guardar todos los productos en el LocalStorage
	const productosArray = [];
	getProducts.docs.forEach((producto) => {
		productosArray.push({ ...producto.data(), id: producto.id });
	});
	const productosLS = JSON.stringify(productosArray);
	localStorage.setItem("productos", productosLS);
	
	return productosArray;
};

// Obtener un producto por su codigo
export const getProduct = async (id) => {
    
	const miCollection = collection(firestoreDB, "productos");
	const getProduct = await getDocs(miCollection);

	if (getProduct.length > 0) {
		return getProduct;
	}
	const producto = getProduct.docs.find((producto) => producto.id.toString() === id.toString());
	if (producto) {
		return {
			...producto.data(),
			id: producto.id
		};
	}

	return null;
}

// Obtener un producto del LocalStorage por su id
export const getProducto = async (id) => {
	const productosLS = localStorage.getItem("productos");
	const productos = JSON.parse(productosLS);
	const producto = productos.find((producto) => producto.id === id);
	return producto;
}

// Obtener un producto del LocalStorage por departamento
export const getByDepartamento = async (departamento) => {
	const productosLS = localStorage.getItem("productos");
	const productos = JSON.parse(productosLS);
	const productosByDepartamento = productos.filter((producto) => producto.departamento.toLowerCase() === departamento.toLowerCase());
	return productosByDepartamento;
}

// Obtener un producto del LocalStorage por departamento y categoria
export const getByDepaAndCat = async (departamento, categoria) => {
	const productosLS = localStorage.getItem("productos");
	const productos = JSON.parse(productosLS);
	const productosByDepartamento = productos.filter((producto) => producto.departamento.toLowerCase() === departamento.toLowerCase());
	const productosByCategoria = productosByDepartamento.filter((producto) => producto.categoria.toLowerCase() === categoria.toLowerCase());
	return productosByCategoria;
}

// Obtener un producto del LocalStorage por departamento y categoria y subcategoria
export const getByDepaAndCatAndSubCat = async (departamento, categoria, subcategoria) => {
	const productosLS = localStorage.getItem("productos");
	const productos = JSON.parse(productosLS);
	const productosByDepartamento = productos.filter((producto) => producto.departamento.toLowerCase() === departamento.toLowerCase());
	const productosByCategoria = productosByDepartamento.filter((producto) => producto.categoria.toLowerCase() === categoria.toLowerCase());
	const productosBySubcategoria = productosByCategoria.filter((producto) => producto.subcategoria.toLowerCase() === subcategoria.toLowerCase());
	return productosBySubcategoria;
}

// Obtener un producto del LocalStorage por su marca
export const getByMarca = async (marca) => {
	const productosLS = localStorage.getItem("productos");
	const productos = JSON.parse(productosLS);
	const productosByMarca = productos.filter((producto) => producto.marca.toLowerCase() === marca.toLowerCase());
	return productosByMarca;
}

// Obtener 5 productos del LocalStorage por la fecha mas reciente
export const getByFecha = async () => {
	const productosLS = localStorage.getItem("productos");
	const productos = JSON.parse(productosLS);

	const productosOrdenados = productos.sort((a, b) => {
		const fechaA = a.timestamp.split("/");
		const fechaB = b.timestamp.split("/");
		const fechaAFormato = new Date(fechaA[2], fechaA[1] - 1, fechaA[0]);
		const fechaBFormato = new Date(fechaB[2], fechaB[1] - 1, fechaB[0]);
		return fechaBFormato - fechaAFormato;
	});

	const productosRecientes = productosOrdenados.slice(0, 5);
	return productosRecientes;
}

// Obtener 5 productos del LocalStorage por las ventas mas altas
export const getByVentas = async () => {
	const productosLS = localStorage.getItem("productos");
	const productos = JSON.parse(productosLS);
	const productosByVentas = productos.sort((a, b) => b.ventas - a.ventas);
	const productosByVentas4 = productosByVentas.slice(0, 5);
	return productosByVentas4;
}
