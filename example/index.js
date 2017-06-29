import Vue from 'vue';
import  Toast from "../src/index.js";
Vue.use(Toast);


let buttonAlert = document.getElementById('buttonAlert');
buttonAlert.addEventListener('click', () => {
 Vue.messagebox.alert({
  title:'温馨提示',
  message:'hello',
 });
});


let buttonConfirm = document.getElementById('buttonConfirm');
buttonConfirm.addEventListener('click', () => {
 Vue.messagebox.confirm({
  title:'温馨提示',
  showTitle:false,
  message:'hello</br>换行',
  btnOk:function(){
    alert('it is my btnOk');
  },

 });
  });