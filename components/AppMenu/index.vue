<template>
    <v-card width="300" class="root">
        <v-list>
            <v-list-subheader class="font-weight-bold">Danh mục</v-list-subheader>

            <v-list-item v-for="(item, i) in items" :key="i" :value="item" color="primary" rounded="xl">
                <template v-slot:prepend>
                    <v-icon :icon="item.icon"></v-icon>
                </template>

                <v-list-item-title class="text-body-2" v-text="item.title"></v-list-item-title>
            </v-list-item>
        </v-list>
    </v-card>
</template>

<script setup lang="ts">
const items = [
    {
        title: 'Nhà sách ĐH',
        value: 1,
        icon: 'mdi-book-open',
    },
    {
        title: 'Nhà cửa - Đời sống',
        value: 2,
        icon: 'mdi-home-city'
    },
    {
        title: "Điện thoại - MTB",
        value: 3,
        icon: 'mdi-cellphone-link'
    },
]
</script>

<style scoped>
.root {
    height: calc(100vh - 16px);
    position: sticky;
    top: 16px;
}
</style>