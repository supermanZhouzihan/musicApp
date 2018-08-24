<template>
    <div class="box">
        <div class="head">
            <span>＜</span>
            <span>歌单</span>
            <div class="headimg">
                <img src="../../static/ade.png" class="head_iconf" alt="">
                <img src="../../static/oi.png" class="head_icon" alt="">
            </div>
        </div>
        <div>
            <div class="musicListintro">
                <img :src="`${this.ip}${this.$route.query.list.listuserimg}`" alt="">
                <div class="peopleintro">
                    <div>{{this.$route.query.list.listauthor}}</div>
                    <div><img :src="`${this.ip}${this.$route.query.list.listuserimg}`" class="head_icon" alt=""><span>{{this.$route.query.list.listname}}</span></div>
                </div>
            </div>
        </div>
        <div>
            <ul class="href_icon">
                <li><a href=""><img src="../../static/a2j.png" class="head_icon" alt=""><p>123</p></a></li>
                <li><a href=""><img src="../../static/a2h.png" class="head_icon" alt=""><p>123</p></a></li>
                <li><a href=""><img src="../../static/a2m.png" class="head_icon" alt=""><p>123</p></a></li>
                <li><a href=""><img src="../../static/a2i.png" class="head_icon" alt=""><p>123</p></a></li>
            </ul>
        </div>
        <div class="nav_play">
          
            <img src="../../static/note_btn_play_white.png"  class="icon_play" :id="`${(this.list)[0]._id}`" @click="play" alt=""> <span>播放全部（共54首)</span> <span class="pic"><img src="../../static/a3b.png" class="img_transfom" alt=""> 多选</span>
        </div>
        <div class="play_item" v-for="(item,index) in list" :key="index" @click="playone"  :id="item._id">
          <div class="items" :id="item._id">
            <div class="sortm" :id="item._id">
                {{index+1}}
            </div>
            <div class="music_intro" :id="item._id">
               <div :id="item._id">{{item.musicname}}</div>
               <div :id="item._id">{{item.singer}}</div>
            </div>
            <!-- <img src="" alt=""> -->
          </div>
            <div class="sort">
                <el-col :span="12">
                    <el-dropdown trigger="click">
                        <span class="el-dropdown-link">
                         ···<i class=""></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>更多</el-dropdown-item>
                            <el-dropdown-item>收藏</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
            </div>
        </div>
    </div>
</template>



<script>
import axios from "axios";
export default {
  data() {
  
    return {
      list: this.$route.query.list.Music,
      ip: "http://192.168.1.5:5000"
    };
  },
  methods: {
    //播放所有
    play(e) {
      axios.post("http://192.168.1.5:5000/getMusic", {_id: e.target.id}).then(msg => {
        console.log(msg);
        this.$router.push({
          path: "/a5",
          query: { music: msg.data }
        });
      });
    },
    playone(e) {
      axios
        .post("http://192.168.1.5:5000/getMusic", { _id: e.target.id })
        .then(msg => {
          this.$router.push({
            path: "/a5",
            query: { music: msg.data }
          });
        });
    }
  }
};
</script>

<style scoped>
.head {
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  padding-top: 1rem;
  background-color: #1f1f1f;
  color: #ffffff;
}
.head span {
  display: block;
  line-height: 64px;
}
.head span:first-child {
  font-size: 34px;
}
.img_transfom {
  transform: rotate(90deg);
  width: 2rem;
  height: 2rem;
}
.bottom {
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #3a3a3a;
}
.bottom > img {
  width: 3rem;
  height: 3rem;
}
.head_icon {
  width: 2.5rem;
  height: 2.5rem;
}
.headimg {
  padding-right: 1rem;
}
.head_iconf {
  width: 4rem;
  height: 4rem;
  padding-top: 0.5rem;
}
.musicListintro {
  display: flex;
  padding-top: 2rem;
  font-size: 22px;
  padding-bottom: 2rem;
  background-color: #1f1f1f;
}
.musicListintro > img {
  padding-left: 1rem;
  width: 8rem;
  height: 8rem;
}
.pic {
  padding-right: 1rem;
}
.peopleintro {
  padding-top: 1rem;
  padding-left: 1rem;
}
.href_icon {
  display: flex;
  justify-content: space-around;
  background-color: #1f1f1f;
  color: gray;
}
a {
  text-decoration: none;
  color: wheat;
}
.icon_play {
  padding: 1rem;
  width: 2.5rem;
  height: 2.5rem;
}
.play_item {
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  border-top: 1px solid #e0e1e3;
  border-bottom: 1px solid #e0e1e3;
  padding: 0 1rem;
}
.el-dropdown {
  font-size: 30px;
}
.sortm {
  line-height: 5rem;
  padding-right: 5rem;
}
.music_intro {
  padding-top: 1rem;
}
.nav_play {
  display: flex;
  line-height: 72px;
  justify-content: space-between;
}
.items {
  display: flex;
  justify-content: space-between;
}
.box{
  margin-bottom: 4rem;
}
</style>
