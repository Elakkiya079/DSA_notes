>> Function calls itself to solve smaller versions of the same problem

** Two parts of recursion

1. Base Case - Stop condition (when to stop calling itself)

2. Recursive Case - part where function calls itself

** Real Life Examples

1. Queue of people

2. Comment threads

3. Organisational hierarchy


>> Base case is necessary to stop the function that calling itself otherwise this infinite calling will leads to stack overflow

>> If misses the base case and it becomes an infinite loop at one point it throws - Range Error [Maximum call stack size exceeded]

** Common Mistakes

1. Missing basecase - stack overflow

2. Not simplifying the input - never reaches the base case

3. Too deep recursion - large inputs

4. keeping in mind the time complexity

** When to use recursion

1. Problem can be broken into sub problems

2. Trees & Graphs

3. Backtracking, DP , Divide & Conquer

