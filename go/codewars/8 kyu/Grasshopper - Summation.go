package main

import "fmt"

// func Summation(n int) int {
// 	sum := 0

// 	for n > 0 {
// 		sum += n
// 		n--
// 	}

// 	return sum
// }

// func Summation(n int) int {
// 	if n == 0 {
// 		return n
// 	}

// 	return n + Summation(n-1)
// }

func Summation(n int) int {
	return n * (n + 1) / 2
}

func main() {
	fmt.Println(Summation(2))
}
