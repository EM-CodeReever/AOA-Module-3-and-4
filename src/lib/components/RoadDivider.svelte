<script lang="ts">
export let lanes = 2;
</script>

<div class="px-3 z-50 h-1 w-full absolute top-1/{{lanes}} -translate-y-1 flex space-x-5">
    {#each {length: 20} as _, i}
        <div class="w-10 h-1 bg-gray-300 rounded"></div>
    {/each}
</div>