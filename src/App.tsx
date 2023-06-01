const App = () => {
    return (
        <div id="wrpper" className="min-h-screen flex flex-col h-screen">
            <header className="flex flex-col items-center justify-center z-50 w-full text-sm py-4">
                <h1 className="mb-6">
                    <a href="#" className="text-3xl font-semibold">영화 검색 사이트</a>
                </h1>
                <nav className="flex">
                    <a href="#" className="mx-4">목록1</a>
                    <a href="#" className="mx-4">목록2</a>
                    <a href="#" className="mx-4">목록3</a>
                    <a href="#" className="mx-4">목록4</a>
                    <a href="#" className="mx-4">목록5</a>
                </nav>
            </header >
            <main id="container" className="w-full h-screen py-8 px-8">
                <article id="serach" className="flex justify-center">
                    <input type="text" className="w-80 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="검색어를 입력하세요" />
                    <button type="button" className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded">검색버튼</button>
                </article>
                <div id="content">
                    {/* 동적으로 변경 될 영역 */}
                    <h2>내용</h2>
                </div>
            </main>
        </div >
    )
}

export default App;