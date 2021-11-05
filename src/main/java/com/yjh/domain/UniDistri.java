package com.yjh.domain;

/**
 * 高校分布类
 */
public class UniDistri {
    /**id*/
    private int id;
    /**城市*/
    private String city;
    /**使用系统树*/
    private int sysNum;
    /**总人数*/
    private int total;
    /**合格率*/
    private double passRate;
    /**页码*/
    private int offset;
    /**页数*/
    private int pageNumber;

    @Override
    public String toString() {
        return "UniDistri{" +
                "id=" + id +
                ", city='" + city + '\'' +
                ", sysNum=" + sysNum +
                ", total=" + total +
                ", passRate=" + passRate +
                '}';
    }

    public int getOffset() {
        return offset;
    }

    public void setOffset(int offset) {
        this.offset = offset;
    }

    public int getPageNumber() {
        return pageNumber;
    }

    public void setPageNumber(int pageNumber) {
        this.pageNumber = pageNumber;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public int getSysNum() {
        return sysNum;
    }

    public void setSysNum(int sysNum) {
        this.sysNum = sysNum;
    }

    public int getTotal() {
        return total;
    }

    public void setTotal(int total) {
        this.total = total;
    }

    public double getPassRate() {
        return passRate;
    }

    public void setPassRate(double passRate) {
        this.passRate = passRate;
    }
}
