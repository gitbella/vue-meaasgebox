'use strict';

import messageboxComponent from './messagebox.vue';

const plugin = {
  install(Vue) {
    const messageboxConstructor = Vue.extend(messageboxComponent);

    let instance = null;

    let getInstance = () => {
      if (instance) {
        return instance;
      }
      return new messageboxConstructor({
        el: document.createElement('div')
      });
    };
    let setOptions = (options) => {
      if (typeof options === 'string') {
        options = {
          message: options
        }
      }
      return options || {};
    }

    const show = (options) => {
      instance = getInstance();
      instance.message = options.message || '';
      instance.title = options.title || '';
      instance.type = options.type || 'alert';
      instance.showTitle=options.showTitle||true;
      instance.btnOk=options.btnOk;
      instance.btnCancel=options.btnCancel;

      switch (instance.type) {
        case 'alert':
          instance.showCancelButton=false;
          instance.showConfirmButton=true;
          break;
        case 'confirm':
          instance.showCancelButton=true;
          instance.showConfirmButton=true;
          break;
        default:
      };
      instance.shown = true;
      document.body.appendChild(instance.$el);
      return instance;
    }

    const alert = function(options) {
      options = setOptions(options);
      options = Object.assign({ type: 'alert' }, options);
      return show(options);
    }

    const confirm = function(options) {
      options = setOptions(options);
      options = Object.assign({ type: 'confirm' }, options);
      return show(options);
    }

    const Messagebox = {
      alert: alert,
      confirm: confirm,
    };

    Vue.messagebox = Vue.prototype.$messagebox = Messagebox;


  }
}
export default plugin;
