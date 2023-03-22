<script setup lang="ts">
import { useAuthStore } from '@/store/auth';

const authStore = useAuthStore();

</script>
<template>
  <!-- Social auth buttons -->
  <div class="flex flex-col items-center gap-2">
    <button
      @click="authStore.fetchOauthUrl('google')"
      class="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
      Login with Google
    </button>
    <button class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Login with Facebook
    </button>
    <button class="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
      Login with Twitter
    </button>
    <button
      @click="authStore.fetchOauthUrl('github')"
      class="w-full bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
      Login with Github
    </button>
  </div>
</template>
