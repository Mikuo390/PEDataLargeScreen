var chart1 = echarts.init(document.getElementById('box1'));
var option1 = {
    title: {
        text: '启动次数分布',
        // subtext: 'Fake Data',
        left: 'left',
        textStyle: {
            fontSize:18,
            color:'#ccc'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        left: 'left',
        top: 80,
        bottom: 20,
        itemWidth: 5,
        itemHeight: 5,
        // data: [
        //   'rose1',
        //   'rose2',
        //   'rose3',
        //   'rose4',
        //   'rose5'
        // ],
        textStyle: {
            color:'#ccc'
        }
    },
    toolbox: {
        show: true,
        feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    series: [
        {
            name: 'Radius Mode',
            type: 'pie',
            // radius: '30%',
            radius: [0, 60],
            center: ['60%', '65%'],
            roseType: 'radius',
            itemStyle: {
                borderRadius: 1
            },
            label: {
                show: false
            },
            emphasis: {
                label: {
                    show: true
                }
            },
            data: [
                { value: 40, name: '15-20次' },
                { value: 33, name: '10-15次' },
                { value: 28, name: '20次以上' },
                { value: 22, name: '6-9次' },
                { value: 20, name: '0-5次' }
            ]
        },
    ]
};
option1 && chart1.setOption(option1);

var chart2 = echarts.init(document.getElementById('box2'));
var option2 = {
    title: {
        text: '日活跃用户',
        // subtext: 'Fake Data',
        left: 'left',
        textStyle: {
            fontSize:18,
            color:'#ccc'
        }
    },
    grid: {
        left:'30',
        top:'60',
        bottom:'25',
        height:'120'
    },
    xAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        axisLabel:{
            interval: 0,
            formatter: function (value) {
                //x轴的文字改为竖版显示
                var str = value.split("");
                return str.join("\n");
            }
        },
        axisTick: {//隐藏刻度
            show: false
        }
    },
    yAxis: {
        type: 'value',
        min: 100,
        splitLine:{show: false}
    },
    series: [
        {
            data: [300, 250, 100, 150, 275, 225, 300],
            type: 'line',
            smooth: true,
            color:'#1AB862'
        }
    ]
};
chart2.setOption(option2);

var chart3 = echarts.init(document.getElementById('box3'));
var option3 = {
    title: {
        text: '使用次数分布',
        // subtext: 'Fake Data',
        left: 'left',
        textStyle: {
            fontSize:18,
            color:'#ccc'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        left: 'left',
        top: 80,
        bottom: 20,
        itemWidth: 5,
        itemHeight: 5,
        // data: [
        //   'rose1',
        //   'rose2',
        //   'rose3',
        //   'rose4',
        //   'rose5'
        // ],
        textStyle: {
            color:'#ccc'
        }
    },
    toolbox: {
        show: true,
        feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    series: [
        {
            name: 'Radius Mode',
            type: 'pie',
            // radius: '30%',
            radius: [0, 60],
            center: ['60%', '65%'],
            roseType: 'radius',
            itemStyle: {
                borderRadius: 1
            },
            label: {
                show: false
            },
            emphasis: {
                label: {
                    show: true
                }
            },
            data: [
                { value: 40, name: '21-30分钟' },
                { value: 33, name: '11-20分钟' },
                { value: 28, name: '31-45分钟' },
                { value: 22, name: '6-10分钟' },
                { value: 20, name: '0-5分钟' }
            ]
        },
    ]
};
chart3.setOption(option3);

var chart4 = echarts.init(document.getElementById('box4'));
var option4 = {
    title: {
        text: '月活跃用户',
        // subtext: 'Fake Data',
        left: 'left',
        textStyle: {
            fontSize:18,
            color:'#ccc'
        }
    },
    grid: {
        left:'30',
        top:'60',
        bottom:'130',
        height:'130'
    },
    xAxis: {
        type: 'category',
        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月','八月','九月','十月','十一月','十二月'],
        axisLabel:{
            interval: 0,
            formatter: function (value) {
                //x轴的文字改为竖版显示
                var str = value.split("");
                return str.join("\n");
            }
        },
        axisTick: {//隐藏刻度
            show: false
        }
    },
    yAxis: {
        type: 'value',
        min: 0,
        splitLine:{show: false}
    },
    series: [
        {
            data: [1200, 1500, 1000, 1500, 1275, 1225, 1300,300,450,200,300,700],
            type: 'line',
            smooth: true,
            color:'red'
        }
    ]
};
chart4.setOption(option4);

var chart5 = echarts.init(document.getElementById('box5'));
var option5 = {
    title: {
        text: '体侧成绩占比',
        left: 'left',
        textStyle: {
            fontSize:18,
            color:'#ccc'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}%'
    },
    toolbox: {
        feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
        }
    },
    // legend: {
    //   data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order']
    // },
    series: [
        {
            name: 'Funnel',
            type: 'funnel',
            left: '-20%',
            top: 40,
            bottom: 60,
            width: '80%',
            min: 0,
            max: 100,
            minSize: '10%',
            maxSize: '100%',
            sort: 'descending',
            gap: 0,//视角
            label: {
                show: true,
                position: 'outside'
            },
            labelLine: {
                length: 20,
                lineStyle: {
                    width: 1,
                    type: 'solid'
                }
            },
            itemStyle: {
                borderColor: '#fff',
                borderWidth: 0//间距
            },
            emphasis: {
                label: {
                    fontSize: 20
                }
            },
            data: [
                { value: 40, name: '优秀率' },
                { value: 10, name: '不及格率' },
                { value: 17, name: '及格率' },
                { value: 33, name: '良好率' },
            ]
        }
    ]
};
chart5.setOption(option5);

var chart6 = echarts.init(document.getElementById('box6'));
var option6 = {
    title: {
        text: '高校优秀率',
        // subtext: 'Fake Data',
        left: 'left',
        textStyle: {
            fontSize: 18,
            color: '#ccc'
        }
    },
    xAxis: {
        type: 'category',
        data: ['第一大学', '第二大学', '第三大学', '第四大学', '第五大学'],
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#616572', //更改坐标轴文字颜色
                fontSize: 8 //更改坐标轴文字大小
            }
        }
    },
    yAxis: {
        type: 'value',
        show: false
    },
    grid: {
        left: '10',
        top: '30'
    },
    series: [
        {
            data: [120, 200, 150, 80, 70],
            type: 'pictorialBar',
            symbolRepeat: 'true',
            symbolMargin: 1,
            symbol: 'rect',
            symbolClip: true,
            symbolSize: [21, 14],
            // symbolOffset: [5, 0],
            itemStyle: {
                normal: {
                    color: '#05B9FE'
                }
            }
        }
    ]
};
chart6.setOption(option6);

