-- Returning Strings
-- https://www.codewars.com/kata/55a70521798b14d4750000a4/train/sql

-- # person table has name data
SELECT CONCAT('Hello, ', name, ' how are you doing today?') AS greeting FROM person;
