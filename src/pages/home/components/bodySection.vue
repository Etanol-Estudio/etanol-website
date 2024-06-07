<template>
  <div class="bg-gray-950">
    <div class="p-8 flex flex-col">
      <div class="text-7xl text-left text-white pb-4 font-squada">Membros</div>
      <Creators :data="creators" />
    </div>
  </div>
</template>

<script>
import Creators from "../../../components/shared/creatorsCard.vue";

export default {
  name: "heroSection",
  components: {
    Creators,
  },
  data() {
    return {
      creators: [
        {
          id: 1,
          name: "Lua de Juno",
          role: "Escritora e Ilustradora",
          photo: "juno",
        },
        {
          id: 2,
          name: "João Lopes",
          role: "Escritor",
          photo: "joao",
        },
        {
          id: 3,
          name: "Victor Antonino",
          role: "Desenvolvedor",
          photo: "victor",
        },
        {
          id: 4,
          name: "Nicole Moreira",
          role: "Desenvolvedora",
          photo: "nicole",
        },
        {
          id: 5,
          name: "Bruno",
          role: "Escritor",
          photo: "bruno",
        },
        {
          id: 6,
          name: "Gustavo",
          role: "Ilustrador",
          photo: "gustavo",
        },
        {
          id: 7,
          name: "Juan",
          role: "Escritor",
          photo: "juan",
        },
        {
          id: 8,
          name: "Felipe",
          role: "Ilustrador",
          photo: "felipe",
        },
        {
          id: 9,
          name: "Kléber",
          role: "Ilustrador",
          photo: "kleber",
        },
        {
          id: 10,
          name: "Arnaldo",
          role: "Ator de Voz",
          photo: "arnaldo",
        },
      ],
    };
  },
};
</script>
