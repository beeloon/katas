package main

import (
	"fmt"
	"strings"
)

func ReverseString(word string) (result string) {
	for _, c := range word {
		result = string(c) + result
	}
	return
}

func SpinWords(str string) string {
	s := strings.Fields(str)

	for i, v := range s {
		if len(v) >= 5 {
			s[i] = ReverseString(v)
		}
	}

	return strings.Join(s, " ")
}

func main() {
	f := SpinWords("Hey fellow warriors")
	fmt.Println(f)
}
