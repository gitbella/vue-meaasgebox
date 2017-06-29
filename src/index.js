'use strict';

import actionSheetComponent from './actionSheet.vue';

const plugin = {
  install(Vue) {
    const actionSheetConstructor = Vue.extend(actionSheetComponent);
    let actionSheetArr = [];

    let getInstance = () => {
      if (actionSheetArr.length) {
        let instance = actionSheetArr[0];
        actionSheetArr.splice(0, 1);
        return instance;
      }
      return new actionSheetConstructor({
        el: document.createElement('div')
      });
    };

    let addInstance = instance => {
      if (instance) {
        actionSheetArr.push(instance);
      }
    }

    let removeDom = el => {
      if (el.parentNode) {
        el.parentNode.removeChild(el);
      }
    }

    actionSheetConstructor.prototype.hide = function(callback) {
      this.shown = false;
      removeDom(this.$el)
        // this.$el.addEventListener('transitionend', removeDom);
      this.closed = true;
      addInstance(this);
      callback && callback();



    }

    let setOptions = (options) => {
      if (typeof options === 'string') {
        options = {
          message: options
        }
      }
      return options || {};
    }

    const show = (options) => {
      options = setOptions(options);
      options = Object.assign({ type: 'info' }, options);

      let instance = getInstance();
      instance.shown = true;
      instance.title = options.title || '标题';
      instance.cancelText = options.cancelText||'取消';
      instance.actions= options.actions ||null;
      instance.position = options.position || 'middle';


      document.body.appendChild(instance.$el);

  

      return instance;
    }

    const actionSheet = {
      show: show,
    };

    Vue.actionSheet = Vue.prototype.$actionSheet = actionSheet;


  }
}
export default plugin;