var chart7 = echarts.init(document.getElementById('box7'));
var option7 = {
    title: {
        text: '启动次数分布',
        // subtext: 'Fake Data',
        left: 'left',
        textStyle: {
            fontSize:18,
            color:'#ccc'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        left: 'left',
        top: 80,
        bottom: 20,
        itemWidth: 5,
        itemHeight: 5,
        // data: [
        //   'rose1',
        //   'rose2',
        //   'rose3',
        //   'rose4',
        //   'rose5'
        // ],
        textStyle: {
            color:'#ccc'
        }
    },
    toolbox: {
        show: true,
        feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    series: [
        {
            name: 'Radius Mode',
            type: 'pie',
            // radius: '30%',
            radius: [0, 60],
            center: ['60%', '65%'],
            roseType: 'radius',
            itemStyle: {
                borderRadius: 1
            },
            label: {
                show: false
            },
            emphasis: {
                label: {
                    show: true
                }
            },
            data: [
                { value: 40, name: '15-20次' },
                { value: 33, name: '10-15次' },
                { value: 28, name: '20次以上' },
                { value: 22, name: '6-9次' },
                { value: 20, name: '0-5次' }
            ]
        },
    ]
};
chart7.setOption(option7);

var chart8 = echarts.init(document.getElementById('box8'));
var option8= {
    title: {
        text: '日活跃用户',
        // subtext: 'Fake Data',
        left: 'left',
        textStyle: {
            fontSize:18,
            color:'#ccc'
        }
    },
    grid: {
        left:'30',
        top:'60',
        bottom:'25',
        height:'120'
    },
    xAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        axisLabel:{
            interval: 0,
            formatter: function (value) {
                //x轴的文字改为竖版显示
                var str = value.split("");
                return str.join("\n");
            }
        },
        axisTick: {//隐藏刻度
            show: false
        }
    },
    yAxis: {
        type: 'value',
        min: 100,
        splitLine:{show: false}
    },
    series: [
        {
            data: [300, 250, 100, 150, 275, 225, 300],
            type: 'line',
            smooth: true,
            color:'#1AB862'
        }
    ]
};
chart8.setOption(option8);

var chart9 = echarts.init(document.getElementById('box9'));
var option9 = {
    title: {
        text: '使用次数分布',
        // subtext: 'Fake Data',
        left: 'left',
        textStyle: {
            fontSize:18,
            color:'#ccc'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        left: 'left',
        top: 80,
        bottom: 20,
        itemWidth: 5,
        itemHeight: 5,
        // data: [
        //   'rose1',
        //   'rose2',
        //   'rose3',
        //   'rose4',
        //   'rose5'
        // ],
        textStyle: {
            color:'#ccc'
        }
    },
    toolbox: {
        show: true,
        feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    series: [
        {
            name: 'Radius Mode',
            type: 'pie',
            // radius: '30%',
            radius: [0, 60],
            center: ['60%', '65%'],
            roseType: 'radius',
            itemStyle: {
                borderRadius: 1
            },
            label: {
                show: false
            },
            emphasis: {
                label: {
                    show: true
                }
            },
            data: [
                { value: 40, name: '21-30分钟' },
                { value: 33, name: '11-20分钟' },
                { value: 28, name: '31-45分钟' },
                { value: 22, name: '6-10分钟' },
                { value: 20, name: '0-5分钟' }
            ]
        },
    ]
};
chart9.setOption(option9);

var chart10 = echarts.init(document.getElementById('box10'));
var option10 = {
    title: {
        text: '月活跃用户',
        // subtext: 'Fake Data',
        left: 'left',
        textStyle: {
            fontSize:18,
            color:'#ccc'
        }
    },
    grid: {
        left:'30',
        top:'60',
        bottom:'130',
        height:'130'
    },
    xAxis: {
        type: 'category',
        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月','八月','九月','十月','十一月','十二月'],
        axisLabel:{
            interval: 0,
            formatter: function (value) {
                //x轴的文字改为竖版显示
                var str = value.split("");
                return str.join("\n");
            }
        },
        axisTick: {//隐藏刻度
            show: false
        }
    },
    yAxis: {
        type: 'value',
        min: 0,
        splitLine:{show: false}
    },
    series: [
        {
            data: [1200, 1500, 1000, 1500, 1275, 1225, 1300,300,450,200,300,700],
            type: 'line',
            smooth: true,
            color:'red'
        }
    ]
};
chart10.setOption(option10);

var chart11 = echarts.init(document.getElementById('box11'));
var option11 = {
    title: {
        text: '体侧成绩占比',
        left: 'left',
        textStyle: {
            fontSize:18,
            color:'#ccc'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}%'
    },
    toolbox: {
        feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
        }
    },
    // legend: {
    //   data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order']
    // },
    series: [
        {
            name: 'Funnel',
            type: 'funnel',
            left: '-20%',
            top: 40,
            bottom: 60,
            width: '80%',
            min: 0,
            max: 100,
            minSize: '10%',
            maxSize: '100%',
            sort: 'descending',
            gap: 0,//视角
            label: {
                show: true,
                position: 'outside'
            },
            labelLine: {
                length: 20,
                lineStyle: {
                    width: 1,
                    type: 'solid'
                }
            },
            itemStyle: {
                borderColor: '#fff',
                borderWidth: 0//间距
            },
            emphasis: {
                label: {
                    fontSize: 20
                }
            },
            data: [
                { value: 40, name: '优秀率' },
                { value: 10, name: '不及格率' },
                { value: 17, name: '及格率' },
                { value: 33, name: '良好率' },
            ]
        }
    ]
};
chart11.setOption(option11);

var chart12 = echarts.init(document.getElementById('box12'));
var option12 = {
    title: {
        text: '高校优秀率',
        // subtext: 'Fake Data',
        left: 'left',
        textStyle: {
            fontSize: 18,
            color: '#ccc'
        }
    },
    xAxis: {
        type: 'category',
        data: ['第一大学', '第二大学', '第三大学', '第四大学', '第五大学'],
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#616572', //更改坐标轴文字颜色
                fontSize: 8 //更改坐标轴文字大小
            }
        }
    },
    yAxis: {
        type: 'value',
        show: false
    },
    grid: {
        left: '10',
        top: '30'
    },
    series: [
        {
            data: [120, 200, 150, 80, 70],
            type: 'pictorialBar',
            symbolRepeat: 'true',
            symbolMargin: 1,
            symbol: 'rect',
            symbolClip: true,
            symbolSize: [21, 14],
            // symbolOffset: [5, 0],
            itemStyle: {
                normal: {
                    color: '#05B9FE'
                }
            }
        }
    ]
};
chart12.setOption(option12);



