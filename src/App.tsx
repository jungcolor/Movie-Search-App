const App = () => {
    return (
        <>
            <header>
                <h1>Header</h1>
                <div>
                    <h2>로고</h2>
                </div>
                <nav>
                    <ul>
                        <li><a href="#">목록1</a></li>
                        <li><a href="#">목록2</a></li>
                        <li><a href="#">목록3</a></li>
                        <li><a href="#">목록4</a></li>
                    </ul>
                </nav>
            </header>
            <div id="container">
                <h1>Container</h1>
                <div id="serach">
                    <h2>검색</h2>
                </div>
                <div id="content">
                    {/* 동적으로 변경 될 영역 */}
                    <h2>내용</h2>
                </div>
            </div>
        </>
    )
}

export default App;