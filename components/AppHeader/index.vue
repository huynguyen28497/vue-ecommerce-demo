<template>
    <header class="header">
        <v-container class="d-flex justify-between">
            <img src="https://salt.tikicdn.com/ts/upload/0e/07/78/ee828743c9afa9792cf20d75995e134e.png" alt="tiki-logo"
                width="96" height="40" />
            <v-text-field class="px-10" append-inner-icon="mdi-magnify" density="compact"
                placeholder="Tìm kiếm sản phẩm" variant="solo" hide-details single-line></v-text-field>
            <div class="d-flex ga-2">
                <v-btn class="ma-2" variant="text">
                    <template v-slot:prepend>
                        <v-icon icon="mdi-home" start></v-icon>
                    </template>
                    Trang chủ
                </v-btn>
                <v-btn class="ma-2" variant="text" v-if="!!account.token">
                    <template v-slot:prepend>
                        <v-icon icon="mdi-account" start></v-icon>
                    </template>
                    Tài khoản
                </v-btn>
                <v-btn class="ma-2" variant="text" v-if="!account.token" @click="navigateToLogin">
                    <template v-slot:prepend>
                        <v-icon icon="mdi-account" start></v-icon>
                    </template>
                    Đăng nhập
                </v-btn>
                <v-btn class="ma-2" variant="text">
                    <template v-slot:prepend>
                        <v-icon icon="mdi-cart" start></v-icon>
                    </template>
                    {{ cart.length ? `(${cart.length})` : '' }}
                </v-btn>
            </div>
        </v-container>
    </header>
</template>

<script setup lang="ts">
const { cart, account } = useMainStore();
const navigateToLogin = () => {
    navigateTo("/login");
}

</script>

<style scoped>
.header {
    border-bottom: 1px solid #e0e0e0;
}
</style>