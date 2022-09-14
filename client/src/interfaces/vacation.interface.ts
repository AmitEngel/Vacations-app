export interface VacationModel {
    id: number;
    description: string;
    destination: string;
    picture: string;
    from_date: Date | string;
    to_date: Date | string;
    price: number;
}