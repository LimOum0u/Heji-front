<script setup lang='ts'>
import {  reactive } from 'vue'
import { LoginRequestData } from 'src/api/user/types/user'
import { useUserStore } from 'stores/user'
import { useRouter } from 'vue-router'
const userStore = useUserStore()
const router = useRouter()
const loginFormData = reactive<LoginRequestData>({
  username: '',
  password: '',
})

const login = async() => {
  userStore.login(loginFormData).then(() => {
    router.push('/')
  }).catch(() => {
    loginFormData.password = ''
  })

}

</script>
<template>
  <q-layout>
    <q-page-container>
      <q-page class='flex bg-image flex-center'>
        <q-card :style='{"width":"30%"}'>
          <q-card-section>
            <q-avatar size='103px'
                      class='absolute-center shadow-10'>
              <img src='https://cdn.quasar.dev/img/boy-avatar.png'
                   alt=''>
            </q-avatar>
          </q-card-section>
          <q-card-section>
            <div class='text-center q-pt-lg'>
              <div class='col text-h6 ellipsis'>
                Log in
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class='q-gutter-md'>
              <q-input filled
                       label-color='grey'
                       v-model='loginFormData.username'
                       label='Username'
                       lazy-rules />

              <q-input type='password'
                       label-color='grey'
                       filled
                       v-model='loginFormData.password'
                       label='Password'
                       lazy-rules />

              <div>
                <q-btn label='Login'
                       type='button'
                       color='accent'
                       @click='login' />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style>
.bg-image {
  background-image: linear-gradient(135deg, white 0%, #e3e3e3 100%);
}
</style>
