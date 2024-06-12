<template>
    <div id="app">
    <router-view/>
    </div>
   </template>
   <script>
   export default {
    name: 'App'
   }
   </script>
   <style>
   nav ul {
    list-style-type: none;
    padding: 0;
   }
   nav ul li {
    display: inline;
    margin-right: 10px;
   }
   nav ul {
    list-style-type: none;
    padding: 0;
   }
   nav ul li {
    display: inline;
    margin-right: 10px;
   }
   .logo {
    height: 50px;
}

.navbar-nav li {
    padding-left: 20px;
    padding-right: 20px;
    font-size: 20px;
    font-weight: 600;
}
.hero-img {
    text-align: center;
}
   </style>