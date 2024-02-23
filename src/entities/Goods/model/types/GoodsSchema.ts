interface Good {
    brand: null | string;
    id: string;
    price: number;
    product: string;
}
export interface GoodsSchema {
    goods?: Good[];
    isLoading: boolean;
    error?: string;
}
