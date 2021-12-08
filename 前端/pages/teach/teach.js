Page({
    /**
     * 页面的初始数据
     */
    data: {
       
       message:[
         {
           id:'0',
           text:"初识插件",
           learn:[
            {
              id:'0',
              num:'1',
              num2:'71',
              pic:'https://www.toolchest.cn/wp-content/uploads/2021/10/1%E5%B0%81%E9%9D%A2-300x169.jpg',
              text1:"课程第1课",
              text2:"主要介绍以下内容：什么是chrome插件，它能干什么？为什么是chrome插件而不是其它浏览器插件?学习chrome插件开发需要哪此知识储备？本课程的主要框架",
            }
           ]
         },
         {
           id: '1',
            text:'文件结构',
            learn:[
              {
                id:'0',
                num:'2',
                num2:'72',
                pic:'https://www.toolchest.cn/wp-content/uploads/2021/10/2%E5%B0%81%E9%9D%A2-300x169.jpg',
                text1:"课程第2课",
                text2:"主要了解一下一个chrome插件的构成",
              }
             ]
         },
         {
            id: '2',
             text:'第一个插件',
             learn:[
               {
                 id:'0',
                 num:'3',
                 num2:'73',
                 pic:'https://www.toolchest.cn/wp-content/uploads/2021/10/3%E5%B0%81%E9%9D%A2-300x169.jpg',
                 text1:"课程第3课",
                 text2:"我们来创建我们的第一个chrome插件helloWorld，该插件的主要功能是，当我们点击插件时弹出hello world界面",
               }
              ]
          },
          {
            id: '3',
             text:'Js的基本用法',
             learn:[
               {
                 id:'0',
                 num:'4',
                 num2:'74',
                 pic:'https://www.toolchest.cn/wp-content/uploads/2021/10/4%E5%B0%81%E9%9D%A2-300x169.jpg',
                 text1:"课程第4课",
                 text2:"本次课程我们将学习如何在插件中使用javaScript。",
               }
              ]
          },
          {
            id: '4',
             text:'storage用法',
             learn:[
               {
                 id:'0',
                 num:'5',
                 num2:'75',
                 pic:'https://www.toolchest.cn/wp-content/uploads/2021/10/5%E5%B0%81%E9%9D%A2-300x169.jpg',
                 text1:"课程第5课",
                 text2:"本次课程我们主要学习storage用法，数据存储。从本次开始我们编写一个具有实用价值的插件–预算管理插件。",
               }
              ]
          },
          {
            id: '5',
             text:'设置插件参数',
             learn:[
               {
                num:'6',
                num2:'76',
                 pic:'https://www.toolchest.cn/wp-content/uploads/2021/10/6%E5%B0%81%E9%9D%A2-300x169.jpg',
                 text1:"课程第6课",
                 text2:"本次课我们主要学习options_page的用法，options_page主要用来设置插件的参数。",
               }
              ]
          },
          {
            id: '6',
             text:'消息通知',
             learn:[
               {
                num:'7',
                num2:'77',
                 pic:'https://www.toolchest.cn/wp-content/uploads/2021/10/7%E5%B0%81%E9%9D%A2-300x169.jpg',
                 text1:"课程第7课",
                 text2:"本次课程我们主要学习notifications的用法，notifications会在我们电脑桌面右下角弹出消息提示窗。",
               }
              ]
          },
          {
            id: '7',
             text:'右键菜单',
             learn:[
               {
                num:'8',
                num2:'78',
                 pic:'https://www.toolchest.cn/wp-content/uploads/2021/10/8%E5%B0%81%E9%9D%A2-300x169.jpg',
                 text1:"课程第8课",
                 text2:"本次课程我们主要学习contextMenus的用法，也就是我们的右键菜单。",
               }
              ]
          },
          {
            id: '8',
             text:'添加徽章',
             learn:[
               {
                num:'9',
                num2:'79',
                pic:'https://www.toolchest.cn/wp-content/uploads/2021/10/9%E5%B0%81%E9%9D%A2-300x169.jpg',
                 text1:"课程第9课",
                 text2:"本次课程我们主要学习badge的用法，为我们浏览器工具栏上的插件图标添加徽章。",
               }
              ]
          },
          {
            id: '9',
             text:'特定页面的插件',
             learn:[
               {
                num:'10',
                num2:'80',
                pic:'https://www.toolchest.cn/wp-content/uploads/2021/10/10%E5%B0%81%E9%9D%A2-300x169.jpg',
                 text1:"课程第10课",
                 text2:"本次课程开始我们将学习pageAction，只针对特定页面的插件。",
               }
              ]
          },
          {
            id: '10',
             text:'注入代码',
             learn:[
               {
                num:'11',
                num2:'81',
                pic:'https://www.toolchest.cn/wp-content/uploads/2021/10/11%E5%B0%81%E9%9D%A2-300x169.jpg',
                 text1:"课程第11课",
                 text2:"本次课程我们将学习content_scripts用法，content_scripts将向页面中注入代码，包括js和css。",
               }
              ]
          },
          {
            id: '11',
             text:'重写页面',
             learn:[
               {
                num:'12',
                num2:'82',
                pic:'https://www.toolchest.cn/wp-content/uploads/2021/10/12%E5%B0%81%E9%9D%A2-300x169.jpg',
                 text1:"课程第12课",
                 text2:"本次课程我们主要来浏览器页面的重写。我们可以自定义浏览器的3个页面，分别是新标签页、历史页和书签管理页。",
               }
              ]
          },
          {
            id: '12',
             text:'谷歌翻译案例',
             learn:[
               {
                num:'13',
                num2:'83',
                pic:'https://www.toolchest.cn/wp-content/uploads/2021/10/13%E5%B0%81%E9%9D%A2-300x169.jpg',
                 text1:"课程第13课",
                 text2:"本次课程，我们将通过一个案例对前期知识做一个综合回顾。",
               }
              ]
          },
          {
            id: '13',
             text:'语音朗读案例',
             learn:[
               {
                num:'14',
                num2:'84',
                pic:'https://www.toolchest.cn/wp-content/uploads/2021/10/14%E5%B0%81%E9%9D%A2-300x169.jpg',
                 text1:"课程第14课",
                 text2:"本次课程我们再讲一个类似的案例，语音朗读。",
               }
              ]
          },
          {
            id: '14',
             text:'content_scripts',
             learn:[
               {
                num:'15',
                num2:'85',
                 pic:'https://www.toolchest.cn/wp-content/uploads/2021/10/15%E5%B0%81%E9%9D%A2-300x169.jpg',
                 text1:"课程第15课",
                 text2:"本次课程开始，我们进入第一专题content_scripts。",
               }
              ]
          },
          {
            id: '15',
             text:'更便捷注入代码',
             learn:[
               {
                num:'16',
                num2:'86',
                pic:'https://www.toolchest.cn/wp-content/uploads/2021/10/16%E5%B0%81%E9%9D%A2-300x169.jpg',
                 text1:"课程第16课",
                 text2:"本次课程我们学习1种更便捷的向页面注入代码的方法executeScript。",
               }
              ]
          },
          {
            id: '16',
             text:'设置背景图',
             learn:[
               {
                num:'17',
                num2:'87',
                 pic:'https://www.toolchest.cn/wp-content/uploads/2021/10/17%E5%B0%81%E9%9D%A2-300x169.jpg',
                 text1:"课程第17课",
                 text2:"本次课程我们将学习web_accessible_resources。",
               }
              ]
          },
          {
            id: '17',
             text:'修改页面样式',
             learn:[
               {
                num:'18',
                num2:'88',
                 pic:'https://www.toolchest.cn/wp-content/uploads/2021/10/18%E5%B0%81%E9%9D%A2-300x169.jpg',
                 text1:"课程第18课",
                 text2:"本次课程将我们学习insertCSS。",
               }
              ]
          },
          {
            id: '18',
             text:'修改页面样式',
             learn:[
               {
                num:'19',
                num2:'89',
                 pic:'https://www.toolchest.cn/wp-content/uploads/2021/10/19%E5%B0%81%E9%9D%A2-300x169.jpg',
                 text1:"课程第19课",
                 text2:"本次课程我们先简要介绍3种消息传递方式并对其中的长消息传递进行详解。",
               }
              ]
          },
          {
            id: '19',
             text:'百度翻译案例1',
             learn:[
               {
                num:'20',
                num2:'90',
                 pic:'https://www.toolchest.cn/wp-content/uploads/2021/10/20%E5%B0%81%E9%9D%A2-300x169.jpg',
                 text1:"课程第20课",
                 text2:"从本次课程开始，我们开始讲解综合案例：百度翻译插件。",
               }
              ]
          },
          {
            id: '20',
             text:'百度翻译案例2',
             learn:[
               {
                num:'21',
                num2:'91',
                 pic:'https://www.toolchest.cn/wp-content/uploads/2021/10/21%E5%B0%81%E9%9D%A2-300x169.jpg',
                 text1:"课程第21课",
                 text2:"本次课程我们学习百度翻译API的申请和使用。",
               }
              ]
          },
          {
            id: '21',
             text:'百度翻译案例3',
             learn:[
               {
                num:'22',
                num2:'92',
                 pic:'https://www.toolchest.cn/wp-content/uploads/2021/10/22%E5%B0%81%E9%9D%A2-300x169.jpg',
                 text1:"课程第22课",
                 text2:"本次课程我们开始编写我们代码的总体框架。",
               }
              ]
          },
          {
            id: '22',
             text:'百度翻译案例4',
             learn:[
               {
                num:'23',
                num2:'93',
                 pic:'https://www.toolchest.cn/wp-content/uploads/2021/10/23%E5%B0%81%E9%9D%A2-300x169.jpg',
                 text1:"课程第23课",
                 text2:"本次课程我们重点学习如何在插件中进行跨域访问。",
               }
              ]
          },
          {
            id: '23',
             text:'插件调试',
             learn:[
               {
                num:'24',
                num2:'94',
                 pic:'https://www.toolchest.cn/wp-content/uploads/2021/10/25%E5%B0%81%E9%9D%A2-300x169.jpg',
                 text1:"课程第24课",
                 text2:"本次课程我们主要学习插件的调试，主要从popup、options、background和content_scripts四个部分讲解。",
               }
              ]
          },
          {
            id: '24',
             text:'插件打包',
             learn:[
               {
                num:'25',
                num2:'95',
                 pic:'https://www.toolchest.cn/wp-content/uploads/2021/10/25%E5%B0%81%E9%9D%A2-300x169.jpg',
                 text1:"课程第25课",
                 text2:"本次课程我们讲解插件的打包。",
               }
              ]
          },
          
]
},
       
  
    clickList:function(e){
       console.log(e)
       let num = e.target.id
       console.log(num)
       let content = this.data.message[num].learn
       console.log(content.text)
        this.setData({
            num:num,
            content:content
        })
        console.log(this) 
    },

    copy1:function(event){
      let a=0;
      wx.setClipboardData({
        data: 'https://www.bilibili.com/video/BV1a64y187QR?p=1', //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制链接成功'
              })
            }
          })
        }
      })
    },
    copy71:function(event){
      let a=0;
      wx.setClipboardData({
        data: 'BV1a64y187QR', //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制BV号成功'
              })
            }
          })
        }
      })
    },
    copy2:function(event){
      let a=0;
      wx.setClipboardData({
        data: 'https://www.bilibili.com/video/BV1a64y187QR?p=2', //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制链接成功'
              })
            }
          })
        }
      })
    },
    copy72:function(event){
      let a=0;
      wx.setClipboardData({
        data: 'BV1a64y187QR', //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制BV号成功'
              })
            }
          })
        }
      })
    },
    copy3:function(event){
      let a=0;
      wx.setClipboardData({
        data: 'https://www.bilibili.com/video/BV1a64y187QR?p=3', //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制链接成功'
              })
            }
          })
        }
      })
    },
    copy73:function(event){
      let a=0;
      wx.setClipboardData({
        data: 'BV1a64y187QR', //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制BV号成功'
              })
            }
          })
        }
      })
    },
    copy4:function(event){
      let a=0;
      wx.setClipboardData({
        data: 'https://www.bilibili.com/video/BV1a64y187QR?p=4', //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制链接成功'
              })
            }
          })
        }
      })
    },
    copy74:function(event){
      let a=0;
      wx.setClipboardData({
        data: 'BV1a64y187QR', //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制BV号成功'
              })
            }
          })
        }
      })
    },
    copy5:function(event){
      let a=0;
      wx.setClipboardData({
        data: 'https://www.bilibili.com/video/BV1a64y187QR?p=5', //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制链接成功'
              })
            }
          })
        }
      })
    },
    copy75:function(event){
      let a=0;
      wx.setClipboardData({
        data: 'BV1a64y187QR', //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制BV号成功'
              })
            }
          })
        }
      })
    },
    copy6:function(event){
      let a=0;
      wx.setClipboardData({
        data: 'https://www.bilibili.com/video/BV1a64y187QR?p=6', //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制链接成功'
              })
            }
          })
        }
      })
    },
    copy76:function(event){
      let a=0;
      wx.setClipboardData({
        data: 'BV1a64y187QR', //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制BV号成功'
              })
            }
          })
        }
      })
    },
    copy7:function(event){
      let a=0;
      wx.setClipboardData({
        data: 'https://www.bilibili.com/video/BV1bv411G7CR', //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制链接成功'
              })
            }
          })
        }
      })
    },
    copy77:function(event){
      let a=0;
      wx.setClipboardData({
        data: 'BV1bv411G7CR', //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制BV号成功'
              })
            }
          })
        }
      })
    },
    copy8:function(event){
      let a=0;
      wx.setClipboardData({
        data: 'https://www.bilibili.com/video/BV1jh411J7Ed', //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制链接成功'
              })
            }
          })
        }
      })
    },
    copy78:function(event){
      let a=0;
      wx.setClipboardData({
        data: 'BV1jh411J7Ed', //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制BV号成功'
              })
            }
          })
        }
      })
    },
    copy9:function(event){
      let a=0;
      wx.setClipboardData({
        data: 'https://www.bilibili.com/video/BV1m34y1U7w4', //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制链接成功'
              })
            }
          })
        }
      })
    },
    copy79:function(event){
      let a=0;
      wx.setClipboardData({
        data: 'BV1m34y1U7w4', //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制BV号成功'
              })
            }
          })
        }
      })
    },
    copy10:function(event){
      let a=0;
      wx.setClipboardData({
        data: 'https://www.bilibili.com/video/BV1mq4y1R7Q5', //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制链接成功'
              })
            }
          })
        }
      })
    },
    copy80:function(event){
      let a=0;
      wx.setClipboardData({
        data: 'BV1mq4y1R7Q5', //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制BV号成功'
              })
            }
          })
        }
      })
    },
    copy11:function(event){
      let a=0;
      wx.setClipboardData({
        data: 'https://www.bilibili.com/video/BV1ev411g78Z', //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制链接成功'
              })
            }
          })
        }
      })
    },
    copy81:function(event){
      let a=0;
      wx.setClipboardData({
        data: 'BV1ev411g78Z', //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制BV号成功'
              })
            }
          })
        }
      })
    },
    copy12:function(event){
      let a=0;
      wx.setClipboardData({
        data: ' https://www.bilibili.com/video/BV1GQ4y1X7jf', //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制链接成功'
              })
            }
          })
        }
      })
    },
    copy82:function(event){
      let a=0;
      wx.setClipboardData({
        data: 'BV1GQ4y1X7jf', //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制BV号成功'
              })
            }
          })
        }
      })
    },
    copy13:function(event){
      let a=0;
      wx.setClipboardData({
        data: 'https://www.bilibili.com/video/BV1Av411g7s8', //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制链接成功'
              })
            }
          })
        }
      })
    },
    copy83:function(event){
      let a=0;
      wx.setClipboardData({
        data: 'BV1Av411g7s8', //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制BV号成功'
              })
            }
          })
        }
      })
    },
    copy14:function(event){
      let a=0;
      wx.setClipboardData({
        data: 'https://www.bilibili.com/video/BV1qq4y1d777', //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制链接成功'
              })
            }
          })
        }
      })
    },
    copy84:function(event){
      let a=0;
      wx.setClipboardData({
        data: 'BV1qq4y1d777', //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制BV号成功'
              })
            }
          })
        }
      })
    },
    copy15:function(event){
      let a=0;
      wx.setClipboardData({
        data: 'https://www.bilibili.com/video/BV1sq4y1d7nL', //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制链接成功'
              })
            }
          })
        }
      })
    },
    copy85:function(event){
      let a=0;
      wx.setClipboardData({
        data: 'BV1sq4y1d7nL', //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制BV号成功'
              })
            }
          })
        }
      })
    },
    copy16:function(event){
      let a=0;
      wx.setClipboardData({
        data: 'https://www.bilibili.com/video/BV1CU4y1F7v4', //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制链接成功'
              })
            }
          })
        }
      })
    },
    copy86:function(event){
      let a=0;
      wx.setClipboardData({
        data: 'BV1CU4y1F7v4', //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制BV号成功'
              })
            }
          })
        }
      })
    },
    copy17:function(event){
      let a=0;
      wx.setClipboardData({
        data: 'https://www.bilibili.com/video/BV18h411b7MS', //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制链接成功'
              })
            }
          })
        }
      })
    },
    copy87:function(event){
      let a=0;
      wx.setClipboardData({
        data: 'BV18h411b7MS', //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制BV号成功'
              })
            }
          })
        }
      })
    },
    copy18:function(event){
      let a=0;
      wx.setClipboardData({
        data: 'https://www.bilibili.com/video/BV1Du411d7bT', //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制链接成功'
              })
            }
          })
        }
      })
    },
    copy88:function(event){
      let a=0;
      wx.setClipboardData({
        data: 'BV1Du411d7bT', //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制BV号成功'
              })
            }
          })
        }
      })
    },
    copy19:function(event){
      let a=0;
      wx.setClipboardData({
        data: 'https://www.bilibili.com/video/BV1j34y1m7W8', //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制链接成功'
              })
            }
          })
        }
      })
    },
    copy89:function(event){
      let a=0;
      wx.setClipboardData({
        data: 'BV1j34y1m7W8', //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制BV号成功'
              })
            }
          })
        }
      })
    },
    copy20:function(event){
      let a=0;
      wx.setClipboardData({
        data: 'https://www.bilibili.com/video/BV19P4y1t7jy', //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制链接成功'
              })
            }
          })
        }
      })
    },
    copy90:function(event){
      let a=0;
      wx.setClipboardData({
        data: 'BV19P4y1t7jy', //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制BV号成功'
              })
            }
          })
        }
      })
    },
    copy21:function(event){
      let a=0;
      wx.setClipboardData({
        data: 'https://www.bilibili.com/video/BV17U4y1c7R6', //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制链接成功'
              })
            }
          })
        }
      })
    },
    copy91:function(event){
      let a=0;
      wx.setClipboardData({
        data: 'BV17U4y1c7R6', //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制BV号成功'
              })
            }
          })
        }
      })
    },
    copy22:function(event){
      let a=0;
      wx.setClipboardData({
        data: 'https://www.bilibili.com/video/BV1Tb4y1a7k1', //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制链接成功'
              })
            }
          })
        }
      })
    },
    copy92:function(event){
      let a=0;
      wx.setClipboardData({
        data: 'BV1Tb4y1a7k1', //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制BV号成功'
              })
            }
          })
        }
      })
    },
    copy23:function(event){
      let a=0;
      wx.setClipboardData({
        data: 'https://www.bilibili.com/video/BV1zu411o7zB', //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制链接成功'
              })
            }
          })
        }
      })
    },
    copy93:function(event){
      let a=0;
      wx.setClipboardData({
        data: 'BV1zu411o7zB', //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制BV号成功'
              })
            }
          })
        }
      })
    },
    copy24:function(event){
      let a=0;
      wx.setClipboardData({
        data: 'https://www.bilibili.com/video/BV1ML4y1z7ba', //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制链接成功'
              })
            }
          })
        }
      })
    },
    copy94:function(event){
      let a=0;
      wx.setClipboardData({
        data: 'BV1ML4y1z7ba', //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制BV号成功'
              })
            }
          })
        }
      })
    },
    copy25:function(event){
      let a=0;
      wx.setClipboardData({
        data: 'https://www.bilibili.com/video/BV1QF411e78D', //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制链接成功'
              })
            }
          })
        }
      })
    },
    copy95:function(event){
      let a=0;
      wx.setClipboardData({
        data: 'BV1QF411e78D', //这个是要复制的数据
        success (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制BV号成功'
              })
            }
          })
        }
      })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
  
    },
  
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
  
    },
  
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
       
    },
  
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
      
    },
  
    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
    
    },
  
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
  
    },
  
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
  
    },
  
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
  
    }
  })