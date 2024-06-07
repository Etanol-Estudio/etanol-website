<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      :class="{
        'bg-black': scrollPosition <= 65,
        'bg-semi-transparent': scrollPosition >= 60,
      }"
      v-scroll="onScroll"
    >
      <q-toolbar>
        <q-toolbar-title>
          <div
            v-if="$q.screen.gt.xs"
            class="flex items-center gap-3 p-2 font-squada text-white text-5xl"
          >
            <img src="../assets/mascote.png" alt="logo" class="h-12" />
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
export default {
  data() {
    return {
      scrollPosition: window.scrollY,
    };
  },
  methods: {
    onScroll(event) {
      console.log(this.scrollPosition);
      this.scrollPosition = window.scrollY;
    },
  },
};
</script>

<style>
.bg-semi-transparent {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
