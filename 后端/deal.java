package com.example.wxtest;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.Writer;
import java.util.ArrayList;

@WebServlet(name = "deal", urlPatterns = "/deal")
public class deal extends HttpServlet {
    /*构造器*/

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        response.setContentType("text/html;charset=utf-8");

        //设置响应头允许ajax跨域访问
        response.setHeader("Access-Control-Allow-Origin", "*");

        //星号表示所有的异域请求都可以接受，
        response.setHeader("Access-Control-Allow-Methods", "GET,POST");

        //获取微信小程序传递的参数值并打印
        Writer out=response.getWriter();
        String method = request.getParameter("method");
        String id = request.getParameter("id");
        String name=request.getParameter("name");
        System.out.print(method);

//        删除数据库收藏表某用户的某一收藏项
        if(method.equals('1')){
            SQL_Operation.dropStar(id,name);
        }

//        添加某用户的收藏到数据库收藏表
        else if(method.equals('2')){
            SQL_Operation.addStar(id,name);
        }

//        添加某用户的历史记录到数据库历史记录表
        else if(method.equals('3')){
            SQL_Operation.addHis(id,name);
        }

//        删除数据库历史记录表某用户的某一历史记录
        else if(method.equals('4')){
            SQL_Operation.dropHis(id,name);
        }

//        删除某用户的所有历史记录
        else if(method.equals('5')){
            SQL_Operation.dropHisALL(id);
        }

//        将某用户的历史记录传给前端
        else if(method.equals('6')) {
            ArrayList<HistoryStatistic> showHis = SQL_Operation.searchHis(id);
            //如果某用户历史记录为0，返回前端一个00字符串
            if (showHis.size() == 0) {
                String num = "0" + Integer.toString(showHis.size());
                System.out.println(num);
                out.write(num);
                out.flush();
            }
            //            返回历史记录，|与||格式控制
            else {
                for (int i = 0; i < showHis.size(); i++) {
                    if (i == showHis.size() - 1) {
                        out.write(showHis.get(i).name + "||");
                        out.flush();
                        System.out.println(showHis.get(i).name);
                    } else {
                        out.write(showHis.get(i).name + "|");
                        out.flush();
                        System.out.println(showHis.get(i).name);
                    }
                }
                out.close();
            }
        }

//        将某用户的收藏表传给前端
        else if(method.equals('7')){
            ArrayList<StarStatistic> showStar=SQL_Operation.searchStar(id);
            //如果某用户收藏记录为0，返回前端一个00字符串
            if(showStar.size()==0){
                String num="0"+Integer.toString(showStar.size());
                System.out.println(num);
                out.write(num);
                out.flush();
            }
            //            返回收藏记录，|与||格式控制
            else {
                for (int i = 0; i < showStar.size(); i++) {
                    if (i == showStar.size() - 1) {
                        out.write(showStar.get(i).name + "||");
                        out.flush();
                        System.out.println(showStar.get(i).name);
                    }
                    else {
                        out.write("," + showStar.get(i).name + "|");
                        out.flush();
                        System.out.println(showStar.get(i).name);
                    }
                }
                out.close();
            }
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }

}