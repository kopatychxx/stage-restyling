<template>
  <div class="navigation">
    <img class="stage_restyling_logo" src="~assets/icons/stage_restyling_logo.svg" alt="">
    <ul class="navigation_links">
        <li class="navigation_links_link"><a href="#home" @click.prevent="scrollTo('home')">Home</a></li>
        <li class="navigation_links_link"><a href="#about" @click.prevent="scrollTo('about')">About Us</a></li>
        <li class="navigation_links_link"><a href="#service" @click.prevent="scrollTo('service')">Service</a></li>
        <li class="navigation_links_link"><a href="#portfolio" @click.prevent="scrollTo('portfolio')">Portfolio</a></li>
        <li class="navigation_links_link"><a href="#contact" @click.prevent="scrollTo('contact')">Contact</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',
    methods: {
      scrollTo(id) {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      },
    },
  }
</script>

<style scoped>
.navigation {
  position: fixed;
  z-index: 20;
  color: black;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  margin-top: 20px;

}
.stage_restyling_logo{
  width: 160px
}
.navigation_links {
  display: flex;
  font-size: 15px;
  font-weight: 300;
  background-color:rgba(217, 217, 217, 0.5);
  border-radius:38px;
  padding: 10px 25px;
}
.navigation_links_link {
  margin-right: 30px;
  text-decoration: none;
  position: relative;
}
.navigation_links_link:last-child {
  margin-right: 0;
}
.navigation_links_link::after {
  position: absolute;
  content: '';
  left: 0;
  bottom: 0;
  display: block;
  width: 100%;
  height: 1px;
  background: #000;
}
.navigation_links_link::after {
  width: 0;
  transition: 0.3s;
}
.navigation_links_link:hover:after {
  width: 100%;
}
</style>
