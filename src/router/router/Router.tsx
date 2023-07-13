import { Routes, Route } from 'react-router-dom';

import { Home, Movie } from '@pages';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie" element={<Movie />} />
            <Route path="/page3" element={<h2>페이지3</h2>} />
            <Route path="/page4" element={<h2>페이지4</h2>} />
            <Route path="/page5" element={<h2>페이지5</h2>} />
            <Route path="/page6" element={<h2>페이지6</h2>} />
        </Routes>
    );
};

export default Router;
