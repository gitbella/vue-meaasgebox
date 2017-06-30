import Vue from 'vue';
import Toast from "../src/index.js";

(function() {
  Vue.use(Toast);

  let btnInfo = document.getElementById('actionSheet');
  btnInfo.addEventListener('click', () => {
    console.log("click info");
    Vue.actionSheet.show({
    title:'信息还未提交,真的要离开',
    cancelText:'再想想',
    actions:[
    {
      text:'操作1',
      action:function(){
        alert('操作1');
      },
    },
    {
      text:'操作2',
      action:function(){
        alert('操作2');
      }
    }
    ]
    });
  });

})();
