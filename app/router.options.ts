// app/router.options.ts
import { RouterOptions } from '@nuxt/schema';

export default <RouterOptions>{
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    return { top: 0 };
  },
};
