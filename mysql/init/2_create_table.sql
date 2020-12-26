
USE share_map;

CREATE TABLE IF NOT EXISTS share_map.users(
  user_id INT NOT NULL auto_increment,
  name VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  token VARCHAR(255),
  PRIMARY KEY (`user_id`)
);