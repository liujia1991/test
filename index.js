require ("iedriver");
var webdriver =require("selenium-webdriver");
var driver = new webdriver.Builder().forBrowser("ie").build(); //创建一个

driver.get("http://www.baidu.com");//打开百度
driver.sleep(3000)
driver.findElement({css:"#kw"}).sendKeys("test");//在输入框输入test
driver.findElement({id:"su"}).click();//点击搜索

