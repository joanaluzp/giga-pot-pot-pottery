<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: transform 0.5s ease-in-out;
}

.page-enter,
.page-leave-to {
  transform: translateY(-100%);
}
</style>
