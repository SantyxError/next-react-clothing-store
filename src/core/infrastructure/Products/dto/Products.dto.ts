type ResultsDTO = {
    name: string;
    url: string;
  };
  
  export type ProductsDTO = {
    count: number;
    next: string;
    previous?: string;
    results: ResultsDTO[];
  };
  