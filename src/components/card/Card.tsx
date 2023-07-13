import { ICard } from 'types';

// TODO - CSS관련 정리 필요
import './card.scss';

const Card = (props: ICard) => {
    const { title, poster_path, overview } = props;

    return (
        <div className="card m- relative max-w-xs shadow m-3 box-border cursor-pointer bg-white border-2 border-gray-300 hover:border-teal-500">
            <div className="card-thumnail relative flex min-h-max">
                <img src={poster_path} alt={title} style={{ minHeight: '480px' }} />
            </div>
            <div className="p-3">
                <div>
                    <h5 className="mb-3 text-xl font-bold text-teal-600 tracking-tight">{title}</h5>
                </div>
                <p className="text-sm mb-3 font-normal line-clamp-2">{overview !== '' ? overview : '내용없음'}</p>
            </div>
        </div>
    );
};

export default Card;
