<template>
<div class="inputnumber">
    <div class="substractnumber" @click="sustract">-</div>
    <div class="number">{{count}}</div>
    <div class="addnumber" @click="add">+</div>

</div>
</template>

<script type="text/ecmascript-6">
    import {vm,COUNTSTR} from '../kits/vue'
    export default{
        data(){
            return{
                count:1,
            }

        },
        created(){
//            this.sendmessage();
        },
        methods:{
            add(){
                this.count++;
               this.sendmessage();
            },
            sustract(){
              this.count--;
              this.sendmessage();
            },
            sendmessage(){
                //这里用的是this，为什么不能用vm呢
                this.$emit('message',this.count);
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.inputnumber {
    position relative;
    text-align center;
    display inline;
}
.substractnumber{
    position absolute;
    left 2px;
    top 0px;
    width 40px;
    height 20px;
    border 1px solid black;
    }
.number{
    /*display inline;*/
    position absolute;
    left 42px;
    top 0px;
    width 40px;
    height 20px;
    border 1px solid black;
}
.addnumber{
    position absolute;
    left 82px;
    top 0px;
    width 40px;
    height 20px;
    border 1px solid black;
}

</style>

