<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-gray-950">
      <q-toolbar>
        <q-toolbar-title>
          <div v-if="$q.screen.gt.xs" class="flex items-center gap-3 p-2">
            <img src="../assets/image/logo2.png" alt="logo" class="h-12" />
            Coletivo Etanol
          </div>
          <div v-else class="flex items-center gap-3 justify-center">
            <img src="../assets/image/logo2.png" alt="logo" class="h-12" />
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
