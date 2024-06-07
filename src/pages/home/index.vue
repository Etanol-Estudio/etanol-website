<template>
  <q-page>
    <heroSection />
    <bodySection />
  </q-page>
</template>

<script setup>
import heroSection from "./components/heroSection.vue";
import bodySection from "./components/bodySection.vue";
defineOptions({
  name: "IndexPage",
  components: {
    heroSection,
    bodySection,
  },
});
</script>
