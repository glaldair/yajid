import { useEffect, useState } from "react";

const Images = ({ imagenes, nombre }) => {

    const [img, setImg] = useState([]);
    const [imagen, setImagen] = useState(imagenes[0]);

    useEffect(() => {
        if (imagenes) {
            setImg(imagenes);
            setImagen(imagenes[0]);
        }
    }, [imagenes]);

    const handleHoverImg = (e) => setImagen(e.target.src)

    /*
        // El mouse pase por encima de itemDetail__slider-lightbox
        // Se muestra el componente lupa que hace zoom en la imagen sin que la imagen se mueva
    */
    const handleMouseOver = (e) => {
        
    }

    return (
        <>
            <div className="itemDetail__slider">
                <div className="itemDetail__slider-img">

                    {img.map((imagen, index) => {
                        return (
                            <div key={index} className="itemDetail__slider-img-container">
                                <img src={imagen} alt={nombre} loading="lazy" onMouseOver={handleHoverImg} />
                            </div>
                        )
                    })}
                </div>
                <div className="itemDetail__slider-lightbox">
                    <img src={imagen} alt={nombre} loading="lazy" onMouseOver={handleMouseOver} />
                    {/* <div className="itemDetail__slider-lightbox-lupa"></div> */}
                </div>
            </div>
        </>
    )
}

export default Images;