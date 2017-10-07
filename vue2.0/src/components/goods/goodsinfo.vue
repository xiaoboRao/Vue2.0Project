<template>
<div id="templ">
   <slider :img="img"></slider>
    <div class="buy">
        <h3>华为荣耀6Plus   4G*64G   4G手机</h3>
        <p class="line"></p>
        <ul>
            <li>市场价:<s>2199</s>销售价:<span>￥2099</span></li>
            <li>购买数量:<inputnumber v-on:message="getcount"></inputnumber>
                <transition name="show" @before-enter="beforeenter"
                            @enter="entered" @after-enter="afterenter">
                <div class="ball" v-show="isshow"></div>
                </transition>
            </li>
            <li>
                <mt-button type="primary" size="small">立即购买</mt-button>

                    <mt-button type="danger" size="small" @click="shopcarlist">加入购物车</mt-button>



            </li>

        </ul>
    </div>
    <div class="param">
        <h5>商品参数</h5>
        <p class="line"></p>
        <ul>
            <li>商品货号:</li>
            <li>库存情况:</li>
            <li>上架时间:</li>
        </ul>
    </div>
    <div class="buttons">
        <router-link to="/goods/goodsdesc">
            <mt-button class="detail" type="primary" size="small">图文详情</mt-button>
        </router-link>
        <router-link to="/goos/goodscomment">
            <mt-button class="comment" type="danger" size="small">商品评论</mt-button>
        </router-link>

    </div>
</div>
</template>
<script type="text/ecmascript-6">
    import slider from '../subcom/slider.vue'
    import inputnumber from '../subcom/inputnumber.vue'
    import {vm,COUNTSTR} from '../kits/vue'
    import {KEY,valueObj,setItem} from '../kits/localSg'
    export default{
        data(){
            return{
                img:['http://www.yljc888.com/d/file/shuma/2017-02-27/8ffe90a7b419e082952a97a16d885e4b.jpg',
                'http://img5.pcpop.com/ProductImages/0x0/8/8226/008226068.jpg',
                'http://www.chinairn.com/userfiles/image/20170227/20170227095816_3206.jpg'],
                COUNTSTR:1,
                isshow:false,
            }
        },
        components:{
            slider,
            inputnumber,
        },
        created(){

        },
        methods:{
            shopcarlist(){

                vm.$emit(COUNTSTR,this.COUNTSTR);
                valueObj.count=this.COUNTSTR;
                valueObj.goodsid=2;
                setItem(valueObj);
                //在这里触发
                this.isshow=!this.isshow;
            },
            getcount(count){
                console.log("first count"+count);
                this.COUNTSTR=+count;
            }
            ,beforeenter(el){
//                var ball=document.querySelector('.ball');
//                ball.style.css='!notshow';
                console.log('123');
                el.style.transform='translate(0px,0px)'
            }
            ,entered(el,done){
//                var ball=document.querySelector('.ball');
                //说这申明调用是为了触发浏览器的重排，从而进行动画效果；
                el.offsetWidth;
                el.style.transform='translate(95px,360px)';
                done();
            }
            ,afterenter(el){
//                var ball=document.querySelector('.ball');
//                el.style.transform='tralate(50,450)'
                this.isshow=!this.isshow;
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.buy,.param,.buttons{
    margin 2px;
    border 1px solid rgba(0,0,0,0.3);
}
    .buy  ul,.param ul{
        list-style none;
        padding 5px;
    }
        .buy .line,.param .line{
            width 100%;
            height 2px;
            border 1px solid rgba(0,0,0,0.2);
        }
    .buy ul s{
        margin-right 15px;
    }
    .buy h3{
        color #02C1ED;
        margin  5px;
    }
    .buy li,.param li{
        position relative;
        padding 7px;
    }
    .buy ul span{
        color red;
        font-size 18px;
        font-weight 800;
    }
    .param h5{
        margin 5px;
    }

    .buttons .detail{
        margin-bottom 20px;
        display block;
    }
    .buttons .detail,.buttons .comment{
        width 100%;
    }
        .notshow{
            display none;
        }
    .ball{
        position absolute;
        left 130px;
        top: 10px;
        width 20px;
        height 20px;
        border-radius 50%;
        background-color red;
        transition all 0.4s ease-in;
        z-index: 100;
        /*display none;*/
    }

</style>
