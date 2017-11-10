<template>
  <div class="pages">
    <header class="header">
      <h1>{{title}}</h1>
      <i class="back fa fa-2x" :class=" isDirection ? 'fa-chevron-down' : 'fa-chevron-left' " @click="back"></i>
    </header>
    <div class="wrapper">
      <section v-show="desc" class="desc">
        <slot name="desc">{{desc}}</slot>
      </section>
      <main class="content">
        <slot name="content">{{content}}</slot>
      </main>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  props: {
    title: {
      type: String,
      default: "",
      required: true
    },
    desc: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
    back: {
      type: Function,
      default: undefined,
      required: false
    },
    isDirection: {
      type: Boolean,
      default: true
    }
  }
};
</script>
<style scoped>
.pages {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size:cover;
}
.pages .header {
  position: relative;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.2);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  z-index: 99;
}
.pages .header h1 {
  margin: 0;
  font-size: 16px;
  color: #fff;
}
.pages .header .back {
  position: absolute;
  top: 9px;
  left: 15px;
  width: 26px;
  color: #fff;
}
.pages .wrapper {
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  height: calc(100% - 44px);
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
}
.pages .wrapper .desc {
  padding: 20px;
  line-height: 20px;
  font-size: 14px;
}
.pages .wrapper .content {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  position: relative;
  margin: 0 10px 10px;
  text-align: center;
}
</style>

