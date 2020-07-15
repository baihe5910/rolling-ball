import {
    defineComponent,
    h,
    reactive,
  } from "@vue/runtime-core";
  
import Ball from '../component/ball'
import {getGame} from '../Game';

export default defineComponent({
    setup(props,ctx) {
        const ballInfo = reactive({
            x: 0,
            y: 100,
            r: 100,
            color: 0xff0000,
          });
          const speed = 1;
          let direct = 1;
            getGame().ticker.add(() => {
                console.log(ballInfo.x);
                
                if(ballInfo.x + ballInfo.r  >= 750) {
                    direct = -1;
                }
                if(ballInfo.x <= ballInfo.r) {
                    direct = 1;
                }
            
                ballInfo.x += direct * speed;
               
            });
     
      return {
        ballInfo
      };
    },
  
    render(ctx) {
      
      return h("Container", [
        h(Ball, {
            x: ctx.ballInfo.x,
            y: ctx.ballInfo.y,
            r: ctx.ballInfo.r,
            color: ctx.ballInfo.color,
          })
      ]);
    },
  });
  
  