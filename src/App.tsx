import { HeaderContainer, MainContainer } from '@layouts';

const App = () => {
    return (
        <div id="app" className="min-h-screen flex flex-col h-screen">
            <HeaderContainer />
            <MainContainer />
        </div>
    );
};

export default App;
