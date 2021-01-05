<template>
  <div id="app">
    <Navbar/>
    <div id="content-wrapper">
      <PrivacyPolicy/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import PrivacyPolicy from './components/PrivacyPolicy.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    PrivacyPolicy,
    // TODO Terms & Conditions
  }
}
</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

#content-wrapper {
  flex: 1;
}
</style>
