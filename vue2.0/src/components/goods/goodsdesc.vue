<template>
    <div id="templ">
        <h4 v-text="info.title"></h4>
        <p class="line"></p>
        <p v-html="info.content"></p>
    </div>

</template>

<script type="text/ecmascript-6">
    export default{
        data(){
            return {
                id: 0, // 代表的是当前商品的id
                info: {
                    "title": "华为（HUAWEI）荣耀6Plus 16G双4G版",
                    "content": "<p>\r\n\t荣耀6 Plus，该机型分为两款型号，分别为PE-TL10和PE-UL00的新机型，并且根据工信部设备认证中心公布的信息显示，移动版本PE-TL20和PE-TL00M也已经拿到了入网许可证，拥有7.5mm的纤薄机身，支持TDD-LTE/TD-SCDMA/GSM网络。双800万后置摄像头+800万前置摄像头。采用5.5英寸1080p分辨率显示屏，搭载1.8GHz麒麟925八核处理器，内置3GB RAM+32GB ROM存储组合，支持存储卡扩展。\r\n</p>\r\n<p align=\"center\">\r\n\t<span style=\"color:#FF0000;font-size:16px;\"><img class=\"gomeImgLoad\" alt=\"\" src=\"http://img5.gomein.net.cn/image/bbcimg/productDesc/descImg/201503/desc04/A0004794664/3997361.jpg\" /></span> \r\n</p>"
                }
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
h4{
    text-align center;
    color #0094f6;
    margin 10px 0px;
}
.line{
    height 2px;
    width 100%;
    border-bottom 2px solid rgba(0,0,0,0.3);
}

</style>
