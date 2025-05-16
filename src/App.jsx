// App.jsx
import './App.css';
import TopNav from "./components/TopNav/TopNav.jsx";
import MainLayout from "./components/MainLayout/MainLayout.jsx";

function App() {
    return (
        <>
            <nav> <TopNav /> </nav>
            <div className="main-layout-container">
                <MainLayout/>
            </div>
        </>
    );
}

export default App;