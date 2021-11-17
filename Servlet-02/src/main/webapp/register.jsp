<%--
  Created by IntelliJ IDEA.
  User: HP
  Date: 2021/11/17
  Time: 23:22
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>
<body>
<h2>Register!</h2>
<%-- 将这个值传递给HelloServlet这个类处理，使用post方法 --%>
<form action="servlet/LoginServlet" method="post">
    <%--<input type="submit" value="Post请求方式处理HelloServlet">--%>
    userName:<input type="text" name="userName" ><br>
    telephone:<input type="text" name="telephone" ><br>
    startMonth:<input type="text" name="startMonth" ><br>
    endMonth:<input type="text" name="endMonth" ><br>
    <input type="submit" name ="提交">
</form>
</body>
</html>
