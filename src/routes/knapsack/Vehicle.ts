//How to represent each vehicle

export type VehicleType = "Car" | "Bus" | "Truck" | "Bike"| "Emergency"


export const VehicleTypeImpact = {
    "Bike": 1,
    "Car": 2,
    "Emergency": 3,
    "Bus": 4,
    "Truck": 5
} as const;

export const VehicleTypePriority = {
    "Bike": 1,
    "Car": 2,
    "Truck": 3,
    "Bus": 4,
    "Emergency": 10
} as const;


//get priority value of each vehicle type

export function getVehicleTypeByPriority(priority: number): VehicleType | undefined {
    const types = Object.keys(VehicleTypePriority) as VehicleType[];
    for (const type of types) {
        if (VehicleTypePriority[type] === priority) {
            return type;
        }
    }
    return undefined;
}

//get congestion impact of each vehicle type

export function getVehicleTypeByImpact(impact: number): VehicleType | undefined {
    const types = Object.keys(VehicleTypeImpact) as VehicleType[];
    for (const type of types) {
        if (VehicleTypeImpact[type] === impact) {
            return type;
        }
    }
    return undefined;
}


export class Vehicle {
    
    #type: VehicleType;
    #congestionImpact: number = 0;
    #priorityValue: number = 0;
     
    constructor(type: VehicleType) {
        this.#type = type;
        this.#congestionImpact = VehicleTypeImpact[type];
        this.#priorityValue = VehicleTypePriority[type];
    }


    get type() {  return this.#type;  }
    get congestionImpact() { return this.#congestionImpact; }
    get priorityValue() { return this.#priorityValue; }
}