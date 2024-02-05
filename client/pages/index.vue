<script setup lang="ts">
const input: Ref<null | number> = ref(null);
const result = ref();
const generate = async (type: "odd" | "prima" | "triangle") => {
  try {
    const res = await $fetch(`/generate?type=${type}`, {
      baseURL: "http://localhost:3333",
    });
    result.value = res;
  } catch (error) {}
};
</script>

<template>
  <div style="padding: 80px">
    <input
      v-model="input"
      type="text"
      style="margin-bottom: 20px"
      placeholder="Input Angka"
    />
    <div>
      <button style="margin-right: 10px" @click="generate('triangle')">
        Generate Segitiga
      </button>
      <button style="margin-right: 10px" @click="generate('odd')">
        Generate Bilangan Ganjil
      </button>
      <button @click="generate('prima')">Generate Bilangan Prima</button>
    </div>
    <div>Result : {{ result }}</div>
  </div>
</template>
