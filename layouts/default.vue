<template>
<div>
  <header>
        <headers/>
  </header>
  <div class="between">
    <Nuxt/>
  </div>
    <footer>
          <footers/>
    </footer>
</div>
</template>
<script>
import headers from "../components/header.vue"
import footers from "../components/footer.vue"
export default {
  components:{
    headers,footers
  }
}
</script>
<style>
.between{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
