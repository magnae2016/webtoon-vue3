import json
from enum import Enum
from tokenize import Number, String
from xmlrpc.client import Boolean
from selenium import webdriver
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager


class AgeRate(Enum):
    ALL = 1
    RATE_15 = 2
    RATE_18 = 3


class WebtoonViewerType(Enum):
    DEFAULT = 1
    CUTTOON = 2


class Creation():
    def __init__(self) -> None:
        self.ageRate: AgeRate = AgeRate.ALL.value
        self.newYN: String = 'N'
        self.shortAniYN: String = 'N'
        self.webtoonViewerType: WebtoonViewerType = WebtoonViewerType.DEFAULT.value
        self.finished: String = 'N'
        self.restYN: String = 'N'
        self.starscoreToPercent: Number
        self.starscoreViewFormat: String
        self.titleName: String
        self.titleId: Number
        self.thumbnailFilename: String
        self.thumbnailFilepath: String
        self.thumbnailImageAlt: String
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

    driver.get("https://comic.naver.com/webtoon/genre?genre=episode")

    img_list = driver.find_element(By.CLASS_NAME, 'img_list')
    list = img_list.find_elements(by=By.TAG_NAME, value="li")

    for li in list:
        creation = Creation()
        src = li.find_element(by=By.TAG_NAME, value="img").get_attribute("src")
        filepath = src[len(SHARED_COMIC_PSTATIC_URL):]
        d = filepath.rfind('/')

        thumbnailFilename = filepath[d+1:]
        thumbnailFilepath = filepath[:d+1]
        titleId = int(filepath[1:filepath[1:].index('/')+1])

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
                if class_name == 'mark_adult_thumb':
                    creation.ageRate = AgeRate.RATE_18.value
                elif class_name == 'ico_new2':
                    creation.newYN = 'Y'
                elif class_name == 'ico_short_ani':
                    creation.shortAniYN = 'Y'
                elif class_name == 'ico_cut':
                    creation.webtoonViewerType = WebtoonViewerType.CUTTOON.value
                elif class_name == 'finish':
                    creation.finished = 'Y'
                pass
        print(creation)

    driver.quit()
    pass


if __name__ == "__main__":
    main()
