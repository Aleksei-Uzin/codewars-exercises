-- Remove First and Last Character
-- https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/sql

-- # write your SQL statement here:
-- you are given a table 'removechar' with column 's',
-- return a table with column 's' and your result in a column named 'res'.
SELECT s, SUBSTRING(s FROM 2 FOR LENGTH(s) - 2) AS res FROM removechar;
