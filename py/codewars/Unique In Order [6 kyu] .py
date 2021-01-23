'''
Takes as argument a sequence and returns a list of items
without any elements with the same value next to each other
and preserving the original order of elements.
'''


def unique_in_order(iterable):
    result = []
    prev = None

    for char in iterable:
        if char != prev:
            prev = char
            result.append(char)

    return result


print(unique_in_order([1, 2, 2, 3, 3]) == [1, 2, 3])
print(unique_in_order('ABBCcAD') == ['A', 'B', 'C', 'c', 'A', 'D'])
print(unique_in_order('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B'])
