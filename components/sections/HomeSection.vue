<template>
  <div  id="home" class="homesection">
    <h1>Choose your stage, <br>
      define your <span>style!</span></h1>
    <div class="button">
      <p>Ask for a price</p>
      <img class="homesection_arrow" src="~assets/icons/arrow.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSection',
}

</script>

<style scoped>
.homesection{
  width: 100%;
  height: 100vh;
  background-image: url('~assets/images/background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
h1{
  margin: 0;
  font-size: 48px;
  color: white;
  margin-bottom: 30px
}
h1 span{
  color: #9F0000;
}
.button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid white;
  width: 200px;
}
.button p {
  color: white;
  font-size: 20px;
  font-weight: 300;
  margin-right: 25px;
}
.homesection_arrow {
  width: 15px
}
</style>
