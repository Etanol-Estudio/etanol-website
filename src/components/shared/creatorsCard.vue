<template>
  <div
    ref="container"
    class="horizontal-scroll-container max-w-full"
    @mousedown="startDrag"
    @mousemove="onDrag"
    @mouseup="stopDrag"
    @mouseleave="stopDrag"
  >
    <q-card v-for="creators in data" :key="creators.id" class="scroll-card">
      <q-card-section>
        <div class="text-white font-vt323 text-3xl font-bold">
          {{ creators.name }}
        </div>
        <div class="text-white font-vt323 text-2xl">{{ creators.role }}</div>
        <img
          :src="`src/assets/image/creators/${creators.photo}.png`"
          alt=""
          class="mt-3"
        />
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "HorizontalScrollCards",
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isDragging: false,
      startX: 0,
      scrollLeft: 0,
    };
  },
  methods: {
    startDrag(event) {
      this.isDragging = true;
      this.startX = event.pageX - this.$refs.container.offsetLeft;
      this.scrollLeft = this.$refs.container.scrollLeft;
      this.$refs.container.classList.add("dragging");
      window.addEventListener("mousemove", this.onDrag);
      window.addEventListener("mouseup", this.stopDrag);
    },
    onDrag(event) {
      if (!this.isDragging) return;
      const x = event.pageX - this.$refs.container.offsetLeft;
      const walk = (x - this.startX) * 2; // Velocidade do scroll
      this.$refs.container.scrollLeft = this.scrollLeft - walk;
    },
    stopDrag() {
      this.isDragging = false;
      this.$refs.container.classList.remove("dragging");
      window.removeEventListener("mousemove", this.onDrag);
      window.removeEventListener("mouseup", this.stopDrag);
    },
  },
};
</script>

<style scoped>
.horizontal-scroll-container {
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  cursor: grab;
}

.horizontal-scroll-container.dragging {
  cursor: grabbing;
}

.scroll-card {
  background-color: #060606;
  flex: 0 0 auto;
  margin-right: 18px;
  width: 200px;
  border: 3px solid #ff2f2f;
  border-color: #ff2f2f;
  height: 390px;
  width: 300px;
}

::-webkit-scrollbar {
  height: 18px;
}

/* Estiliza a parte arrastável da barra de rolagem */
::-webkit-scrollbar-thumb {
  background-color: #ff2f2f;
  border-radius: 8px;
  border: 7px solid #030712;
}

/* Estiliza a pista da barra de rolagem */
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 8px;
}

/* Estiliza as peças da pista da barra de rolagem */
::-webkit-scrollbar-track-piece {
  background-color: rgb(3 7 18);
}
</style>
