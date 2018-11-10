<template>
  <div>
    <h3>This component does NOT use Vuex</h3>
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
  data() {
    return {
      pageviews: 0,
      clicks: 0,
    };
  },
  computed: {
    actions() {
      return this.pageviews + this.clicks;
    }
  },
  methods: {
    incrementClicks() {
      this.clicks += 1;
    },
  },
  mounted() {
    this.pageviews = this.pageviews + 1;
  }
};
</script>
