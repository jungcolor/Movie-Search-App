import { Routes, Route } from 'react-router-dom';

import { Home } from "@pages";

const Main = () => {
    return (
        <main id="container" className="w-full h-screen py-8 px-8">
            <article id="serach" className="flex justify-center mb-8">
                <input type="text" className="w-80 shadow appearance-none border rounded rounded-tr-none rounded-br-none py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="검색어를 입력하세요" />
                <button type="button" className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded rounded-tl-none rounded-bl-none">검색버튼</button>
            </article>
            <div id="content">
                {/* 동적으로 변경 될 영역 */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/page2" element={<h2>페이지2</h2>} />
                    <Route path="/page3" element={<h2>페이지3</h2>} />
                    <Route path="/page4" element={<h2>페이지4</h2>} />
                    <Route path="/page5" element={<h2>페이지5</h2>} />
                    <Route path="/page6" element={<h2>페이지6</h2>} />
                </Routes>
            </div>
        </main>
    );
}

export default Main;