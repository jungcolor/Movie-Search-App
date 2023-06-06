import { Router } from "@router";

const Main = () => {
    return (
        <main id="container" className="w-full h-screen">
            <article id="serach" className="flex justify-center my-8">
                <input type="text" className="w-80 shadow appearance-none border rounded rounded-tr-none rounded-br-none py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="검색어를 입력하세요" />
                <button type="button" className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded rounded-tl-none rounded-bl-none">검색버튼</button>
            </article>
            <div id="content" className="py-8 px-8">
                {/* 동적으로 변경 될 영역 */}
                <Router />
            </div>
        </main>
    );
}

export default Main;