export interface Repositories {
    total_count: any;
    incomplete_results: any;
    items: Repository[];
}

export class Repository {
    name: string;
    private: boolean;
    url: string;
    language: string;
    stargazers_count: number;
}