import javax.servlet.http.HttpServlet;
import java.io.IOException;
import java.io.Writer;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
public class pluginsServlet extends HttpServlet {
    /*构造器*/
    public pluginsServlet() {
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        response.setContentType("text/html;charset=UTF-8");
        /*前端传来方法名*/
        /*获取前端传过来的数据，即在搜索框输入的内容：谷歌，微软，火狐等*/
        String methodName = request.getParameter("method");
            /*如果该方法等于search,执行搜索方法*/
            if (methodName.equals("谷歌")) {
                doSearch(request, response);
            }
/*        else if(methodName.equals("comment")){
            doComment(request, response);*/
        }
        protected void doSearch(HttpServletRequest request, HttpServletResponse response) throws IOException {
            Writer out = response.getWriter();
            List<String> list =new ArrayList<>();
            String info="图片，插件，http://alibaba.com";
            list.add(info);
            /*将list中的数据传递到前端*/
            out.write(list.get(0));
        }


    }
