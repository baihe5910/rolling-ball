import {
  defineComponent,
  h,
  toRefs,
  onMounted,
  onUnmounted,
} from "@vue/runtime-core";


export default defineComponent({
  props: ["x", "y", "r", "color"],

  setup(props, ctx) {
    console.log("----props-------");
    console.log(props);


    
    // 响应式丢失问题
    // toRefs
    const { x, y, r, color } = toRefs(props);
    
    return {
      x,
      y,
      r,
      color
    };
  },
  render(ctx) {
    // return h("Circle", {x:ctx.x, y: ctx.y, r: ctx.r, color: ctx.color });
    return h("Container",[
         h("Circle", {x:ctx.x, y:ctx.y, r: ctx.r, color: ctx.color }),
      ]);
  },
});
