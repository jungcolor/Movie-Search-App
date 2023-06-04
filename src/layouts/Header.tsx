const Header = () => {
    return (
        <header className="flex flex-col items-center justify-center z-50 w-full py-4 border-b-2 border-b-teal-500 bg-white">

            <h1 className="mb-6">
                <a href="#" className="text-3xl font-semibold text-teal-500">영화 검색 사이트</a>
            </h1>
            <nav className="flex">
                <a href="#" className="mx-6 text-teal-800 hover:text-teal-800">목록1</a>
                <a href="#" className="mx-6 text-teal-800 hover:text-teal-800">목록2</a>
                <a href="#" className="mx-6 text-teal-800 hover:text-teal-800">목록3</a>
                <a href="#" className="mx-6 text-teal-800 hover:text-teal-800">목록4</a>
                <a href="#" className="mx-6 text-teal-800 hover:text-teal-800">목록5</a>
            </nav>
        </header >
    );
}

export default Header;