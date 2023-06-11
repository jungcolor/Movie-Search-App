import { useEffect, useState } from "react";
import axios from "axios";

import { Card } from "@components";
import { ICard } from "types";

const Home = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    const BASE_URL = `https://api.themoviedb.org/3`;
    const API_KEY = `api_key=b5810e430a249494e0cfef5beddec241`;
    const API_URL = BASE_URL + `/movie/now_playing?${API_KEY}&language=ko-KR&page=1`;
    const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500";

    const fetchDatas = async () => {
        const datas = await axios.get(API_URL).then(response => {
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

    return (
        loading ? <h1>로딩중..</h1> :
            <div className="flex flex-wrap justify-center">
                {videos?.map((video: ICard) => {
                    return <Card key={video.id} title={video.title} overview={video.overview} poster_path={BASE_IMG_URL + video.poster_path}></Card>
                })}
            </div>
    )
}

export default Home;