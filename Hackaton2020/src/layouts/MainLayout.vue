<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title>
          Estadísticas COVID-19
        </q-toolbar-title>

        <div></div>
      </q-toolbar>
    </q-header>

 
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'


export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>
