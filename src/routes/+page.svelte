<script lang="ts">
    import Bike from '$lib/svg/Bike.svelte'
    import Truck from '$lib/svg/Truck.svelte'
    import Car from '$lib/svg/Car.svelte'
    import Emergency from '$lib/svg/Emergency.svelte'
    import Bus from '$lib/svg/Bus.svelte'
  import RoadDivider from '$lib/components/RoadDivider.svelte';
  import {Vehicle} from '$lib/Vehicle';
  import { getBestPriorityVehicles } from '$lib/Knapsack';
  let vehicles: Vehicle[] = []
  let leftOverVehicles: Vehicle[] = [];
  let numberOfCars = 0;
  let numberOfTrucks = 0;
  let numberOfBikes = 0;
  let numberOfEmergency = 0;
  let numberOfBuses = 0;
  let showOutput = false;
  let portmoreCapacity = 48;
  let mandelaCapacity = 48;

  function SetupVehicles(){
    let allVehicles = []
    for(let i = 0; i < numberOfCars; i++){
        allVehicles.push(new Vehicle("Car"));
    }
    for(let i = 0; i < numberOfTrucks; i++){
        allVehicles.push(new Vehicle("Truck"));
    }
    for(let i = 0; i < numberOfBikes; i++){
        allVehicles.push(new Vehicle("Bike"));
    }
    for(let i = 0; i < numberOfEmergency; i++){
        allVehicles.push(new Vehicle("Emergency"));
    }
    for(let i = 0; i < numberOfBuses; i++){
        allVehicles.push(new Vehicle("Bus"));
    }
    return allVehicles;
  }

  function countVehicleTypes(vehicles: Vehicle[]){

    let carCount = 0;
    let truckCount = 0;
    let bikeCount = 0;
    let emergencyCount = 0;
    let busCount = 0;

    let countString = "";

    for(let i = 0; i < vehicles.length; i++){
        let vehicle = vehicles[i];
        if(vehicle.type === "Car"){
            carCount++;
        }
        if(vehicle.type === "Truck"){
            truckCount++;
        }
        if(vehicle.type === "Bike"){
            bikeCount++;
        }
        if(vehicle.type === "Emergency"){
            emergencyCount++;
        }
        if(vehicle.type === "Bus"){
            busCount++;
        }
    }

    if(carCount > 0){
        countString += `${carCount} Car(s), `;
    }
    if(truckCount > 0){
        countString += `${truckCount} Truck(s), `;
    }
    if(bikeCount > 0){
        countString += `${bikeCount} Bike(s), `;
    }
    if(emergencyCount > 0){
        countString += `${emergencyCount} Emergency Vehicle(s), `;
    }
    if(busCount > 0){
        countString += `${busCount} Bus(es), `;
    }

    return countString;

   
    }
    

    function getBestVehicles(capacity: number){
        let allVehicles = SetupVehicles();
        let bestVehicles = getBestPriorityVehicles(capacity, allVehicles);
        vehicles = bestVehicles;
        console.log(bestVehicles);
        getVehiclesLeftOverFromBestVehicles();
        showOutput = true;
    }

    function getVehiclesLeftOverFromBestVehicles(){
        let allVehicles = SetupVehicles();
        for(let i = 0; i < vehicles.length; i++){
            let vehicle = vehicles[i];
            let index = allVehicles.findIndex(v => v.type === vehicle.type);
            allVehicles.splice(index, 1);
        }
        console.log("leftover vehicles");
        console.log(allVehicles);
        leftOverVehicles = allVehicles;
    }

    function splitVehiclesEvenly(vehicles: Vehicle[], lanes: number){
        let splitVehicles = [];
        let vehiclesPerLane = vehicles.length / lanes;
        for(let i = 0; i < lanes; i++){
            let laneVehicles = vehicles.slice(i * vehiclesPerLane, (i + 1) * vehiclesPerLane);
            splitVehicles.push(laneVehicles);
        }
        return splitVehicles;
    }

    


// let capacity = 10;
// let bestVehicles = getBestPriorityVehicles(capacity, vehicles);

// console.log(bestVehicles);


</script>

<svelte:head>
  <title>AOA Module 3</title>
</svelte:head>

<h1 class="text-xl text-center font-bold">Analysis of Algorithms</h1>
<h2 class="text-lg text-center">Module 3</h2>
<p class="text-center">Group: <strong>Elliot Morrison, Matthew Cole, Garaine Baker</strong></p>
<p class="text-center">This program makes use of the knapsack algorithm to find the best route for vehicles travelling to and from kingston; considering their congestion impact, priority and the congestion limit of the highways.</p>



