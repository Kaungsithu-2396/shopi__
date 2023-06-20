export interface productCard {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;

    rating: {
        rate: number;
        count: number;
    };
}
export interface categoryType {
    title: string;
    subTitle: string;
    color: string;
    animation: Object;
    colWidth?: string;
}
