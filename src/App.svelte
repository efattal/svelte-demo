<script>
  import { isLoading } from 'svelte-i18n'
  import Todos from './todos/Todos.svelte'
  import I18nSwitcher from './i18n/I18nSwitcher.svelte'
  import './i18n/i18n'
</script>

<I18nSwitcher />

{#if $isLoading}
  .....
{:else}
  <Todos />
{/if}
