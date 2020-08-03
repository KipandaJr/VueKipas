<template>
    <div>
      <Header/>
      <router-view></router-view>
    </div>
</template>

<script>
import Header from './components/Header';
/*import ShowOpt from './components/ShowOpt';
import Table from './components/TableProduct';*/
import './assets/css/font-awesome/css/all.css';
import './assets/css/myStyles.css';
import './assets/css/efectError.css';

export default {
  name: 'App',
  components: {
    Header/*,
    ShowOpt,
    Table*/
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
