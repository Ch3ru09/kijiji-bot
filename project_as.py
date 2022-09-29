from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common import keys
import undetected_chromedriver.v2 as uc
from time import sleep
from random import randint as rn
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import string
import warnings
warnings.filterwarnings('ignore')

# *********************************
driver = uc.Chrome()
driver.maximize_window()
sleep(rn(2, 4))
url = 'https://www.kijiji.ca/t-login.html'
driver.get(url)
sleep(rn(2, 4))
email = ''
passw = ''

sleep(5)

# sign-in:

enter_mail = driver.find_element('id', 'emailOrNickname').send_keys(email)
sleep(rn(2,4))
enter_pass = driver.find_element('id', 'password').send_keys(passw)
sleep(rn(2,4))
login_btn = driver.find_element('xpath', '/html/body/div[3]/div[3]/div/div/div/div/div/main/form/button').click()

sleep(5)

wait = WebDriverWait(driver, 20)

wait.until(EC.presence_of_all_elements_located(('xpath', '/html/body/div[3]/div[1]/div/div[2]/div/header/div[3]/div/div[3]/div/a')))

driver.execute_script('window.stop();')


btn_add = driver.find_element('xpath', '/html/body/div[3]/div[1]/div/div[2]/div/header/div[3]/div/div[3]/div/a').click()
sleep(rn(2,4))
title = "" # 名字
add_title = driver.find_element('xpath', '/html/body/div[3]/div[2]/div/div/div/div[2]/div/div/div[2]/div[1]/div/div/div/textarea').send_keys(title)

sleep(rn(3,5))
# next_btn
next_btn = driver.find_element('xpath', '/html/body/div[3]/div[2]/div/div/div/div[2]/div/div/div[2]/div[1]/div/button').click()

sleep(7)
# select_category

# 1. select Real Estate

sel_cat = driver.find_element('xpath', '/html/body/div[3]/div[2]/div/div/div/div[2]/div/div/div[2]/div[2]/div/ul/li[3]/button').click()

sleep(rn(3,5))
# 2. select For Rent

sel_cat_2 = driver.find_element('xpath', '/html/body/div[3]/div[2]/div/div/div/div[2]/div/div/div[2]/div[2]/div/ul[2]/li[1]/button').click()

sleep(rn(3,5))

# 3. select long
sel_cat_3 = driver.find_element('xpath', '/html/body/div[3]/div[2]/div/div/div/div[2]/div/div/div[2]/div[2]/div/ul[2]/li[1]/button').click()
sleep(3)

# select location:
loc1 = driver.fin_element('xpath', '/html/body/div[3]/iv[2]/div/div/div/div[1]/form/div[1]/ul[1]/li[1]/a').click()
sleep(2)
loc2 = driver.fin_element('xpath', '/html/body/div[3]/iv[2]/div/div/div/div[1]/form/div[1]/ul[2]/li[1]/a').click()
sleep(2)

go_btn = driver.find_element('xpath', '/html/body/div[3]/iv[2]/div/div/div/div[1]/form/div[2]/a').click()

sleep(5)

print("搞定")