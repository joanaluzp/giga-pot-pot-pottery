<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style>
.page-up-enter-active,
.page-down-enter-active,
.page-up-leave-active,
.page-down-leave-active {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.3s linear;
}

.page-up-enter-from, .page-down-leave-to {
  transform: translateY(100%);
}

.page-up-leave-to, .page-down-enter-from {
  transform: translateY(-100%);
}

.page-up-enter-to, .page-down-enter-to {
  transform: translateY(0);
}
</style>
