export type Callback<T> = (data?: T) => void;

export interface Data {
    articles: Array<Article>;
    sources: Array<Source>;
}

export interface MyNews {
    articles: Array<Article>;
    status: string;
    totalResults: number;
}

export interface MySources {
    status: string;
    sources?: Array<Source>;
}

export type Article = {
    title: string;
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: {
        id: string;
        name: string;
    };
    url: string;
    urlToImage: string;
};

export type Source = {
    id: string;
    category: string;
    description: string;
    country: string;
    language: string;
    name: string;
    url: string;
};
