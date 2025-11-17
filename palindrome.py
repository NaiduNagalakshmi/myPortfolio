def is_palindrome(s):
    return s==s[::-1]
start=int(input("Enter starting range:"))
end=int(input("Enter ending range:"))
print(f"palindrome range between {start} and {end}:")
for num in range(start,end+1):
    if is_palindrome(num):
        print(num)



