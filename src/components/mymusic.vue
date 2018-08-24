<template>
    <div class="box">
        <div class="head">
            <span>更多</span>
            <span>我的音乐</span>
            <img src="../../static/oh.png" class="img_mymusci" alt="">
        </div>
        <div>
            <ul class="ulList">
                <li><div class="item_before"><img src="../../static/a0n.png" alt=""><div>本地音乐</div></div><div class="item_after"><div>123</div><div>></div></div></li>
                <li @click="myplay"><div class="item_before"><img src="../../static/a0s.png" alt=""><div>最近播放</div></div><div class="item_after"><div>123</div><div>></div></div></li>
                <li><div class="item_before"><img src="../../static/a0q.png" alt=""><div>我的电台</div></div><div class="item_after"><div>123</div><div>></div></div></li>
                <li><div class="item_before"><img src="../../static/a0_.png" alt=""><div>我的收藏</div></div><div class="item_after"><div>123</div><div>></div></div></li>
            </ul>
        </div>
    </div>
</template>


<script>
import axios from "axios";
export default {

    data(){
        return{

        }
    },
    methods:{
        myplay(){
             axios.post("http://192.168.1.5:5000/getMusic", {musicname:this.input}).then(msg => {
                this.$router.push({
            path: "a7",
            query: { list: msg.data,message:this.input }
          });
  
        })
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
.ulList li{
    display: flex;
    justify-content: space-between;
    height: 4rem;
    line-height: 4rem;
    border-bottom: 1px solid lightgray;
}
.ulList li img{
    width: 2rem;
    height: 2rem;
    padding-top: 1rem;
    padding-right: 2rem;
}
.item_before{
    display: flex;
    padding-left: 2rem;
    font-size: 1.2rem;
}

.item_after{
    display: flex;
    padding-right: 2rem;
    color: lightgray;
    font-size: 1rem;
}
.item_after>div:first-child{
    padding-right: 1rem;
}
</style>
