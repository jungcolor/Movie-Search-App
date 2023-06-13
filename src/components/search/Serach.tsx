import { useState } from "react";

const Search = () => {
    const [value, setValue] = useState("");
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = e;

        setValue(target.value);
    };
    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(e);
    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setValue("");
    };

    return (
        <article id="serach" className="flex justify-center my-8">
            <form onSubmit={onSubmit}>
                <input type="text" className="w-96 shadow appearance-none border rounded rounded-tr-none rounded-br-none py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="검색어를 입력하세요" value={value} onChange={onChange} />
                <button type="button" className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded rounded-tl-none rounded-bl-none" onClick={onClick}>검색버튼</button>
            </form>
        </article>
    )
};

export default Search;