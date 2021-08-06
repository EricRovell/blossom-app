<script>
	import { fade } from "svelte/transition";
	import { SearchField, PaperGrid } from "@components";
	import { getColorProperties, getColorTransformations } from "@util";
	import type { Blossom } from "@core/blossom";

	export let input = "";
	export let color: Blossom;

	$: properties = getColorProperties(color);
	$: transformations = getColorTransformations(color);
</script>

<SearchField
	bind:value={input}
	placeholder="Type any color"
	on:random
/>
<div class="state">
	{#if input.length === 0}
		<p transition:fade|local>
			Please type in a color
		</p>
	{:else if color.valid}
		<div class="results" transition:fade|local>
			<PaperGrid title="Properties">
				{#each properties as { name, value }}
					<li>
						<span>{name}</span>
						<output>{value}</output>
					</li>
				{/each}
			</PaperGrid>
			<PaperGrid title="Transformations">
				{#each transformations as { model, value }}
					<li>
						<span>{String(model).toUpperCase()}</span>
						<output>{value}</output>
					</li>
				{/each}
			</PaperGrid>
		</div>
	{:else}
		<p transition:fade|local>
			The color is invalid
		</p>
	{/if}
</div>

<style>
	.results {
    display: grid;
    grid-template: auto / 1fr 1fr;
    gap: 0.75em;
    width: 100%;
  }

  .state {
    display: grid;
    grid-template: 1fr / 1fr;
    width: 100%;
    justify-items: center;
  }

  .state > :global(*) {
    grid-row: 1;
    grid-column: 1;
  }
</style>