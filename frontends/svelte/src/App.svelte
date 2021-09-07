<script lang="ts">
	let a = 'asdf';

	// export let name: string;

	let asdf = "asdf";

	// let name: string;

</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	main {
		max-width: 240px;
		padding: 1em;
		margin: 0 auto;
		text-align: center;
	}

	h1 {
		color: #ff3e00;
		font-size: 4em;
		font-weight: 100;
		text-transform: uppercase;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>