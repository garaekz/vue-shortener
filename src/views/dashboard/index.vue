<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '@/store/auth';
import { onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

onBeforeMount(() => {
  authStore.fetchUser();
});

const handleLogout = async () => {
  await authStore.logout();

  router.push({ name: 'Login' });
}
</script>

<template>
<div class="h-screen flex flex-col justify-center items-center">
  <h1 class="text-6xl font-bold text-gray-900">Dashboard</h1>
  <h2 class="text-2xl font-bold text-gray-900">{{ authStore.user?.name }}</h2>
  <button class="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" @click="handleLogout">
    Logout
  </button>
</div>
</template>
