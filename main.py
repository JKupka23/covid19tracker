from bs4 import BeautifulSoup
from urllib.request import urlopen
#import urllib2
import json

url = 'http://covidtracking.com/api/us'
html = urlopen(url)

data = json.load(html) #The data of the API
print data
