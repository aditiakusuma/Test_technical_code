<script setup lang="ts">
const input: Ref<null | number> = ref(null);
const result = ref();
const generate = async (type: "odd" | "prima" | "triangle") => {
  if (!input.value) return alert("Form Wajib diisi");
  if (input.value && isNaN(input.value)) return alert("Harus berupa angka");
  if (input.value && input.value < 0) return alert("Harus bilangan Positif");
  try {
    const res = await $fetch(`/generate?type=${type}&number=${input.value}`, {
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
    <div>Result :</div>
    <div v-for="(item, index) in result" :key="index">
        {{  item }}
    </div>
  </div>
</template>
