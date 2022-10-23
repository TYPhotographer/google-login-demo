<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { googleOneTap, decodeCredential, googleAuthCodeLogin, googleLogout } from "vue3-google-login"
import { onMounted, ref } from 'vue';

interface UserData {
  name: string
  picture: string
  email: string
  [key: string]: string | number
}

const userData = ref<UserData | null>(null)

const callback = (response) => {
  const res = decodeCredential(response.credential)
  userData.value = res as UserData
  console.log("Handle the userData", userData)
}

async function logout () {
  await googleLogout()
  userData.value = null
}

</script>

<template>
  <div>
    <header>
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  
      <div class="wrapper">
        <HelloWorld msg="You did it!" />
      </div>
    </header>
  
    <main>
      <button @click="logout" :disabled="!userData">logout</button>
      <template v-if="userData">
        <p>Is Authorized</p>
        <img class="pic" :src="userData.picture" alt="">
        <div class="row">
          <p>name:</p>
          <p>{{ userData?.name }}</p>
        </div>
        <div class="row">
          <p>emali:</p>
          <p>{{ userData?.email }}</p>
        </div>
      </template>
      <template v-else>
        <p >Unauthorized</p>
        <!-- <button @click="login">login</button> -->
        <GoogleLogin :callback="callback" />
      </template>
      
    </main>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  align-items: center;
  gap: 16px;
}

.pic {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

/* */

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
