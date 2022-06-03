import json
from enum import Enum
from tokenize import Number, String
from xmlrpc.client import Boolean
from selenium import webdriver
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
import pprint
pp = pprint.PrettyPrinter(depth=4)


class AgeRate(Enum):
    ALL = 1
    RATE_12 = 2
    RATE_15 = 3
    RATE_18 = 4


class WebtoonViewerType(Enum):
    DEFAULT = 1
    CUTTOON = 2
    SHORTANI = 3


class Weekday(Enum):
    MON = 'mon'
    TUE = 'tue'
    WED = 'wed'
    THU = 'thu'
    FRI = 'fri'
    SAT = 'sat'
    SUN = 'sun'


class Creation():
    def __init__(self) -> None:
        self.ageRate: AgeRate = AgeRate.ALL.value
        self.newYN: str = 'N'
        self.webtoonViewerType: WebtoonViewerType = WebtoonViewerType.DEFAULT.value
        self.finished: str = 'N'
        self.restYN: str = 'N'
        self.starscoreToPercent: float
        self.starscoreViewFormat: str
        self.titleName: str
        self.titleId: Number
        self.thumbnailFilename: str
        self.thumbnailFilepath: str
        self.thumbnailImageAlt: str
        self.writer: str
        self.copy: str
        self.genre: str
        self.week: list = list()
        pass

    def __repr__(self) -> str:
        return json.dumps(self.__dict__, ensure_ascii=False)


def main():
    SHARED_COMIC_PSTATIC_URL = 'https://shared-comic.pstatic.net/thumb/webtoon'

    chrome_options = webdriver.ChromeOptions()
    chrome_options.add_argument('--headless')
    chrome_options.add_argument('--no-sandbox')
    chrome_options.add_argument('--disable-dev-shm-usage')

    driver = webdriver.Chrome(
        ChromeDriverManager().install(), chrome_options=chrome_options)

    creationList: dict = dict()
    weekdayList: list = [w.value for w in Weekday]

    weekday = 'mon'
    driver.get(f"https://comic.naver.com/webtoon/weekdayList?week={weekday}")

    img_list = driver.find_element(By.CLASS_NAME, 'img_list')
    list = img_list.find_elements(by=By.TAG_NAME, value="li")

    for i in range(len(list)):
        li = driver.find_elements(
            by=By.CSS_SELECTOR, value=f".img_list li")[i]
        src = li.find_element(by=By.TAG_NAME, value="img").get_attribute("src")
        filepath = src[len(SHARED_COMIC_PSTATIC_URL):]
        d = filepath.rfind('/')

        thumbnailFilename = filepath[d+1:]
        thumbnailFilepath = filepath[:d+1]
        titleId = int(filepath[1:filepath[1:].index('/')+1])
        creation = creationList.get(str(titleId)) or Creation()
        creation.week.append(weekday)
        if len(creation.week) > 1:
            continue

        creation.thumbnailFilename = thumbnailFilename.strip()
        creation.thumbnailFilepath = thumbnailFilepath.strip()
        creation.titleId = titleId

        dl = li.find_element(by=By.TAG_NAME, value="dl")
        titleName = dl.find_element(
            by=By.XPATH, value=".//dt/a").get_attribute("title").strip()
        starscoreToPercent = dl.find_element(
            by=By.CSS_SELECTOR, value="span.star em").get_attribute("style")
        starscoreToPercent = float(starscoreToPercent.split(': ')[1][:-2])
        starscoreViewFormat = dl.find_element(
            by=By.CSS_SELECTOR, value=".rating_type strong").text

        creation.titleName = titleName
        creation.thumbnailImageAlt = titleName
        creation.starscoreToPercent = starscoreToPercent
        creation.starscoreViewFormat = starscoreViewFormat

        elements = li.find_elements(
            by=By.XPATH, value=".//div[@class='thumb']/a/span[@class='mask']/following-sibling::*")
        if len(elements) > 0:
            for element in elements:
                class_name = element.get_attribute("class")
                if class_name == 'ico_new2':
                    creation.newYN = 'Y'
                elif class_name == 'ico_short_ani':
                    creation.webtoonViewerType = WebtoonViewerType.SHORTANI
                elif class_name == 'ico_cut':
                    creation.webtoonViewerType = WebtoonViewerType.CUTTOON.value
                elif class_name == 'finish':
                    creation.finished = 'Y'
                pass

        li.find_element(
            by=By.XPATH, value=".//div[@class='thumb']/a").click()
        writer = driver.find_element(by=By.CLASS_NAME, value="wrt_nm").text
        copy = driver.find_element(
            by=By.CSS_SELECTOR, value=".detail h2 + p").text
        genre = driver.find_element(
            by=By.CSS_SELECTOR, value=".detail_info .genre").text
        age = driver.find_elements(
            by=By.CSS_SELECTOR, value=".detail_info .age")

        if len(age) > 0:
            age = age.pop()
            age = age.text
            if age == "전체연령가":
                creation.ageRate = AgeRate.ALL.value
            elif age == "12세 이용가":
                creation.ageRate = AgeRate.RATE_12.value
            elif age == "15세 이용가":
                creation.ageRate = AgeRate.RATE_15.value
            elif age == "18세 이용가":
                creation.ageRate = AgeRate.RATE_18.value

        ico_break = driver.find_elements(
            by=By.CSS_SELECTOR, value=".detail .ico_break")
        if len(ico_break) > 0:
            creation.restYN = 'Y'

        creation.writer = writer
        creation.copy = copy
        creation.genre = genre
        creationList[str(titleId)] = creation

        driver.back()

    pp.pprint(creationList)
    driver.quit()
    pass


if __name__ == "__main__":
    main()
