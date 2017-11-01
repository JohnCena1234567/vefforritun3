<template>
    <div id="app">
        <box>Texti í boxi</box>
        <box>Texti í öðru boxi</box>

        <br><br><br><br>

        <pButton>Hnappur</pButton>
        <pButton>Hnappur 2</pButton>

        <br><br><br><br>

        <bBox closetext="Loka boxi">Texti í boxi</bBox>
        <bBox closetext="Loka">Texti í öðru boxi</bBox>
    </div>
</template>

<script>
import Box from './components/Box.vue'
import pButton from './components/Button.vue'
import bBox from './components/bBox.vue'

export default {
  name: 'app',
  components: { Box, pButton, bBox },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>
