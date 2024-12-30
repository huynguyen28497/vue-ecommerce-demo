<template>
    <v-card class="px-4 py-4 root">
        <h4 class="ml-4">Top deal</h4>
        <v-slide-group show-arrows>
            <v-slide-group-item v-for="product in PRODUCT_DATA" :key="product.id">
                <product-card :product="product" class="ma-4" rounded />
            </v-slide-group-item>
        </v-slide-group>

    </v-card>
</template>

<script setup lang="ts">
import { PRODUCT_DATA } from '../../mocks/product'

</script>

<style scoped>
.root {
    overflow-x: auto;
}
</style>