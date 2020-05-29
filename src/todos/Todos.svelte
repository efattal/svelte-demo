<script>
  import { onMount } from 'svelte'
  import { _ } from 'svelte-i18n'
  import NewTodo from './NewTodo.svelte'
  import TodosTodo from './TodosTodo.svelte'
  import TodosDone from './TodosDone.svelte'
  import { todos, loadTodos } from './todos'

</script>

<style>
  .content {
    display: flex;
  }

  :global(.content > *) {
    flex: 1;
    margin: 0 1em;
  }

  .loading {
    text-align: center;
  }

  .error {
    color: red
  }
</style>

<svelte:head>
  <title>{$_('app.title')} - {$todos.length} {$_('tasks')}</title>
</svelte:head>

<NewTodo />

{#await loadTodos()}
  <p class="loading">{$_('loading')}...</p>
{:then}
  <div class="content">
    <TodosTodo />
    <TodosDone />
  </div>
{:catch}
  <p class="error">{$_('loading.error')}}</p>
{/await}
