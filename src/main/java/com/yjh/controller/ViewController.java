package com.yjh.controller;

import com.yjh.dao.IUniDistriDao;
import com.yjh.domain.UniDistri;
import com.yjh.service.IUniDistriService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("view")
public class ViewController {
    @Autowired
    IUniDistriDao uniDistriDao;
    /**
     * 显示高校分布页面
     * @return
     */
    @RequestMapping("/showView")
    public String showUniDistriIndex(){
        return "front/index2";
    }

    @RequestMapping("/data")
    @ResponseBody
    public List<UniDistri> uniData(ModelMap map,UniDistri uniDistri){
        System.out.println("加载成功");
        List<UniDistri> list = uniDistriDao.queryUni(uniDistri);//获取列表
        return list;
    }
}
