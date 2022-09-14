export interface User {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    password: string;
    is_admin: boolean;
    token: string | null;
}