<template>
 <transition name="fade">
  <div v-show="shown" class="messagebox-mask" @click="closeOnClickModal">
  <transition >
      <div v-show="shown" class="toast" :class="messageClass" >
       <div class="title " v-show="showTitle" v-html="title"></div>
       <div class="delete" v-show="showDelete" @click="handleClose"></div>
      <div class="message" v-html="message">
      </div>   
       <div class="btn-group" v-show="showCancelButton || showConfirmButton">
         <div class="cancel col-5"  v-show="showCancelButton" @click="handleCancel">{{cancelButtonText}}</div>
         <div class="sure col-5"   v-show="showConfirmButton" @click="handleConfirm" >{{confirmButtonText}}</div>
      </div> 
      </div>
      </transition>
  </div>
  </transition>
</template>
<style scoped lang="scss">
.messagebox-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:rgba(0,0,0,0.7);
  z-index: 1000;
}

.toast {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 80%;
  border-radius: 6px;
  background: #fff;
  box-sizing: border-box;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color:#757575;
  font-size: 18px;
  box-shadow: 0 0 15px rgb(0,0,0); 
}

.delete {display:inline-block; width:12px; height:2px; background:#BDBDBD; font-size:0; line-height:0;vertical-align:middle;-webkit-transform: rotate(45deg);position:absolute;right:22px;top:22px}
.delete:after { content:'.'; display:block; width:12px; height:2px; background:#BDBDBD;-webkit-transform: rotate(-90deg);}
.col-5{
  display:inline-block;
  width:50%;
}
.title{
   margin:16px;
   color:#757575;

}
.message{
margin:14px 0px 20px;

}
.sure{
  color:#009ae8;
   padding:17px 0px;
  // border-top:1px solid #eee;
  // padding:17px 0px;
}
.cancel{
 border-right:1px solid #eee;
  padding:17px 0px;
}
.btn-group{
   border-top:1px solid #eee;
 
}
.v-enter{
     opacity: 0;
     transform: translate3d(-50%, -40%, 0);
}
.v-enter-active{
     transition: all .3s ;
}

.v-leave-to{
    opacity: 0;
     transform: translate3d(-50%, -50%, 0);
}
.v-leave{
   transform: translate3d(-50%, -40%, 0);
}
.v-leave-active{   
     transition: all .3s ;
}




.fade-enter{
    background-color:rgba(0,0,0,0) ;
}
.fade-enter-active{
     transition: all .3s ;
}

.fade-leave-to{
    background-color:rgba(0,0,0,0) ;
}
.fade-leave{
    background-color:rgba(0,0,0,.7) ;
}
.fade-leave-active{   
     transition: all .3s ;
}

</style>
<script>
export default {

  data() {
      return {
        shown: false,
        showTitle:true,
        confirmButtonText:'确认',
        cancelButtonText:'取消',
        showDelete:false,
        showCancelButton:false,
        showConfirmButton:false,
        btnOk:null,
        btnCancel:null,

      }
    },
     methods: {  
      hide:function(){
         this.shown=false;
       },
        show:function(){
         this.shown=true;
      },
      closeOnClickModal: function(e) {

        var target=e.target.className;
         if(target=='messagebox-mask'){
          this.shown=false;
         }

      },
        handleCancel: function (event) { 
          console.log('confirmEvent');
          if(this.btnCancel){
              this.hide();
            this.btnOk();
          }else{
            this.shown=false;
          }
        },
         handleConfirm: function (event) { 
          console.log('confirmEvent');
          if(this.btnOk){
            this.hide();
            this.btnOk();
          }else{
            this.shown=false;
          }
        },
        handleClose:function(){
           this.shown=false;
        }  

      },
    props: {
  
    },

    computed: {
    
    }

};
</script>
