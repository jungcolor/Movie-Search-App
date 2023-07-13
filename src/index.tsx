import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App';

// TODO - CSS관련 정리 필요
import './styles/tailwind.css';
import './styles/common.scss';

const container = document.getElementById('root');
const root = createRoot(container as Element);

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
);
