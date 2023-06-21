export interface ICard {
    id?: string;
    title?: string;
    poster_path?: string;
    overview?: string;
}

export interface ISearch {
    searchHandler: (value: string) => void;
}
