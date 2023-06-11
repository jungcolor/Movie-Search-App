import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const BASE_URL = `https://api.themoviedb.org/3`;
    const API_KEY = `api_key=b5810e430a249494e0cfef5beddec241`;
    const API_URL = BASE_URL + `/movie/now_playing?${API_KEY}&language=ko&page=1`;

    const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500";

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
        loading ? <h1>로딩중..</h1> :
            <div>
                {videos?.map(video => {
                    return (
                        <div className="bg-white border border-gray-200 rounded-lg shadow my-2 mx-2 flex-1" key={video.id}>
                            <a href="#">
                                <img className="rounded-t-lg" src={BASE_IMG_URL + video.poster_path} alt={video.title} />
                            </a>
                            <div className="p-2">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight">{video.title}</h5>
                                </a>
                                <p className="mb-3 font-normal">{video.overview}</p>
                                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-500 rounded-lg hover:bg-teal-800 focus:outline-none ">
                                    더보기
                                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    )
                })}
            </div>
    )
}

export default Home;