<template>
<div id="templ">
    <div class="cate">
        <ul v-bind="{style:'width:'+totalwidth+'px'}">
            <li >全部</li>
            <li v-for="item in category">
                {{item}}
            </li>

        </ul>
    </div>
    <div class="imglist">
        <ul>
            <li v-for="img in list">
                <router-link v-bind="{to:'/photo/photoinfo/'+img.id}">
                <img v-lazy="img.thumbnail_pic_s"/>
                <div class="desc">
                    <h5 v-text="img.title"></h5>
                    <p v-text="img.uniquekey"></p>
                </div>
                </router-link>
            </li>

        </ul>
    </div>
</div>
</template>

<script type="text/ecmascript-6">
    export default{
        data(){
            return{
                category:[],
                totalwidth:0,
                list:[{
                    "uniquekey":"54c2dfd315670782172b5518c307a529",
                    "id":0,
                    "title":"陈冠希又双叒叕晒娃 爱女睡得正香小脸可爱",
                    "date":"2017-10-03 15:14",
                    "url":"http:\/\/mini.eastday.com\/mobile\/171003151423508.html",
                    "thumbnail_pic_s":"http:\/\/02.imgmini.eastday.com\/mobile\/20171003\/20171003151423_2f14c751381ef9b2e2332a2662ae2417_1_mwpm_03200403.jpg"
                },{
                    "uniquekey":"4405a0011352bdf9ebded85693b67470",
                    "id":1,
                    "title":"2018年湖南台首轮独播的8部电视剧，你最期待那一部？",
                    "url":"http:\/\/mini.eastday.com\/mobile\/171003151352064.html",
                    "thumbnail_pic_s":"http:\/\/02.imgmini.eastday.com\/mobile\/20171003\/20171003_6d1ccb81cca283ee5b640003fa8b3988_cover_mwpm_03200403.jpg",
                },{
                    "uniquekey":"b6708e33e00d8b49614a4a417a8fa0f8",
                    "id":2,
                    "title":"2018年湖南台首轮独播的8部电视剧，你最期待那一部？",
                    "url":"http:\/\/mini.eastday.com\/mobile\/171003151237850.html",
                    "thumbnail_pic_s":"http:\/\/00.imgmini.eastday.com\/mobile\/20171003\/20171003_41e2aa6ce4ca8d544973920897d4b562_cover_mwpm_03200403.jpg",

                },]
            }
        },
        created(){
          this.getcategory();
        },
        methods:{
            getcategory(){
                this.category=["家居生活","服装设计","明星美女",
                                "空间设计","户型装饰","生活日用",
                                "新鲜水果","精选肉类","汽车价格"];
                var perwidth=72;
                this.totalwidth=perwidth*(this.category.length+1);
            }
        }

    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .cate{
        width 375px;
        max-width 375px;
        overflow-x scroll;
    }
    .cate ul{
        margin 0px;
        padding-left 10px;
        }
    .cate li{
        display inline-block;
        list-style none;
        color #0094ff;
        font-size 14px;
        padding 6px;
    }
    .imglist ul{
        padding-left 0px;
    }
    .imglist li{
        list-style none;
        position relative;
    }
    .imglist ul img{
        width 100%;
        height 300px;
    }
    .desc {
        width 100%;
        background-color rgba(0,0,0,0.4);
        position absolute;
        bottom 2px;
        left 0px;
    }
    .desc h5{
        font-weight 600;
        color #ffff;
    }

</style>
