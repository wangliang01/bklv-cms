// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import router from './router';

import { Button, Menu, MenuItem, Submenu, MenuItemGroup, DatePicker,
  Switch, Select, Checkbox, CheckboxGroup, Option, Input, Form, FormItem,
  Row, Col, Icon, Popover, Message, MessageBox, Table, TableColumn,Breadcrumb,
  BreadcrumbItem,
  Upload, Radio, RadioGroup, Loading, Dialog, Badge, Pagination, Collapse, CollapseItem} from 'element-ui'

import './common/stylus.styl';
import './assets/css/reset.css'
import './assets/css/icon.css';

Vue.use(Row);
Vue.use(Col);
Vue.use(Icon);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(MenuItemGroup);
Vue.use(DatePicker);
Vue.use(Switch);
Vue.use(Select);
Vue.use(Option);
Vue.use(Input);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Button);
Vue.use(Popover);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Upload);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Loading);
Vue.use(Dialog);
Vue.use(Badge);
Vue.use(Pagination);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)

Vue.component(MessageBox.name, MessageBox);
Vue.component(Message.name, Message);
Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
