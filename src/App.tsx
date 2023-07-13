import { Header, Main } from '@layouts';

const App = () => {
    return (
        <div id="app" className="min-h-screen flex flex-col h-screen">
            <div className="modal hidden">
                <div className="modal-contents relative z-50">
                    <div className="modal-header text-white">
                        <h3>TITLE</h3>
                        <div className="modal-option"></div>
                    </div>
                    <div className="modal-body text-white">CONTENTS</div>
                </div>
            </div>

            <Header />
            <Main />
        </div>
    );
};

export default App;
