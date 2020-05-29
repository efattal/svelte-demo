<script>
  import { _ } from 'svelte-i18n'
  import { addTodo } from './todos'

  let description = ''

  const onSubmit = () => {
    addTodo(description)
    description = ''
  }
</script>

<style>
  form {
    display: flex;
    margin: 0 auto;
    width: 100%;
    max-width: 400px;
  }

  input {
    flex: 1
  }
</style>

<form on:submit|preventDefault={onSubmit}>
  <input placeholder={$_('add.task')} bind:value={description}/>
  <button type="submit" disabled={!description}>{$_('add')}</button>
</form>
