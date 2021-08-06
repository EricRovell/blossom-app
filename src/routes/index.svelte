<script lang="ts">
  import { Playground } from "@views";

  import { blossom, random, extend } from "@ericrovell/blossom";
  import { pluginA11Y } from "@ericrovell/blossom/plugins/a11y";
  import type { Blossom } from "@ericrovell/blossom";

  import { Icon } from "@components";
  import { logo } from "@components/icons/logo";

  extend([ pluginA11Y ]);

  export let input = "";

  let color: Blossom;
  $: color = blossom(input);
</script>

<article>
  <div class="title">
    <Icon markup={logo} size="7em" />
    <h1>blossom</h1>
  </div>
  <h2>blossom is a JS library tool for color manipulations and transformations.</h2>
  <Playground
    bind:input
    {color}
    on:random={() => input = random().hex}
  />
</article>

<style>
  article {
    display: grid;
    grid-template: auto / 1fr;
    gap: 1em;
    width: min(100%, 720px);
    place-self: center;
    justify-items: center;
    margin-top: 15vh;
    margin-bottom: 25vh;
  }

  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 3em;
  }

  h2 {
    font-size: 1em;
    font-weight: 400;
    font-style: italic;
  }
</style>