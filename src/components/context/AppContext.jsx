import { useEffect, useState, createContext, useContext } from 'react';
import { getProductos } from '../../api/Productos';
const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
    
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        getProductos().then(data => {
            setProductos(data);
        });
    }, [])

    return (
        <>
            <AppContext.Provider value={{ productos }}>
                {children}
            </AppContext.Provider>
        </>
    )
}

export default AppContextProvider;