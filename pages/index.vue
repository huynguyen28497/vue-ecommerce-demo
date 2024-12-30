<template>
    <NuxtLayout>
        <main class="body">
            <v-container class="d-flex justify-start ga-2" min-height="calc(100vh - 85px)">
                <app-menu />
                <div class="container">
                    <app-slider />
                    <v-card class="mt-4 px-6 py-4 d-flex ga-12 align-start menu-item-wrapper">
                        <div class="d-flex justify-center align-center flex-column ga-2 font-weight-bold menu-item"
                            style="width: fit-content;">
                            <v-img width="44px" height="44px"
                                src="https://salt.tikicdn.com/ts/upload/2f/52/8e/00ab5fbea9d35fcc3cadbc28d7c6b14e.png"
                                cover></v-img>

                            TOP DEAL
                        </div>
                        <div class="d-flex justify-center align-center flex-column ga-2 font-weight-bold menu-item"
                            style="width: fit-content;">
                            <v-img width="44px" height="44px"
                                src="https://salt.tikicdn.com/ts/upload/72/8d/23/a810d76829d245ddd87459150cb6bc77.png"
                                cover></v-img>

                            Huy Trading
                        </div>
                        <div class="d-flex justify-center align-center flex-column ga-2 font-weight-bold menu-item"
                            style="width: fit-content;">
                            <v-img width="44px" height="44px"
                                src="https://salt.tikicdn.com/ts/upload/8b/a4/9f/84d844f70e365515b6e4e3e745dac1d5.png"
                                cover></v-img>

                            Coupon siêu hot
                        </div>
                        <div class="d-flex justify-center align-center flex-column ga-2 font-weight-bold menu-item"
                            style="width: fit-content;">
                            <v-img width="44px" height="44px"
                                src="https://salt.tikicdn.com/ts/upload/a5/d8/06/cb6ff520f12973013c81a8b14ad5e5b3.png"
                                cover></v-img>

                            Xả kho giảm nửa giá
                        </div>
                        <div class="d-flex justify-center align-center flex-column ga-2 font-weight-bold menu-item"
                            style="width: fit-content;">
                            <v-img width="44px" height="44px"
                                src="https://salt.tikicdn.com/ts/upload/cf/46/d1/e474a9eb803909a59927600ee64ddd4f.png"
                                cover></v-img>

                            Hàng ngoại giá hot
                        </div>
                        <div class="d-flex justify-center align-center flex-column ga-2 font-weight-bold menu-item"
                            style="width: fit-content;">
                            <v-img width="44px" height="44px"
                                src="https://salt.tikicdn.com/cache/750x750/ts/upload/d7/b9/cf/185c3ea4d118574d7927f3d191575445.jpg.webp"
                                cover></v-img>

                            Cùng mẹ chăm bé
                        </div>
                        <div class="d-flex justify-center align-center flex-column ga-2 font-weight-bold menu-item"
                            style="width: fit-content;">
                            <v-img width="44px" height="44px"
                                src="https://salt.tikicdn.com/cache/750x750/ts/upload/28/52/b2/e77e55676a38e02c5ac7242cc43f46dc.jpg.webp"
                                cover></v-img>

                            Mọt sách Huy
                        </div>
                        <div class="d-flex justify-center align-center flex-column ga-2 font-weight-bold menu-item"
                            style="width: fit-content;">
                            <v-img width="44px" height="44px"
                                src="https://salt.tikicdn.com/cache/750x750/ts/upload/25/a7/1f/5538b19e95600da86e1241082fb631bf.jpg.webp"
                                cover></v-img>

                            Thế giới công nghệ
                        </div>
                        <div class="d-flex justify-center align-center flex-column ga-2 font-weight-bold menu-item"
                            style="width: fit-content;">
                            <v-img width="44px" height="44px"
                                src="https://salt.tikicdn.com/cache/750x750/ts/upload/03/f9/44/343e3b73c1e600e3c16b97843dc04bb1.jpg.webp"
                                cover></v-img>

                            Yêu bếp nghiện nhà
                        </div>
                    </v-card>
                    <top-deal class="mt-4" />
                    <suggestion class="mt-4" />
                    <app-footer class="mt-4" />
                </div>
            </v-container>
        </main>
    </NuxtLayout>
</template>

<script setup lang="ts">

</script>

<style scoped>
.body {
    background: #F5F5FA;
    width: 100vw;
    min-height: calc(100vh - 85px);
}

.container {
    width: 100%;
    min-height: calc(100vh - 101px);
}

.menu-item {
    max-width: 100px;
    line-height: 16px;
    text-align: center;
    cursor: pointer;
    padding: 5px 0;
    border-radius: 8px;

    &:hover {
        background: #e0e0e0;
    }
}

.menu-item-wrapper {
    overflow-x: auto;
}
</style>