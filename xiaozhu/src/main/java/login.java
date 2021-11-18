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
public class login extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        response.setContentType("text/html;charset=utf-8");

        //设置响应头允许ajax跨域访问
        response.setHeader("Access-Control-Allow-Origin", "*");

        //星号表示所有的异域请求都可以接受，
        response.setHeader("Access-Control-Allow-Methods", "GET,POST");

        //获取用户输入的用户名和密码
        String transInfo = request.getParameter("user");//用户名
        String password =  request.getParameter("year");//密码
        /*以下两行代码用于后端测试*/
        System.out.println("用户名:" + transInfo);
        System.out.println("密码:" + password);
        Writer out = response.getWriter();
        List<String> list=new ArrayList<>();
        /*new一个数据库操作的对象*/
        
//        out.write(transInfo);
//       out.write(password);
        out.flush();


    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }

}