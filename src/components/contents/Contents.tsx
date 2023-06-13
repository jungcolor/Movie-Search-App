import Search from "@components/search/Serach";
import { Router } from "@router";

const Contents = () => {
    return (
        <div id="contents" className="py-8 px-8">
            <Search></Search>
            <Router />
        </div>
    )
};

export default Contents;