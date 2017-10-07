<template>
<div id="templ">
    <div class="postcomm">
        <h3>提交评论</h3>
        <p></p>
        <textarea placeholder="请输入评论" v-model="postcomm"></textarea>
        <mt-button type="primary" size="large" @click="postcommfun">提交评论</mt-button>
    </div>
    <div class="list">
        <h3>评论列表</h3>
        <p class="p"></p>
        <div  v-for="(item,index) in comments">
        <div  class="title">
            <span>第{{index+1}}楼</span>
            <span>用户:{{item.username}}</span>
            <span>时间:{{item.time| datafmt('YYYY-MM-DD, h:mm:ss a')}}</span>
        </div>
            <ul class="mui-table-view">
                <li class="mui-table-view-cell">{{item.message}}</li>
            </ul>
        </div>
    </div>
</div>
</template>

<script type="text/ecmascript-6">
    import { Toast } from 'mint-ui';
    export default{
        data(){
          return{
              postcomm:'',
              comments:[{username:'Bob1',time:new Date(),message:'asdadasd'},
                  {username:'Bob2',time:new Date(),message:'adfgdf'},
                  {username:'Bob3',time:new Date(),message:'hjkhj'}]
          }
        },
        props:['id'],//用于接收父组件传来的id值
        methods:{
            //现在只能用死数据放在这里测试，以后用api来完善；
            postcommfun(){
                if(this.postcomm=="")
                {
                    Toast("comment can not be empty");
                }
                else {

//                    console.log("id:"+this.id+"  "+this.postcomm);

                 this.comments=[{username:'XXX',time:new Date(),message:this.postcomm}].concat(this.comments);
//                    console.log(this.comments);
                    Toast("提交成功");
                        this.postcomm='';
                }

            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .postcomm h3{
        padding 5px;
    }
    .postcomm p,.p{
        width 100%;
        height 5px;
        border-bottom 1px solid rgba(0,0,0,0.4);
    }
    .list{
        padding 5px;
    }
    .title{
        background-color #c7c0c0;
    }

</style>
