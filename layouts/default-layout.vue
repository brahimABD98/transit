<script lang="ts">
import { AppFooter, AppHeader } from '#components';

</script>
<template>
  <div class="flex flex-col min-h-screen justify-between">
    <AppHeader />
    <section class="flex flex-grow items-center justify-center">
      <slot />
    </section>
    <AppFooter />
  </div>
</template>