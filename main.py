def lastDigit(A):
    if A == []:
        return 1

    e = 1
    for n in A[::-1]:
        e = n ** (e if e < 4 else e % 4 + 4)
    return e % 10


print(lastDigit([499942, 898102, 846073]))
