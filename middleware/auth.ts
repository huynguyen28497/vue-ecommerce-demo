export default defineNuxtRouteMiddleware(() => {
  const { account } = useMainStore();

  const isAuthenticated = !!account.token;
  //   if (isAuthenticated) {
  //     return navigateTo("/");
  //   }
  if (!isAuthenticated) {
    abortNavigation();
    return navigateTo("/login");
  }
});
