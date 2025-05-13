// App.jsx
import './App.css';
import TopNav from "./components/TopNav/TopNav.jsx";
import MainLayout from "./components/MainLayout/MainLayout.jsx";

function App() {
    return (
        <>
            <nav> <TopNav /> </nav>
            <div className="main-layout-container">
                <MainLayout>
                    <div className="layout-content">
                        <section>
                            <h2>Titolo Articolo 1</h2>
                            <p>Contenuto dell'articolo 1...</p>
                        </section>
                        <section>
                            <h2>Titolo Sezione 2</h2>
                            <p>Contenuto della sezione 2...</p>
                        </section>
                    </div>
                    <footer className="main-footer">
                        <p>&copy; 2025 Il Tuo Sito</p>
                    </footer>
                </MainLayout>
            </div>
        </>
    );
}

export default App;