<template>
<div class="car">
    <div class="row" v-for="(item,index) in datalist">
        <mt-switch class="switch" v-model="values[index]" ></mt-switch>
        <img class="img" :src="item.thumb_path">
        <div class="inforight">
            <h4 v-text="item.title"></h4>
            <div class="bottom">
                <ul>
                    <li>￥{{item.sell_price }}</li>
                    <li><carinputNumber :initCount="item.cou" :goodsid="item.goodsid" v-on:cardataobj="getiInputNumber"></carinputNumber></li>
                    <li ><a href="javascript:void(0)" @click="deleterow(item.goodsid,index)">删除</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="total">
        <div class="desc">
            <ul>
                <li>总计(不含运费)</li>
                <li>已勾选{{totalcount}}件，￥{{tottalprice}}元</li>
            </ul>
        </div>
        <div class="button">
           <mt-button type="primary" >去结算</mt-button>
        </div>
    </div>
    {{values}}
</div>

</template>
<script type="text/ecmascript-6" >
    import carinputNumber from '../subcom/carinputNumber.vue';
    import {getgoodsObject,updateData,remoteItem} from '../kits/localSg'
    export default{
        components:{
            carinputNumber,
        },
        computed:{
            totalcount(){
                let totalcount=0;
                let totalprice=0;
                this.datalist.forEach((item,index)=>{
                    if(this.values[index])
                    {
                        totalcount++;
                       let count= this.datalist[index].cou;
                       let price=this.datalist[index].sell_price;
                        totalprice+=count*price;
//                       console.log("tottalprice"+this.tottalprice);
                    }
                    else {
                        this.tottalprice=0;
                    }
                    this.tottalprice=totalprice;

                })
                return totalcount;
            }
        },
        data(){
            return{
                tottalprice:0,
                values:[false],
                datalist:[
					{
						"cou": 1,
						"goodsid": 2,
						"title": "华为（HUAWEI）荣耀6Plus 16G双4G版",
						"sell_price": 2195,
						"thumb_path": "http://www.yljc888.com/d/file/shuma/2017-02-27/8ffe90a7b419e082952a97a16d885e4b.jpg"
					},
//					{
//						"cou": 1,
//						"id": 88,
//						"title": "苹果Apple iPhone 6 Plus 16G 4G手机（联通三网版）",
//						"sell_price": 5780,
//						"thumb_path": "http://www.yljc888.com/d/file/shuma/2017-02-27/8ffe90a7b419e082952a97a16d885e4b.jpg"
//					}
                ],

            }
        },
        created(){
            this.getdatalist();
        },
        methods:{
            deleterow(goodsid,index){
                //1，从列表中删除；
                this.datalist.splice(index,1);
                //2.从localstorage中移除
                remoteItem(goodsid);
                //3.将对应的mt-button的值移除
                this.values.splice(index,1);
                console.log(this.datalist);

            },
            //从子组件传过来的resObj包含着点击的商品的信息
            getiInputNumber(resObj){
//            console.log("resobj"+resObj.goodsid);
//			 1.0 更新localStorage中的数据
                updateData(resObj);
//			2.0 更新 this.datalist中的当前数量
                for(var i = 0;i <this.datalist.length ; i++){
                    if(this.datalist[i].goodsid == resObj.goodsid){
                        if(resObj.type =='add'){
                            this.datalist[i].cou = this.datalist[i].cou + 1;
                        }else{
                            this.datalist[i].cou = this.datalist[i].cou - 1;
                        }
                        break;
                    }
                }
                console.log( this.datalist[0].cou);

            },
            getdatalist(){
//				1.0 从localstorage中获取到所有的商品id值
//				obj的格式：{
//					87:4,
//					 88:1
//					 }
                var obj = getgoodsObject();
                console.log("cou  "+ this.datalist[0].cou);


                this.datalist[0].cou =obj[this.datalist[0].goodsid];


            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.row{
    border-bottom 1px solid rgba(0,0,0,0.3);
    height 105px;
    padding 5px;
    display flex;
}
.switch{
    //flex:第一个参数是否占有多余的空间，如果给多个元素赋正值则等比例占有，
// 第二个是元素是否贡献出小于总长度的空间，默认为0，当元素总长度大于父元素宽度，子元素不等比缩放；
    //第三个参数定义元素本身的宽度，，
    flex:0 0 52px;
}
.img{
    margin-left: 5px;
    height: 75px;
    width: 75px;
    flex: 0 0 85px;
}
.inforight{
    margin-left: 5px;
   flex:1;
}
.inforight ul{
    padding-left: 0px;
}
.inforight li{
    list-style: none;
    display: inline-block;
}

.inforight h4{
    color: #0094ff;
    font-size: 14px;
}

.bottom li:first-child{
    color:red;
    margin-right: 5px;
}
.bottom li:last-child{
    margin-left: 5px;
}
    .total{
        height 100px;
        display flex;
        background-color rgba(0,0,0,0.3);
    }
    .desc{
        flex 4;
        font-size 16px;
        font-family "微软雅黑";
    }
.desc ul{
    list-style none;
}
    .desc ul li{
        padding 4px;
    }
    .total .button{
        flex 1 ;
        margin-top 20px;

    }

</style>
