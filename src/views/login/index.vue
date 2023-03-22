<script setup lang="ts">
import SocialAuthButtons from '@/components/SocialAuthButtons.vue';
</script>

<template>
  <div class="h-screen flex flex-col justify-center items-center">
    <h1 class="text-6xl font-bold text-gray-900">Login Page</h1>
    <div class="mt-4">
      <SocialAuthButtons />
    </div>
  </div>
</template>
