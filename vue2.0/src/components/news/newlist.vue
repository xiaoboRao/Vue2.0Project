
<template>
    <div id="templ">
        <ul class="mui-table-view">
            <li v-for="item in list" class="mui-table-view-cell mui-media">
                <!--//利用v-bind绑定属性，奖参数带过去-->
                <!--<router-link v-bind="{to:'/news/newsinfo/'}" >-->
                <router-link :to="{path:'/news/newsinfo',query:{url:item.url}}">
                    <img class="mui-media-object mui-pull-left" v-bind:src="item.thumbnail_pic_s">
                    <div class="mui-media-body">
                        {{item.title}}
                        <p class='mui-ellipsis' v-text="item.uniquekey"></p>
                        <div class="ft">
                            <span>发表时间:{{item.date | datafmt('YYYY-MM-DD, h:mm:ss a') }}</span>
                            <span>点击数:{{item.author_name}}</span>
                        </div>
                    </div>
                </router-link>

            </li>

        </ul>
    </div>

</template>

<script type="text/ecmascript-6" >
export default{
    data(){
        return {
            list:[],

        }
    },
    created(){
        this.getnewslist();
    },
    methods: {
        getnewslist(){


                    this.list=[
                        {
                            uniquekey: "04979d511007e5de3812c9d114dcc424",
                            title: "各地迎来返程客流高峰",
                            date: "2017-10-08 17:01",
                            category: "头条",
                            author_name: "新华社",
                            url: "http://mini.eastday.com/mobile/171008170118865.html",
                            thumbnail_pic_s: "http://05.imgmini.eastday.com/mobile/20171008/20171008170118_b2a34835b677cf9127b704b3efd12b78_4_mwpm_03200403.jpg",
                            thumbnail_pic_s02: "http://05.imgmini.eastday.com/mobile/20171008/20171008170118_393dcac96ce24c8dbcbb0e34b94caf1f_2_mwpm_03200403.jpg",
                            thumbnail_pic_s03: "http://05.imgmini.eastday.com/mobile/20171008/20171008170118_88645d9ea0ac7dca60f22d4ed4df9a68_1_mwpm_03200403.jpg"
                        },
                        {
                            uniquekey: "d1c204b3c7d8279a0fbcb9499f7e7bca",
                            title: "坚守者｜凤凰沱江保洁员一天打捞逾百斤垃圾，比平时多四五倍",
                            date: "2017-10-08 16:53",
                            category: "头条",
                            author_name: "澎湃新闻网",
                            url: "http://mini.eastday.com/mobile/171008165312139.html",
                            thumbnail_pic_s: "http://01.imgmini.eastday.com/mobile/20171008/20171008165312_d45e4cd0d4f7b3d565e32e1793704008_4_mwpm_03200403.jpg",
                            thumbnail_pic_s02: "http://01.imgmini.eastday.com/mobile/20171008/20171008165312_d45e4cd0d4f7b3d565e32e1793704008_3_mwpm_03200403.jpg",
                            thumbnail_pic_s03: "http://01.imgmini.eastday.com/mobile/20171008/20171008165312_d45e4cd0d4f7b3d565e32e1793704008_2_mwpm_03200403.jpg"
                        },
                        {
                            uniquekey: "25544882c13eb00061bc5ebc25b99a2b",
                            title: "男子被困海上438天，同伴死后，靠着吃指甲喝尿存活下来",
                            date: "2017-10-08 16:03",
                            category: "头条",
                            author_name: "图看世界",
                            url: "http://mini.eastday.com/mobile/171008160340686.html",
                            thumbnail_pic_s: "http://03.imgmini.eastday.com/mobile/20171008/20171008_0ed63a03212ec5cb3abf0d916fb0eb58_cover_mwpm_03200403.jpg",
                            thumbnail_pic_s02: "http://03.imgmini.eastday.com/mobile/20171008/20171008_8781b65aa0d01d01b5dc9dcf85394930_cover_mwpm_03200403.jpg",
                            thumbnail_pic_s03: "http://03.imgmini.eastday.com/mobile/20171008/20171008_02a16ddbdf413d38f6ab9aa09cc761fe_cover_mwpm_03200403.jpg"
                        },
                        {
                            uniquekey: "d18487a07066e85d905aff37f8e4d96f",
                            title: "践行精准扶贫获发改委认可社交电商拼多多成典型",
                            date: "2017-10-08 15:40",
                            category: "头条",
                            author_name: "环球网",
                            url: "http://mini.eastday.com/mobile/171008154011903.html",
                            thumbnail_pic_s: "http://09.imgmini.eastday.com/mobile/20171008/20171008154011_75088ce34988e105552524d81155f856_3_mwpm_03200403.jpg",
                            thumbnail_pic_s02: "http://09.imgmini.eastday.com/mobile/20171008/20171008154011_75088ce34988e105552524d81155f856_2_mwpm_03200403.jpg",
                            thumbnail_pic_s03: "http://09.imgmini.eastday.com/mobile/20171008/20171008154011_75088ce34988e105552524d81155f856_1_mwpm_03200403.jpg"
                        },
                        {
                            uniquekey: "c45ebbbeeafef1e9193e1baf2c9fbb8b",
                            title: "广东省计划新建的一座机场，你知道吗？",
                            date: "2017-10-08 15:35",
                            category: "头条",
                            author_name: "一起走遍世界",
                            url: "http://mini.eastday.com/mobile/171008153511478.html",
                            thumbnail_pic_s: "http://00.imgmini.eastday.com/mobile/20171008/20171008_225574040f82a9d4310f93d323cb0123_cover_mwpm_03200403.jpg",
                            thumbnail_pic_s02: "http://00.imgmini.eastday.com/mobile/20171008/20171008_47d9dc96607b935714bab22bd46786e3_cover_mwpm_03200403.jpg",
                            thumbnail_pic_s03: "http://00.imgmini.eastday.com/mobile/20171008/20171008_e676e6899d059000b01cc5d0d6146023_cover_mwpm_03200403.jpg"
                        },
                        {
                            uniquekey: "d01ca22c94d2ae0dd1915286b00179f3",
                            title: "河南独一有两座机场的城市，中部重要中心城市！",
                            date: "2017-10-08 15:32",
                            category: "头条",
                            author_name: "小马说旅游",
                            url: "http://mini.eastday.com/mobile/171008153243005.html",
                            thumbnail_pic_s: "http://05.imgmini.eastday.com/mobile/20171008/20171008153243_a2f81b5b40bf7d27c6c5f89df62b8435_5_mwpm_03200403.jpg",
                            thumbnail_pic_s02: "http://05.imgmini.eastday.com/mobile/20171008/20171008153243_a2f81b5b40bf7d27c6c5f89df62b8435_1_mwpm_03200403.jpg",
                            thumbnail_pic_s03: "http://05.imgmini.eastday.com/mobile/20171008/20171008153243_a2f81b5b40bf7d27c6c5f89df62b8435_2_mwpm_03200403.jpg"
                        },
                        {
                            uniquekey: "88a5d4b17180f663fed152424ea67ebd",
                            title: "你若不珍惜他, 他也不稀罕你的几大星座!",
                            date: "2017-10-08 15:29",
                            category: "头条",
                            author_name: "星座细说",
                            url: "http://mini.eastday.com/mobile/171008152912816.html",
                            thumbnail_pic_s: "http://09.imgmini.eastday.com/mobile/20171008/20170930_eeffd12363fb5ad0ec6f647a5e2c45f2_mwpm_03200403.jpg",
                            thumbnail_pic_s02: "http://09.imgmini.eastday.com/mobile/20171008/20170930_c7266a77c93c65480970b962e63c5166_mwpm_03200403.jpg",
                            thumbnail_pic_s03: "http://09.imgmini.eastday.com/mobile/20171008/20170930_6e700a1338bb46cf8348aba9916d6dc8_mwpm_03200403.jpg"
                        },
                        {
                            uniquekey: "bf7d8ec904f9b6de25ed2ad3e160d927",
                            title: "欧洲宣布一件大事震惊世界，为我们强大的祖国自豪吧！",
                            date: "2017-10-08 15:26",
                            category: "头条",
                            author_name: "菁彩",
                            url: "http://mini.eastday.com/mobile/171008152642866.html",
                            thumbnail_pic_s: "http://00.imgmini.eastday.com/mobile/20171008/20171008152642_963a2406fa19473c3827cf2059de34f0_2_mwpm_03200403.jpg",
                            thumbnail_pic_s02: "http://00.imgmini.eastday.com/mobile/20171008/20171008152642_963a2406fa19473c3827cf2059de34f0_1_mwpm_03200403.jpg",
                            thumbnail_pic_s03: "http://00.imgmini.eastday.com/mobile/20171008/20171008152642_963a2406fa19473c3827cf2059de34f0_3_mwpm_03200403.jpg"
                        },
                        {
                            uniquekey: "cb732127eda758be9c964b2355b2a78f",
                            title: "坚守者｜湖南“崀山蜘蛛人”：雨中小石块把安全帽砸得咚咚响",
                            date: "2017-10-08 15:24",
                            category: "头条",
                            author_name: "澎湃新闻网",
                            url: "http://mini.eastday.com/mobile/171008152454137.html",
                            thumbnail_pic_s: "http://00.imgmini.eastday.com/mobile/20171008/20171008152454_fe3514b3497965a1d479f39ab8a81724_3_mwpm_03200403.jpg",
                            thumbnail_pic_s02: "http://00.imgmini.eastday.com/mobile/20171008/20171008152454_fe3514b3497965a1d479f39ab8a81724_2_mwpm_03200403.jpg",
                            thumbnail_pic_s03: "http://00.imgmini.eastday.com/mobile/20171008/20171008152454_fe3514b3497965a1d479f39ab8a81724_1_mwpm_03200403.jpg"
                        },
                        {
                            uniquekey: "3cbbafb43dab536bb6af8b0552ae0775",
                            title: "他们戏里戏外都是夫妻，出道以来零绯闻，如今身价上亿，羡煞旁人",
                            date: "2017-10-08 15:24",
                            category: "头条",
                            author_name: "娱乐课堂",
                            url: "http://mini.eastday.com/mobile/171008152440611.html",
                            thumbnail_pic_s: "http://08.imgmini.eastday.com/mobile/20171008/20171008152440_53ff556a89554b6748ca44c66c296a4b_2_mwpm_03200403.jpg",
                            thumbnail_pic_s02: "http://08.imgmini.eastday.com/mobile/20171008/20171008152440_53ff556a89554b6748ca44c66c296a4b_3_mwpm_03200403.jpg",
                            thumbnail_pic_s03: "http://08.imgmini.eastday.com/mobile/20171008/20171008152440_53ff556a89554b6748ca44c66c296a4b_1_mwpm_03200403.jpg"
                        },
                        {
                            uniquekey: "bf6f352939c8a52f999790b604e01bb6",
                            title: "双节出行观察：从天上到地上，去哪儿变得更容易",
                            date: "2017-10-08 15:22",
                            category: "头条",
                            author_name: "新华社",
                            url: "http://mini.eastday.com/mobile/171008152235033.html",
                            thumbnail_pic_s: "http://09.imgmini.eastday.com/mobile/20171008/20171008152235_4e1ac7929835a738bf857a4dddb7f74b_1_mwpm_03200403.jpg"
                        },
                        {
                            uniquekey: "00f3ba7839b5526debc6a4fc0a0656c0",
                            title: "路边停了辆价值百万的国产劳斯莱斯，看到车牌号后大家都傻眼了！",
                            date: "2017-10-08 15:21",
                            category: "头条",
                            author_name: "奇趣有话说",
                            url: "http://mini.eastday.com/mobile/171008152148349.html",
                            thumbnail_pic_s: "http://04.imgmini.eastday.com/mobile/20171008/20171008_463453e2e6bc93e495081835c4c620d8_cover_mwpm_03200403.jpg",
                            thumbnail_pic_s02: "http://04.imgmini.eastday.com/mobile/20171008/20171008_583837f47ec0290cb5c74f7a209e6dbc_cover_mwpm_03200403.jpg",
                            thumbnail_pic_s03: "http://04.imgmini.eastday.com/mobile/20171008/20171008_8fe96c2b1c8ece3006bc0ca8aafcc855_cover_mwpm_03200403.jpg"
                        },
                        {
                            uniquekey: "0358be58abc7003cf9fbdaa98fea3478",
                            title: "现在手机都绑了微信支付宝等，要是丢了知道第一时间该怎么办吗？",
                            date: "2017-10-08 15:18",
                            category: "头条",
                            author_name: "小小羊圈圈",
                            url: "http://mini.eastday.com/mobile/171008151841702.html",
                            thumbnail_pic_s: "http://05.imgmini.eastday.com/mobile/20171008/20171008151841_0aa3db9760f9768b95c98591f079c424_3_mwpm_03200403.jpg",
                            thumbnail_pic_s02: "http://05.imgmini.eastday.com/mobile/20171008/20171008151841_0aa3db9760f9768b95c98591f079c424_7_mwpm_03200403.jpg",
                            thumbnail_pic_s03: "http://05.imgmini.eastday.com/mobile/20171008/20171008151841_0aa3db9760f9768b95c98591f079c424_5_mwpm_03200403.jpg"
                        },
                        {
                            uniquekey: "44e28248ef25a9c8264df1ad58f805df",
                            title: "菲律宾又要重回美国怀抱？关键时刻，中国大使这番话意味深长！",
                            date: "2017-10-08 15:17",
                            category: "头条",
                            author_name: "大国军情",
                            url: "http://mini.eastday.com/mobile/171008151747039.html",
                            thumbnail_pic_s: "http://09.imgmini.eastday.com/mobile/20171008/20171008_ff34462013865b696d34432c2d1ef565_cover_mwpm_03200403.jpg",
                            thumbnail_pic_s02: "http://09.imgmini.eastday.com/mobile/20171008/20171008_746f585ef8d6df53f1e9299a372b7c50_cover_mwpm_03200403.jpg",
                            thumbnail_pic_s03: "http://09.imgmini.eastday.com/mobile/20171008/20171008_2411bbeeb45bfb8b38b48b67463419ef_cover_mwpm_03200403.jpg"
                        },
                        {
                            uniquekey: "0e15672deb9ef420b2d713b243feb92f",
                            title: "鹿晗恋爱，胖迪不用“背锅”了，粉丝送祝福“这是我女友热巴”！",
                            date: "2017-10-08 14:59",
                            category: "头条",
                            author_name: "娱乐啤酒",
                            url: "http://mini.eastday.com/mobile/171008145956884.html",
                            thumbnail_pic_s: "http://07.imgmini.eastday.com/mobile/20171008/20171008_82139b9d1b3eb2e7671f7cda7103ecb6_mwpm_03200403.jpg",
                            thumbnail_pic_s02: "http://07.imgmini.eastday.com/mobile/20171008/20171008_457c9b22760c12c30efc221ff28377cf_mwpm_03200403.jpg",
                            thumbnail_pic_s03: "http://07.imgmini.eastday.com/mobile/20171008/20171008_788dff8a5927f400d70c4ee29a79f7d8_mwpm_03200403.jpg"
                        },
                        {
                            uniquekey: "2992d6e8ed1dc42caabc01318d933bf6",
                            title: "实拍：印度最大最昂贵的公牛，重达1.5吨，价值2.1亿",
                            date: "2017-10-08 14:59",
                            category: "头条",
                            author_name: "探索者",
                            url: "http://mini.eastday.com/mobile/171008145913023.html",
                            thumbnail_pic_s: "http://00.imgmini.eastday.com/mobile/20171008/20171008_49293cddf7184591f090803af452f439_cover_mwpm_03200403.jpg",
                            thumbnail_pic_s02: "http://00.imgmini.eastday.com/mobile/20171008/20171008_068402d588134c3674f46eaf2da6935f_cover_mwpm_03200403.jpg",
                            thumbnail_pic_s03: "http://00.imgmini.eastday.com/mobile/20171008/20171008_534930c230e29e9706f9f329dae4b5c2_cover_mwpm_03200403.jpg"
                        },
                        {
                            uniquekey: "62634427f875de2b8589b684715fe038",
                            title: "妻子发生车祸，丈夫阻止医生对妻子抢救，事实让人纷纷竖起大拇指",
                            date: "2017-10-08 14:58",
                            category: "头条",
                            author_name: "一语薄言",
                            url: "http://mini.eastday.com/mobile/171008145802810.html",
                            thumbnail_pic_s: "http://01.imgmini.eastday.com/mobile/20171008/20171008_6e297bf5bdcf9347f63224f875ab138c_cover_mwpm_03200403.jpg",
                            thumbnail_pic_s02: "http://01.imgmini.eastday.com/mobile/20171008/20171008_6b3899787cb5a43583cac7bd70f08123_cover_mwpm_03200403.jpg",
                            thumbnail_pic_s03: "http://01.imgmini.eastday.com/mobile/20171008/20171008_bd20c03a4d41b86c9c6b89728fa323d6_cover_mwpm_03200403.jpg"
                        },
                        {
                            uniquekey: "82ee1582da590345c767a5f7c3f4fb50",
                            title: "这八种辞职信只要你敢交，保准老板给你多发一个月工资",
                            date: "2017-10-08 14:56",
                            category: "头条",
                            author_name: "用一句话证明自己丑",
                            url: "http://mini.eastday.com/mobile/171008145614908.html",
                            thumbnail_pic_s: "http://01.imgmini.eastday.com/mobile/20171008/20171008145614_0c15541a740fe124bf5257d318794922_2_mwpm_03200403.jpg",
                            thumbnail_pic_s02: "http://01.imgmini.eastday.com/mobile/20171008/20171008145614_0c15541a740fe124bf5257d318794922_3_mwpm_03200403.jpg",
                            thumbnail_pic_s03: "http://01.imgmini.eastday.com/mobile/20171008/20171008145614_0c15541a740fe124bf5257d318794922_5_mwpm_03200403.jpg"
                        },
                        {
                            uniquekey: "27bf104443444c8b31632b438ff183b8",
                            title: "中国一王牌武器亮相，火眼金睛识别来袭导弹，美俄直呼太先进",
                            date: "2017-10-08 14:51",
                            category: "头条",
                            author_name: "军事图书馆",
                            url: "http://mini.eastday.com/mobile/171008145135817.html",
                            thumbnail_pic_s: "http://06.imgmini.eastday.com/mobile/20171008/20171008_f91d8343dff1c89c4aa4e343c0f6cd15_cover_mwpm_03200403.jpg",
                            thumbnail_pic_s02: "http://06.imgmini.eastday.com/mobile/20171008/20171008_00f06ef14a5b2bed31a2e85512591abb_cover_mwpm_03200403.jpg",
                            thumbnail_pic_s03: "http://06.imgmini.eastday.com/mobile/20171008/20171008_f662fce983b3c0897f7c4b8de16245c0_cover_mwpm_03200403.jpg"
                        },
                        {
                            uniquekey: "4a81eb49142fcd767671841a5f7a29e0",
                            title: "十二星座中，最爱装富贵的四大星座！",
                            date: "2017-10-08 14:49",
                            category: "头条",
                            author_name: "星座来了",
                            url: "http://mini.eastday.com/mobile/171008144957053.html",
                            thumbnail_pic_s: "http://05.imgmini.eastday.com/mobile/20171008/20171008_f646dbe0797452e7cb35b90b95c91b48_cover_mwpm_03200403.jpg",
                            thumbnail_pic_s02: "http://05.imgmini.eastday.com/mobile/20171008/20171008_ead6fd7680c928a7a9322afaf52c22b1_cover_mwpm_03200403.jpg",
                            thumbnail_pic_s03: "http://05.imgmini.eastday.com/mobile/20171008/20171008_773fa97da2c47c5d5f26e2d6df9b8603_cover_mwpm_03200403.jpg"
                        },
                        {
                            uniquekey: "63c4098e662ad206c58942e87ea9cc6d",
                            title: "这国领土不及中国1个市，士兵仅有1万人，但却砸两千亿购买武器",
                            date: "2017-10-08 14:43",
                            category: "头条",
                            author_name: "军事图书馆",
                            url: "http://mini.eastday.com/mobile/171008144344461.html",
                            thumbnail_pic_s: "http://03.imgmini.eastday.com/mobile/20171008/20171008_748d5a0c25fa0f409054d73ea6a365fa_cover_mwpm_03200403.jpg",
                            thumbnail_pic_s02: "http://03.imgmini.eastday.com/mobile/20171008/20171008_73ad10a57404492327bb0db0bb8d8e54_cover_mwpm_03200403.jpg",
                            thumbnail_pic_s03: "http://03.imgmini.eastday.com/mobile/20171008/20171008_cfbe79a88cf920bf99d2b345c910c184_cover_mwpm_03200403.jpg"
                        },
                        {
                            uniquekey: "144b204f8abd21f7a54ecaaa7254b9c0",
                            title: "连体姐妹同嫁一男，曾被断言不能活过3个月如今生儿育女",
                            date: "2017-10-08 14:18",
                            category: "头条",
                            author_name: "雨夜静听",
                            url: "http://mini.eastday.com/mobile/171008141804093.html",
                            thumbnail_pic_s: "http://08.imgmini.eastday.com/mobile/20171008/20171008141804_06d05d531ff378b280e689a530acfd51_7_mwpm_03200403.jpg",
                            thumbnail_pic_s02: "http://08.imgmini.eastday.com/mobile/20171008/20171008141804_06d05d531ff378b280e689a530acfd51_1_mwpm_03200403.jpg",
                            thumbnail_pic_s03: "http://08.imgmini.eastday.com/mobile/20171008/20171008141804_06d05d531ff378b280e689a530acfd51_6_mwpm_03200403.jpg"
                        },
                        {
                            uniquekey: "2afa2f64a365ad81f52d6f02a749c3bb",
                            title: "才出生三天的雏鸟被父母强逼悬崖跳，最后结局出人意料",
                            date: "2017-10-08 14:12",
                            category: "头条",
                            author_name: "生活第四餐",
                            url: "http://mini.eastday.com/mobile/171008141225278.html",
                            thumbnail_pic_s: "http://05.imgmini.eastday.com/mobile/20171008/20171008_4870beef4a24eb8f849c9408c91257bd_cover_mwpm_03200403.jpg",
                            thumbnail_pic_s02: "http://05.imgmini.eastday.com/mobile/20171008/20171008_7f6aaf16347ed8e6f260d0cbd44e2035_cover_mwpm_03200403.jpg",
                            thumbnail_pic_s03: "http://05.imgmini.eastday.com/mobile/20171008/20171008_fbcaf7fcf3820a50293e3c51d295f1ce_cover_mwpm_03200403.jpg"
                        },
                        {
                            uniquekey: "cc5ae9470403eea4d6f93d2e908c25dd",
                            title: "亚博代言人周盈欣粉丝数量暴增",
                            date: "2017-10-08 14:06",
                            category: "头条",
                            author_name: "东方都市网",
                            url: "http://mini.eastday.com/mobile/171008140629727.html",
                            thumbnail_pic_s: "http://07.imgmini.eastday.com/mobile/20171008/20171008140629_b7fc0db93840526f522be1a9cfeb8a2f_1_mwpm_03200403.jpg",
                            thumbnail_pic_s02: "http://07.imgmini.eastday.com/mobile/20171008/20171008140629_b7fc0db93840526f522be1a9cfeb8a2f_4_mwpm_03200403.jpg",
                            thumbnail_pic_s03: "http://07.imgmini.eastday.com/mobile/20171008/20171008140629_b7fc0db93840526f522be1a9cfeb8a2f_5_mwpm_03200403.jpg"
                        },
                        {
                            uniquekey: "3e7142e53ab22c5dd3ca6480f6b4d9a4",
                            title: "美丽乡村之安徽看塘村！",
                            date: "2017-10-08 13:57",
                            category: "头条",
                            author_name: "中国乡村行",
                            url: "http://mini.eastday.com/mobile/171008135714231.html",
                            thumbnail_pic_s: "http://03.imgmini.eastday.com/mobile/20171008/20171008_122951363caad82ef656d43c4386b153_cover_mwpm_03200403.jpg",
                            thumbnail_pic_s02: "http://03.imgmini.eastday.com/mobile/20171008/20171008_cbe4a726f2f97b4177875074e91d1114_cover_mwpm_03200403.jpg",
                            thumbnail_pic_s03: "http://03.imgmini.eastday.com/mobile/20171008/20171008_9cb4d36c132c8cc0ebafd71a1d20478d_cover_mwpm_03200403.jpg"
                        },
                        {
                            uniquekey: "e7c5626105c2fb8123b4bc8676051809",
                            title: "十二星座小知识再来一波，您看准不准？",
                            date: "2017-10-08 13:50",
                            category: "头条",
                            author_name: "摩杰座",
                            url: "http://mini.eastday.com/mobile/171008135049574.html",
                            thumbnail_pic_s: "http://09.imgmini.eastday.com/mobile/20171008/20171008_9e59b91be72993e19e2845b0c2129b66_cover_mwpm_03200403.jpg",
                            thumbnail_pic_s02: "http://09.imgmini.eastday.com/mobile/20171008/20171008_1de6cb03289734bcd55118fd233e924e_cover_mwpm_03200403.jpg",
                            thumbnail_pic_s03: "http://09.imgmini.eastday.com/mobile/20171008/20171008_d13b9dd22995024aa01dba5235aa1f71_cover_mwpm_03200403.jpg"
                        },
                        {
                            uniquekey: "914c81f025dcaf3f591ac6eef2d885cd",
                            title: "鹿晗关晓彤承认恋情很突然？其实两人恋爱端倪早已显露了！",
                            date: "2017-10-08 13:38",
                            category: "头条",
                            author_name: "萌神木木",
                            url: "http://mini.eastday.com/mobile/171008133825959.html",
                            thumbnail_pic_s: "http://05.imgmini.eastday.com/mobile/20171008/20171008_6f4cf129f208a94d73392a7a08f722af_cover_mwpm_03200403.jpg",
                            thumbnail_pic_s02: "http://05.imgmini.eastday.com/mobile/20171008/20171008_de0ad5347aab8884604f9984ea04c392_cover_mwpm_03200403.jpg"
                        },
                        {
                            uniquekey: "ef1b3cc4f3f60a5c050441bfc5d1ecc0",
                            title: "实拍：因为整容惨被毁容的7大女星，如今人不像人，鬼不像鬼！",
                            date: "2017-10-08 13:37",
                            category: "头条",
                            author_name: "探索者",
                            url: "http://mini.eastday.com/mobile/171008133728722.html",
                            thumbnail_pic_s: "http://08.imgmini.eastday.com/mobile/20171008/20171008_fe271239ac1b8f7d1c517a6e6d0d0ae4_cover_mwpm_03200403.jpg",
                            thumbnail_pic_s02: "http://08.imgmini.eastday.com/mobile/20171008/20171008_ee6bccf39729c9a227b3dc985173fac2_cover_mwpm_03200403.jpg",
                            thumbnail_pic_s03: "http://08.imgmini.eastday.com/mobile/20171008/20171008_498215f066ec16515231cdce826c83a1_cover_mwpm_03200403.jpg"
                        },
                        {
                            uniquekey: "96333eee68d2c4e577dcb652fc1212f1",
                            title: "村民排半小时队买来的25元印度飞饼，吃几口就难以下咽，感觉上当",
                            date: "2017-10-08 13:36",
                            category: "头条",
                            author_name: "闻舞视界",
                            url: "http://mini.eastday.com/mobile/171008133644347.html",
                            thumbnail_pic_s: "http://06.imgmini.eastday.com/mobile/20171008/20171008133644_4c9e54c9724efaadb9d6099dfb289c0a_2_mwpm_03200403.jpg",
                            thumbnail_pic_s02: "http://06.imgmini.eastday.com/mobile/20171008/20171008133644_4c9e54c9724efaadb9d6099dfb289c0a_7_mwpm_03200403.jpg",
                            thumbnail_pic_s03: "http://06.imgmini.eastday.com/mobile/20171008/20171008133644_4c9e54c9724efaadb9d6099dfb289c0a_1_mwpm_03200403.jpg"
                        },
                        {
                            uniquekey: "bb5dc9b738de7d16626b7a48ae5c2726",
                            title: "月亮“吞食”恒星毕宿五奇趣天象10日上演",
                            date: "2017-10-08 13:33",
                            category: "头条",
                            author_name: "新华网",
                            url: "http://mini.eastday.com/mobile/171008133311055.html",
                            thumbnail_pic_s: "http://04.imgmini.eastday.com/mobile/20171008/20171008133311_fe9bf6c6678c4990057807575e5602fd_2_mwpm_03200403.jpg",
                            thumbnail_pic_s02: "http://04.imgmini.eastday.com/mobile/20171008/20171008133311_fe9bf6c6678c4990057807575e5602fd_1_mwpm_03200403.jpg"
                        }
                    ]

            }
        }

}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .mui-media-body{
        font-size 14px;
    }
    .mui-media-object.mui-pull-left
    {
        width 80px;
        height 80px;
    }
    .mui-table-view .mui-media-object{

        max-width 80px;
        height 80px;
        line-height 80px;
    }
    .ft{
        font-size 14px;
        margin-top 1em;

    }
    .ft span{
        color #007aff;
        margin-right 10px;
    }
</style>
