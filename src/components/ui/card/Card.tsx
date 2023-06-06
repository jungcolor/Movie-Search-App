const CardList = () => {
    return (
        <Card />
    )
}

export { CardList };

const Card = () => {
    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow my-2 mx-2 flex-1">
            <a href="#">
                이미지영역
                {/* <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" /> */}
            </a>
            <div className="p-2">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight">영화제목</h5>
                </a>
                <p className="mb-3 font-normal">영화내용 블라블라블라 내용블라블라영화내용 블라블라블라 내용블라블라영화내용 블라블라블라 내용블라블라영화내용 블라블라블라 내용블라블라</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-500 rounded-lg hover:bg-teal-800 focus:outline-none ">
                    더보기
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default Card;