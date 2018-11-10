<template>
  <div class="about">
    <h1>This is an about page</h1>
    <NonVuexCounters />
    <VuexCounters />
  </div>
</template>
<script>
import NonVuexCounters from '@/components/NonVuexCounters'
import VuexCounters from '@/components/VuexCounters'

export default {
  components: {
    NonVuexCounters,
    VuexCounters
  }
}
</script>
