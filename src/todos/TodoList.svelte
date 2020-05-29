<script>
  import { flip } from 'svelte/animate'
  import { fade, fly } from 'svelte/transition'
  import { _ } from 'svelte-i18n'
  import { loadTodos, removeTodo, toggleTodo } from './todos'
  import Todo from './Todo.svelte'

  export let todos

  const onToggle = (todo, done) => toggleTodo(todo, done)

  const onRemove = (todo) => removeTodo(todo)
  
</script>

<style>
  ul {
    list-style-type: none;
    padding: 0;
  }
  .empty {
     color: #bbb
  }
</style>

<div>
  <slot name="header" />

  <ul>
    {#each todos as todo (todo)}
      <li animate:flip transition:fly>
        <Todo
          {...todo}
          on:toggle={(e) => onToggle(todo, e.detail)}
          on:remove={() => onRemove(todo)} />
      </li>
    {:else}
      <p class="empty">
        <slot name="emptylist">{$_('empty.list')}</slot>
      </p>
    {/each}
  </ul>
</div>
