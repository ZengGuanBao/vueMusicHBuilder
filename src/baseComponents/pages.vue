<template>
  <div class="pages animated fadeInRight" :style="{backgroundImage: 'url(' + bgImg + ')'}">
    <header class="header">
      <h1>{{title}}</h1>
      <i class="back fa fa-chevron-left fa-1x" :src="backIcon" @click="back"></i>
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
    bgImg: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      backIcon: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTA0ODY0NDU5NjU4IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjMzNjYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM2My44NDA5MTkgNDcyLjk3ODczN0MzMzYuOTM4NzE0IDQ5Ny4zNTg4NjEgMzM3LjMwMTgwNyA1MzcuNDg2MTM4IDM2NC43MzAzNzkgNTYxLjQ4NjEzOEw2NzMuOTUxOTAyIDgzMi4wNTQ5N0M2ODIuODE4ODE2IDgzOS44MTM1MTkgNjk2LjI5NjQxOCA4MzguOTE1MDEyIDcwNC4wNTQ5NyA4MzAuMDQ4MDk4IDcxMS44MTM1MTkgODIxLjE4MTE4NCA3MTAuOTE1MDEyIDgwNy43MDM1ODIgNzAyLjA0ODA5OCA3OTkuOTQ1MDNMMzkyLjgyNjU3NyA1MjkuMzc2MTk4QzM4NC41OTU3OCA1MjIuMTc0MjUzIDM4NC41MDIyMjcgNTExLjgzNTI4NyAzOTIuNDkyNDE0IDUwNC41OTQxOEw3MDIuMzI1NzQ3IDIyMy44MDc3MjNDNzExLjA1NjExMSAyMTUuODk1ODI5IDcxMS43MTk2MTQgMjAyLjQwNDYxNiA3MDMuODA3NzIzIDE5My42NzQyNTIgNjk1Ljg5NTgyOSAxODQuOTQzODg5IDY4Mi40MDQ2MTcgMTg0LjI4MDM4NiA2NzMuNjc0MjUzIDE5Mi4xOTIyNzhMMzYzLjg0MDkxOSA0NzIuOTc4NzM3WiIgcC1pZD0iMzM2NyIgZmlsbD0iIzAwN2JmZiI+PC9wYXRoPjwvc3ZnPg=="
    };
  },
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>
<style scoped>
.pages {
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #efeff4;
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
  top: 15px;
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

