export interface ReviewModel {
    rating: number;
    reviews: {
        label: string;
        value: number;
    };
}