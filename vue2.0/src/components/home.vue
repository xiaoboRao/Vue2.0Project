<template>
<div >
        <slider :img="img"></slider>
        <div class="mui-slider-item">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/news/newslist">
                        <span class="mui-icon mui-icon-home"></span>
                        <div class="mui-media-body">新闻资讯</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/photo/photolist">
                        <span class="mui-icon mui-icon-email"></span>
                        <div class="mui-media-body">图片分享</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/goods/goodslist">
                        <span class="mui-icon mui-icon-chatbubble"></span>
                        <div class="mui-media-body">商品购买</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/feedback">
                        <span class="mui-icon mui-icon-location"></span>
                        <div class="mui-media-body">留言反馈</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/video">
                        <span class="mui-icon mui-icon-search"></span>
                        <div class="mui-media-body">视频专区</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/callme">
                        <span class="mui-icon mui-icon-phone"></span>
                        <div class="mui-media-body">联系我们</div>
                    </router-link>
                </li>
            </ul>
    </div>
</div>
</template>

<script type="text/ecmascript-6">
    import slider from './subcom/slider.vue'
    export default{
            components:{
                slider,
            },
            data(){
                return{
                    img:['http://product.shouji.com/uploads/mobile/ys/gengPhoneshouji/14120878705.jpg',
                        'http://img3.redocn.com/tupian/20150914/shouchibaisepingguoshoujitupian_4251158.jpg']
                }
            }
    }
</script>
<!--scoped制定作用在这个页面，不会影响其他页面-->
<style lang="stylus" rel="stylesheet/stylus" scoped>
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border-right  0px;
        border-bottom 0px;
    }
    .mui-slider-group{
        background-color white;
    }
    .mui-slider-item{
        background-color white;
    }
    .mui-table-view.mui-grid-view.mui-grid-9{
        background-color white;
        border-top: 0px;
        border-left: 0px;

    }
    .mui-table-view-cell.mui-media.mui-col-xs-4.mui-col-sm-3{
        border-right  0px;
        border-bottom  0px;
    }

    .mui-icon.mui-icon-home:before,
    .mui-icon.mui-icon-email:before,
    .mui-icon.mui-icon-chatbubble:before,
    .mui-icon.mui-icon-location:before,
    .mui-icon.mui-icon-search:before,
    .mui-icon.mui-icon-phone:before{
        content "";
        display block;
        width 50px;
        height 50px;
        //这个属性会将一张图片展示在小角落里
        background-repeat round ;

    }

    .mui-icon.mui-icon-home:before{
        background-image url("../../statics/imgs/1.png");
    }
    .mui-icon.mui-icon-email:before{
        background-image url("../../statics/imgs/2.png");
    }
    .mui-icon.mui-icon-chatbubble:before{
        background-image url("../../statics/imgs/3.png");
    }
    .mui-icon.mui-icon-location:before{
        background-image url("../../statics/imgs/4.png");
    }
    .mui-icon.mui-icon-search:before{
        background-image url("../../statics/imgs/5.png");
    }
    .mui-icon.mui-icon-phone:before{
        background-image url("../../statics/imgs/6.png");
    }


</style>
