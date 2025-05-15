import React from 'react';
import './MainLayout.css';
import MainHeader from "../MainHeader/MainHeader.jsx";
import Footer from "../Footer/Footer.jsx";
import Article from "../Article/Article.jsx";
import AsideCard from "../AsideCard/AsideCard.jsx";
import NewsStrip from "../NewsStrip/NewsStrip.jsx";
import AdvCard from "../AdvCard/AdvCard.jsx";

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
                        title={'LE NOSTRE ESCLUSIVE'}
                        backgroundColor={'#1a3b70'}
                        titleColor={'white'}
                    />

                    <NewsStrip
                        title={'In evidenza'}
                        backgroundColor={'#f7f7f7'}
                        titleColor={'#222222'}
                    />

                    <NewsStrip
                        title={'Mantova Calcio'}
                        backgroundColor={'#1a3b70'}
                        titleColor={'white'}
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
                    />

                    <NewsStrip
                        title={'In evidenza'}
                        backgroundColor={'#95a5bf'}
                        titleColor={'white'}
                    />
                </div>

                <div className="second-type-content-grid" >
                        <AsideCard
                            image="https://placehold.co/115x65"
                            category="LA TRAGEDIA"
                            title="Manuel Calandrino, chi era il 23enne morto nella discoteca mantovana del Madera. Dal lavoro al calcio: «Siamo scioccati»"
                        />
                        <AsideCard
                            image="https://placehold.co/115x65"
                            category="IL DRAMMA"
                            title="Cade con la moto e muore a Bergantino (Rovigo)..."
                        />
                        <AsideCard
                            image="https://placehold.co/115x65"
                            category="L'OPERAZIONE"
                            title="Freddi Dolciaria di Castiglione viene ceduta..."
                        />
                        <AsideCard
                            image="https://placehold.co/115x65"
                            category="LA TRAGEDIA"
                            title="Manuel Calandrino, lcio: «Siamo scioccati»"
                        />
                        <AsideCard
                            image="https://placehold.co/115x65"
                            category="IL DRAMMA"
                            title="Cade con la moto e muore a Bergantino (Rovigo)..."
                        />
                        <AsideCard
                            image="https://placehold.co/115x65"
                            category="L'OPERAZIONE"
                            title="Rave party tra le campagne del Mantovano: 45 denunciati, nel capannone ketamina e hashish"
                        />
                        <AsideCard
                            image="https://placehold.co/115x65"
                            category="LA TRAGEDIA"
                            title="Manuel Calandrino, chi era il 23enne morto nella discoteca mantovana del Madera. Dal lavoro al calcio: «Siamo scioccati»"
                        />
                        <AsideCard
                            image="https://placehold.co/115x65"
                            category="IL DRAMMA"
                            title="Cade con la moto e muore a Bergantino (Rovigo)..."
                        />
                        <AsideCard
                            image="https://placehold.co/115x65"
                            category="L'OPERAZIONE"
                            title="Freddi Dolciaria di Castiglione viene ceduta..."
                        />

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
