export interface Pokemon{
    count: any;
    next: any;
    previous: any;
    results: PokemonName[];
}

interface PokemonName {
    name: string;
    url:string;
}
