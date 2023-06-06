import { Link } from 'react-router-dom';

const navigations = [
    { id: "navi1", link: "/page2", title: "페이지2" },
    { id: "navi2", link: "/page3", title: "페이지3" },
    { id: "navi3", link: "/page4", title: "페이지4" },
    { id: "navi4", link: "/page5", title: "페이지5" },
    { id: "navi5", link: "/page6", title: "페이지6" },
];

const Navigation = () => {
    return (
        <nav className="flex">
            {navigations?.map(navi => {
                return <Link key={navi.id} to={navi.link} className="mx-6 text-teal-800 hover:text-teal-800">{navi.title}</Link>;
            })}
        </nav>
    )
}

export default Navigation;