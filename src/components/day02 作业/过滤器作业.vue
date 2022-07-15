<template>
  <div>
    <h1>国内网站：粉丝数量：{{ num | number("千") }}</h1>
    <h1>外国网站：粉丝数量：{{ num | number("万") }}</h1>
    <h1>{{ time | timeSolve }}</h1>
    <h1>{{ time | timeSolve("/") }}</h1>
  </div>
</template>

<script>
import moment from "moment"
export default {
  data() {
    return {
      num: 1876986,
      time: 1636450540055,
    }
  },
  filters: {
    number(val, a) {
      if (a === "千") {
        return val / 1000
      } else {
        return val / 10000
      }
    },
    timeSolve(val, a = "-") {
      return moment(val).format(`YYYY${a}MM${a}SS`)
    },
  },
}
</script>

<style>
.wrap {
  width: 100%;
  display: flex;
  margin: 0.2rem 0 0 0;
  position: relative;
}

/*左侧的导航样式*/
.nav_left {
  width: 21.1875rem;
  overflow: scroll;
}

.nav_left::-webkit-scrollbar {
  display: none;
}

.nav_content {
  white-space: nowrap;
  padding: 0 0.7rem;
}

.nav_content span {
  display: inline-block;
  padding: 0.4rem 0.6rem;
  font-size: 0.875rem;
}

.nav_content .active {
  border-bottom: 2px solid #7f4395;
  color: #7f4395;
}

.nav_left,
.down {
  float: left;
}

/*右侧导航部分*/
.down {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gray {
  color: gray;
  display: inline-block;
  vertical-align: middle;
}
</style>
