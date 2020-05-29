<script>
  import { _ } from 'svelte-i18n'
  import { todos } from './todos'
  import TodoList from './TodoList.svelte'

  let filter = ''

  $: todosToDo = $todos.filter((todo) => !todo.done)

  $: if(filter){
    re = new RegExp(filter, 'i');
  }

  $: filteredTodos = todosToDo.filter(
    (todo) =>
      !filter || re.test(todo.description),
  )
</script>

<TodoList todos={filteredTodos}>
  <div slot="header">
    <h2>
      {$_('todo')}
      {#if filter}({filteredTodos.length} / {todosToDo.length}){/if}
    </h2>
    <input
      type="search"
      placeholder={$_('filter')}
      bind:value={filter}
      style="width: 100%" />
  </div>
  <span slot="emptylist">{$_('nothing.todo')}</span>
</TodoList>
