<template>
    <div class="box">
        <div class="head">
            <span>＜</span>
            <span>手机号登录</span>
        </div>
        <div>
            <el-input placeholder="手机号" prefix-icon="el-icon-mobile-phone" v-model="uname" size="medium" class="psw_input">
            </el-input>
            <el-input placeholder="密码" size="medium" prefix-icon="el-icon-view" class="psw_input" v-model="upsw">
            </el-input>
        </div>
         <button class="btn_login" @click="goLogin">登录</button>
          <div class="medium">
            <img src="../../static/a7s.9.png" alt="" class="img_cion">
           <div class="href_repsw"><a href="">重设密码</a></div> 
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      uname: "",
      upsw: ""
    };
  },
  methods: {
    goLogin() {
      let param = {
        acc: this.uname,
        psw: this.upsw
        // imageUrl: this.imageUrl
      };
      axios.post("http://127.0.0.1:5000/log", param).then(data => {
        if (data.data == "OK") {
          this.$router.push({
            path:"/index/a1"
          })
        }
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
.btn_login {
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
</style>

