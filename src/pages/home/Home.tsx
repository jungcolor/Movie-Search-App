import { useEffect, useState } from "react";
import axios from "axios";

import { ICard } from "types";
import { Card, Spinner } from "@components";

const Home = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    const API_KEY = `api_key=b5810e430a249494e0cfef5beddec241`;
    const API_URL = `https://api.themoviedb.org/3/movie/popular?${API_KEY}&language=ko-KR&page=1`;
    const API_URL_SEARCH = `https://api.themoviedb.org/3/search/movie?${API_KEY}&language=ko-KR&page=1&query=태극기`;

    const fetchDatas = async () => {
        const datas = await axios.get(API_URL_SEARCH).then(response => {
            if (response.status === 200) {
                return response.data.results;
            }
        });

        setVideos(datas);
        setLoading(false);
    };

    useEffect(() => {
        fetchDatas();
    }, []);

    // 로딩중..
    if (loading) {
        return <Spinner />;
    }

    return (
        <div className="flex flex-wrap justify-center">
            {videos.length > 0 ?
                videos.map((video: ICard) => {
                    return <Card key={video.id} title={video.title} overview={video.overview} poster_path={`https://image.tmdb.org/t/p/w500/${video.poster_path}`}></Card>
                })
                :
                <h2>검색결과가 없습니다.</h2> // 컴포넌트로 변경??
            }
        </div>
    )
}

export default Home;