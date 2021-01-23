import MySQLdb

from db import DBConnector
from model.project import project

class pin:
  def __init__(self):
    self.attr = {}
    self.attr["pin_id"] = None
    self.attr["group_id"] = None
    self.attr["latitude"] = None
    self.attr["longitude"] = None

  @staticmethod
  def migrate():
    with DBConnector(dbName=None) as con, con.cursor() as cursor:
      #データベース作成
      cursor.execute('CREATE DATABASE IF NOT EXISTS %s;' % project.name())
      #生成したデータベースに移動
      cursor.execute('USE %s;' % project.name())
      # テーブル初期化(DROP)
      cursor.execute('DROP TABLE IF EXISTS `pin`;')
      # テーブル初期化(CREATE)
      cursor.execute("""
          CREATE TABLE `pin` (
                    `pin_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
                    `group_id` int(11) unsigned NOT NULL,
                    `latitude` double(3, 1) NOT NULL,
                    `longitude` double(4, 1) NOT NULL,
                    PRIMARY KEY (`pin_id`)
          );""")
      #確認用ピンデータ追加
      cursor.execute("""
        INSERT INTO `pin` (group_id, latitude, longitude) VALUES(1, 35.4122, 139.4130) """)

      con.commit()

  @staticmethod
  def db_cleaner():
      with DBConnector(dbName=None) as con, con.cursor() as cursor:
          cursor.execute('DROP DATABASE IF EXISTS %s;' % project.name())
          con.commit()
