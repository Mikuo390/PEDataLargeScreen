package com.yjh.domain;

import java.util.ArrayList;
import java.util.List;

/**
 * 分页实体类
 */
public class PageObj<T> {
    /**
     * 数据集合
     */
    private List<T> rows = new ArrayList<>();
    /**
     * 数据总条数
     */
    private int total;

    public List<T> getRows() {
        return rows;
    }

    public void setRows(List<T> rows) {
        this.rows = rows;
    }

    public int getTotal() {
        return total;
    }

    public void setTotal(int total) {
        this.total = total;
    }
}
