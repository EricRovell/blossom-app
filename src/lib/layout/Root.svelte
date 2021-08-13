<script lang="ts">
	import { base } from "$app/paths";

	import { Navigation, Footer, Icon } from "@components";
	import { iconNpm, iconGithub } from "@components/icons/default";

	import "@styles/main.css";
	import "@styles/normalize.css";
	import "@styles/theme-dark.css";
	import "@styles/theme-light.css";
	import "@styles/typography.css";
</script>

<div id="app">
	<header>
    <Navigation.Container>
      <Navigation.Item href="{base}/docs">
        Docs
      </Navigation.Item>
      <Navigation.Item href="{base}/">
        Playground
      </Navigation.Item>
      <Navigation.Item href="{base}/about">
        About
      </Navigation.Item>
    </Navigation.Container>
	</header>
	<section aria-label="content" class="content">
		<slot />
	</section>
	<Footer>
		<section class="copyright">
      © {new Date().getFullYear()} blossom/web, v0.3.0 | MIT Licence.
    </section>
    <section class="social">
      <a href="https://github.com/EricRovell/blossom">
        <Icon path={iconGithub} size="1.5em" />
      </a>
      <a href="https://www.npmjs.com/package/@ericrovell/blossom">
        <Icon path={iconNpm} size="1.5em" />
      </a>
    </section>
	</Footer>
</div>

<style>
  :global(body) {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    line-height: 1.0;

    position: relative;
  }
  
  #app {
    --max-width: 1440px;
    width: 100%;
    
    font-family: var(--font-main);
  }

  .content {
    display: grid;
    grid-auto-rows: min-content;
    place-items: start start;
    position: relative;
    width: 100%;
    min-height: 100vh;
  }

  header {
    display: grid;
    justify-content: center;
  }

  .copyright {
    justify-self: start;
  }

  .social {
    justify-self: end;

    display: grid;
    grid-template: 1fr / 1fr 1fr;
    gap: 0.5em;
  }

  .social > a {
    transition: color 0.25s linear;
  }

  .social > a:hover {
    color: var(--color-primary);
  }

  @media (max-width: 540px) {
    .copyright,
    .social {
      justify-self: center;
    }
  }

  /* let bottom menu be full width */
  @media screen and (max-width: 640px) {
    #app {
      padding: 0;
    }
    
    .content {
      padding: 0 1em;
    }
  }
</style>