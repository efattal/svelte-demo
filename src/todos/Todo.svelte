<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  export let id = '', description = '', done = false;

  const loglifecycle = (node) => {
    console.log('update', node)
    return {
      destroy() {
        console.log('destroy', node)
      },
    }
  }
</script>

<style>
  .done {
    text-decoration: line-through;
  }
  .delete {
    opacity: 0;
    text-decoration: none;
  }
  label:hover .delete {
    opacity: 0.2;
  }
  label:hover .delete:hover {
    opacity: 1;
  }
</style>

<label for="todo-{id}" class:done={done} use:loglifecycle>
  <input
    type="checkbox"
    id="todo-{id}"
    checked={done}
    on:click={(e) => dispatch('toggle', e.currentTarget.checked)} />
  {description}
  <a
    href=" "
    on:click|preventDefault={(e) => dispatch('remove')}
    class="delete">
    🗑️
  </a>
</label>
