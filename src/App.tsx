import { Header, Main } from './layouts/index';

const App = () => {
    return (
        <div id="app" className="min-h-screen flex flex-col h-screen">
            <Header />
            <Main />
        </div>
    );
}

export default App;