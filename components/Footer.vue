<template>
  <footer class="footer">
    <div class="d-flex flex-wrap justify-content-between">
      <div
        class="footer-left"
        v-for="item of footer.data.footer_name"
        :key="item.label ?? ''"
      >
        <PrismicLink :field="item.link" class="footer-left-link">
          <p class="description-text">{{ item.label }}</p>
        </PrismicLink>
      </div>
      <ul class="d-flex footer-right">
        <li
          class="footer-right-link"
          v-for="item of footer.data.footer_navigation"
          :key="item.label ?? ''"
        >
          <PrismicLink :field="item.link">
            <p class="description-text grey">{{ item.label }}</p>
          </PrismicLink>
        </li>
      </ul>
    </div>
  </footer>
</template>
<script setup>
const footer = useFooter();
</script>
