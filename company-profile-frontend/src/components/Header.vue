<template>
    <header>
        <nav class="navbar navbar-expand">
        <div class="container">
            <router-link to="/" class="navbar-brand">
      <img class="logo" src="@/assets/logo.png" alt="logo" />
    </router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                
                <router-link class="nav-link" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/about">Tentang Kami</router-link>
              </li>
              
                <li class="nav-item">
                <router-link class="nav-link" to="/products">Produk</router-link>
              </li>
              
              <li class="nav-item">
                <router-link class="nav-link" to="/news">Berita</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/information">Informasi</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/contact">Kontak</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderComponent',
  };
  </script>
  
  <style scoped>
 
  </style>