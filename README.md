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

```
Basically you can pass a string to `actionSheet`:
```Javascript
Vue.actionSheet.info('test');
Vue.actionSheet.success('success');
Vue.actionSheet.error('error');
```
Or invoke `actionSheet` with an object as its configuration:
```Javascript
Vue.actionSheet.info({
  message: 'test',
  duration: 3000,
  className: 'my-class'
});

```

# API
| Option    | Description                                    | Value                   | Default  |
|-----------|------------------------------------------------|-------------------------|----------|
| message   | content of the actionSheet                           |                         |          |
| duration  | time before the actionSheet vanishes, in millisecond |                         | 3000     |
| className | custom class name of the actionSheet                 |                         |          |
| position  | position of the actionSheet                          |    'top' 'middle'       |          |
| callback  |  callback after actionSheet hide                     |                         |          |


# License
MIT