<template>
  <div>
    <form @submit="runSearch">
      <input v-model="search" />
      <button :disabled="!this.search.length">Search</button>
    </form>

    <div v-if="lastSearch">
      <p>Last time you searched for {{lastSearch}}. You got these results:</p>
      <ol>
        <li v-for="(topic, index) in lastResults.RelatedTopics" :key="index">
          <a v-if="topic.Text" :href="topic.FirstURL">{{topic.Text}}</a>    
          <span v-else>{{topic.Name}}</span>
        </li>
      </ol>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      search: '',
    }
  },
  computed: {
    ...mapState({
      lastSearch: state => state.search.q,
      lastResults: state => state.search.results
    })
  },
  methods: {
    runSearch() {
      this.$store.dispatch('runSearch', this.search);
    },
  },
};
</script>
