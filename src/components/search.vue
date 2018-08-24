<template>
    <div class="box">
        <div class="head">
            <img src="../../static/ag2.png" class="head_iconfir"  alt="">
            <el-input v-model="input" placeholder="搜索音乐、视频、歌词、电台" @input="search" prefix-icon="el-icon-search" class="searchInput"></el-input>
            <img src="../../static/oi.png" class="head_icon" alt="">
        </div>
        <div>
          <ul v-for="(item,index) in list" :key="index">
              <li class="item" @click="gosearch" :id="item._id"><div class="musicnm" :id="item._id">{{item.musicname}}</div><div :id="item._id" class="musicsinger">{{item.singer}}</div></li>
          </ul>
        </div>
    </div>
</template>





<script>
import axios from "axios";

export default {
  data() {
    return {
      input: this.$route.query.message,
      list: []
    };
  },
  methods: {
    search() {
      if (this.input != "") {
        axios
          .post("http://192.168.1.5:5000/getMusic", { musicname: this.input })
          .then(msg => {
           this.list= msg.data
          });
      }
      else{
        this.list=[]
      }
    },
    gosearch(e){
       axios.post("http://192.168.1.5:5000/getMusic", { _id: e.target.id }).then(msg => {
          this.$router.push({
            path: "/a5",
            query: { music: msg.data }
          });
        });

    }
  },
  mounted(){
     if (this.input != "") {
        axios
          .post("http://192.168.1.5:5000/getMusic", { musicname: this.input })
          .then(msg => {
           this.list= msg.data
          });
      }
      else{
        this.list=[]
      }
  }

};
</script>


<style>

.head {
  background-color: #d43b33;
  display: flex;
}
.head_iconfir {
  margin-left: 1rem;
  width: 1.6rem;
  height: 2rem;
  margin-right: 1rem;
  padding-top: 1.9rem;
}
.head_icon {
  margin-left: 1rem;
  width: 2rem;
  height: 2.4rem;
  margin-right: 1rem;
  padding-top: 1.5rem;
}
.box {
  height: 39.5rem;
  position: relative;
}
.searchInput {
  width: 28.5rem;
  margin: 1.5rem auto;
  font-size: 14px;
}
.item{
  width: 100%;
  display: flex;
  padding: 1rem 0;
  border-bottom: 0.5px solid skyblue;
  font-size: 14px;
  color: gray;
}
.musicnm{
  padding: 0 1rem;
}
</style>
