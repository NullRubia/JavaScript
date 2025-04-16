T = int(input())
L = [0]*11
L[1] = 1
L[2] = 2
L[3] = 4

for i in range(4, 11):
    L[i] = L[i-1] + L[i-2] + L[i-3]

for j in range(T):
    n = int(input())
    print(L[n])
