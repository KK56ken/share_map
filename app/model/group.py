import MySQLdb

from db import DBConnector
from model.project import project

class group:
  def __init__(self):
    self.attr = {}
    self.attr["group_id"] = None
    self.attr["group_pass"] = None

  @staticmethod
  def migrate():
    with DBConnector(dbName=None) as con, con.cursor() as cursor:
      #データベース作成
      cursor.execute('CREATE DATABASE IF NOT EXISTS %s;' % project.name())
      #生成したデータベースに移動
      cursor.execute('USE %s;' % project.name())
      # テーブル初期化(DROP)
      cursor.execute('DROP TABLE IF EXISTS `group`;')
      # テーブル初期化(CREATE)
      cursor.execute("""
          CREATE TABLE `group` (
                    `group_id` int(100) unsigned NOT NULL AUTO_INCREMENT,
                    `group_pass` varchar(255) NOT NULL DEFAULT '',
                    PRIMARY KEY (`group_id`)
          ); """)
      cursor.execute("""
        INSERT INTO `group` (group_pass) VALUES ('abulkjdf')
      """)
      con.commit()

  @staticmethod
  def db_cleaner():
      with DBConnector(dbName=None) as con, con.cursor() as cursor:
          cursor.execute('DROP DATABASE IF EXISTS %s;' % project.name())
          con.commit()


