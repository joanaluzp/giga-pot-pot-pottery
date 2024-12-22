export default defineNuxtRouteMiddleware((to, from) => {
  const getDepth = (path) => {
    return path.split('/').filter(seg => seg.length > 0).length;
  }
  const toDepth = getDepth(to.path);
  const fromDepth = getDepth(from.path);

  if (toDepth > fromDepth) {
    to.meta.pageTransition = { name: 'page-up' };
    from.meta.pageTransition = { name: 'page-down' };
  } else {
    to.meta.pageTransition = { name: 'page-down' };
    from.meta.pageTransition = { name: 'page-down' };
  }
})