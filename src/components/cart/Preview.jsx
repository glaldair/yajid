const Preview = () => {
    return (
        <>
            <section className="cart__preview">
                <div className="cart__preview-info">
                    <h3 className="cart__preview-title">Visita nuestra sucursal</h3>
                </div>
                <div className="cart__preview-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d71524.55461352508!2d-99.23395094704352!3d19.58251492172622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1654882612805!5m2!1ses-419!2smx" frameBorder="0" style={{ border: 0 }} allowFullScreen title="Mapa Super Yajid"></iframe>
                </div>
            </section>
        </>
    )
}

export default Preview;