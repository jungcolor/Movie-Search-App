import { Link } from 'react-router-dom';
import { Navigation } from '@components/navigation';

const Header = () => {
    return (
        <header className="flex flex-col items-center justify-center z-50 w-full py-4 border-b-2 border-b-teal-500 bg-white">
            <h1 className="mb-6">
                <Link to="/" className="text-3xl font-semibold text-teal-500">영화 검색 사이트</Link>
            </h1>
            <Navigation></Navigation>
        </header >
    );
}

export default Header;