<?php
declare(strict_types=1);

$arr = [
    '123 456', // 0
    '555 555', // 3
    '123 594' // 1
];

/**
 * @param array $array
 * @return array
 */
function carry(array $array): array
{
    $res = [];

    foreach ($array as $item) {
        $res[] = countCarry(explode(' ', $item));
    }

    return $res;
}

/**
 * @param array $array
 * @return int
 */
function countCarry(array $array): int
{
    $res = 0;
    $a = intval($array[0]);
    $b = intval($array[1]);

    while ($a > 0 || $b > 0) {
        if (hasCarry($a, $b)) {
            $res++;
        }
        $a = intval($a / 10);
        $b = intval($b / 10);

    }

    return $res;
}

/**
 * @param $a
 * @param $b
 * @return bool
 */
function hasCarry(int $a, int $b): bool
{
    return ($a % 10 + $b % 10) / 10 >= 1;
}

foreach (carry($arr) as $item) {
    echo $item;
    echo '<br>';
}