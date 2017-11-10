  
<template>
  <pages class="animated fadeInRight" :title="title" :back="back" :isDirection="isDirection">
    <div slot="content">
      <slot name="topInfo"></slot>
      <touchScroll :on-refresh="onRefresh" :on-infinite="onInfinite">
        <slot name="listContent"></slot>
      </touchScroll>
    </div>
  </pages>
</template>
<script>
import touchScroll from './touchScroll'
import pages from "./pages"
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    back: {
      type: Function,
      default: undefined,
      required: false
    },
    onRefresh: {
      type: Function,
      default: undefined,
      required: false
    },
    onInfinite: {
      type: Function,
      default: undefined,
      required: false
    }
  },
  data () {
    return {
      isDirection: false
    }
  },
  components: {
    touchScroll,
    pages
  }
}
</script>
<style>

</style>


