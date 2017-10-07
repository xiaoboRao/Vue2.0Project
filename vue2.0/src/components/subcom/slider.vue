<!--//公用的组件要封装起来-->
<template>

    <div class="item">
        <!--mint-ui里的轮播图-->
        <mt-swipe :auto="2000">
            <mt-swipe-item v-for="item in img">
                <img :src="item">
            </mt-swipe-item>
        </mt-swipe>
    </div>

</template>

<script type="text/ecmascript-6">
    export default{
        props:['img'],
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .item{
        height 300px;
        width 99%;
        border 1px solid rgba(0,0,0,0.2);
        box-shadow 0,0,3px rgba(0,0,0,0.4);
        border-radius 5px;
        margin 2px;

    }
    .mint-swipe-item{

        width 100%
        height 300px;
        padding 1px;
    }
    img{
        width 100%;
        height 100%;
    }

</style>
