import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="flex flex-col items-center justify-center z-50 w-full py-4 border-b-2 border-b-teal-500 bg-white">
            <h1 className="mb-6">
                <Link to="/" className="text-3xl font-semibold text-teal-500">영화 검색 사이트</Link>
            </h1>
            <nav className="flex">
                <Link to="/netflix" className="mx-6 text-teal-800 hover:text-teal-800">넷플릭스</Link>
                <Link to="/disneyplus" className="mx-6 text-teal-800 hover:text-teal-800">디즈니+</Link>
                <Link to="/coupangplay" className="mx-6 text-teal-800 hover:text-teal-800">쿠팡플레이</Link>
                <Link to="/watcha" className="mx-6 text-teal-800 hover:text-teal-800">왓챠</Link>
                <Link to="/tving" className="mx-6 text-teal-800 hover:text-teal-800">티빙</Link>
            </nav>
        </header >
    );
}

export default Header;