<template>
<div id="templ">
    <div class="desc">
        <!--//标题-->
        <div class="title">
        <h4>图片详情</h4>
        <p>2017-10-3</p>
        <p class="line"></p>
        </div>

        缩略图
        <div class="mui-slider-item">
            <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)">
        </div>
        <p>{{message}}</p>
        <!--//评论组件-->
        <div class="comment">
            <comment :id="id"></comment>
        </div>

    </div>

</div>
</template>

<script type="text/ecmascript-6">
    import comment from '../subcom/comment.vue'
    export default{
        components:{
            comment
        },
        data(){
            return{
                id:0,
                message:"有的学校，其中大专院校居多，对摘要的写法要求并不算严苛，只要说明了研究的背景意义，并引出论文的选题即可。结构为：研究背景、意义或目的（三者选一个角度去写即可）+在此背景下，本文对“什么什么”这一课题进行了研究，希望能起到一定的指导意义。",
                list: [{
                    src: 'http://pic.5tu.cn/uploads/allimg/1605/051552412060.jpg',
                    //设置的缩略图的大小
                    w:300,
                    h:300,


                }, {
                    src: 'http://pic33.nipic.com/20130907/13534366_092511672176_2.jpg',
                    w:300,
                    h:300,

                }]
            }
        },
        created(){
            this.getid();
        },
        methods:{
            getid(){
                this.id=this.$route.params.id;
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.desc{
    padding 10px;
}
    .desc h4{
        color #0094ff;
    }
     p:nth-child(2){
        padding 0px;
        margin-top  5px;
        color rgba(0,0,0,0.4);
    }
     .line{
        width 100%;
        height 2px;
        border-bottom 2px solid rgba(0,0,0,0.4);
}
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

.preview-img{
    display inline-block;
    margin-right: 20px;
}


</style>
