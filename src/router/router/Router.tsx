import { Routes, Route } from 'react-router-dom';

import { HomeContainer, MovieContainer } from '@pages';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/movie" element={<MovieContainer />} />
            <Route path="/page3" element={<h2>페이지3</h2>} />
            <Route path="/page4" element={<h2>페이지4</h2>} />
            <Route path="/page5" element={<h2>페이지5</h2>} />
            <Route path="/page6" element={<h2>페이지6</h2>} />
        </Routes>
    );
};

export default Router;
