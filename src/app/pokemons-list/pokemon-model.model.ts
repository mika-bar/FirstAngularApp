export interface Pokemon{
    count: any;
    next: any;
    previous: any;
    results: PokemonName[];
}

export class PokemonName {
    name: string;
    url?:string;
    isFavourite?: boolean;   
}
