<template>
    <div class="box">
      <div class="head">
        <img src="../../static/ag2.png" class="head_iconfir"  alt="">
        <el-input v-model="input" clearable select-when-unmatched @input="search" placeholder="搜索音乐、视频、歌词、电台" prefix-icon="el-icon-search" class="searchInput"></el-input>
        
        <img src="../../static/oi.png" class="head_icon" alt="">
      </div>
      <div class="selects">
          <el-tabs v-model="activeName" @tab-click="handleClick" class="select" stretch>
            <el-tab-pane label="音乐" name="first" ></el-tab-pane>
            <el-tab-pane label="视频" name="second"></el-tab-pane>
            <el-tab-pane label="电台" name="third"></el-tab-pane>
          </el-tabs>
      </div>
        <!-- <router-view /> -->
      <div class="block">
        <el-carousel trigger="click" height="150px">
          <el-carousel-item v-for="(item,index) in list" :key="index">
            <img :src="item.img" alt="" class="lunbo">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div>
        <ul class="ul_img">
          <li><a href=""><img src="../../static/3_03.png" class="nav_img" alt=""></a></li>
          <li><a href=""><img src="../../static/3_05.png" class="nav_img" alt=""></a></li>
          <li><a href=""><img src="../../static/3_07.png" class="nav_img" alt=""></a></li>
          <li><a href=""><img src="../../static/3_09.png" class="nav_img" alt=""></a></li>
        </ul>
      </div>
      <div>
        <span class="headName">推荐歌单</span><span class="dayu">＞</span>
      </div>
      <div>
        <ul class="music_list" @click="selcetMusicList">
          <li v-for="(item,index) in musicList" :key="index" >
            <img :src="ip+item.listuserimg" :id="item._id" alt="">{{item.listname}}
          </li>
        </ul>
      </div>

    </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      activeName: "second",
      input: "",
      list: [
        { id: 0, img: "../../static/3mlkjsa.jpg" },
        { id: 1, img: "../../static/3sad1654s.jpg" },
        { id: 2, img: "../../static/3sads.jpg" },
        { id: 3, img: "../../static/3ss.jpg" },
        { id: 4, img: "../../static/3ssadks.jpg" },
        { id: 5, img: "../../static/nkjasd545.jpg" }
      ],
      musicList: [],
      ip: "http://192.168.1.5:5000"
    };
  },
  methods: {
    handleClick(tab, event) {},
    //输入后跳转
    search(){
if(this.input!=""){
 axios.post("http://192.168.1.5:5000/getMusic", {musicname:this.input}).then(msg => {
   this.$router.push({
            path: "a6",
            query: { list: msg.data,message:this.input }
          });
        })
}


    },
    selcetMusicList(e) {
      axios.post("http://192.168.1.5:5000/getlist", {_id: e.target.id}).then(msg => {this.$router.push({
            path: "a3",
            query: { list: msg.data }
          });
        });
    }
  },

  //初始化页面歌单数据
  beforeMount() {
    axios.post("http://192.168.1.5:5000/getMusiclist", {}).then(msg => {
      this.musicList = msg.data;
    });
  }
};
</script>

<style scoped>
.block {
  width: 100%;
}
.block img {
  width: 100%;
}
a {
  text-decoration: none;
  color: black;
}
.ul_img {
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding-top: 1rem;
  border-bottom: 1px solid #dbe0e4;
  padding-bottom: 1rem;
}
.nav_img {
  width: 4rem;
  height: 4.5rem;
  display: block;
}
.lunbo {
  width: 37.25rem;
  height: 9.375rem;
}
.el-tabs__active-bar {
  background-color: #d43b33;
}
.el-tabs__item.is-active {
  color: #d43b33;
}
.el-tabs--top .el-tabs__item.is-top {
  margin-top: 1rem;
  font-size: 20px;
  height: 4rem;
}
.selects {
  width: 100%;
  /* height: 5rem; */
}

.box {
  height: auto;
  position: relative;
  margin-bottom: 4rem;
}
.bottom {
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #3a3a3a;
}
.bottom img {
  width: 3rem;
  height: 3rem;
}
.searchInput {
  width: 28.5rem;
  margin: 1.5rem auto;
  font-size: 14px;
}
.head_icon {
  margin-left: 1rem;
  width: 2rem;
  height: 2.4rem;
  margin-right: 1rem;
  padding-top: 1.5rem;
}
.head_iconfir {
  margin-left: 1rem;
  width: 1.6rem;
  height: 2rem;
  margin-right: 1rem;
  padding-top: 1.9rem;
}
.head {
  background-color: #d43b33;
  display: flex;
}
.headName {
  font-size: 20px;
  border-left: 2px solid red;
  padding-left: 1rem;
}
.dayu {
  font-size: 20px;
}
.music_list {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 3rem;
  justify-content: space-between;
  font-size: 1.1rem;
}
.music_list > li {
  width: 30%;
  height: 30%;
}
.music_list img {
  width: 100%;
  height: 100%;
  display: block;
}
#img_music {
  width: 3.5rem;
  height: 3.5rem;
}
</style>
