<template>
  <div>
    <h3>This component DOES use Vuex</h3>
    <table>
      <tr>
        <th>
          PageViews
        </th>
        <th>
          Clicks
        </th>
        <th>
          Total Actions
        </th>
      </tr>
      <tr>
        {{pageviews}}
      </tr>
      <tr>
        {{clicks}}
      </tr>
      <tr>
        {{actions}}
      </tr>
    </table>
    <button @click="incrementClicks">Click Me</button>
  </div>
</template>
<script>
export default {
  computed: {
    pageviews() {
      return this.$store.state.pageviews;
    },
    clicks() {
      return this.$store.state.clicks;
    },
    actions() {
      return this.$store.getters.actions;
    }
  },
  methods: {
    incrementClicks() {
      this.$store.commit('addClick');
    },
  },
  mounted() {
    this.$store.commit('addPageview')
  }
};
</script>

