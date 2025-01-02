<template>
    <NuxtLayout>
        <div class="root">
            <v-container>
                <h4 class="mb-4">Giỏ hàng của bạn ({{ cart.length || 0 }})</h4>
                <div class="d-flex ga-4 align-start">
                    <div class="d-flex flex-column ga-4" style="flex: 1">
                        <v-card v-for="item in cart">
                            <div class="d-flex align-center justify-space-between pa-4">
                                <div class="d-flex align-center ga-1">
                                    <v-icon icon="mdi-store" />
                                    <div class="font-weight-bold">{{ item?.product?.seller_name }}</div>
                                </div>
                                <div class="text-body-2 font-weight-bold" style="cursor: pointer;"
                                    @click="deleteProduct(item?.product?.id)">Xóa</div>
                            </div>
                            <v-divider />
                            <div class="d-flex align-start pa-4 ga-4">
                                <img class="rounded" width="80px" :src="item?.product?.thumbnail_url" />
                                <div class="d-flex flex-column ga-1">
                                    <div class="text-body-1">{{ item?.product?.name }}"></div>
                                    <div class="d-flex align-center ga-2">
                                        <div class="old-price mt-2 font-weight-bold text-body-2">{{
                                            Intl.NumberFormat('vi-VN', {
                                                style: 'currency',
                                                currency: 'VND',
                                                minimumFractionDigits: 0,
                                            }).format(item?.product?.original_price) }}</div>
                                        <div class="price mt-2 font-weight-bold text-body-2">{{ Intl.NumberFormat('vi-VN', {
                                            style: 'currency',
                                            currency: 'VND',
                                            minimumFractionDigits: 0,
                                        }).format(item?.product?.price) }}</div>
                                    </div>
                                    <div class="d-flex ga-1 align-center" style="width: 150px;">
                                        <v-btn rounded="0" size="x-small"
                                            @click="item.quantity > 1 ? item.quantity-- : item.quantity = 1"
                                            icon="mdi-minus"></v-btn>
                                        <v-text-field v-model="item.quantity"></v-text-field>
                                        <v-btn rounded="0" size="x-small" @click="item.quantity++" icon="mdi-plus"></v-btn>
                                    </div>
                                </div>
                            </div>
                        </v-card>
                    </div>
                    <v-card class="pricing-wrapper">
                        <h5 class="pa-4">Mã ưu đãi Huy</h5>
                        <v-divider />
                        <div class="pa-4">
                            <div class="d-flex justify-space-between align-center">
                                <div class="text-body-2">Tạm tính:</div>
                                <div class="text-subtitle-1 font-weight-bold">{{
                                    Intl.NumberFormat('vi-VN', {
                                        style: 'currency',
                                        currency: 'VND',
                                        minimumFractionDigits: 0,
                                    }).format(allPrice) }}</div>
                            </div>
                            <v-btn @click="$router.push('/checkout')" class="mt-4 w-100" color="primary">Mua ngay</v-btn>
                        </div>
                    </v-card>
                </div>
            </v-container>
        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">

const { cart } = storeToRefs(useMainStore())
const { updateCart } = useMainStore()

const allPrice = computed(() => {
    return cart.value.reduce((total, item) => {
        return total + item.product.price * item.quantity
    }, 0)
})

const deleteProduct = (id: number) => {
    const newCart = cart.value.filter(item => item.product.id !== id)
    updateCart(newCart)
}

</script>

<style scoped>
.root {
    background: #F5F5FA;
    min-height: calc(100vh - 85px);
}

.pricing-wrapper {
    width: 30vw;
}

.old-price {
    text-decoration: line-through;
    color: #9E9E9E;
}

.price {
    color: #FF424E;
}

:deep(.v-field__input) {
    padding: 0 16px;
    min-height: 32px;
    text-align: center;
}

:deep(.v-input__details) {
    display: none;
}
</style>