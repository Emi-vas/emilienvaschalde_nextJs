
const languageCards = () => {
    const listeCards = [
        {
            titre : "JAVASCRIPT",
            liste : ["React JS", "Next JS", "Vanilla JS"]
        },
        {
            titre : "CSS",
            liste : ["Sass","Tailwind"]
        }
    ]

    return (
        <div className="languageCards">
            {
                listeCards.map((card, index) => (
                    <div className="card" key={index}>
                        <h3>{card.titre}</h3> 
                        <ul>
                            {
                                card.liste.map((item) => (
                                    <li>{item}</li>
                                ))
                            }                        
                        </ul>                       
                    </div>
                ))
            }
        </div>
    );
};

export default languageCards;