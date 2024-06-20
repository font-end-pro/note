<script setup>
import Main from "./components/Main.vue";

</script>

<template>
   <header>
    <img alt="logo" src="./assets/label_main.png" />
    <h1>SIMPLE TODO LIST</h1>
  </header>
  <Main />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  display: flex;
  justify-content: center;
  height: 100%;
  background-image: url("/bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}

header {
  display: flex;
  justify-content: center;
  align-items: center;
}
header > h1 {
  font-size: 1.5rem;
  font-family: "Balsamiq Sans", cursive;
  text-shadow: 2px 2px 2px gray;
}
header > img {
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
}
</style>
