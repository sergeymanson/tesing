<?php
declare(strict_types=1);

/**
 * @param int $number
 * @return string
 */
function spam(int $number = 0): string
{
    return str_repeat('hue', $number);
}


echo spam(1);
echo '</br>';
echo spam(6);
echo '</br>';
echo spam(14);
