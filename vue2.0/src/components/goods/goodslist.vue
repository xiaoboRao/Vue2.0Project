<template>
<div id="templ">
    <div class="mui-content" style="background-color:#fff">
        <ul class="mui-table-view mui-grid-view">
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
                <router-link to="/goods/goodsinfo">
                    <img class="mui-media-object" src="http://scimg.jb51.net/allimg/140813/10-140Q3000G2C5.jpg">
                    <div class="mui-media-body">华为</div>
                    <div class="desc">
                            <p>
                                <span>2099</span>
                                <s>2199</s>
                            </p>
                        <div class="descfoot">
                            <h6 class="left">热销商品</h6>
                            <h6 class="right">剩余60件</h6>
                        </div>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
                <router-link to="/goods/goodsinfo">
                    <img class="mui-media-object" src="http://scimg.jb51.net/allimg/140813/10-140Q3000G2C5.jpg">
                    <div class="mui-media-body">华为</div>
                    <div class="desc">
                        <p>
                            <span>2099</span>
                            <s>2199</s>
                        </p>
                        <div class="descfoot">
                            <h6 class="left">热销商品</h6>
                            <h6 class="right">剩余60件</h6>
                        </div>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
                <router-link to="/goods/goodsinfo">
                    <img class="mui-media-object" src="http://scimg.jb51.net/allimg/140813/10-140Q3000G2C5.jpg">
                    <div class="mui-media-body">华为</div>
                    <div class="desc">
                        <p>
                            <span>2099</span>
                            <s>2199</s>
                        </p>
                        <div class="descfoot">
                            <h6 class="left">热销商品</h6>
                            <h6 class="right">剩余60件</h6>
                        </div>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
                <router-link to="/goods/goodsinfo">
                    <img class="mui-media-object" src="http://scimg.jb51.net/allimg/140813/10-140Q3000G2C5.jpg">
                    <div class="mui-media-body">华为</div>
                    <div class="desc">
                        <p>
                            <span>2099</span>
                            <s>2199</s>
                        </p>
                        <div class="descfoot">
                            <h6 class="left">热销商品</h6>
                            <h6 class="right">剩余60件</h6>
                        </div>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
                <router-link to="/goods/goodsinfo">
                    <img class="mui-media-object" src="http://scimg.jb51.net/allimg/140813/10-140Q3000G2C5.jpg">
                    <div class="mui-media-body">华为</div>
                    <div class="desc">
                        <p>
                            <span>2099</span>
                            <s>2199</s>
                        </p>
                        <div class="descfoot">
                            <h6 class="left">热销商品</h6>
                            <h6 class="right">剩余60件</h6>
                        </div>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
                <router-link to="/goods/goodsinfo">
                    <img class="mui-media-object" src="http://scimg.jb51.net/allimg/140813/10-140Q3000G2C5.jpg">
                    <div class="mui-media-body">华为</div>
                    <div class="desc">
                        <p>
                            <span>2099</span>
                            <s>2199</s>
                        </p>
                        <div class="descfoot">
                            <h6 class="left">热销商品</h6>
                            <h6 class="right">剩余60件</h6>
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</div>
</template>

<script type="text/ecmascript-6">
    export default{}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .mui-table-view-cell.mui-media.mui-col-xs-6{
        border 0px;
        padding 0px;
        border 1px solid rgba(0,0,0,0.3)
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell > a:not(.mui-btn){
        padding 0px 0px;
        margin 0px;

    }
    .mui-content > .mui-table-view:first-child{
        margin-top:0px;
        border 1px solid gray;
        padding 0px;
    }
    .mui-table-view.mui-grid-view .mui-table-view-cell{
        margin-right 0px;
    }
    .mui-table-view.mui-grid-view .mui-table-view-cell > a:not(.mui-btn){
        margin 0px;
    }
    .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-object{
        height 200px;
    }
    .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
        margin-top 0px;
    }

        .mui-media-body{
            background-color white;
        }
    .desc{
        position relative;
        width 100%;
        height 50px;
        margin-top 5px;
        background-color rgba(0,0,0,0.1);
    }
    .desc p span{
        position absolute;
        left 2px;
        color red;
    }
    .descfoot h6{
        display inline-block;
        position absolute
    }
    .descfoot .left{
        left 2px;
        bottom 2px;

        font-weight 700
        font-family '微软雅黑';
    }
    .descfoot .right{
        right 2px;
        bottom 2px;
        color red;
        font-weight 700
        font-family '微软雅黑';
    }

</style>
