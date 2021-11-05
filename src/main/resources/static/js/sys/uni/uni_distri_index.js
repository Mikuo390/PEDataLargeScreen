var dataTable;
var searchKey;
$(function (){
    dataTable = $("#dataTable").bootstrapTable({
        url:"/uni/queryUniDistriPageByFuzzy",//请求地址
        pageNumber:1,//初始化加载
        pagination:true,//分页
        sidePagination:"server",//服务器分页
        pageSize:10,//单页记录数
        pageList:[5,10,20,50],//单页可选择数量
        clickToSelect:true,//设置可选择的记录行数
        // search:true,
        striped:true,//行异色
        showRefresh:true,//显示刷新按钮
        showToggle:true,//切换视图
        toolbar: "#toolbar",
        queryParams:function (params){//上传服务器的参数
            var temp ={
                offset:params.offset,  //页码
                pageNumber:params.limit, //每页显示的数量
                city:searchKey,
                sysNum:searchKey,
                total:searchKey,
                passRate:searchKey
            }
            return temp;
        },
        columns:[
            {
                field:'checked',
                checkbox:true,
                align:'center',
                valign:'middle'
            },
            {
                title:'id',//标题
                field: 'id',
                // visible:false
            },
            {
                title:'城市',//标题
                field: 'city',
                sortable:true
            },
            {
                title:'使用系统数',//标题
                field: 'sysNum',
                sortable:true
            },
            {
                title:'参与人数',//标题
                field: 'total',
                sortable:true
            },
            {
                title:'及格率',//标题
                field: 'passRate',
                // field: ,
                sortable:true
            },
            {
                field: 'Button',
                title: '操作',
                events: operateEvent,//按钮注册事件
                formatter:AddFunctionAlty,//表格中添加按钮
            }
        ]
    })
})

//添加需要的按钮
function AddFunctionAlty(value,row,index){
    return [
        '<button id="TableEditor" type="button" class="btn btn-success">编辑</button>&nbsp;&nbsp;',
        '<button id="TableDelete" type="button" class="btn btn-danger">删除</button>'
    ].join("")
}
window.operateEvent={
    "click #TableEditor":function (e,value,row,index){//编辑按钮
        id =  $(this).parent().parent().children("td").eq(1).text();//获取id
        console.log("编辑按钮"+id);
        //编辑页面数据回填
        $.ajax({
            type:"post",
            url:"/uni/queryUniDistriById",
            data:{
                id:id
            },
            success:function (data){
                // console.log(data);
                $('#edit').modal();//开启模态窗口
                $('#txt_cityname').val(data.city);//数据回填
                $('#txt_sysnum').val(data.sysNum);
                $('#txt_total').val(data.total);
                $('#txt_rate').val(data.passRate);
                return;
            }
        })
    },
    "click #TableDelete":function (e,value,row,index){//编辑按钮
        var id =  $(this).parent().parent().children("td").eq(1).text();//获取id
        // id=parseInt(id);
        console.log(id);
        $.ajax({
            type:"post",
            url:"/uni/deleteUniDistriPage",
            data:{
                id:id
            },
            success:function (data){
                console.log(data);
            }
        })
        $(this).parent().parent().remove();
    }
}

//更新
$('#btn_submit').click(function (){
    // console.log("保存按钮"+id);
    var city=$('#txt_cityname').val();
    var sysNum=$('#txt_sysnum').val();
    var total=$('#txt_total').val();
    var passRate=$('#txt_rate').val();
    $.ajax({
        type:"post",
        url:"/uni/updateUniDistriById",
        data:
            JSON.stringify({//json
                id:id,
                city:city,
                sysNum:sysNum,
                total:total,
                passRate:passRate
            }),
        contentType:"application/json;charset=utf-8", //定义请求数据编码格式,可以在后台设置
        dataType:"json",  //定义回调响应数据格式为json字符串，可以省略
        success:function (res){
            // console.log(res);
            $("#dataTable").bootstrapTable('refresh');//刷新
            return;
        }
    })
})

//添加按钮
$('#btn_add').click(function (){
    $('#add').modal();//开启模态窗口
})
//添加页面提交
$('#add_submit').click(function (){
    var city=$('#add_cityname').val();
    var sysNum=$('#add_sysnum').val();
    var total=$('#add_total').val();
    var passRate=$('#add_rate').val();
    $.ajax({
        type:"post",
        url:"/uni/insertUniDistriById",
        data:
            JSON.stringify({//json
                city:city,
                sysNum:sysNum,
                total:total,
                passRate:passRate
            }),
        contentType:"application/json;charset=utf-8", //定义请求数据编码格式,可以在后台设置
        dataType:"json",  //定义回调响应数据格式为json字符串，可以省略
        success:function (res){
            // console.log(res);
            $("#dataTable").bootstrapTable('refresh');//刷新
            return;
        }
    })
})

//搜索
$('#btn_search').click(function (){
    console.log('搜索')
    searchKey = $('#txt_search').val();
    console.log(searchKey);
    $("#dataTable").bootstrapTable('refresh');//刷新
})
