<template>
  <div v-show="shown" class="messagebox-mask">
    <transition name="toast">
      <div v-show="shown" class="toast" :class="messageClass">
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
  border-radius: 4px;
  background: #fff;
  box-sizing: border-box;
  text-align: center;
  transition: opacity .3s;
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
   color:#616161;
}
.message{
margin:44px 0px 39px;

}
.sure{
  color:#4990E2;
  // border-top:1px solid #eee;
  // padding:17px 0px;
}
.cancel{
 
}
.btn-group{
   border-top:1px solid #eee;
  padding:17px 0px;
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
      title:String,
      type:{
        default:"温馨提示",
        type:String},
      message:String,
      type:{
        default:"温馨提示内容",
        type:String
      },
      showTitle:Boolean,
      type:{
        default:true,
        type:Boolean
      },
       showConfirmButton:Boolean,
      type:{
        default:true,
        type:Boolean
      },
      showCancelButton:Boolean,
      type:{
        default:false,
        type:Boolean
      },
      confirmButtonText:String,
     type: {
        default:"确认",
        type:String
      },      
      cancelButtonText:String,
     type: {
        default:"取消",
        type:String
      },
      confirmEvent:Function,
      type:{
        type: Function,
        default: function () {
         alert('hi');
        }
      },
       
      className: [String, Array],
    },

    computed: {
    
    }

};
</script>
