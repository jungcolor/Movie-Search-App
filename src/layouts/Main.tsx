import { Router } from "@router";
import { Search } from "@components";

const Main = () => {
    return (
        <main id="container" className="w-full h-screen">
            <Search></Search>
            <div id="content" className="py-8 px-8">
                {/* 동적으로 변경 될 영역 */}
                <Router />
            </div>
        </main>
    );
}

export default Main;