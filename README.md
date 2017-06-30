# Overview
vue-actionSheet is a mobile actionSheet plugin for vue.js.

# Installation
First, install `mz-vue-actionSheet` from npm or bower:
```bash
$ npm install mz-vue-actionSheet
$ bower install mz-vue-actionSheet
```

# Usage
```Javascript
// before start
import Vue from 'vue';
import actionSheet from 'mz-vue-actionSheet';
Vue.use(actionSheet);

```Javascript
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

```

# API
| Option      | Description                                    | Value                   | Default  |
|-----------  |------------------------------------------------|-------------------------|----------|
| title       | 标题                                            |                         |          |
| cancelText  | 取消按钮的文字                                    |  “取消”                  |           |
| actions     | 操作数组,对象{text:'',actionLfunction(){}}         |      必须传                   |          |


# License
MIT