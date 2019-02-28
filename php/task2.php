<?php
declare(strict_types=1);

$exampleString = 'camelCasing';

/**
 * @param string $input
 * @return string
 */
function solution(string $input): string
{
    $arrayFromInput = splitString($input);
    $implodeInput = implode($arrayFromInput);

    return mb_strtolower($implodeInput);
}

/**
 * @param string $string
 * @return array
 */
function splitString(string $string): array
{
    $res = [];
    $length = strlen($string);

    for ($i=0; $i<$length; $i++) {
        if (preg_match('/[A-Z]/', $string[$i])) {
            $res[] = ' ';
        }
        $res[] = $string[$i];
    }

    return $res;
}

echo solution($exampleString);
