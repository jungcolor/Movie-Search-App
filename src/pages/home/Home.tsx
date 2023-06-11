import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const BASE_URL = `https://api.themoviedb.org/3`;
    const API_KEY = `api_key=b5810e430a249494e0cfef5beddec241`;
    const API_URL = BASE_URL + `/movie/now_playing?${API_KEY}&language=ko&page=1`;
    const fetchDatas = async () => {
        const datas = await axios.get(API_URL).then(response => {
            if (response.status === 200) {
                return response.data.results;
            }
        });

        setVideos(datas);
        setLoading(false);
        return datas;
    };

    useEffect(() => {
        fetchDatas();
    }, []);

    console.log(videos);

    return (
        loading ? <h1>로딩중..</h1> : videos?.map(video => {
            return (
                <div>
                    <div>{video.title}</div>
                </div>
            )
        })
    )
}

export default Home;