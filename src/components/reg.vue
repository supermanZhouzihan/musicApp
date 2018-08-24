<template>
 <div class="box">
        <div class="head">
            <span>＜</span>
            <span>手机号注册</span>
        </div>
        <div>
            <el-input placeholder="+86 输入手机号" prefix-icon="el-icon-mobile-phone" v-model="uname" size="medium" class="psw_input">
            </el-input>
            <el-input placeholder="设置登录密码，不少于6位" size="medium" prefix-icon="el-icon-view" class="psw_input" v-model="upsw">
            </el-input>
        </div>
          <button class="btn_reg" @click="goRegin" >下一步</button>
          <div class="medium">
            <img src="../../static/a7s.9.png" alt="" class="img_cion">
           <div class="href_repsw"><a href="">其他方式注册</a></div> 
        </div>
        <div class="bottom">
          <div><img src="../../static/a88.png" alt=""><div>微信</div></div>
          <div><img src="../../static/a84.png" alt=""><div>QQ</div></div> 
          <div><img src="../../static/a86.png" alt=""><div>微博</div></div> 
          <div><img src="../../static/a82.png" alt=""><div>网易邮箱</div></div>  
        </div>
    </div>

</template>

<script>
import axios from "axios";
// var a = "http://127.0.0.1:5000/./";

export default {
  data() {
    return {
      uname: "",
      upsw: ""
    };
  },
  methods: {
    goRegin() {
      console.log(this);
      let param = {
        acc: this.uname,
        psw: this.upsw
        // imageUrl: this.imageUrl
      };
      axios.post("http://127.0.0.1:5000/regvue", param).then(function(data) {
        console.log(data);
      });
    }
  }
};
</script>

<style scoped>

.box{
  text-align: center;
}
.head {
  background-color: #d43b33;
  height: 3rem;
  line-height: 3rem;
  font-size: 18px;
}
.head > span:nth-child(2) {
  color: #edfbfc;
  /* padding-right: 1rem; */
}
.head > span:nth-child(1){
  float: left;
  color: #edfbfc;
  /* padding-left: 1rem; */
}
.el-input {
  width: 90%;
  margin: 1rem 0 auto;
  font-size: 16px;
}
.psw_input {
  width: 90%;
}
.el-input--medium .el-input__inner {
  height: 3rem;
}
.btn_reg {
  background-color: #d33a32;
  width: 80%;
  height: 3rem;
  text-align: center;
  margin-top: 2rem;
  border-radius: 2rem;
  color: blanchedalmond;
  outline: none;
  font-size:1rem;
  border: none;
}
.img_cion {
  width: 60%;
}
a {
  text-decoration: none;
  color: gray;
}
.bottom{
  padding-top: 1rem;
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: space-between;
}
.bottom>div{
  width: 6rem;
}
.medium{
  padding-top: 10rem;
}
</style>