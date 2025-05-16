import React from 'react';
import './MainLayout.css';
import MainHeader from "../MainHeader/MainHeader.jsx";
import Footer from "../Footer/Footer.jsx";
import Article from "../Article/Article.jsx";
import AsideCard from "../AsideCard/AsideCard.jsx";
import NewsStrip from "../NewsStrip/NewsStrip.jsx";
import AdvCard from "../AdvCard/AdvCard.jsx";
import NecrologieCard from "../NecrologieCard/NecrologieCard.jsx";

const MainContent = () => {
    return (
        <div className="container">
            <div className="content-section">

                <div className="first-type-content-grid">
                    {/* Left column (2fr) */}
                    <div className="main-article-column">
                        <div className="section-header">
                            <h2>Primo piano</h2>
                        </div>
                        <div className="main-article">
                            <div className="article-title-section">
                                <h1>
                                    Manuel Calandrino, chi era il 23enne morto nella discoteca mantovana del Madera. Dal lavoro al calcio: «Siamo scioccati»
                                </h1>
                               <div className={"main-article-author"}>
                                   di Giorgio Pinotti
                               </div>
                            </div>
                            <div className="article-image-section">
                                <img
                                    src="https://placehold.co/600x400"
                                    alt="Manuel Calandrino in discoteca"
                                />
                            </div>
                        </div>

                        <div className="article-list">
                            <Article
                                preview="Schiaffi e calci a una pensionata per il parcheggio conteso al supermercato: denunciate mamma e figlia adolescente"
                                author=" Redazione web"
                                image="https://placehold.co/160x100"
                            />
                            <Article
                                preview="“Nuove droghe” sempre più diffuse, nell’Alto Mantovano denunciato uno spacciatore di ketamina: ecco dove vengono acquistate e quanto costano"
                                author=" Valerio Morabito"
                                image="https://placehold.co/160x100"
                            />
                            <Article
                                preview="Fa pipì nel centro di Poggio Rusco, poi prova a sfilare un manganello a un carabiniere: arrestato un 30enne nel Mantovano"
                                author="Valerio Morabito"
                                image="https://placehold.co/160x100"
                            />
                        </div>
                    </div>

                    {/* Right column (1fr) */}
                    <aside className="sidebar">
                        <img src="https://placehold.co/300x600" alt="adv" />
                        <div className="aside-section-title">I più letti</div>
                        <div className="aside-card-list">
                            <AsideCard
                                image="https://placehold.co/115x65"
                                category="LA TRAGEDIA"
                                title="Manuel Calandrino, chi era il 23enne morto nella discoteca mantovana del Madera. Dal lavoro al calcio: «Siamo scioccati»"
                            />
                            <div className="aside-divider" />
                            <AsideCard
                                image="https://placehold.co/115x65"
                                category="IL DRAMMA"
                                title="Cade con la moto e muore a Bergantino (Rovigo)..."
                            />
                            <div className="aside-divider" />
                            <AsideCard
                                image="https://placehold.co/115x65"
                                category="L'OPERAZIONE"
                                title="Freddi Dolciaria di Castiglione viene ceduta..."
                            />
                        </div>

                        <div>

                        <AdvCard
                            imageSrc="https://placehold.co/250x180"
                            title="/// OMNIA MANTOVA"
                            subtitle="Omnia Mantova - L'ultimo papa in città, aspettando Leone XIV "
                       />

                        <AdvCard
                            imageSrc="https://placehold.co/250x200"
                            subtitle="Aspettando Leone XIV"
                        />

                        </div>
                    </aside>
                </div>

                <div className="bottom-banner">
                    <img src="https://placehold.co/970x60" alt="adv" />
                </div>



                <div className="news-strips-wrapper">
                    <NewsStrip
                        title="LE NOSTRE ESCLUSIVE"
                        backgroundColor="#1a3b70"
                        titleColor="white"
                        cards={[
                            {
                                image: "https://placehold.co/220x123",
                                skewedTitle: null,
                                category: "I FUNERALI DEL PONTEFICE",
                                subtitle: "In piazza San Pietro squadre di soccorso mantovane e oltre 60 ragazzi partiti da Viadana"
                            },
                            {
                                image: "https://placehold.co/220x123",
                                skewedTitle: null,
                                category: "Incidente stradale",
                                subtitle: "Grave incidente sulla tangenziale ovest questa mattina."
                            },
                            {
                                image: "https://placehold.co/220x123",
                                skewedTitle: null,
                                category: "Elezioni 2025",
                                subtitle: "Aggiornamenti dal seggio elettorale di Mantova."
                            },
                            {
                                image: "https://placehold.co/220x123",
                                skewedTitle: null,  // null or undefined means no skewed title shown
                                category: "ECONOMIA",
                                subtitle: "Nuove aperture di aziende nel Mantovano."
                            }
                        ]}
                    />

                    <NewsStrip
                        title={'In evidenza'}
                        backgroundColor={'#f7f7f7'}
                        titleColor={'#222222'}
                        cards={[
                            {
                                image: "https://placehold.co/220x123",
                                skewedTitle: null,
                                category: "SPORT",
                                subtitle: "Mantova Calcio batte il Verona 2-1 in casa."
                            },
                            {
                                image: "https://placehold.co/220x123",
                                skewedTitle: null,
                                category: "Festival musicale",
                                subtitle: "Tutto pronto per il concerto in piazza."
                            },
                            {
                                image: "https://placehold.co/220x123",
                                skewedTitle: null,
                                category: "CULTURA",
                                subtitle: "Mostra d’arte contemporanea inaugurata."
                            },
                            {
                                image: "https://placehold.co/220x123",
                                skewedTitle: null,
                                category: "Nuove misure ambientali",
                                subtitle: "Il Comune presenta il piano verde."
                            }
                        ]}
                    />

                    <NewsStrip
                        title={'Mantova Calcio'}
                        backgroundColor={'#1a3b70'}
                        titleColor={'white'}
                        cards={[
                            {
                                image: "https://placehold.co/220x123",
                                skewedTitle: null,
                                category: "Prossima partita",
                                subtitle: "Mantova vs. Brescia, domenica ore 15."
                            },
                            {
                                image: "https://placehold.co/220x123",
                                skewedTitle: null,
                                category: "CALCIOMERCATO",
                                subtitle: "Ultime trattative e rumors."
                            },
                            {
                                image: "https://placehold.co/220x123",
                                skewedTitle: null,
                                category: "Infortunio giocatore",
                                subtitle: "Aggiornamenti sulle condizioni di Rossi."
                            },
                            {
                                image: "https://placehold.co/220x123",
                                skewedTitle: null,
                                category: "INTERVISTE",
                                subtitle: "Parla l’allenatore dopo la vittoria."
                            }
                        ]}
                    />
                </div>

                <div className="first-type-content-grid">
                    {/* Left column (2fr) */}
                    <div className="main-article-column">
                        <div className="section-header">
                            <h2>Cronaca</h2>
                        </div>

                        <div className="article-list">
                            <Article
                                preview="Schiaffi e calci a una pensionata per il parcheggio conteso al supermercato: denunciate mamma e figlia adolescente"
                                author=" Redazione web"
                                image="https://placehold.co/160x100"
                            />
                            <Article
                                preview="“Nuove droghe” sempre più diffuse, nell’Alto Mantovano denunciato uno spacciatore di ketamina: ecco dove vengono acquistate e quanto costano"
                                author=" Valerio Morabito"
                                image="https://placehold.co/160x100"
                            />
                            <Article
                                preview="Fa pipì nel centro di Poggio Rusco, poi prova a sfilare un manganello a un carabiniere: arrestato un 30enne nel Mantovano"
                                author="Valerio Morabito"
                                image="https://placehold.co/160x100"
                            />
                            <Article
                                preview="Schiaffi e calci a una pensionata per il parcheggio conteso al supermercato: denunciate mamma e figlia adolescente"
                                author=" Redazione web"
                                image="https://placehold.co/160x100"
                            />
                            <Article
                                preview="“Nuove droghe” sempre più diffuse, nell’Alto Mantovano denunciato uno spacciatore di ketamina: ecco dove vengono acquistate e quanto costano"
                                author=" Valerio Morabito"
                                image="https://placehold.co/160x100"
                            />
                            <Article
                                preview="Fa pipì nel centro di Poggio Rusco, poi prova a sfilare un manganello a un carabiniere: arrestato un 30enne nel Mantovano"
                                author="Valerio Morabito"
                                image="https://placehold.co/160x100"
                            />
                        </div>
                    </div>

                    {/* Right column (1fr) */}
                    <aside className="sidebar">
                        <img src="https://placehold.co/300x600" alt="adv" />
                        <AdvCard
                            imageSrc="https://placehold.co/250x180"
                            title="/// OMNIA MANTOVA"
                            subtitle="Omnia Mantova - L'ultimo papa in città, aspettando Leone XIV "
                        />

                        <AdvCard
                            imageSrc="https://placehold.co/250x200"
                            subtitle="Aspettando Leone XIV"
                        />
                        <div className="aside-section-title">Prima Pagina</div>
                        <AdvCard
                            imageSrc="https://placehold.co/250x356"
                            subtitle="La prima pagina di oggi"
                        />
                    </aside>
                </div>


                <div className="news-strips-wrapper">

                    <div className="news-strip-adv">
                        <img src="https://placehold.co/950x250" alt="adv" />
                    </div>

                    <NewsStrip
                        title={'LE NOSTRE ESCLUSIVE'}
                        backgroundColor={'#95a5bf'}
                        titleColor={'white'}
                        cards={[
                            {
                                image: "https://placehold.co/220x123",
                                skewedTitle: null,
                                category: "Evento speciale",
                                subtitle: "Grande partecipazione alla festa di quartiere."
                            },
                            {
                                image: "https://placehold.co/220x123",
                                skewedTitle: null,
                                category: "Cultura",
                                subtitle: "Mostra d’arte contemporanea in città."
                            },
                            {
                                image: "https://placehold.co/220x123",
                                skewedTitle: null,
                                category: "Campionato regionale",
                                subtitle: "La squadra locale vola in finale."
                            },
                            {
                                image: "https://placehold.co/220x123",
                                skewedTitle: null,
                                category: "Aggiornamenti meteo",
                                subtitle: "Previsioni per il fine settimana."
                            }
                        ]}
                    />

                    <NewsStrip
                        title={'In evidenza'}
                        backgroundColor={'#95a5bf'}
                        titleColor={'white'}
                        cards={[
                            {
                                image: "https://placehold.co/220x123",
                                skewedTitle: null,
                                category: "Elezioni comunali",
                                subtitle: "I candidati presentano il programma."
                            },
                            {
                                image: "https://placehold.co/220x123",
                                skewedTitle: null,
                                category: "ECONOMIA",
                                subtitle: "Nuove imprese e investimenti in città."
                            },
                            {
                                image: "https://placehold.co/220x123",
                                skewedTitle: null,
                                category: "Innovazioni tecnologiche",
                                subtitle: "Startup mantovane in crescita."
                            },
                            {
                                image: "https://placehold.co/220x123",
                                skewedTitle: null,
                                category: "Eventi locali",
                                subtitle: "Il calendario degli appuntamenti di maggio."
                            }
                        ]}
                    />
                </div>

                <div className="section-header">
                    <h2>Le altre notizie</h2>
                </div>

                <div className="second-type-content-grid" >
                        <AsideCard
                            image="https://placehold.co/115x65"
                            category="LA SFIDA CANORA"
                            title="Il coro delle medie di Canneto trionfa al concorso nazionale"
                            date="12 maggio 2025"
                        />
                        <AsideCard
                            image="https://placehold.co/115x65"
                            category="IL DRAMMA"
                            title="Cade con la moto e muore a Bergantino (Rovigo)..."
                            date="12 maggio 2025"
                        />
                        <AsideCard
                            image="https://placehold.co/115x65"
                            category="L'OPERAZIONE"
                            title="Freddi Dolciaria di Castiglione viene ceduta..."
                            date="12 maggio 2025"
                        />
                        <AsideCard
                            image="https://placehold.co/115x65"
                            category="LA TRAGEDIA"
                            title="Manuel Calandrino, lcio: «Siamo scioccati»"
                            date="12 maggio 2025"
                        />
                        <AsideCard
                            image="https://placehold.co/115x65"
                            category="IL DRAMMA"
                            title="Cade con la moto e muore a Bergantino (Rovigo)..."
                            date="12 maggio 2025"
                        />
                        <AsideCard
                            image="https://placehold.co/115x65"
                            category="L'OPERAZIONE"
                            title="Rave party tra le campagne del Mantovano: 45 denunciati, nel capannone ketamina e hashish"
                            date="12 maggio 2025"
                        />
                        <AsideCard
                            image="https://placehold.co/115x65"
                            category="LA SFIDA CANORA"
                            title="Il coro delle medie di Canneto trionfa al concorso nazionale"
                            date="12 maggio 2025"
                        />
                        <AsideCard
                            image="https://placehold.co/115x65"
                            category="IL DRAMMA"
                            title="Cade con la moto e muore a Bergantino (Rovigo)..."
                            author=" Valerio Morabito"
                            date="12 maggio 2025"
                        />
                        <AsideCard
                            image="https://placehold.co/115x65"
                            category="L'OPERAZIONE"
                            title="Freddi Dolciaria di Castiglione viene ceduta..."
                            date="12 maggio 2025"
                        />
                </div>
                <div className="news-strips-wrapper">

                    <NewsStrip
                        title={'Sport'}
                        backgroundColor={'#1a3b70'}
                        titleColor={'white'}
                        cards={[
                            {image: "https://placehold.co/220x123", skewedTitle: null, category: "Calcio", subtitle: "Il Mantova vince contro il Modena 3-1."},
                            {image: "https://placehold.co/220x123", skewedTitle: null, category: "Basket", subtitle: "La squadra locale si qualifica ai playoff."},
                            {image: "https://placehold.co/220x123", skewedTitle: null, category: "Atletica", subtitle: "Nuovi record regionali nei 100 metri."},
                            {image: "https://placehold.co/220x123", skewedTitle: null, category: "Tennis", subtitle: "Torneo internazionale in corso a Mantova."}
                        ]}
                    />

                    <NewsStrip
                        title={'Rubriche'}
                        titleColor={'#222222'}
                        cards={[
                            {image: "https://placehold.co/220x123", skewedTitle: "CULTURA", category: "Libri", subtitle: "Consigli di lettura per il mese di maggio."},
                            {image: "https://placehold.co/220x123", skewedTitle: "GASTRONOMIA", category: "Ricette", subtitle: "Piatti tipici mantovani da provare."},
                            {image: "https://placehold.co/220x123", skewedTitle: "VIAGGI", category: "Itinerari", subtitle: "Scopri i luoghi nascosti del Mantovano."},
                            {image: "https://placehold.co/220x123", skewedTitle: "STORIA", category: "Memorie", subtitle: "Racconti e aneddoti dalla città."}
                        ]}
                    />

                    <NewsStrip
                        cards={[
                            {image: "https://placehold.co/220x123", skewedTitle: "Generico 1", category: "Generico 1", subtitle: "Descrizione del primo elemento generico."},
                            {image: "https://placehold.co/220x123", skewedTitle: "Generico 2", category: "Generico 2", subtitle: "Descrizione del secondo elemento generico."},
                            {image: "https://placehold.co/220x123", skewedTitle: "Generico 3", category: "Generico 3", subtitle: "Descrizione del terzo elemento generico."},
                            {image: "https://placehold.co/220x123", skewedTitle: "Generico 4", category: "Generico 4", subtitle: "Descrizione del quarto elemento generico."}
                        ]}
                    />

                    <NewsStrip
                        cards={[
                            {image: "https://placehold.co/220x123", skewedTitle: "Altro 1", category: "Altro 1", subtitle: "Descrizione del primo elemento alternativo."},
                            {image: "https://placehold.co/220x123", skewedTitle: "Altro 2", category: "Altro 2", subtitle: "Descrizione del secondo elemento alternativo."},
                            {image: "https://placehold.co/220x123", skewedTitle: "Altro 3", category: "Altro 3", subtitle: "Descrizione del terzo elemento alternativo."},
                            {image: "https://placehold.co/220x123", skewedTitle: "Altro 4", category: "Altro 4", subtitle: "Descrizione del quarto elemento alternativo."}
                        ]}
                    />

                    <NewsStrip
                        title={'Video'}
                        titleColor={'white'}
                        backgroundColor={"#00023D"}
                        cards={[
                            { subtitle: "Ultimi video della settimana" },
                            { subtitle: "Interviste esclusive" },
                            { subtitle: "Highlights delle partite" },
                            { subtitle: "Eventi speciali in diretta" }
                        ]}
                    />

                    <NewsStrip
                        title={'Telemantova'}
                        titleColor={'white'}
                        backgroundColor={"#00023D"}
                        cards={[
                            { subtitle: "Programmi in onda oggi" },
                            { subtitle: "Rubriche e approfondimenti" },
                            { subtitle: "Notizie locali aggiornate" },
                            { subtitle: "Appuntamenti da non perdere" }
                        ]}
                    />

                </div>

                <div className="grid-content-dotted-divider" />

                <div className="first-type-content-grid">
                    {/* Left column (2fr) */}
                    <div className="main-article-column">
                        <div className="section-header">
                            <h2>Italia e mondo</h2>
                        </div>

                        <div className="article-list">
                            <Article
                                category="Sport Nazionale"
                                preview="2-0 in casa dell'Espanyol, il Barcellona vince la Liga"
                                image="https://placehold.co/160x100"
                            />
                            <Article
                                category="Mondo"
                                preview="“Libia, nuove manifestazioni a Tripoli contro il premier"
                                image="https://placehold.co/160x100"
                            />
                            <Article
                                category="Sport Nazionale"
                                preview="2-0 in casa dell'Espanyol, il Barcellona vince la Liga"
                                image="https://placehold.co/160x100"
                            />
                            <Article
                                category="Mondo"
                                preview="“Libia, nuove manifestazioni a Tripoli contro il premier"
                                image="https://placehold.co/160x100"
                            />
                            <Article
                                category="Sport Nazionale"
                                preview="2-0 in casa dell'Espanyol, il Barcellona vince la Liga"
                                image="https://placehold.co/160x100"
                            />
                            <Article
                                category="Mondo"
                                preview="“Libia, nuove manifestazioni a Tripoli contro il premier"
                                image="https://placehold.co/160x100"
                            />
                        </div>
                    </div>

                    {/* Right column (1fr) */}
                    <aside className="sidebar">
                        <AdvCard
                            imageSrc="https://placehold.co/250x180"
                        />

                        <AdvCard
                            imageSrc="https://placehold.co/250x180"
                            subtitle="Speciale Giornata mondiale dell’Acqua: la diretta "
                        />

                        <AdvCard
                            imageSrc="https://placehold.co/250x180"
                            subtitle=" Pasticcerie dell’anno 2024-25, trionfa La Tur dal Sücar: «Premiata la tradizione»  "
                        />

                        <AdvCard
                            imageSrc="https://placehold.co/250x180"
                            subtitle="Una rete di intelligenze senza paura del futuro  "
                        />

                        <AdvCard
                            imageSrc="https://placehold.co/250x180"
                        />

                        <AdvCard
                            imageSrc="https://placehold.co/250x180"
                            subtitle="Tre generazioni con passione per la lavorazione del legno"
                        />


                        <div className="aside-section-title"> Necrologie </div>

                        <div className="necrologie-section">
                            <NecrologieCard
                                name="STELVIO SANTACHIARA"
                                location="San Giorgio Bigarello"
                                date="09.05.2025"
                                imageSrc="https://placehold.co/50x50"
                            />
                            <NecrologieCard
                                name="DAVIDE SANGUANINI"
                                location=""
                                date="12.05.2025"
                                imageSrc="https://placehold.co/50x50"
                            />
                            <NecrologieCard
                                name="PIERANGELA RUBES"
                                location="Asola"
                                date="12.05.2025"
                                imageSrc="https://placehold.co/50x50"
                            />
                            <NecrologieCard
                                name="FRANCO SCAGLIONI"
                                location="Mantova"
                                date="09.05.2025"
                                imageSrc="https://placehold.co/50x50"
                            />
                            <NecrologieCard
                                name="PAOLA LUPATELLI ved. PANTIGLIONI"
                                location="Mantova"
                                date="11.05.2025"
                                imageSrc="https://placehold.co/50x50"
                            />
                        </div>

                        <div className="view-all-necrologie">
                            <a href="/necrologie">VEDI TUTTI I NECROLOGI</a>
                        </div>

                    </aside>
                </div>

            </div>
        </div>
    );
};

const MainLayout = () => {
    return (
        <div className="main-layout">
            <div className="layout-wrapper">
                <MainHeader />
                <div className="main-content">
                    <MainContent />
                </div>
                <footer>
                    <Footer />
                </footer>
            </div>
        </div>
    );
};

export default MainLayout;
