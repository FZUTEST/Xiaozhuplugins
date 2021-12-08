package com.example.wxtest;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

public class SQL_Operation {
//    public static void main(String[] args)
//    {
//        ArrayList<Statistic> strings = new ArrayList<>();
//        Statistic temp=new Statistic("https://chrome.zzzmh.cn/info?token=dhdgffkkebhmkfjojejmpbldmpobfkfo",
//                "https://res.zzzmh.cn/chrome/v2/crx/dhdgffkkebhmkfjojejmpbldmpobfkfo/logo/logo.png",
//                "Tampermonkey 油猴脚本");
//        strings.add(temp);
//        System.out.println(strings.get(0).name);

    //
//        ArrayList<Statistic> statistic = search("浏览器");
//        System.out.println(statistic.get(3).name);
//        addStar("002","邱诚");
//        dropStar("001","qiunoyi");
//        ArrayList<StarStatistic> statistic2 =searchStar("001");
//        System.out.println(statistic2.get(0).name);
//        dropStar("001","集装箱");
//        addStar("001","扩展管理");
//        ArrayList<HistoryStatistic> statistic3 =searchHis("001");
//        System.out.println(statistic3.get(0).name);
//    }
    public static ArrayList<Statistic> search(String str)
    {
        Connection conn = null;
        Statement st = null;
        ResultSet rs = null;
        ArrayList<Statistic> res = new ArrayList<>();
        try {
            conn = JDBC_Connect.getConnect();//获取数据库连接
            st = conn.createStatement();//获取SQL的执行对象
            String sql ="SELECT * FROM information WHERE name REGEXP '"+str+"';";
            rs = st.executeQuery(sql);
            if(rs==null)
            {
                System.out.println("没找到");
            }
            while(rs.next())
            {
                Statistic statistic= new Statistic("","","","");
                statistic.guanwang = rs.getString("guanwang");
                statistic.img = rs.getString("img");
                statistic.name = rs.getString("name");
                statistic.brower=rs.getString("brower");
                res.add(statistic);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }finally {
            JDBC_Connect.release(conn,st,rs);
        }
        return res;
    }
    public static void addStar(String id,String name)
    {
        Connection conn = null;
        Statement st = null;
        ResultSet rs = null;
        try {
            conn = JDBC_Connect.getConnect();//获取数据库连接
            st = conn.createStatement();//获取SQL的执行对象
            String sql ="INSERT INTO star(id,name) VALUES('"+id+"','"+name+"');";
            st.executeUpdate(sql);
        } catch (SQLException e) {
            e.printStackTrace();
        }finally {
            JDBC_Connect.release(conn,st,rs);
        }
    }
    public static void dropStar(String id,String name)
    {
        Connection conn = null;
        Statement st = null;
        ResultSet rs = null;
        try {
            conn = JDBC_Connect.getConnect();//获取数据库连接
            st = conn.createStatement();//获取SQL的执行对象
            String sql ="DELETE FROM star WHERE id='"+id+"' AND name = '"+name+"';";
            st.executeUpdate(sql);
        } catch (SQLException e) {
            e.printStackTrace();
        }finally {
            JDBC_Connect.release(conn,st,rs);
        }
    }
    public static void addHis(String id,String name)
    {
        Connection conn = null;
        Statement st = null;
        ResultSet rs = null;
        try {
            conn = JDBC_Connect.getConnect();//获取数据库连接
            st = conn.createStatement();//获取SQL的执行对象
            String sql ="INSERT INTO history(id,name) VALUES('"+id+"','"+name+"');";
            st.executeUpdate(sql);
        } catch (SQLException e) {
            e.printStackTrace();
        }finally {
            JDBC_Connect.release(conn,st,rs);
        }
    }
    public static void dropHis(String id,String name)
    {
        Connection conn = null;
        Statement st = null;
        ResultSet rs = null;
        try {
            conn = JDBC_Connect.getConnect();//获取数据库连接
            st = conn.createStatement();//获取SQL的执行对象
            String sql ="DELETE FROM history WHERE id='"+id+"' AND name = '"+name+"';";
            st.executeUpdate(sql);
        } catch (SQLException e) {
            e.printStackTrace();
        }finally {
            JDBC_Connect.release(conn,st,rs);
        }
    }
    public static void dropHisALL(String id)
    {
        Connection conn = null;
        Statement st = null;
        ResultSet rs = null;
        try {
            conn = JDBC_Connect.getConnect();//获取数据库连接
            st = conn.createStatement();//获取SQL的执行对象
            String sql ="DELETE FROM history WHERE id='"+id+"';";
            st.executeUpdate(sql);
        } catch (SQLException e) {
            e.printStackTrace();
        }finally {
            JDBC_Connect.release(conn,st,rs);
        }
    }
    public static ArrayList<StarStatistic> searchStar(String id)
    {
        Connection conn = null;
        Statement st = null;
        ResultSet rs = null;
        ArrayList<StarStatistic> res = new ArrayList<>();
        try {
            conn = JDBC_Connect.getConnect();//获取数据库连接
            st = conn.createStatement();//获取SQL的执行对象
            String sql ="SELECT * FROM star,information WHERE information.name=star.name and star.id = '"+id+"';";
            rs = st.executeQuery(sql);
            if(rs==null)
            {
                System.out.println("没找到");
            }
            while(rs.next())
            {
                StarStatistic statistic= new StarStatistic("","","","","");
                statistic.id = rs.getString("id");
                statistic.name = rs.getString("name");
                statistic.guanwang = rs.getString("guanwang");
                statistic.img = rs.getString("img");
                statistic.brower=rs.getString("brower");
                res.add(statistic);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }finally {
            JDBC_Connect.release(conn,st,rs);
        }
        return res;
    }
    public static ArrayList<String> searchHis(String id)
    {
        Connection conn = null;
        Statement st = null;
        ResultSet rs = null;
        ArrayList<String> res = new ArrayList<>();
        try {
            conn = JDBC_Connect.getConnect();//获取数据库连接
            st = conn.createStatement();//获取SQL的执行对象
            String sql ="SELECT name FROM history WHERE history.id = '"+id+"';";
            rs = st.executeQuery(sql);
            if(rs==null)
            {
                System.out.println("没找到");
            }
            while(rs.next())
            {
                res.add(rs.getString("name"));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }finally {
            JDBC_Connect.release(conn,st,rs);
        }
        return res;
    }
}