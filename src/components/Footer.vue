<template>
  <footer class="bg-light py-3 text-center small">
    <div class="links">
      <a v-for="link in links" :key="link.url" :href="link.url" rel="external" target="_blank"
         @click="handleLinkClick">{{link.name}}</a>
    </div>
    <div>
      © 2020 <a href="https://www.yolo.blue/" rel="author external" target="_blank"
                @click="handleLinkClick">CrazyOrr</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      links: [
        {
          name: 'Toolbox',
          url: 'https://www.yolo.blue/toolbox/',
        },
        {
          name: '更多产品',
          url: 'https://www.yolo.blue/products/',
        }
      ]
    }
  },
  methods: {
    handleLinkClick: function (event) {
      console.log(event.target.href)
      // this.$gtag.event('open_link', {
      //   'event_category': 'engagement',
      //   'event_label': event.target.href,
      // })
    }
  }
}
</script>

<style scoped>
div.links a:not(:first-child) {
  margin-left: 8px;
}
</style>
