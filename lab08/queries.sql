-- 8.1
-- a.
SELECT *
FROM Game
ORDER BY time DESC;
-- b.
SELECT *
FROM Game
WHERE time > '2020-10-17 00:00:00';
-- c.
SELECT *
FROM Player
WHERE Player.name IS NOT NULL;
-- d.
SELECT playerID
FROM PlayerGame
WHERE score > 2000;
-- e.
SELECT *
FROM Player
WHERE emailAddress LIKE '%@gmail%';

-- 8.2
-- a.
SELECT *
FROM Player, PlayerGame
WHERE name = 'The King' 
ORDER BY score DESC;
-- b.
SELECT name
FROM Player, PlayerGame, Game
WHERE time LIKE '2006-06-28 13:20:00'
ORDER BY score DESC
LIMIT 1;

-- c. Including this statement will guarantee that pairs of names will only be returned once per pair and not twice.

-- d. Anytime you want to search for entries with the same certain value, you can join a table with itself to find that shared value.