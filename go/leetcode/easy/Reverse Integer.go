// https://leetcode.com/problems/reverse-integer/
package main

import (
	"fmt"
	"math"
)

func abs(x int) int {
	if x > 0 {
		return x
	}

	return -x
}

func reverse(x int) int {
	num := 0

	for x != 0 {
		lastDigit := x % 10
		x = int(math.Trunc(float64(x / 10)))
		num = (num * 10) + lastDigit
	}

	if abs(num) > 2147483647 {
		return 0
	}

	return num
}

func main() {

	fmt.Println(math.Pow(2, 31))
}
