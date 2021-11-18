import java.util.ArrayList;
import java.util.List;

public class setData {
    private String image;
    private String name;
    private String URL;
    private String iamge;
    private String info;
    public setData() {
    }
    public String getImage(){
        return image;
    }
    public String getName(){
        return name;
    }
    public String getURL(){
        return URL;
    }
    public void setImage(String _image){
        this.iamge=_image;
    }
    public void setName(String _name){
        this.name=_name;
    }
    public void setURL(String _URL){
        this.URL=_URL;
    }
    public void getPlugins(){
       // List<String> list =new ArrayList<String>();
       info=image+","+name+","+URL+",";
       /* 将数据库传来的数据存入List中*/
    }
}
