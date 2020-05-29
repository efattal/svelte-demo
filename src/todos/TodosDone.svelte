<script>
  import { _ } from 'svelte-i18n'
  import { todos } from './todos'
  import TodoList from './TodoList.svelte'

  $: doneTodos = $todos.filter((todo) => todo.done)
</script>

<style>
  h2 {
    margin-bottom: 80px;
  }
</style>

<TodoList todos={doneTodos}>
  <h2 slot="header">{$_('done')}</h2>
  <span slot="emptylist">{$_('come.on')}</span>
</TodoList>
