package com.yjh.service.impl;

import com.yjh.dao.IUniDistriDao;
import com.yjh.domain.UniDistri;
import com.yjh.service.IUniDistriService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UniDistriServiceImpl implements IUniDistriService {
    @Autowired
    private IUniDistriDao uniDistriDao;

    @Override
    public List<UniDistri> queryUniPage(UniDistri uniDistri) {
        return uniDistriDao.queryUniPage(uniDistri);
    }

    @Override
    public int queryUniDistriCount(UniDistri uniDistri) {
        return uniDistriDao.queryUniDistriCount(uniDistri);
    }

    @Override
    public int deleteUniDistriById(Integer id) {
        return uniDistriDao.deleteUniDistriById(id);
    }

    @Override
    public UniDistri queryUniDistriById(Integer id) {
        return uniDistriDao.queryUniDistriById(id);
    }

    @Override
    public int updateUniDistriById(UniDistri uniDistri) {
        return uniDistriDao.updateUniDistriById(uniDistri);
    }

    @Override
    public int insertUniDistri(UniDistri uniDistri) {
        return uniDistriDao.insertUniDistri(uniDistri);
    }

    @Override
    public List<UniDistri> queryUniPageByFuzzy(UniDistri uniDistri) {
        return uniDistriDao.queryUniPageByFuzzy(uniDistri);
    }

    @Override
    public int queryUniDistriCountByFuzzy(UniDistri uniDistri) {
        return uniDistriDao.queryUniDistriCountByFuzzy(uniDistri);
    }


}
