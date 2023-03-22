<script setup lang="ts">
import { useAuthStore } from '@/store/auth';
import { onMounted, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps<{
  provider: string
}>()

const router = useRouter();

const authStore = useAuthStore();

onBeforeMount(async () => {
  const { code } = router.currentRoute.value.query;
  const provider = props.provider;
  const token = await authStore.loginWithProvider(provider, code as string);
  if (token) {
    router.push({ name: 'Dashboard' });
  }
})
</script>
<template>
  <div class="h-screen flex flex-col justify-center items-center">
    <h1 class="text-6xl font-bold text-gray-900">Logging In!...</h1>
  </div>
</template>
