package com.yjh.dao;

import com.yjh.domain.UniDistri;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface IUniDistriDao {

    /**
     * 获取高校
     * @param uniDistri
     * @return
     */
    List<UniDistri> queryUni(UniDistri uniDistri);

    /**
     * 查询高校分布
     * @param uniDistri
     * @return
     */
    List<UniDistri> queryUniPage(UniDistri uniDistri);

    /**
     * 查询所有高校数量
     * @param uniDistri
     * @return
     */
    int queryUniDistriCount(UniDistri uniDistri);

    /**
     * 通过主键id删除高校数据
     * @param id
     * @return
     */
    int deleteUniDistriById(Integer id);

    /**
     * 根据主键id获取高校信息
     * @param id
     * @return
     */
    UniDistri queryUniDistriById(Integer id);

    /**
     * 通过主键id更新高校数据
     * @param uniDistri
     * @return
     */
    int updateUniDistriById(UniDistri uniDistri);

    /**
     * 新增数据
     * @param uniDistri
     * @return
     */
    int insertUniDistri(UniDistri uniDistri);

    /**
     * 查询高校分布
     * @param uniDistri
     * @return
     */
    List<UniDistri> queryUniPageByFuzzy(UniDistri uniDistri);

    /**
     * 查询所有高校数量
     * @param uniDistri
     * @return
     */
    int queryUniDistriCountByFuzzy(UniDistri uniDistri);
}
