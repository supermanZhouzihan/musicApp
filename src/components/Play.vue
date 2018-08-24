<template>
    <div class="box">
        <div class="head">
            <img src="../../static/a2g.png" alt="" class="img_derect">
            <div>
                <h2>{{music.musicname}}</h2>
                <div>{{music.singer}}</div>
            </div>
            <img src="../../static/aau.png" alt="" class="img_share">
        </div>
        <audio :src="`${this.ip}${this.music.url}`" :autoplay="`${this.isplay}`" @ended="audioEnd()"  @timeupdate="update()" ></audio>
        <div class="meddle">
            <img :src="`${this.ip}${this.music.musicbgimg}`"  class="play_img" alt="">
            <img src="../../static/ae0.png" alt="" class="play_tips">
            <img src="../../static/ace.png" alt="" class="play_circle">
            <div class="icon_search">
                <img src="../../static/ada.png" alt="" class="img_shar1">
                <img src="../../static/ad3.png" alt="" class="img_shar1">
                <img src="../../static/acj.png" alt="" class="img_shar1">
                <img src="../../static/ade.png" alt="" class="img_shar1">
            </div>
        </div>
        <div class="block">
                   <span class="time_start">{{currentTime}}</span><div class="app"><el-slider @change="change" v-model="value1" ></el-slider></div><span class="time_over">{{music.playTime}}</span>
        </div>
        <div class="bottom">
            <img src="../../static/adv.png" alt="">
            <!-- //上一首 -->
            <img src="../../static/ac6.png" @click="pre" alt="">
            <!-- //暂停、播放 -->
            <img :src="playicon"  @click="play"  alt="">
            <!-- //下一首 -->
            <img src="../../static/abz.png" @click="next" alt="">
            <img src="../../static/adz.png" alt="">
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      value1: 0,
      music: this.$route.query.music,
      ip: "http://192.168.1.5:5000",
      playicon: "http://192.168.1.5:5000/userupload/ac1.png",
      isplay: true,
      currentTime: "00:00",
      musicList: [],
      num:0
    };
  },
  
  methods: {
    change(index){
    var audio = document.querySelector("audio");
    audio.currentTime=parseInt(index / 100 * audio.duration);
    },
   update(){
    let img=document.querySelector(`.play_img`);
    var audio = document.querySelector("audio");
    this.value1=audio.currentTime/audio.duration*100;
    this.num++;
    // console.log(this.num);
   img.style.translate=`origin(center)`
    img.style.transform=`rotate(${this.num}deg)`
    var other = audio.currentTime % 3600;
    var minute = Math.floor(other / 60);
    var second = (other % 60).toFixed(0);
    if (minute.length == 1) {
      minute = "0" + minute;
    } else {
      minute = minute;
    }
    if (second.length == 1) {
      second = "0" + second;
    } else {
      second = second;
    }
    this.currentTime = "0" + minute + ":" + second;
    },
    play() {
      if (this.playicon == "http://192.168.1.5:5000/userupload/ac1.png") {
        this.playicon = "http://192.168.1.5:5000/userupload/a6k.png";
        var audio = document.querySelector("audio");
        audio.pause();
        this.isplay = false;
      } else {
        this.playicon = "http://192.168.1.5:5000/userupload/ac1.png";
        var audio = document.querySelector("audio");
        audio.play();
        this.isplay = true;
      }
    },
    pre() {
      this.playicon = "http://192.168.1.5:5000/userupload/ac1.png"
      axios.post("http://192.168.1.5:5000/getMusic", {}).then(msg => {
        for (let i = 0; i < msg.data.length; i++) {
          if (msg.data[i]._id == this.music._id) {
            if (i == 0) {
              this.music = msg.data[msg.data.length - 1];
            } else {
              this.music = msg.data[i - 1];
            }
            return;
          }
        }
      });
    },
    next() {
      this.playicon = "http://192.168.1.5:5000/userupload/ac1.png"
      axios.post("http://192.168.1.5:5000/getMusic", {}).then(msg => {
        for (let i = 0; i < msg.data.length; i++) {
          if (msg.data[i]._id == this.music._id) {
            if (i < msg.data.length - 1) {
              this.music = msg.data[i + 1];
            } else {
              this.music = msg.data[0];
            }
            return;
          }
        }
      });
    },
     audioEnd() {
    axios.post("http://192.168.1.5:5000/getMusic", {}).then(msg => {
      for (let i = 0; i < msg.data.length; i++) {
        if (msg.data[i]._id == this.music._id) {
          if (i < msg.data.length - 1) {
            this.music = msg.data[i + 1];
          } else {
            this.music = msg.data[0];
          }
          return;
        }
      }
    });
  }
  },
  beforeMount() {
    axios.post("http://192.168.1.5:5000/getMusiclist", {}).then(msg => {
      let img=document.querySelector(`.play_img`)
      // console.log(img)
      this.musicList = msg.data;
    });
  },
  mounted() {
  }
};
</script>

<style>
.img_shar1 {
  width: 4rem;
  height: 4rem;
}
.box {
  text-align: center;
  background-color: #3a3a3a;
  height: 100%;
}
.head {
  padding-top: 2rem;
  background-color: #3a3a3a;
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
  border-bottom: 1px solid gray;
}
.img_derect {
  transform: rotate(180deg);
  width: 1.5rem;
  height: 1.5rem;
}
.img_share {
  width: 2rem;
  height: 2rem;
}
.play_tips {
  transform: rotate(180deg);
  position: absolute;
  left: 52%;
  z-index: 2;
}
.play_circle {
  width: 70%;
  position: relative;
  left: 1rem;
  padding-top: 5rem;
}
.app {
  width: 100%;
}
.meddle {
  width: 100%;
  background-color: #3a3a3a;
}
.icon_search {
  display: flex;
  justify-content: space-around;
  width: 70%;
  margin: 0 auto;
}
.block {
  clear: both;
  background-color: #3a3a3a;
  width: 100%;
  height: 4rem;
  position: absolute;
  border-bottom: 15%;
}
.time_start {
  position: absolute;
  left: 13%;
  bottom: 30%;
}
.time_over {
  position: absolute;
  right: 6%;
  bottom: 30%;
}
.el-slider__runway {
  width: 50%;
  position: absolute;
  left: 30%;
  display: block;
  bottom: 20%;
}
.bottom {
  display: flex;
  justify-content: space-around;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #3a3a3a;
  padding-bottom: 1.1rem;
  clear: both;
  z-index: 399;
}
.bottom > img {
  width: 3rem;
  height: 3rem;
}
.play_img {
  position: absolute;
  padding-top: 7.8rem;
  width: 47%;
  left: 30%;
  transform-origin: 50% 71%;
  /* box-sizing: content-box; */
}
</style>


