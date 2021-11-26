#include "widget.h"
#include "ui_widget.h"

Widget::Widget(QWidget *parent)
    : QWidget(parent)
    , ui(new Ui::Widget)
{
    ui->setupUi(this);
    //连接数据库
    QSqlDatabase db = QSqlDatabase::addDatabase("QODBC");
        db.setHostName("127.0.0.1");
        db.setPort(3306);
        db.setDatabaseName("xiaozhu");
        db.setUserName("root");
        db.setPassword("910520xyt");
        bool ok = db.open();
        if (ok){
            qDebug()<<"success"<<endl;
        }
        else {
            qDebug()<<"error"<<endl;
        }



    QFile file("C:\\Users\\Lenovo\\Desktop\\text.json");
    file.open(QIODevice::ReadOnly | QIODevice::Text);
    QString value = file.readAll();
    file.close();
//    QTextStream in(&file);
//    QString value;

//    bool flag=1;
//    while(flag)
//    {
//    value="";
//    for(int i=0;i<5;i++)
//    {
//        value+=in.readLine();
//        if(value=="")
//        {
//            flag=0;
//            break;
//        }
//    }
//    if(!flag) break;
    QJsonParseError parseJsonErr;
    QJsonDocument document = QJsonDocument::fromJson(value.toUtf8(),&parseJsonErr);
    if(!(parseJsonErr.error == QJsonParseError::NoError))
    {
       qDebug()<<tr("解析json文件错误！");
       return;
    }

    QJsonArray jsonArray = document.array();
    for(auto it:jsonArray)
    {
        QJsonObject jsonObject=it.toObject();
        QSqlQuery result;
        result.exec(
        QString("insert into information(guanwang,img,name) values('%1','%2','%3')").
                    arg(jsonObject["guanwang"].toString()).
                    arg(jsonObject["img"].toString()).
                    arg(jsonObject["name"].toString())
        );
    }
//    QJsonObject jsonObject = document.object();
//    //qDebug()<<"name"<<jsonObject["name"].toString();
//    QSqlQuery result;
//    result.exec(
//    QString("insert into information(guanwang,img,name) values('%1','%2','%3')").
//                arg(jsonObject["guanwang"].toString()).
//                arg(jsonObject["img"].toString()).
//                arg(jsonObject["name"].toString())
//    );
//    }

//    file.close();
}

Widget::~Widget()
{
    delete ui;
}

