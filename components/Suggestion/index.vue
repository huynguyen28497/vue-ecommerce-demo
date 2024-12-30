<template>
    <v-card class="px-4 pt-4 mt-4">
        <h4 class="ml-4">Gợi ý hôm nay
        </h4>
        <v-tabs v-model="tab" color="primary">
            <v-tab value="one">Dành cho bạn</v-tab>
            <v-tab value="two">Top Deal</v-tab>
            <v-tab value="three">Freeship 100K</v-tab>
        </v-tabs>
    </v-card>
    <div class="d-flex flex-wrap mt-4 ga-4">
        <product-card :product="product" v-for="product in YOUR_PRODUCT_DATA" />
    </div>
</template>

<script setup lang="ts">
import { YOUR_PRODUCT_DATA } from '~/mocks/product'
const tab = ref('one')
</script>

<style scoped></style>