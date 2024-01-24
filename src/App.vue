<template>
  <h1>一、模板语法</h1>
  <p class='p'>{{ msg }}</p> <!--模板语法，标签中的msg显示了return中的内容-->
  <p>{{ number +1 }}</p> <!--可以被求值的JavaScript代码也是可以放的，建议在JavaScript中直接返回-->
  <p>{{ ok ? "“ok”的值为真" : "“ok”的值为假" }}</p> <!--JavaScript表达式也可以，建议在JavaScript中直接返回-->
  <p>{{ message.split('').reverse().join('') }}</p> <!--也可以是复杂的表达式，建议在JavaScript中直接返回-->
  <p>{{ rawHtml }}</p> <!--v-pre指令，跳过这个元素和它的子元素的编译过程，直接显示-->
  <p v-html="rawHtml"></p> <!--v-html指令，内容按HTML格式输出-->
  <h1>二、属性绑定</h1>
  <p>下面是动态绑定的例子，这个`div`组件展示了如何进行元素的属性绑定，具体查看源代码</p>
  <div v-bind:id="appID" v-bind:class="dynamicClass">AppID</div> <!--绑定属性用“v-bind:”-->
  <lay-button type="normal" :disabled="isbuttondisabled">Button</lay-button><!--布尔值Attribute-->
  <div v-bind="objectOfAttrs">div</div>
</template>

<script>
import { ref } from 'vue';
export default {
  data() {
    return {
      msg: 'Hello, Vue!',
      number: 10,
      ok: true,
      message: '大家好啊',
      rawHtml: '<span style="color:red">这里会显示红色</span>',
      dynamicClass: 'active',
      isbuttondisabled: false,
      objectOfAttrs: {
        id: 'appclass',
	class: 'adiv'
      }
    }
  }
}
</script>

<style>
.active{
  color:blue;
  font-size:20px;
  background-color:yellow;
  width:100px;
  height:70px;
  border:1px solid #F0F8FF;
  margin:10px;
  padding:10px;
  display:inline-block;
  text-align:center;
  line-height:45px;
  border-radius:10px;
  box-shadow: 0 0 10px #888;
  cursor:pointer;
  user-select:none;
  position:relative;
  top:0;
  left:0;
  transition:all 0.5s ease;
}

.adiv{
  font-size:22px;
  color:green;

}

</style>
