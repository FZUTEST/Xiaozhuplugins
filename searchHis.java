package com.example.wxtest;

import java.io.IOException;
import java.io.Writer;
import java.util.ArrayList;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
public class searchHis {
    @WebServlet(name = "searchHis", urlPatterns = "/searchHis")
    public class login extends HttpServlet {

        protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

            response.setContentType("text/html;charset=utf-8");

            //设置响应头允许ajax跨域访问
            response.setHeader("Access-Control-Allow-Origin", "*");

            //星号表示所有的异域请求都可以接受，
            response.setHeader("Access-Control-Allow-Methods", "GET,POST");
            Writer out = response.getWriter();
            //获取微信小程序传递的参数值并打印
            String userId = request.getParameter("userId");//用户id
            ArrayList<HistoryStatistic>userHis=SQL_Operation.searchHis(userId);
            for(int i=0;i<userHis.size();i++){//后端目前只返回历史记录插件名
                if(i==userHis.size()-1){
                    out.write(userHis.get(i).name+"||");
                    out.flush();
                }
                else{
                    out.write(userHis.get(i).name+"|");
                    out.flush();
                }
            }
            out.close();
            protected void doPost (HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
                doPost(request, response);
            }

        }
    }
}
