SELECT 
    *
FROM
    webtoon.CREATION
WHERE
    SUBSTR(weekdayYN, ?, 1) = 'Y'
        AND randId >= FLOOR((RAND() * 100000000))
ORDER BY randId ASC
LIMIT 3;