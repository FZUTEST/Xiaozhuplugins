#ifndef WIDGET_H
#define WIDGET_H

#include <QWidget>
#include <QtSql/QSqlDatabase>
#include <QMessageBox>
#include <QDebug>
#include <QString>
#include <QByteArray>
#include <QtSql/QSqlError>
#include <QtSql/QSqlQuery>


#include <QJsonDocument>
#include <QJsonParseError>
#include <QJsonObject>
#include <QJsonArray>
#include <QJsonValue>
#include <QFile>
#include <QTextStream>



QT_BEGIN_NAMESPACE
namespace Ui { class Widget; }
QT_END_NAMESPACE

class Widget : public QWidget
{
    Q_OBJECT

public:
    Widget(QWidget *parent = nullptr);
    ~Widget();

private:
    Ui::Widget *ui;
};
#endif // WIDGET_H
