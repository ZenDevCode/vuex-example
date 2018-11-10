<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <NonVuexCounters />
    <VuexCounters />
  </div>
</template>

<script>
// @ is an alias to /src
import NonVuexCounters from '@/components/NonVuexCounters'
import VuexCounters from '@/components/VuexCounters'

export default {
  name: 'home',
  components: {
    NonVuexCounters,
    VuexCounters
  }
}
</script>
