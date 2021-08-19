<script>
  import { replace } from 'svelte-spa-router';

  export let isLoggedIn;

  if (isLoggedIn) {
    replace('/dashboard')
  }
</script>

<div>Hello from Auth</div>
