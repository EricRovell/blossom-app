<script>
	export let title: string;
</script>

<section class="transform">
	<h3>{title}</h3>
	<ul>
		<slot />
	</ul>
</section>

<style>
	.transform {
    background: var(--color-surface-500);
    border: var(--border-1);
    border-radius: var(--radius-medium, 5px);
    padding: var(--spacing-4);
		height: min-content;
  }

	h3 {
		text-align: center;
		margin-bottom: var(--spacing-4);
	}

	ul,
	ul > :global(li) {
		display: grid;
		gap: var(--spacing-2);
	}

	ul > :global(li:not(:last-child)) {
		border-bottom: var(--border-1);
		padding-bottom: var(--spacing-2);
	}

	ul :global(span) {
		font-size: var(--font-size-1);
		opacity: 0.6;
	}
</style>