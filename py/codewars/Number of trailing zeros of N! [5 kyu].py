'''Calculate the number of trailing zeros in a factorial of a given number'''


def zeros(n):
    count = 0

    i = 5
    while n / i >= 1:
        count += int(n / i)
        i *= 5

    return int(count)


# Short solution
def zeros(n):
    x = n / 5
    return int(x + zeros(x)) if x else 0


print(zeros(2) == 0)
print(zeros(6) == 1)
print(zeros(188) == 45)
print(zeros(1000) == 249)
