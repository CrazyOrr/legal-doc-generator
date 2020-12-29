<template>
  <div id="app">
    <Navbar/>
    <PrivacyPolicy/>
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
</style>
