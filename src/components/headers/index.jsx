const HeaderImg = ( { img, title, texto } ) => {
    return (
        <>
            <section className="sectionsHeader">
                <div className="sectionsHeader__image">
                    <img src={img} className="sectionsHeader__image-img" alt="Super Yajid"/>
                </div>
                <div className="sectionsHeader__text">
                    <h1 className="sectionsHeader__text-title">
                        {title}
                    </h1>
                    <p className="sectionsHeader__text-description">
                        {texto}
                    </p>
                </div>
            </section>
        </>
    )
}

export default HeaderImg;