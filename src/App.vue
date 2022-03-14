<template>
  <nav>
    <img src="https://assets-global.website-files.com/608a9a94f3d2f96ef8bbe85a/60eec3dc9dc518c0c21d42c9_bOnline%20logo%20DARK.svg" alt="logo" class="logo">
    <div class="profile">
    <img src="https://images.pexels.com/photos/7968078/pexels-photo-7968078.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" class="profile-image">
    <p class="profile-name">Lorem Ipsum</p>
    </div> 
  </nav>
  <sidebar class="sidebar">
    <div class="sidebar-menu">
      <span class="fas fa-home">
       <router-link to="/">Home</router-link> |
      </span>
    </div>
    <div class="sidebar-menu">
      <span class="fas fa-credit-card">
    <router-link to="/billing">Billing</router-link> 
      </span>
    </div>
  </sidebar>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f4f4fb;
}

nav {
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 55px;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 2;
  padding-left: 3rem;
  border-bottom: 1px solid #d6d6d6;
}

.logo {
  max-width: 100px;
  max-height: 100px;
}

.profile {
  display: flex;
  border-left: 1px solid rgb(185, 184, 184);
  width: 20%;
  width: 300px;
  align-items: center;
}

.profile-image {
  width: 30px;
  height: 30px;
  margin-left: 20px;
  margin-right: 20px;
  object-fit: cover;
  border-radius: 50%;
}

.sidebar {
  position: fixed;
  height: 100%;
  width: 150px;
  left: 0;
  top: 0;
  padding: 80px 0 20px 0;
  color: #fff;
  background-color: #000A70;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
}

.sidebar-menu {
  display: flex;
  align-items: center;
  padding: 15px 25px;
  width: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.sidebar-menu > span {
  font-size: 20px;
  padding-right: 30px;
  border-bottom: none;
}

.sidebar-menu:hover {
  color: #fff;
  background-color: #f8f8fb;
}
nav a {
  font-weight: bold;
  color: #fff;
}

nav a.router-link-exact-active {
  color: #19D5B2;
}
</style>
