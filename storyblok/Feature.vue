<template>
  <div
    v-editable="blok"
    class="w-full p-12 bg-[#f7f6fd] rounded-[5px] text-center"
  >
    <h3 class="text-2xl text-[#1d243d] font-bold">
      Feature block
    </h3>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
