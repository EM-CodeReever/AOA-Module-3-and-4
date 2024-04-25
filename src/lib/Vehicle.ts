//How to represent each vehicle

export type VehicleType = "Car" | "Bus" | "Truck" | "Bike"| "Emergency"
export class Vehicle {
    
    #type: VehicleType;
    #congestionImpact: number = 0;
    #priorityValue: number = 0;
     
    constructor(type: VehicleType) {
        this.#type = type;

        if(type === "Car") {

            this.#congestionImpact = 2;
            this.#priorityValue = 2;

        }else if(type === "Bus") {

            this.#congestionImpact = 4;
            this.#priorityValue = 4;
        }
        else if(type === "Truck") {

            this.#congestionImpact = 5;
            this.#priorityValue = 3;
        }
        else if(type === "Bike") {

            this.#congestionImpact = 1;
            this.#priorityValue = 1;
        }
        else if(type === "Emergency") {
            
            this.#congestionImpact = 3;
            this.#priorityValue = 10;
        }

       
    }


    get type() {  return this.#type;  }
    get congestionImpact() { return this.#congestionImpact; }
    get priorityValue() { return this.#priorityValue; }
}