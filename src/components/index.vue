
<template>
    <div class="box">
        <router-view />
        <div class="bottom">
          <router-link to="/index/a1"><img src="../../static/findMusic.png" id="img_music" alt=""></router-link>
          <router-link to="/index/a2"><img src="../../static/music.jpg" alt=""></router-link>
          <router-link to="/index/a3"><img src="../../static/friends.jpg" alt=""></router-link>
          <router-link to="/index/a4"><img src="../../static/users.jpg" alt=""></router-link>
        </div>
    </div>
</template>

<script>
export default {

};
</script>

<style scoped>

.box {
  /* height: 39.5rem; */
  position: relative;
}
.bottom {
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #3a3a3a;
}
.bottom  img {
  width: 3rem;
  height: 3rem;
  padding-top: 0.4rem;

}
#img_music{
  width: 4rem;
  height:3.7rem;
  padding-top:0
}
</style>
