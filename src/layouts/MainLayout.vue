<template>
  <q-layout view='LHh lpR fFf'>
    <q-header class='text-black header_normal'>
      <q-toolbar>
        <!--        <q-btn flat-->
        <!--               dense-->
        <!--               round-->
        <!--               icon='menu'-->
        <!--               aria-label='Menu'-->
        <!--               color='black'-->
        <!--               class='bg-grey-3 custom-border'-->
        <!--               @click='toggleLeftDrawer'-->
        <!--               v-if='$q.platform.is.mobile' />-->
        <q-toolbar-title class='q-ml-sm title-font'>
          <div>
            <q-list class='flex justify-center'>
              <q-item v-for='(item, index) in currentHead'
                      clickable
                      active-class='header-active'
                      v-ripple
                      :to='item.path'
                      class='vertical-bottom q-py-none no-min-height'
                      :key='index'>
                {{ item.title }}
              </q-item>
            </q-list>
          </div>
        </q-toolbar-title>

        <!-- <div>
          <q-btn class='q-mr-xs bg-grey-3 q-py-xs q-px-sm custom-border'
                 flat
                 @click='$q.dark.toggle()'
                 color='black'
                 :icon='$q.dark.isActive ? "nights_stay": "wb_sunny"' />
        </div> -->

        <div>
          <q-btn class='q-ml-xs bg-grey-3 q-py-xs q-px-sm custom-border'
                 flat>
            <a href='https://github.com/sponsors/mohitransubhe-supernatural'
               target='_blank'
               title='Donate'
               style='text-decoration: none'>
              <q-icon name='favorite'
                      style='color: #eb5daa' />
            </a>
          </q-btn>
        </div>

        <div class='q-mx-sm'>
          <q-btn class='q-mr-xs bg-grey-3 q-py-xs q-px-sm custom-border'
                 flat
                 color='black'
                 icon='notifications' />
        </div>

        <div class='q-mr-xs'>
          <q-btn no-caps
                 flat
                 class='bg-grey-3 custom-border'
                 to='/login'>
            <q-icon size='xs'
                    style='color: rgb(250, 108, 14)'
                    name='login' />
            <span class='text-black q-ml-sm'>Log in</span>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer v-model='leftDrawerOpen'
              bordered
              :width='120'
              :mini='miniState'
              show-if-above>
      <div :class='$q.dark.isActive ? "drawer_dark" : "drawer_normal"'
           class='full-height q-px-sm'>
        <div class='logo-container'>
          <q-img src='src/assets/heji.png' />
        </div>
        <q-list class='q-pt-xs q-gutter-sm'>
          <q-item active-class='tab-active'
                  @click='headBarStore.setCurrentHeader("")'
                  to='/'
                  exact
                  class='navigation-item'
                  clickable
                  v-ripple>
            <q-item-section avatar
                            class='no-min-width'>
              <q-icon name='dashboard' />
            </q-item-section>

            <q-item-section>首页</q-item-section>
          </q-item>
          <q-item active-class='tab-active'
                  @click='headBarStore.setCurrentHeader("")'
                  to='/project'
                  class='navigation-item'
                  clickable
                  v-ripple>
            <q-item-section avatar
                            class='no-min-width'>
              <q-icon name='library_books' />
            </q-item-section>

            <q-item-section>项目</q-item-section>
          </q-item>
          <q-item active-class='tab-active'
                  @click='headBarStore.setCurrentHeader("")'
                  to='/login'
                  exact
                  class='navigation-item'
                  clickable
                  v-ripple>
            <q-item-section avatar
                            class='no-min-width'>
              <q-icon name='login' />
            </q-item-section>

            <q-item-section>登录</q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-drawer>

    <q-page-container :class='$q.dark.isActive ? "" : "bg-grey-1"'>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup
        lang='ts'>
import {  ref } from 'vue'
import { useHeadBarStore } from 'stores/headBar'
import { storeToRefs } from 'pinia'

const headBarStore = useHeadBarStore()
let leftDrawerOpen = ref(false)
let miniState = ref(false)
const { currentHead } = storeToRefs(headBarStore)
</script>

<style>
.custom-banner {
  position: fixed;
  background: linear-gradient(145deg, rgb(65, 66, 143) 10%, rgb(138, 149, 252));
}

.drawer_normal {
  background: #e3e3e3;
  color: black;
}

.drawer_dark {
  background: linear-gradient(145deg, #2e3d57 15%, rgb(7, 18, 34) 70%);
  /* background: #2e3d57; */
  color: white;
}

.header_normal {
  background: white;
}

.header_dark {
  background: linear-gradient(145deg, #2e3d57 15%, rgb(7, 18, 34) 70%);
  /* background: black; */
}

.navigation-item {
  border-radius: 5px;
}

.tab-active {
  background: #c60021;
  color: white;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.header-active {
  background: #c60021;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.custom-border {
  border-radius: 5px;
}

.no-min-width {
  min-width: 0;
}

.no-min-height {
  min-height: 0;
}

.title-font {
  font-size: 15px;
  line-height: 48px;
}
</style>
