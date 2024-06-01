<template>
  <div class="bg-black">
    <div class="p-8 flex flex-col">
      <div class="text-7xl text-left text-white pb-4">Membros</div>
      <cards />
    </div>
  </div>
</template>

<script>
import cards from "../../../components/shared/MemberCard.vue";

export default {
  name: "heroSection",
  components: {
    cards,
  },
};
</script>
