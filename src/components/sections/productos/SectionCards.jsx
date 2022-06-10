const SectionCards = ( { children, title } ) => {
    return (
        <>
            <main className="sectionCards">
                <section className="sectionCards__destacados">
                    <div className="sectionCards__destacados-title">
                        <h2 className="sectionCards__destacados-h2">{title}</h2>
                        <div className="sectionCards__destacados-line"></div>
                    </div>
                    {children}
                </section>
            </main>
        </>
    )
}

export default SectionCards;