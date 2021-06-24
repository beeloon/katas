package main

import (
	"fmt"
	"strconv"
	"strings"
)

func HighAndLow(in string) string {
	var a, b int
	strings := strings.Fields(in)

	for i, s := range strings {
		n, _ := strconv.Atoi(string(s))

		if i == 0 {
			a, b = n, n
		}

		if n > a {
			a = n
		}

		if n < b {
			b = n
		}
	}

	return fmt.Sprintf("%d %d", a, b)
}

// func HighAndLow(in string) string {
// 	strings := strings.Fields(in)
// 	numbers := []int{}

// 	for _, s := range strings {
// 		n, _ := strconv.Atoi(s)
// 		numbers = append(numbers, n)
// 	}

// 	sort.Ints(numbers)

// 	return fmt.Sprintf("%d %d", numbers[len(numbers) - 1], numbers[0])
// }

// func HighAndLow(in string) string {
// 	splitted := strings.Split(in, " ")
// 	first, _ := strconv.Atoi(string(splitted[0]))

// 	a, b := first, first

// 	for _, v := range splitted {
// 		value, _ := strconv.Atoi(string(v))

// 		if value > b {
// 			b = value
// 		}
// 		if value < a {
// 			a = value
// 		}
// 	}

// 	return strconv.Itoa(b) + " " + strconv.Itoa(a)
// }

func main() {
	fmt.Println(HighAndLow("1 0"))
	fmt.Println(HighAndLow("1 2 -3 4 5"))
	fmt.Println(HighAndLow("1 9 3 4 -5"))
}
