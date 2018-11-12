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
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState({
      pageviews: state => state.interactions.pageviews,
      clicks: state => state.interactions.clicks,
    }),
    ...mapGetters({
      actions: 'actions'
    })
  },
  methods: {
    ...mapMutations({
      incrementClicks: 'addClick',
    }),
  },
  mounted() {
    this.$store.commit('addPageview')
  }
};
</script>