var rawData ={};
$.ajax({
    type:"post",
    async:false,
    url:"/view/data",
    success:function (res){
        console.log(res)
        var tmp;

        for(var i=0;i<res.length;i++){
            var arr = new Array();
            arr.push(res[i].city,res[i].sysNum,res[i].total,res[i].passRate)
            city = res[i].city
            // console.log(arr)
            // obj = {
            //     [`${res[i].city}`]: arr
            // }
            rawData[`${res[i].city}`]=arr
            // tmp = obj;
            // console.log(obj)
            // eval("obj."+res[i].res+"="+arr);
        }
        console.log(rawData)
    }
})

// 字体、柱图缩放倍数
var scale = 1;
//市区坐标
var coordData ={
    "湖州市":[119.802398, 31.367198],
    "杭州市":[119.353576, 30.587459],
    "宁波市":[121.549792, 30.068388],
    "温州市":[120.672111, 28.500575],
    "嘉兴市":[120.750865, 31.162653],
    "绍兴市":[120.682112, 30.297117],
    "金华市":[119.849506, 29.689524],
    "衢州市":[118.87263, 29.441708],
    "舟山市":[122.106863, 30.616028],
    "台州市":[121.028599, 29.361378],
    "丽水市":[119.321786, 28.651993]
    // "0":[119.802398, 31.367198],
    // "1":[119.353576, 30.587459],
    // "2":[121.549792, 30.068388],
    // "3":[120.672111, 28.500575],
    // "4":[120.750865, 31.162653],
    // "5":[120.682112, 30.297117],
    // "6":[119.849506, 29.689524],
    // "7":[118.87263, 29.441708],
    // "8":[122.106863, 30.616028],
    // "9":[121.028599, 29.361378],
    // "10":[119.321786, 28.651993]
};
var xData ={
    // "湖州市":['湖州市'],
    // "杭州市":['杭州市'],
    // "宁波市":['宁波市'],
    // "温州市":['温州市'],
    // "嘉兴市":['嘉兴市'],
    // "绍兴市":['绍兴市'],
    // "金华市":['金华市'],
    // "衢州市":['衢州市'],
    // "舟山市":['舟山市'],
    // "台州市":['台州市'],
    // "丽水市":['丽水市'],
    "湖州市":['地名','使用系统','参与人数','及格率'],
    "杭州市":['地名','使用系统','参与人数','及格率'],
    "宁波市":['地名','使用系统','参与人数','及格率'],
    "温州市":['地名','使用系统','参与人数','及格率'],
    "嘉兴市":['地名','使用系统','参与人数','及格率'],
    "绍兴市":['地名','使用系统','参与人数','及格率'],
    "金华市":['地名','使用系统','参与人数','及格率'],
    "衢州市":['地名','使用系统','参与人数','及格率'],
    "舟山市":['地名','使用系统','参与人数','及格率'],
    "台州市":['地名','使用系统','参与人数','及格率'],
    "丽水市":['地名','使用系统','参与人数','及格率'],

    // "0":['地名','使用系统','参与人数','及格率'],
    // "1":['地名','使用系统','参与人数','及格率'],
    // "2":['地名','使用系统','参与人数','及格率'],
    // "3":['地名','使用系统','参与人数','及格率'],
    // "4":['地名','使用系统','参与人数','及格率'],
    // "5":['地名','使用系统','参与人数','及格率'],
    // "6":['地名','使用系统','参与人数','及格率'],
    // "7":['地名','使用系统','参与人数','及格率'],
    // "8":['地名','使用系统','参与人数','及格率'],
    // "9":['地名','使用系统','参与人数','及格率'],
    // "10":['地名','使用系统','参与人数','及格率'],
};
//数据
// var rawData = {
//     // "杭州市": [10, 20, 30],
//     // "宁波市": [10, 20, 30],
//     // "温州市": [10, 20, 30],
//     // "嘉兴市": [10, 20, 30],
//     // "湖州市": [10, 20, 30],
//     // "绍兴市": [10, 20, 30],
//     // "金华市": [10, 20, 30],
//     // "衢州市": [10, 20, 30],
//     // "舟山市": [10, 20, 30],
//     // "台州市": [10, 20, 30],
//     // "丽水市": [10, 20, 30],
//     "杭州市": ['杭州市',280,12345,0.7],
//     "宁波市": ['宁波市',250,1238,0.92],
//     "温州市": ['温州市',250,1238,0.92],
//     "嘉兴市": ['嘉兴市',250,1238,0.92],
//     "湖州市": ['湖州市',250,1238,0.92],
//     "绍兴市": ['绍兴市',250,1238,0.92],
//     "金华市": ['金华市',250,1238,0.92],
//     "衢州市": ['衢州市',250,1238,0.92],
//     "舟山市": ['舟山市',250,1238,0.92],
//     "台州市": ['台州市',250,1238,0.92],
//     "丽水市": ['丽水市',250,1238,0.92],
//
//     // "0": ['杭州市',280,12345,0.7],
//     // "1": ['宁波市',250,1238,0.92],
//     // "2": ['温州市',250,1238,0.92],
//     // "3": ['嘉兴市',250,1238,0.92],
//     // "4": ['湖州市',250,1238,0.92],
//     // "5": ['绍兴市',250,1238,0.92],
//     // "6": ['金华市',250,1238,0.92],
//     // "7": ['衢州市',250,1238,0.92],
//     // "8": ['舟山市',250,1238,0.92],
//     // "9": ['台州市',250,1238,0.92],
//     // "10": ['丽水市',250,1238,0.92],
// };
var rawData ={};
$.ajax({
    type:"post",
    async:false,
    url:"/view/data",
    success:function (res){
        console.log(res)

        for(var i=0;i<res.length;i++){
            var arr = new Array();
            arr.push(res[i].city,res[i].sysNum,res[i].total,res[i].passRate)
            city = res[i].city
            // console.log(arr)
            // obj = {
            //     [`${res[i].city}`]: arr
            // }
            rawData[`${res[i].city}`]=arr
            // tmp = obj;
            // console.log(obj)
            // eval("obj."+res[i].res+"="+arr);
        }
        console.log(rawData)
    }
})
console.log(rawData);
// 柱状图颜色
var colorList = ['31 ,210, 240', '61, 233, 147'];
var mapChart = echarts.init(document.getElementById('box'));
$.getJSON('/json/map/zhejiang.json',function (zhejiang){
    //ret地图矢量地图数据
    // console.log(zhejiang);
    echarts.registerMap('zhejiang',zhejiang);
    var option = {
        geo: {
            // name: '浙江地图',
            type:'map',
            map:'zhejiang',
            roam:false,//设置允许缩放以及拖动的效果
            label:{
                show:false,
                emphasis: { //对应的鼠标悬浮效果
                    show: false,
                    textStyle: {
                        show: false,
                        // color: "#77CDF9"
                    }
                },
            },//文字样式
            itemStyle: {
                normal: {
                    borderWidth: .5, //区域边框宽度
                    borderColor: 'black', //区域边框颜色
                    areaColor: "#0A5CC6", //区域颜色
                },
                emphasis: {//选中
                    borderWidth: .5,
                    borderColor: '#4b0082',
                    areaColor: "#77CDF9",
                }
            },
            tooltip :{
                // trigger: 'axis'
            },
            zoom:1,//设置初始化缩放比例
            center:[]//中心点
        },

        // series:[
        //     {
        //
        //     }
        // ]
    };
    mapChart.hideLoading();
    mapChart.setOption(option);
    // mapChart.resize();

    // 遍历省内所有地区，分别添加柱状图
    echarts.util.each(zhejiang.features, function(dataItem, idx)
    {
        // 获取当前地区数据
        var thisXData = xData[dataItem.properties.name];
        var thisData = rawData[dataItem.properties.name];
        // 根据coordData中当前地区经纬度计算柱状图在图表内的对应坐标
        var coord = mapChart.convertToPixel('geo', coordData[dataItem.properties.name]);

        // 生成柱状图数据
        var tmpOption =
            {
                xAxis : [],
                yAxis : [],
                grid : [],
                series : [],
                tooltip :
                    {
                        trigger: 'item',
                        axisPointer:
                            {
                                type: 'none'
                            },
                        textStyle:
                            {
                                // show:false,
                                fontSize: 12 * scale,
                            },
                        formatter: function(params)
                        {
                            var returnStr = '';
                            if(params.componentSubType == 'bar')
                            {
                                returnStr += params.marker + ' ';
                                returnStr += params.name + '：' + params.value;
                                returnStr += '';
                            }
                            return returnStr;
                        }
                    }
            };

        // 生成柱状图x轴配置
        tmpOption.xAxis.push(
            {
                id: idx,
                gridId: idx,
                splitLine:
                    {
                        show: false
                    },
                axisTick:
                    {
                        show: false
                    },
                axisLabel:
                    {
                        show: false
                    },
                data: thisXData,
                z: 100
            });

        // 生成柱状图y轴配置
        tmpOption.yAxis.push(
            {
                id: idx,
                gridId: idx,
                splitLine:
                    {
                        show: false
                    },
                axisTick:
                    {
                        show: false
                    },
                axisLabel:
                    {
                        show: false
                    },
                z: 100
            });

        // 配置柱状图绘制大小、位置
        tmpOption.grid.push(
            {
                id: idx,
                width: 30 * scale,
                height: 70 * scale,
                left: coord[0],
                top: coord[1],
                z: 100
            });

        // 生成柱状图数据
        tmpOption.series.push(
            {
                id: idx,
                type: 'bar',
                symbol: 'circle',
                xAxisId: idx,
                yAxisId: idx,
                barGap: 0,
                barCategoryGap: 0,
                data: thisData,
                z: 100,
                itemStyle:
                    {
                        normal:
                            {
                                // label:
                                //     {
                                //         show: true,
                                //         position: 'insideBottom',
                                //         textStyle:
                                //             {
                                //                 show:false,
                                //                 color: '#fff',
                                //                 fontSize: 8 * scale
                                //             },
                                //         formatter: function(params)
                                //         {
                                //             var txtArray = params.name.split('');
                                //             var rs = '';
                                //             for(var i = 0; i < txtArray.length; i++)
                                //             {
                                //                 rs += txtArray[i] + "\n";
                                //             }
                                //
                                //             return rs;
                                //         }
                                //     },
                                color:'#D48245'
                                // color: function(params)
                                // {
                                //     return new echarts.graphic.LinearGradient(
                                //         0, 0, 0, 1,
                                //         [
                                //             {
                                //                 offset: 0,
                                //                 color: 'rgba(' + colorList[params.dataIndex] + ', 1)'
                                //             },
                                //             {
                                //                 offset: 1,
                                //                 color: 'rgba(' + colorList[params.dataIndex] + ', 0.6)'
                                //             },
                                //         ], false);
                                // }
                            }
                    }
            });
        mapChart.setOption(tmpOption);
    });
})
