import {v4 as uuidV4} from "uuid"

export class Cars{
    id: string;
    name: string;
    available: boolean;
    description: string;
    daily_rate: number;
    license_plate: string;
    fine_amount: number;
    brand: string;
    category_id: string;
    created_at: Date

    constructor(){
        if(!this.id){
            this.id = uuidV4();
            this.available = true;
            this.created_at =  new Date()
        }
    }
}