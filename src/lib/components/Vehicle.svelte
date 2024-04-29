<script lang="ts">

    import Car from '$lib/svg/Car.svelte';
    import Emergency from '$lib/svg/Emergency.svelte';
    import Truck from '$lib/svg/Truck.svelte';
    import Bike from '$lib/svg/Bike.svelte';
    import Bus from '$lib/svg/Bus.svelte';
    import type { VehicleType } from '$lib/Vehicle';

    export let VehicleType: VehicleType = "Car"; 


</script>

{#if VehicleType === "Car"}
    <Car />
{:else if VehicleType === "Emergency"}
    <Emergency />
{:else if VehicleType === "Truck"}
        <Truck />
{:else if VehicleType === "Bike"}
        <Bike />
{:else if VehicleType === "Bus"}
    <Bus />
{/if}