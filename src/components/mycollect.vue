<template>
    <div class="box">
        <div class="head">
            <span>更多</span>
            <span>最近播放的歌曲</span>
            <img src="../../static/oh.png" class="img_mymusci" alt="">
        </div>
        <div>
          <ul v-for="(item,index) in list" :key="index">
              <li class="item"  :id="item._id"><div class="musicnm" :id="item._id">{{item.musicname}}</div><div :id="item._id" class="musicsinger">{{item.singer}}</div></li>
          </ul>
        </div>
    </div>
</template>



<script>
export default {
    data(){
        return{
            list:[1]
        }
    }
}
</script>

<style>
.box{
    text-align: center
}
.head {
  padding-top: 2rem;
  background-color: #d43b33;
  height: 3rem;
  line-height: 3rem;
  font-size: 18px;
  display:  flex;
  justify-content: space-between;
}
.head > span:nth-child(2) {
  color: #edfbfc;
}
.head > span:nth-child(1){
  padding-left: 1rem;
  color: #edfbfc;
}
.img_mymusci{
    width: 2rem;
    height: 2rem;
    padding-top: 0.5rem;
    padding-right: 1rem;
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
