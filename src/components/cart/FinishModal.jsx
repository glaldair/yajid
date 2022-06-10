import { Link } from "react-router-dom";

const FinishModal = () => {
    return (
        <>
            <div className="finishModal">
                <div className="finishModal__content">
                    <h2 className="finishModal__title"> ¡Gracias por tu pedido! </h2>
                    <p className="finishModal__text">Hemos recibido tu pedido y te contactaremos a la brevedad para confirmarlo.</p>

                    <div className="finishModal__footer">
                        <button className="finishModal__footer-button">
                            <Link to="/productos"> Volver a la tienda </Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FinishModal;