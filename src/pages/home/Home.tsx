import { useEffect, useState } from "react";
import axios from "axios";

import { ICard } from "types";
import { Card, Spinner } from "@components";

const Home = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    const API_KEY = `api_key=b5810e430a249494e0cfef5beddec241`;
    const API_URL = `https://api.themoviedb.org/3/movie/popular?${API_KEY}&language=ko-KR`;

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
        loading
            ?
            <Spinner />
            :
            <div className="flex flex-wrap justify-center">
                {videos?.map((video: ICard) => {
                    return <Card key={video.id} title={video.title} overview={video.overview} poster_path={`https://image.tmdb.org/t/p/w500/${video.poster_path}`}></Card>
                })}
            </div >
    )
}

export default Home;