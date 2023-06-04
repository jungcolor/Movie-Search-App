import { BrowserRouter } from 'react-router-dom';

import Header from './layouts/Header';
import Main from './layouts/Main';

const App = () => {
    return (
        <BrowserRouter>
            <div id="app" className="min-h-screen flex flex-col h-screen">
                <Header></Header>
                <Main></Main>
            </div>
        </BrowserRouter>
    );
}

export default App;