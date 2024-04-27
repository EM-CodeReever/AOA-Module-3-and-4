<script lang="ts">
    import Bike from '$lib/svg/Bike.svelte'
    import Truck from '$lib/svg/Truck.svelte'
    import Car from '$lib/svg/Car.svelte'
  import RoadDivider from '$lib/components/RoadDivider.svelte';

</script>

<svelte:head>
  <title>AOA Module 3</title>
</svelte:head>

<h1 class="text-xl text-center font-bold">Analysis of Algorithms</h1>
<h2 class="text-lg text-center">Module 3</h2>
<p class="text-center">Group: <strong>Elliot Morrison, Matthew Cole, Garaine Baker</strong></p>


<section class="flex p-5 space-x-5">
    <section class="flex space-y-2 w-full max-w-4xl flex-col">
        <!-- Road 1 -->
        <p class="bg-indigo-600 rounded-lg p-2 text-white font-bold w-fit">Road One</p>
        <div class="bg-gray-800 h-40 w-full relative rounded">
            <div id="R1-L1" class="flex space-x-5 items-center px-5 w-full justify-end ">
                <Car/><Bike /><Truck />
            </div>
            <RoadDivider />
            <div id="R1-L2" class="flex items-center space-x-5 px-5 w-full justify-end">
                <Bike /><Truck /><Car/><Car/>
            </div>
        </div>
        <!-- Road 2 -->
        <p class="bg-indigo-600 rounded-lg p-2 text-white font-bold w-fit">Road Two</p>
        <div class="bg-gray-800 h-40 w-full relative rounded ">
            <div id="R2-L1" class="flex space-x-5 items-center px-5 w-full justify-end">
                <Car/><Car/><Car/>
            </div>
            <RoadDivider />
            <div id="R2-L2" class="flex items-center space-x-5 px-5 w-full justify-end">
                <Truck /><Truck /><Truck />
            </div>
        </div>
        <!-- Road 3 -->
        <p class="bg-indigo-600 rounded-lg p-2 text-white font-bold w-fit">Road Three</p>
        <div class="bg-gray-800 h-40 w-full relative rounded ">
            <div id="R3-L1" class="flex space-x-5 items-center px-5 w-full justify-end ">
                <Bike/> <Truck /><Car /> <Car /> <Truck /><Bike/> <Truck /><Car /> <Car /> <Truck /><Bike/> <Truck /><Car /> <Car /> <Truck /><Bike/> <Truck /><Car /> <Car /> <Truck />
            </div>
            <RoadDivider />
            <div id="R3-L2" class="flex items-center space-x-5 px-5 w-full justify-end">
                <Truck />
            </div>
        </div>
    </section>
    <section class="rounded-xl w-full space-y-3 max-w-lg bg-gray-800 p-3 flex flex-col">
        <span class="flex space-x-5">
            <select class="w-full bg-gray-700 text-white p-2 rounded">
                <option value="bike">Bike</option>
                <option value="truck">Truck</option>
                <option value="car">Car</option>
            </select>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add New Vehicle
            </button>
        </span>
        <div class="w-full h-full bg-gray-700 rounded-xl p-2 text-gray-300">
            <p>Some logs can go here or something</p>
        </div>
    </section>
</section>



