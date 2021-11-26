package com.example.wxtest;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.io.Writer;

@WebServlet(name = "search", urlPatterns = "/search")
public class search extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String chan;
        response.setContentType("text/html;charset=utf-8");

        //设置响应头允许ajax跨域访问
        response.setHeader("Access-Control-Allow-Origin", "*");

        //星号表示所有的异域请求都可以接受，
        response.setHeader("Access-Control-Allow-Methods", "GET,POST");
        Writer out=response.getWriter();
        //获取微信小程序传递的参数值并打印
        String transInfo = request.getParameter("username");//前端返回的搜索值
        //String transInfo2 = request.getParameter("user");
        System.out.println(transInfo);

        ArrayList<Statistic> qiunoyi=SQL_Operation.search(transInfo);
//        向前端返回插件数，前导0格式控制，如：00，01，10
        if(qiunoyi.size()<10)
        {
            String num="0"+Integer.toString(qiunoyi.size());
            System.out.println(num);
//            out.write(num);
//            out.flush();
        }
        else{
            String num=Integer.toString(qiunoyi.size());
            System.out.println(num);
//            out.write(num);
//            out.flush();
        }
        //System.out.println(qiunoyi.size());
//        向前端返回搜索结果
        for(int i=0;i< qiunoyi.size();i++)
        {
            if (i == qiunoyi.size() - 1) {//如果到了最后一个插件输出||标志
                out.write(qiunoyi.get(i).img + "," + qiunoyi.get(i).name + "," + qiunoyi.get(i).guanwang );
                out.flush();
            }
            else {
                out.write(qiunoyi.get(i).img + "," + qiunoyi.get(i).name + "," + qiunoyi.get(i).guanwang + ",");
                out.flush();
                System.out.println(qiunoyi.get(i).name + qiunoyi.get(i).guanwang + qiunoyi.get(i).img);
            }

        }
        out.close();
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }

}

