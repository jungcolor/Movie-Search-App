import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="flex">
            <Link to="/netflix" className="mx-6 text-teal-800 hover:text-teal-800">넷플릭스</Link>
            <Link to="/disneyplus" className="mx-6 text-teal-800 hover:text-teal-800">디즈니+</Link>
            <Link to="/coupangplay" className="mx-6 text-teal-800 hover:text-teal-800">쿠팡플레이</Link>
            <Link to="/watcha" className="mx-6 text-teal-800 hover:text-teal-800">왓챠</Link>
            <Link to="/tving" className="mx-6 text-teal-800 hover:text-teal-800">티빙</Link>
        </nav>
    )
}

export default Navigation;