<script lang="ts">
  import { Icon } from "@components";
  import { logo } from "@components/icons/logo";
</script>

<article>
  <div class="title">
    <Icon markup={logo} size="7em" />
    <h1>blossom</h1>
  </div>
  <h2>blossom is a JS library tool for color manipulations and transformations.</h2>
	<p>
		For a long time I was thinking about small project: a library to work with colors.
		There were two unsuccessfull attemps, it was not thoughfull enough.
		This project is inspired by fantastic <a href="https://github.com/omgovich/colord">colord</a> project,
		that gave me the idea about architecture and implementation.
	</p>
	<p>
		I have decided to try again. That's it.
	</p>
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