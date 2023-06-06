import { useEffect } from "react";
import axios from "axios";

const Home = () => {
    const BASE_URL = `https://api.themoviedb.org/3`;
    const API_KEY = `api_key=b5810e430a249494e0cfef5beddec241`;
    const API_URL = BASE_URL + `/movie/now_playing?${API_KEY}&language=ko&page=1`;
    const aa = null;
    const fetchDatas = async () => {
        const datas = await axios.get(API_URL).then(response => {
            if (response.status === 200) {
                return response.data.results;
            }
        });

        console.log(datas);

        return datas;
    };

    useEffect(() => {
        fetchDatas();
    }, []);

    return (
        <h1>메인페이지</h1>
    )
}

export default Home;