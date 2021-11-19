package com.qiunoyi.connect;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.Writer;
import java.util.ArrayList;
import java.util.List;

@WebServlet(name = "login", urlPatterns = "/login")
public class Search extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        response.setContentType("text/html;charset=utf-8");

        //设置响应头允许ajax跨域访问
        response.setHeader("Access-Control-Allow-Origin", "*");

        //星号表示所有的异域请求都可以接受，
        response.setHeader("Access-Control-Allow-Methods", "GET,POST");
        /*获取前端传来的请求*/
        String methodName = request.getParameter("method");


        /*定义一个与数据库交互的对象op*/
        SQL_Operation op=new SQL_Operation();
        ArrayList<Statistic> googleResult=new ArrayList<>();

        /*如果前端传来值等于谷歌,就搜索数据库里的谷歌插件*/
        if (methodName.equals("谷歌")) {
            int i=0;
            Writer out = response.getWriter();
            /*如果search方法返回的字符串不为空，将返回值存入list*/
            while(op.search("谷歌")!=null) {
                googleResult=op.search("谷歌");
                ++i;
            }
            System.out.println(i);
            //out.write(i);//返回搜索到了多少个插件
            for(int i=0;i<googleResult.size();i++)
            {
                out.write(String.valueOf(googleResult.get(i)));//返回搜索到的插件，将obj对象转换成字符串
            }
        }
        else if(methodName.equals("火狐")){
            /*代码*/
        }
        else if(methodName.equals("Edge")){
            /*代码*/
        }
        else if(methodName.equals("Google")){
            /*代码*/
        }
        else if(methodName.equals("FireFox")){
            /*代码*/
        }
        else if(methodName.equals("微软")){
            /*代码*/
        }
    }
    }
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }

}
