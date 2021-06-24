package main

import (
	"fmt"
)

func TwoOldestAges(ages []int) [2]int {
	a, b := 0, 0
	for _, v := range ages {
		if v > b {
			b = v
		} else if v > a {
			a = v
		}
	}

	return [2]int{a, b}
}

// func TwoOldestAges(ages []int) [2]int {
// 	sort.Sort(sort.Reverse(sort.IntSlice(ages)))
// 	return [2]int{ages[1], ages[0]}
// }

func main() {
	ages := []int{7, 2, 4, 55, 32}
	fmt.Println(TwoOldestAges(ages))
}
