export interface Repositories {
    total_count: any;
    incomplete_results: any;
    items: Repository[];
}

export class Repository {
    name: string;
    private: boolean;
    html_url: string;
    language: string;
    stargazers_count: number;
}

export interface SearchResult {
    repositoryName: string;
    userid: string;
    __v: number;
    _id: string;
}