<template>
  <div v-show="shown" class="actionSheet-mask">
    <transition>
      <div v-show="shown && position=='middle'" class="toast" :class="toastClass">
   
        <div class="toast-message " v-html="title"></div>
        <div class="action"  v-for="(item, index) in actions">
          <div class="" @click="handleAction(index)">{{item.text}}</div>
          <!-- <div class="">{{item.action}}</div> -->
        </div>
        <div class="cancel" @click="handleCancel" v-html="cancelText"></div>

      </div>
    </transition>
  </div>
</template>
<style scoped lang="scss">
* {
  box-sizing: border-box;
}
.actionSheet-mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000;
  z-index: 1000;
  opacity:0.7;

}

.toast {
  position: absolute;
  left: 50%;
  bottom: 10px;
  width:95%;
  transform: translate3d(-50%,0, 0);
  border-radius: 4px;
  background: #EFEDED;
  color: #000;
  box-sizing: border-box;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.action div{
  color:#009ae8;
  font-size:18px;
  border-top:1px solid #DDD;
  background-color:#fff;
  padding:17px 0px;
}
.cancel{
  color:#c1abab;
  font-size:16px;
  border-top:1px solid #DDD;
  background-color:#fff;
  padding:17px 0px;
  margin-top: 10px;
}
.toast-top {
  top: 44px;
  left: 50%;
  transform: translate3d(-50%, 20px, 0);
}

.toast-top-enter {
  opacity: 0;
  transform: translate3d(-50%, 0px, 0);
}

.toast-top-enter-active {
  transition: all .5s ;
}

.v-enter {
  opacity: 0;
  transform: translate3d(-50%, 20px, 0);
}

.v-enter-active {
  transition: all .3s ;
}

.v-leave {
  opacity: 1;
}

.v-leave-active {
  transition: all .3s ;
  opacity: 0;
}

.toast-message {
  background-color:#fff;
  font-size: 14px;
  text-align: middle;
  color:#9B9B9B;
  padding:7px 0px 
}
.toast-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid;
  vertical-align: middle;
}

</style>
<script>
export default {

  data() {
      return {
        shown: false,
        title:'描述说明',
        cancelText:'取消',
      // actions:Array,

        // handleCancel:null,
      }
    },
    methods:{

      handleCancel:function(){
       this.shown = false;      
        },
      handleAction:function(index){
        var action=this.actions[index].action;
        action();
        this.shown=false;

      }
    },
    props: {
  
    },

};
</script>
