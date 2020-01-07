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
    constructor(name:string,url?:string,isFavourite?:boolean){
        this.name=name;
        this.url=url;
        this.isFavourite=isFavourite;
    }  
}
