<template>
    <div class="root">
        <v-card class="login-container">
            <h1 class="pb-2">Login</h1>
            <form @submit.prevent="handleLogin">
                <div>
                    <v-text-field label="Email" v-model="email"></v-text-field>
                </div>
                <div>
                    <v-text-field label="Password" v-model="password"></v-text-field>
                </div>
                <div class="d-flex justify-space-between w-100">
                    <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
                    <div v-if="!errorMessage">&nbsp;</div>
                    <v-btn type="submit">Login</v-btn>
                </div>
            </form>

        </v-card>
    </div>
</template>
  
<script setup lang="ts">
const { addAccount } = useMainStore();
const email = ref('');
const password = ref('');
const errorMessage = ref('');

const handleLogin = () => {
    if (password.value === '1') {
        addAccount({ name: 'Admin', token: '1', email: 'admin@admin.com' });
        navigateTo('/')
    } else {
        errorMessage.value = 'Invalid email or password';
    }
};
</script>
  
<style scoped>
.root {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background: #0A68FF;
}

.login-container {
    width: 780px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background: #fff;
}

.error {
    color: red;
    margin-top: 10px;
}
</style>