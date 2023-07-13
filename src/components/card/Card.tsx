import { ICard } from 'types';

const Card = (props: ICard) => {
    const { title, poster_path, overview } = props;

    return (
        <div className="relative max-w-xs shadow m-2 cursor-pointer bg-white border border-gray-300 rounded-lg hover:border-teal-600">
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-70 hidden">+</div>
            <div className="flex min-h-max">
                <img className="rounded-t-lg" src={poster_path} alt={title} style={{ minHeight: '480px' }} />
            </div>
            <div className="p-3">
                <div>
                    <h5 className="mb-3 text-xl font-bold text-teal-600 tracking-tight">{title}</h5>
                </div>
                <p className="text-sm mb-3 font-normal line-clamp-2">{overview !== '' ? overview : '내용없음'}</p>
                {/* <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-500 rounded-lg hover:bg-teal-800 focus:outline-none ">
                    더보기
                    <svg aria-hidden="true" className="w-2 h-2 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </a> */}
            </div>
        </div>
    );
};

export default Card;
