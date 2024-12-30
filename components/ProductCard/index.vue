<template>
    <v-card rounded="lg" class="root">
        <v-img width="150px" height="150px" :src="product.thumbnail_url" />
        <div class="card-text px-4 mt-2 mb-1">{{ product.name }}</div>
        <v-rating class="px-4 rating" v-if="product.rating_average > 0" :length="5" :model-value="product.rating_average"
            :size="16" disabled active-color="#046DFF" />
        <div v-if="!product.rating_average" class="no-rate" />
        <div class="price px-4 mt-2">{{ Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
            minimumFractionDigits: 0,
        }).format(product.price) }}</div>
        <div class="px-4 discount">
            <div class="discount-rate">{{ product.discount_rate }}%</div> - <div class="no-score">{{
                Intl.NumberFormat('vi-VN', {
                    style: 'currency',
                    currency: 'VND',
                    minimumFractionDigits: 0,
                }).format(product.original_price) }}</div>
        </div>
        <div class="sold">Đã bán {{ product.quantity_sold }}</div>
    </v-card>
</template>
  
<script setup lang="ts">
import { type IProduct } from '~/shared/types/common.type';

const props = defineProps<{ product: IProduct }>();
const { product } = props; 
</script>
  
<style scoped>
.root {
    width: 150px;
    height: 320px;
    cursor: pointer;

    &:hover {
        background: #e5e5e5;
    }
}

.card-text {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    /* Số dòng tối đa */
    overflow: hidden;
    text-overflow: ellipsis;
    box-sizing: border-box;
    font-size: 14px;
}

.rating {
    white-space: unset;
}

.no-rate {
    height: 28px;
}

.price {
    font-size: 16px;
    line-height: 150%;
    font-weight: 600;
    color: rgb(255, 66, 78);
}

.discount {
    font-size: 12px;
    display: flex;
    align-items: center;
    gap: 4px;
}

.discount-rate {
    padding: 4px;
    background: #e5e5e5;
    width: fit-content;
    border-radius: 8px;
}

.no-score {
    text-decoration: line-through;
}

.sold {
    margin-top: 4px;
    padding: 0 16px;
    font-size: 10px;
}
</style>