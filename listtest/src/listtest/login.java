package listtest;

import java.util.ArrayList;
import java.util.List;
public class login{
	
	public static void main(String[] args) {
	    List<test> list=new ArrayList<>();
	    test t=new test("���ͼƬ1,�����1, URL1","���ͼƬ1,�����1, URL1","���ͼƬ1,�����1, URL1");
	    list.add(t);
		String s=list.get(0).a+","+list.get(0).b+","+list.get(0).c;
		System.out.println(list.size());
	    System.out.println(list.get(0).a);
	    System.out.println(s); 
	}	
}	