<section class="flex p-5 space-x-5">
    <section class="flex space-y-2 w-full max-w-3xl flex-col">
        <!-- Mandela HighWay -->
        <p class="bg-indigo-600 rounded-lg p-2 text-white font-bold w-fit">Mandela Highway - Congestion limit: <input class="bg-gray-700 w-16 text-white p-2 rounded" bind:value={mandelaCapacity} type="number"/></p>
        <div class="bg-gray-800 h-80 max-h-fit w-full relative rounded">
            
            {#each splitVehiclesEvenly(vehicles,4) as laneVehicles,i}

            <div class="flex space-x-5 h-20 items-center px-5 w-full justify-end ">
                {#each laneVehicles as vehicle}
                    {#if vehicle.type === "Car"}
                        <Car />
                    {/if}
                    {#if vehicle.type === "Truck"}
                        <Truck />
                    {/if}
                    {#if vehicle.type === "Bike"}
                        <Bike />
                    {/if}
                    {#if vehicle.type === "Emergency"}
                        <Emergency />
                    {/if}
                    {#if vehicle.type === "Bus"}
                        <Bus />
                    {/if}
                
                {/each}
            </div>
            {#if i < 3}
                <RoadDivider lanes={4} />
            {/if}
            {/each}
            
        </div>

        <!-- Portmore Toll -->
        <p class="bg-indigo-600 rounded-lg p-2 text-white font-bold w-fit">Portmore Toll - Congestion limit: <input class="bg-gray-700 w-16 text-white p-2 rounded" bind:value={portmoreCapacity} type="number"/></p>
        <div class="bg-gray-800 h-80 w-full relative rounded ">
             
            {#each splitVehiclesEvenly(leftOverVehicles,4) as laneVehicles,i}

            <div class="flex space-x-5 h-20 items-center px-5 w-full justify-end ">
                {#each laneVehicles as vehicle}
                    {#if vehicle.type === "Car"}
                        <Car />
                    {/if}
                    {#if vehicle.type === "Truck"}
                        <Truck />
                    {/if}
                    {#if vehicle.type === "Bike"}
                        <Bike />
                    {/if}
                    {#if vehicle.type === "Emergency"}
                        <Emergency />
                    {/if}
                    {#if vehicle.type === "Bus"}
                        <Bus />
                    {/if}
                
                {/each}
            </div>
            {#if i < 3}
                <RoadDivider lanes={4} />
            {/if}
            {/each}
        </div>
    </section>
    <section class="rounded mt-16 w-full space-y-3 w-full max-w-md bg-gray-800 p-3 h-fit flex flex-col">
        <span class="flex space-y-3 h-fit flex-col">
            
                
            <div class="flex flex-col space-y-3">
                <div class="flex justify-between">
                    <label for="capacity" class="text-white">Cars</label>
                    <input bind:value={numberOfCars} type="number" id="capacity" class="bg-gray-700 text-white p-2 rounded" />
                </div>
                <div class="flex justify-between">
                    <label for="capacity" class="text-white">Trucks</label>
                    <input bind:value={numberOfTrucks} type="number" id="capacity" class="bg-gray-700 text-white p-2 rounded" />
                </div>
                <div class="flex justify-between">
                    <label for="capacity" class="text-white">Bikes</label>
                    <input bind:value={numberOfBikes} type="number" id="capacity" class="bg-gray-700 text-white p-2 rounded" />
                </div>
                <div class="flex justify-between">
                    <label for="capacity" class="text-white">Emergency</label>
                    <input bind:value={numberOfEmergency} type="number" id="capacity" class="bg-gray-700 text-white p-2 rounded" />
                </div>
                <div class="flex justify-between">
                    <label for="capacity" class="text-white">Buses</label>
                    <input bind:value={numberOfBuses} type="number" id="capacity" class="bg-gray-700 text-white p-2 rounded" />
                </div>
                

            </div>
        </span>
        <button on:click={()=>{getBestVehicles(mandelaCapacity)}} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
            Add Vehicles
        </button>
        
    </section>
    <section>
        <div class="w-full max-w-lg mt-16 h-64 bg-gray-700 rounded p-2 text-gray-300">
            {#if showOutput}
            <p>{countVehicleTypes(vehicles)} were placed on the Mandela Highway, without exceeding its congestion limit of {mandelaCapacity}. <br></p>
            {#if leftOverVehicles.length > 0}
            <p>There were {leftOverVehicles.length} left-over vehicles placed on the Portmore Toll to Kingston, which is more efficient than adding them to the Mandela Hwy; consequently increasing congestion.</p>
            {:else}
            <p>All vehicles were placed on the Mandela Highway, without exceeding its congestion limit 😁👌</p>
            {/if}
            {:else}
            <p>Click the button to add vehicles to the routes.</p>
            {/if}
            
        </div>
    </section>
</section>



