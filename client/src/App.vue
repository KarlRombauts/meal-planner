<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link :to="{ name: 'Weeks'}">Meal Plan</router-link></li>
        <li><router-link :to="{ name: 'Ingredients'}">Ingredients</router-link></li>
        <li><router-link :to="{ name: 'ShoppingList'}">Shopping List</router-link></li>
        <li><router-link :to="{ name: 'Recipes'}">Recipes</router-link></li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav ul {
  padding: 0;
  list-style: none;
  display: flex;
}
nav li a {
  padding: 5px 15px
}
</style>
