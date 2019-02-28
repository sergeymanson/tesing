<?php
declare(strict_types=1);

$exampleString = 'camelCasing';

/**
 * @param string $string
 * @return string
 */
function solution(string $string): string
{
    $inputArray = stringToArray($string);
    $preparedString = prepareStringFromArray($inputArray);

    return mb_strtolower ($preparedString);
}

/**
 * @param string $string
 * @return array
 */
function stringToArray(string $string): array
{
    return preg_split('//', $string);
}

/**
 * @param array $inputArray
 * @return string
 */
function prepareStringFromArray(array $inputArray): string
{
    $res = '';

    foreach ($inputArray as $item) {
        if (preg_match('/[A-Z]/', $item)) {
            $res .= ' ';
        }
        $res .= $item;
    }

    return $res;
}


echo solution($exampleString);
