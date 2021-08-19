import Auth from './pages/Auth.svelte';
import Dashboard from './pages/Dashboard.svelte';
import NotFound from './pages/NotFound.svelte';

const routes = {
  '/auth': Auth,
  '/dashboard': Dashboard,
  '/': NotFound,
  '*': NotFound,
};

export { routes };
