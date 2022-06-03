from util._decorators import Singleton
import os
from sqlalchemy import create_engine
from dotenv import load_dotenv
load_dotenv('config/.env')


@Singleton
class MySQLDB:
    connection = None

    def getConnect(self):
        if self.connection is None:
            dialect = 'mysql'
            driver = 'pymysql'
            username = os.environ.get(f'MYSQLDB_USER')
            password = os.environ.get(f'MYSQLDB_PASSWD')
            host = os.environ.get(f'MYSQLDB_HOST')
            database = os.environ.get(f'MYSQLDB_DB')
            url = f'{dialect}+{driver}://{username}:{password}@{host}/{database}'
            self.connection = create_engine(url)
        return self.connection

    pass
