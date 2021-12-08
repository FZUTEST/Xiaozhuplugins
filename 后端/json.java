package com.example.wxtest;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

@WebServlet(name = "json", urlPatterns = "/json")
public class json extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        response.setContentType("text/html;charset=utf-8");

        //设置响应头允许ajax跨域访问
        response.setHeader("Access-Control-Allow-Origin", "*");

        //星号表示所有的异域请求都可以接受，
        response.setHeader("Access-Control-Allow-Methods", "GET,POST");

        //获取微信小程序传递的参数值并打印
        PrintWriter out = response.getWriter();

        //取得小程序传过来的数据
        String name = request.getParameter("name") ;
        String guanwang = request.getParameter("guanwang") ;
        String img = request.getParameter("img") ;
        //将传过来的数据转变为json格式发送出去。
       // String transInfo = request.getParameter("username");//前端返回的搜索值
        ArrayList<Statistic> change=SQL_Operation.search(name);
        System.out.println(name);
        System.out.println(change.size());
        JSONArray jsonArray = new JSONArray() ;
//        JSONObject jsonObject= new JSONObject() ;
//         jsonObject.put("name", nameString) ;
//            jsonObject.put("url",pasString) ;
//            jsonObject.put("logo",logString) ;
        List<String>list=new ArrayList<>();
        for(int i=0;i<change.size();i++) {
            String str = change.get(i).guanwang+change.get(i).img+change.get(i).name;
            System.out.println(str);
            list.add(i,str);
        }
        jsonArray.add(list);
        jsonArray= JSON.parseArray(JSONObject.toJSONString(change));
           // jsonArray.add(jsonObject) ;
            //out.println(jsonArray);
        System.out.println(jsonArray.size());
        for(int i=0;i<jsonArray.size();i++){
            String index=Integer.toString(i);
            System.out.println((index+":"+jsonArray.getJSONObject(i)));
            out.println((index+":"+jsonArray.getJSONObject(i)));
        }
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}

