<template>
  <div class="hello">
    <Taglist />
    <el-container>
      <div class="wrap">
        
      </div>
    </el-container>
    <router-view/>
  </div>
</template>

<script>
import Taglist from '@/components/Taglist.vue'

export default {
  name: 'Main',
  components: {
    Taglist
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  
</style>
