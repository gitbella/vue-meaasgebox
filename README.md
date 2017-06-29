# Overview
vue-messagebox is a mobile messagebox plugin for vue.js.

# Installation
First, install `mz-vue-messagebox` from npm:
```bash
$ npm install mz-vue-messagebox
```

# Usage
```Javascript
// before start
import Vue from 'vue';
import messagebox from 'mz-vue-messagebox';
Vue.use(messagebox);

```
Basically you can pass a string to `messagebox`:
```Javascript
 Vue.messagebox.alert({
  title:'温馨提示',
  message:'hello',
 });
 Vue.messagebox.confirm({
  title:'温馨提示',
  showTitle:false,
  message:'hello</br>换行',
  btnOk:function(){
    alert('it is my btnOk');
  },

 });
```


# API
| Option    | Description                                         | Value                   | Default  |
|-----------|-----------------------------------------------------|-------------------------|----------|
| title     | title of the messagebox                             |                         |          |
| message   | content of the messagebox                           |html or string
|           | time before the messagebox vanishes, in millisecond |                         | 3000     |
| className | custom class name of the messagebox                 |                         |          |

# License
MIT