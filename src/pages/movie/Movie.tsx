import { ICard } from 'types';
import { Search, Card } from '@components';

interface IMovie {
    videos: ICard[];
    onSearch: (value: string) => void;
    onClick: () => void;
}

const Movie = (props: IMovie) => {
    const { videos, onSearch, onClick } = props;

    return (
        <>
            <Search searchHandler={onSearch}></Search>
            <div className="flex flex-wrap justify-center">
                {
                    videos?.length ? (
                        videos.map((video: ICard) => {
                            return <Card key={video.id} title={video.title} overview={video.overview} poster_path={`https://image.tmdb.org/t/p/w500/${video.poster_path}`} onClickHandler={onClick}></Card>;
                        })
                    ) : (
                        <h2>검색결과가 없습니다.</h2>
                    ) // 컴포넌트로 변경??
                }
            </div>
        </>
    );
};

export default Movie;
