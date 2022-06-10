import Logo from '../../assets/img/logo/logo.png'

const Loading = () => {
    return ( 
        <>
            <div className="loading">
                <div className="loading__image">
                    <img src={Logo} className="loading__image-logo" alt="Super Yajid" />
                </div>
                <div className="loading__text">
                    <h1 className="loading__text-title">Cargando...</h1>
                </div>
            </div>
        </>
    )
}

export default Loading;