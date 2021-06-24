package main

import "fmt"

// func ReverseString(word string) (result string) {
// 	for i := len(word) - 1; i > -1; i-- {
// 		result += string(word[i])
// 	}
// 	return
// }

func ReverseString(word string) (result string) {
	for _, c := range word {
		result = string(c) + result
	}
	return
}

func main() {
	fmt.Println(ReverseString("world"))
}
