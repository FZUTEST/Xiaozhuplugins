package com.example.wxtest;

import java.io.InputStream;
import java.sql.*;
import java.util.Properties;

public class JDBC_Connect {
    public static String driver=null;
    public static String url=null;
    public static String username=null;
    public static String password=null;
    static{
        try {
            InputStream in = JDBC_Connect.class.getClassLoader().getResourceAsStream("db.properties");
            Properties properties = new Properties();
            properties.load(in);
            driver = properties.getProperty("driver");
            url = properties.getProperty("url");
            username = properties.getProperty("username");
            password = properties.getProperty("password");

            //加载驱动
            Class.forName(driver);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    //获取连接
    public static Connection getConnect() throws SQLException {
       return DriverManager.getConnection(url,username,password);
    }
    //释放连接资源
    public static void release(Connection conn, Statement st, ResultSet rs)
    {
        if(rs!=null)
        {
            try{
                rs.close();
            }catch (SQLException e) {
                e.printStackTrace();
            }
        }
        if(st!=null)
        {
            try {
                st.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        if(conn!=null)
        {
            try {
                conn.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}
