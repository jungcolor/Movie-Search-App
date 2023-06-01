const App = () => {
    return (
        <div id="wrpper" className="min-h-screen flex flex-col h-screen">
            <header className="flex flex-col items-center justify-center z-50 w-full text-sm py-4">
                <h1 className="mb-6">
                    <a href="#" className="text-3xl font-semibold">로고</a>
                </h1>
                <nav className="flex">
                    <a href="#" className="mx-4">목록1</a>
                    <a href="#" className="mx-4">목록2</a>
                    <a href="#" className="mx-4">목록3</a>
                    <a href="#" className="mx-4">목록4</a>
                    <a href="#" className="mx-4">목록5</a>
                </nav>
            </header >
            <main id="container" className="w-full h-screen py-10 px-10">
                <div id="serach">
                    <h2>검색</h2>
                </div>
                <div id="content">
                    {/* 동적으로 변경 될 영역 */}
                    <h2>내용</h2>
                </div>
            </main>
        </div >
    )
}

export default App;