<%--
  Created by IntelliJ IDEA.
  User: HP
  Date: 2021/11/17
  Time: 23:23
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>
<body>


<%-- 将这个值传递给HelloServlet这个类处理，使用post方法 --%>

<form>
    <%--<input type="submit" value="Post请求方式处理HelloServlet">--%>
    <jsp:useBean id="user" scope="session" class="com.kang.entity.User"/>
    <table>

        <td>用户名：</td>
        <td><jsp:getProperty name="user" property="userName" /></td></br>
        <td>手机：</td>
        <td><jsp:getProperty name="user" property="telephone" /></td></br>
        <td>开始日期：</td>
        <td><jsp:getProperty name="user" property="startMonth" /></td></br>
        <td>结束日期：</td>
        <td><jsp:getProperty name="user" property="endMonth" /></td></br>
        </tr>
    </table>
</form>
</body>
</html>

