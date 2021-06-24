package main

import (
	"fmt"
	"strings"
)

// func RepeatStr(repetitions int, value string) (result string) {
// 	for n := 0; n < repetitions; n++ {
// 		result += value
// 	}

// 	return
// }

func RepeatStr(repetitions int, value string) string {
	return strings.Repeat(value, repetitions)
}

func main() {
	fmt.Println(RepeatStr(5, "mongo"))
}
