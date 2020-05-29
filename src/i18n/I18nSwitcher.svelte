<script>
  import { locale, locales } from 'svelte-i18n'
  import flag_en from './flags/en.svelte'
  import flag_fr from './flags/fr.svelte'

  const languages = {
    en: ['English', flag_en],
    fr: ['Français', flag_fr],
  }
</script>

<style>
  ul {
    list-style-type: none;
    margin: 0 0 2em;
    padding: 0;
    display: flex;
  }
  ul::before {
    content: '';
    flex: 1;
  }
  ul li {
    margin: 0 1em;
  }
  ul li a{ 
    display: inline-flex;
    align-items: center
  }
  .selected {
    font-weight: bold;
  }
</style>

<ul>
  {#each $locales as item}
    <li>
      <a
        href=" "
        class:selected={$locale.includes(item)}
        on:click|preventDefault={() => ($locale = item)}>
        <svelte:component this={languages[item][1]} size={24}/>&nbsp;{languages[item][0]}
      </a>
    </li>
  {/each}
</ul>