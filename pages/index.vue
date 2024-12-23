<template>
  <div class="">
    <NavBar />
    <HomeSection />
    <AboutSection />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import HomeSection from '@/components/sections/HomeSection'
import AboutSection from '@/components/sections/AboutSection'
// import PortfolioSection from '@/components/sections/PortfolioSection'
// import ServiceSection from '@/components/sections/ServiceSection'
// import ContactSection from '@/components/sections/ContactSection'

export default {
  name: 'IndexPage',
  components: {
    NavBar,
    HomeSection,
    AboutSection,
    // PortfolioSection,
    // ServiceSection,
    // ContactSection,
  },
}
</script>

<style>

</style>
