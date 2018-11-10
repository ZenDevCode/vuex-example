<template>
  <div class="home">
    <h1>Search (Actions in action)</h1>
    <VuexSearch />
  </div>
</template>

<script>
// @ is an alias to /src
import VuexSearch from '@/components/VuexSearch'

export default {
  name: 'home',
  components: {
    VuexSearch,
  }
}
</script>

