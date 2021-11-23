package com.example.wxtest;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.Writer;
import java.util.ArrayList;

public class search {

    @WebServlet(name = "search", urlPatterns = "/search")
    public class login extends HttpServlet {

        protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

            response.setContentType("text/html;charset=utf-8");

            //设置响应头允许ajax跨域访问
            response.setHeader("Access-Control-Allow-Origin", "*");

            //星号表示所有的异域请求都可以接受，
            response.setHeader("Access-Control-Allow-Methods", "GET,POST");
            Writer out = response.getWriter();
            //获取微信小程序传递的参数值并打印
            String searchInfo = request.getParameter("searchInfo");//前端搜索框返回的搜索值
            System.out.println(searchInfo);//后台看前端传入何值
            ArrayList<Statistic> searchContent = SQL_Operation.search(searchInfo);

            for (int i = 0; i < searchContent.size(); i++) {
                if (i == searchContent.size() - 1) {//如果到了最后一个插件输出||标志
                    out.write(searchContent.get(i).img + "," + searchContent.get(i).name + "," + searchContent.get(i).guanwang + "||");
                    out.flush();
                } else {
                    out.write(searchContent.get(i).img + "," + searchContent.get(i).name + "," + searchContent.get(i).guanwang + "|");
                    out.flush();
                    System.out.println(searchContent.get(i).name + searchContent.get(i).guanwang + searchContent.get(i).img);
                }
                out.close();
            }

            protected void doPost (HttpServletRequest request, HttpServletResponse response) throws
            ServletException, IOException {
                doPost(request, response);
            }

        }
    }
}
