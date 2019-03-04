<?php

$arr = [
    '123 456', // 0
    '555 555', // 3
    '123 594' // 1
];

function main($array)
{
    $res = [];

    foreach ($array as $item) {
        $res[] = carry(explode(' ', $item));
    }

    return $res;
}


function carry($array)
{
    $res = 0;
    $loop = true;
    $a = intval($array[0]);
    $b = intval($array[1]);

    while ($loop && ($a > 0 || $b > 0)) {

        if (($a % 10 + $b % 10) / 10 >= 1) {
            $res++;
        }

        $a = intval($a / 10);
        $b = intval($b / 10);

        if ($a == 0 && $b == 0) {
            $loop = false;
        }
    }

    return $res;
}



foreach (main($arr) as $item) {
    echo $item;
    echo '<br>';
}