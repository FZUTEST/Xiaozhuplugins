package com.example.wxtest;

import com.alibaba.fastjson.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.Writer;
import java.net.URL;

import static com.alibaba.fastjson.JSON.parseObject;

@WebServlet(name = "login", urlPatterns = "/login")
public class login extends HttpServlet {
    public String openid;
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=utf-8");

        //设置响应头允许ajax跨域访问
        response.setHeader("Access-Control-Allow-Origin", "*");

        //星号表示所有的异域请求都可以接受，
        response.setHeader("Access-Control-Allow-Methods", "GET,POST");
        Writer out=response.getWriter();
        //获取微信小程序传递的参数值并打印
        String code = request.getParameter("ID");//前端返回的搜索值
        System.out.println(code);

//        System.out.println(id);
//        out.write(id);
//------------------------------------------------------------------------------------------------


        StringBuilder json = new StringBuilder();
        String url ;
        BufferedReader in ;
        String inputLine ;
        String json1 ;
        //这里的appid与secret换成你自己的secret
        url = "https://api.weixin.qq.com/sns/jscode2session?appid=wxc55e1861f401cf25&secret=339142b2466fba5a1334e8f8cf657fd9&js_code="
                + code + "&grant_type=authorization_code";
        System.out.println(url);
        in = new BufferedReader(new InputStreamReader(new URL(url)
                .openConnection().getInputStream(), "utf-8"));
        while ((inputLine = in.readLine()) != null) {
            json.append(inputLine);
        }
        System.out.println(json);
        in.close();
        json1 = json.toString();
        JSONObject jobject = parseObject(json1);

        //System.out.println(json1);
        openid = jobject.getString("openid");
        out.write(openid);
        System.out.println(openid);


//------------------------------------------------------------------------------------------------------------
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}

