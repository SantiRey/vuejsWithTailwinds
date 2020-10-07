<template>
  <header class="shadow w-sreen">
    <nav>
      <nav class="flex items-center justify-between flex-wrap bg-gray-600 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <px-icon class="mr-1" style="fill:#B0E0E6" />
          <span class="font-semibold text-xl tracking-tight">Currency =D</span>
        </div>
        <div
          class="hidden sm:block w-full block flex-grow lg:flex lg:items-center"
        >
          <div class="text-sm lg:flex-grow"></div>
        </div>
      </nav>
    </nav>
  </header>
</template>

<script>
import PxIcon from '@/components/PxIcon'

export default {
  name: 'PxHeader',
  components: { PxIcon }
}
</script>
