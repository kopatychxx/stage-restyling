<template>
  <div class="navigation">
    <img class="stage_restyling_logo" src="~assets/icons/stage_restyling_logo.svg" alt="">
    <ul class="navigation_links">
        <li class="navigation_links_link"><a href="#home" @click.prevent="scrollTo('home')">Home</a></li>
        <li class="navigation_links_link"><a href="#about" @click.prevent="scrollTo('about')">About Us</a></li>
        <li class="navigation_links_link"><a href="#service" @click.prevent="scrollTo('service')">Services</a></li>
        <li class="navigation_links_link"><a href="#portfolio" @click.prevent="scrollTo('portfolio')">Portfolio</a></li>
        <li class="navigation_links_link"><a href="#contact" @click.prevent="scrollTo('contact')">Contact</a></li>
    </ul>
    <button class="burger-button" @click="toggleMenu">
      <span :class="menuOpen ? 'burger-line open' : 'burger-line'"></span>
      <span :class="menuOpen ? 'burger-line open' : 'burger-line'"></span>
      <span :class="menuOpen ? 'burger-line open' : 'burger-line'"></span>
    </button>
    <nav :class="menuOpen ? 'menu open' : 'menu'">
      <ul>
        <li><a href="#home" @click="toggleMenu">Home</a></li>
        <li><a href="#about" @click="toggleMenu">About Us</a></li>
        <li><a href="#service" @click="toggleMenu">Services</a></li>
        <li><a href="#portfolio" @click="toggleMenu">Portfolio</a></li>
        <li><a href="#contact" @click="toggleMenu">Contact</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',
    data() {
      return {
        menuOpen: false, // Состояние меню: открыто/закрыто
      }
    },
    methods: {
      scrollTo(id) {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      },
      toggleMenu() {
        this.menuOpen = !this.menuOpen
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
  backdrop-filter: blur(3px); /* Размытие */

}
.stage_restyling_logo{
  width: 160px;
  margin: 20px 10%;
}
.navigation_links {
  display: flex;
  font-size: 15px;
  font-weight: 300;
  background: rgba(189, 189, 189, 0.5); /* Полупрозрачный белый фон */
  backdrop-filter: blur(10px); /* Размытие */
  border-radius:38px;
  padding: 10px 25px;
  margin-right: 10%;
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
.burger-button{
  width: 30px;
  height: 30px;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1000;
}

.burger-line {
  width: 100%;
  height: 4px;
  background-color: gray; /* Цвет линий */
  transition: all 0.3s ease; /* Плавная анимация */
}

/* Анимация для открытия */
.burger-line.open:nth-child(1) {
  transform: rotate(45deg) translate(14px, 13px)
}

.burger-line.open:nth-child(2) {
  opacity: 0; /* Средняя линия исчезает */
}

.burger-line.open:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Меню */
.menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: right 0.3s ease;
  z-index: 999;
}

.menu.open {
  right: 0;
}

.menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
}

.menu ul li {
  margin: 20px 0;
}

.menu ul li a {
  text-decoration: none;
  font-size: 1.5rem;
  color: #fff;
  transition: color 0.3s ease;
}

.menu ul li a:hover {
  color: #007bff;
}
@media (max-width: 768px) {
  .stage_restyling_logo {
    width: 120px;
  }
  .navigation_links {
    display: none;
  }
  .burger-button {
    display: flex;
    margin: 10px 10%;
  }
  .navigation {
    padding: 0;
    margin: 0;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  .stage_restyling_logo {
    margin: 10px 10%;
  }
}
</style>
