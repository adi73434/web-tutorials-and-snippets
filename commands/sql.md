

## Remove all tables from a database


```sql
-- See: https://stackoverflow.com/a/12403746/13310905
SET FOREIGN_KEY_CHECKS = 0; 
SET @tables = NULL;
SELECT GROUP_CONCAT('`', table_schema, '`.`', table_name, '`') INTO @tables
  FROM information_schema.tables 
  WHERE table_schema = 'database-name'; -- specify DB name here.

SET @tables = CONCAT('DROP TABLE ', @tables);
PREPARE stmt FROM @tables;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;
SET FOREIGN_KEY_CHECKS = 1;
```
