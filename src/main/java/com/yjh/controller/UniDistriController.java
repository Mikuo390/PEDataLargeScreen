package com.yjh.controller;

import com.yjh.domain.PageObj;
import com.yjh.domain.UniDistri;
import com.yjh.service.IUniDistriService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * 高校分布
 */
@Controller
@RequestMapping("uni")
public class UniDistriController {
    @Autowired
    private IUniDistriService uniDistriService;

    /**
     * 显示高校分布页面
     * @return
     */
    @RequestMapping("/showUniDistriIndex")
    public String showUniDistriIndex(){
        return "uni/uni_distri_index";
    }

    /**
     * 查询高校分布列表
     * @param uniDistri
     * @return
     */
    @RequestMapping("/queryUniDistriPage")
    @ResponseBody
    public PageObj<UniDistri> queryUniDistriPage(UniDistri uniDistri){
        List<UniDistri> list = uniDistriService.queryUniPage(uniDistri);//获取列表
//        System.out.println(uniDistri);
        int totalCnt = uniDistriService.queryUniDistriCount(uniDistri);//获得总数
        PageObj<UniDistri> pageObj = new PageObj<>();
        pageObj.setRows(list);//设置要列出的集合
        pageObj.setTotal(totalCnt);//设置总数
        return pageObj;
    }

    /**
     * 通过主键id删除高校数据
//     * @param id
     * @return
     */
    @RequestMapping("/deleteUniDistriPage")
    @ResponseBody
    public int deleteUniDistriById(Integer id){
//        System.out.println("访问成功");
//        System.out.println(id);
        int cnt = uniDistriService.deleteUniDistriById(id);
        return cnt;
    }

    @RequestMapping("/queryUniDistriById")
    @ResponseBody
    public UniDistri queryUniDistriById(Integer id){
//        System.out.println("访问成功");
//        System.out.println(id);
        UniDistri info = uniDistriService.queryUniDistriById(id);
//        System.out.println(info);
        return info;
    }

    @RequestMapping("/updateUniDistriById")
    @ResponseBody
    public int updateUniDistriById(@RequestBody UniDistri uniDistri){
//        System.out.println("访问成功");
//        System.out.println(uniDistri);
        int cnt = uniDistriService.updateUniDistriById(uniDistri);
        return cnt;
    }
    @RequestMapping("/insertUniDistriById")
    @ResponseBody
    public int insertUniDistriById(@RequestBody UniDistri uniDistri){
//        System.out.println("访问成功");
//        System.out.println(uniDistri);
        int cnt = uniDistriService.insertUniDistri(uniDistri);
        return cnt;
    }

    /**
     * 模糊查询高校分布列表
     * @param uniDistri
     * @return
     */
    @RequestMapping("/queryUniDistriPageByFuzzy")
    @ResponseBody
    public PageObj<UniDistri> queryUniDistriPageByFuzzy(UniDistri uniDistri){
        System.out.println("访问成功");
        List<UniDistri> list = uniDistriService.queryUniPageByFuzzy(uniDistri);//获取列表
        System.out.println(uniDistri);
        int totalCnt = uniDistriService.queryUniDistriCountByFuzzy(uniDistri);//获得总数
        PageObj<UniDistri> pageObj = new PageObj<>();
        pageObj.setRows(list);//设置要列出的集合
        pageObj.setTotal(totalCnt);//设置总数
        return pageObj;
    }
}
