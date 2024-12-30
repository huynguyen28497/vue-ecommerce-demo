<template>
    <NuxtLayout>
        <div class="root">
            <v-container>
                <v-breadcrumbs :items="items">
                    <template v-slot:prepend>
                        <v-icon icon="$vuetify" size="small"></v-icon>
                    </template>
                </v-breadcrumbs>
                <v-card class="pa-6 d-flex ga-8 justify-start">
                    <img class="rounded" width="400px" :src="currentProduct?.thumbnail_url" />
                    <div class="w-100">
                        <div class="text-h5">{{ currentProduct?.name }}
                        </div>
                        <div class="mt-2">
                            Thương hiệu: {{ currentProduct?.brand_name }}
                        </div>
                        <div class="mt-2 price">
                            {{ Intl.NumberFormat('vi-VN', {
                                style: 'currency',
                                currency: 'VND',
                                minimumFractionDigits: 0,
                            }).format(currentProduct?.price || 0) }}
                        </div>
                        <div v-if="currentProduct?.original_price || 0 > (currentProduct?.price || 0)"
                            class="mt-2 d-flex align-center ga-2">
                            <div class="text-decoration-line-through text-body-2">{{ Intl.NumberFormat('vi-VN', {
                                style: 'currency',
                                currency: 'VND',
                                minimumFractionDigits: 0,
                            }).format(currentProduct?.original_price || 0) }}</div>
                            <div class="discount-rate">Giảm {{ currentProduct?.discount_rate || 0 }}%</div>
                        </div>
                        <div class="mt-8 d-flex ga-4 align-center">
                            <v-rating style="margin-top: -8px;"
                                v-if="currentProduct?.rating_average && currentProduct?.rating_average > 0" :length="5"
                                :model-value="currentProduct.rating_average" :size="18" disabled active-color="#046DFF" />
                            <div class="text-body-2">{{ currentProduct?.review_count || 0 }} đánh giá</div>
                            <div class="text-body-2">-</div>
                            <div class="text-body-2">{{ currentProduct?.quantity_sold || 0 }} lượt mua</div>
                        </div>
                        <v-divider class="my-4" />
                        <div class="mb-4 d-flex align-center ga-4">
                            <div class="text-body-2">Chọn số lượng:</div>
                            <div class="d-flex ga-1 align-center">
                                <v-btn rounded="0" size="x-small" @click="quantity--" icon="mdi-minus"></v-btn>
                                <v-text-field v-model="quantity"></v-text-field>
                                <v-btn rounded="0" size="x-small" @click="quantity++" icon="mdi-plus"></v-btn>
                            </div>
                        </div>
                        <div class="d-flex ga-2">
                            <v-btn class="flex-fill" @click="addToCart(currentProduct)">Thêm vào giỏ</v-btn>
                            <v-btn color="primary" class="flex-fill">Mua ngay</v-btn>
                        </div>
                    </div>
                </v-card>
            </v-container>
        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">
import { PRODUCT_DATA, YOUR_PRODUCT_DATA } from '~/mocks/product';
import type { IProduct } from '~/shared/types/common.type';
const { addCart, cart } = useMainStore()
const route = useRoute()
const id = Number(route.params.id);
const quantity = ref(1)

const currentProduct = computed(() => {
    const allProd = YOUR_PRODUCT_DATA.concat(PRODUCT_DATA);
    const currentProduct = allProd.find((product) => product.id === id);
    return currentProduct
})

const items = [
    {
        title: 'Trang chủ',
        disabled: false,
        href: '/',
    },
    {
        title: currentProduct?.value?.name || '',
        disabled: false,
        href: `/product/${currentProduct?.value?.id}`,
    }
]

const addToCart = (product?: IProduct) => {
    if (!product) return
    addCart({ product, quantity: quantity.value })
    useNuxtApp().$toast.info('Đã thêm vào giỏ hàng');
}

</script>

<style scoped>
.root {
    background: #F5F5FA;
    min-height: calc(100vh - 85px);
}

.price {
    font-size: 20px;
    line-height: 150%;
    font-weight: 600;
    color: rgb(255, 66, 78);
}

.discount-rate {
    font-size: 14px;
    font-weight: 600;
    color: rgb(255, 66, 78);
}


:deep(.v-field__input) {
    padding: 0 16px;
    min-height: 32px;
}

:deep(.v-input__details) {
    display: none;
}
</style>