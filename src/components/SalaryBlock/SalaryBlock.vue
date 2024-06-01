<script setup>
const color = [{ color: "#C5DDFF" }, { color: "#B8EFCF" }, { color: "#FFCE94" }]
</script>

<template>
  <div v-for="item in color">
    <div class="salaryBlock" :style="`background-color:${item.color}`">
      <div class="salaryBlockHead">Junior</div>
      <div class="salaryBlockText">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit magni
        asperiores aspernatur veritatis hic perferendis perspiciatis dolores
        quas
      </div>
      <div class="salaryBlockSalary">от 80000₽ в месяц</div>
    </div>
  </div>
</template>
<style scoped>
@import "SalaryBlock.scss";
</style>
