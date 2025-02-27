<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import InputText from "./InputText.svelte";
  import Button from "./Button.svelte";
  import Icon from "../icons/Icon.svelte";
  import { iconCancel, iconDice } from "../icons/default";

  export let value = "";
  export let placeholder = "Type to search...";
  
  const dispatch = createEventDispatcher();
  
  // "cancel" icon visibility state
  $: hidden = !value.length;
  
  // input field ref
  let ref: HTMLInputElement | null = null;
  
  function cancelSearch() {
  	dispatch("cancel");
  	value = "";
    
  	if (ref) {
  		ref.blur();
  	}
  }
  
  function doSearch(event: Event) {
  	event.preventDefault();
  	if (value) dispatch("search");
  }

  function dispatchRandom() {
  	dispatch("random");
  }
</script>

<!--
  @component
  Search Field Component
  
  Usage:
    ```
      <Search
        bind:value
        {placeholder}
        on:search={callback}
      />
    ```
  
  Props:
  
    | Name        | type   | default          | description                            |
    |:------------|:-------|:-----------------|:---------------------------------------|
    | value       | string | ""               | The current input value.               |
    | placeholder | string | Type to search   | The search field's placeholder text.   |
    
  Events:
  
    | Name      | type        | description                                        |
    |:----------|:------------|:---------------------------------------------------|
    | on:input  | Event       | Fires on input value change.                       |
    | on:blur   | Event       | Fires on input blur.                               |
    | on:search | CustomEvent | Fires on "Enter" propmt or making the search.      |
    | on:cancel | CustomEvent | Fires on "Escape" propmt or cancelling the search. |
    
  Inherited Custom Props:
  
    | Name                     | type     | default | description                              |
    |:-------------------------|:---------|:--------|:-----------------------------------------|
    | --search-field-height    | <length> | 45px    | Search field's height as scaling value.  |
    | --search-field-max-width | <length> | 640px   | Maximum width the search field can have. |
    | --color-gray-700         | <color>  | -       | Font color.                              |
    | --spacing-em-base        | <length> | 0.25em  | Inner elements gap spacing.              |
    | --color-surface-500      | <color>  | -       | Search field's background color.         |
    | --radius-medium          | <length> | 5px     | Search field's border radius.            |
    | --focus-ring-size        | <length> | 1.5px   | Focus ring size (bos-shadow based).      |
    | --focus-ring-color       | <color>  | -       | Focus ring color (bos-shadow based).     |
-->
<form class="search-field" class:hidden role="search" on:submit|preventDefault={doSearch}>
	<input type="color" bind:value>
  <InputText
    bind:value
    bind:ref
    on:blur
    on:input
    on:keydown@escape={cancelSearch}
    {placeholder}
  />
  <Button on:click={cancelSearch} disabled={hidden} shape="square" appearance="text">
    <Icon path={iconCancel} />
  </Button>
  <Button on:click={dispatchRandom} shape="square" appearance="text">
    <Icon path={iconDice} />
  </Button>
</form>

<style>
  .search-field {
    --search-field-height: 45px;
    
    color: var(--color-gray-700);
    font-size: inherit;
    
    display: grid;
    grid-auto-flow: column;
    grid-template: var(--search-field-height) / var(--search-field-height) 1fr var(--search-field-height) var(--search-field-height);
    place-items: center;
 /*    gap: calc(1.25 * var(--spacing-em-base, 0.25em)); */

    background: var(--color-surface-500);
    border: var(--border-1);
    border-radius: var(--radius-medium, 5px);
    width: min(100%, var(--search-field-max-width, 720px));
    height: var(--search-field-height);
    overflow: hidden;

    box-shadow: 0 0 0 var(--focus-ring-size) var(--focus-ring-color);
    transition: box-shadow 0.15s linear;
  }

  .search-field:focus-within,
  .search-field:hover {
    --focus-ring-size: 1.5px;
  }

  .search-field :global(button svg) {
    transition:
      transform 0.2s ease-in-out,
      opacity 0.2s linear;
  }
  
  .search-field :global(button) {
    height: 100%;
  }
  
  /* hide "cancel" button on empty input */
  .search-field.hidden > :global(button:nth-of-type(1) svg) {
    opacity: 0;
    transform: scale(0) rotate(1turn);
  }

	input[type="color"] {
		width: 1.25em;
		height: 1.25em;
		border: none;
		background-color: transparent;
	}

	input[type="color"]::-webkit-color-swatch-wrapper {
		padding: 0;
		border: none;
	}

	input[type="color"]::-webkit-color-swatch {
		border: none;
		border-radius: 100%;
	}
</style>