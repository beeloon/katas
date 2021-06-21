package main

import (
	"fmt"
)

func MakeNegative(x int) int {
	if x > 0 {
		return -x
	}
	return x
}

// func MakeNegative(x int) int {
// 	return -int(math.Abs(float64(x)))
// }

func main() {
	fmt.Println(MakeNegative(4))
	fmt.Println(MakeNegative(53))
	fmt.Println(MakeNegative(-34 - 44))
}
