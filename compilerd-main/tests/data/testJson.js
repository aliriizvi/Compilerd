// more test cases are added!!!
const testCases = [
  {
      name: 'cpp : hello world',
      reqObject: {
          language: 'cpp',
          script:
              '#include<bits/stdc++.h>\n' +
              'using namespace std;\n' +
              'int main(){\n' +
              '    cout << "hello world";\n' +
              'return 0;\n' +
              '}\n',
      },
      expectedResponse: {
          val: 'hello world',
          status: 200,
          error: 0,
      },
  },
  {
      name: 'cpp : print stdin',
      reqObject: {
          language: 'cpp',
          script:
              '#include<bits/stdc++.h>\n\n' +
              'using namespace std;\n' +
              'int main(){\n\n' +
              '    int a;\n' +
              '    while(cin >> a){\n' +
              '        cout << a << endl;\n' +
              '    }\n' +
              '    return 0;\n\n' +
              '}\n',
          stdin: '1 2 3',
      },
      expectedResponse: {
          val: '1\n2\n3\n',
          status: 200,
          error: 0,
      },

  },
  {
      name: 'nodejs : hello world',
      reqObject: {
          language: 'nodejs',
          script: 'console.log(\'hello world\')',
      },
      expectedResponse: {
          val: 'hello world\n',
          status: 200,
          error: 0,
      },
  },
  {
      name: 'nodejs : print stdin',
      reqObject: {
          language: 'nodejs',
          script:
              'process.stdin.setEncoding(\'utf8\'); \n ' +
              'process.stdin.on(\'data\', (input) => { \n ' +
              '  console.log(input); \n ' +
              ' \n ' +
              '}); \n ',
          stdin: '1 2 3',
      },
      expectedResponse: {
          val: '1 2 3\n',
          status: 200,
          error: 0,
      },
  },
  {
      name: 'python : hello world',
      reqObject: {
          language: 'python',
          script: 'print(\'hello world\')',
      },
      expectedResponse: {
          val: 'hello world\n',
          status: 200,
          error: 0,
      },
  },
  {
      name: 'python : print stdin',
      reqObject: {
          language: 'python',
          script:
              'try:\n' +
              '    while(True):\n' +
              '        line = input()\n' +
              '        if not line:\n' +
              '            break\n' +
              '        print(line)\n' +
              'except EOFError:\n' +
              '    pass',
          stdin: '1 2 3',
      },
      expectedResponse: {
          val: '1 2 3\n',
          status: 200,
          error: 0,
      },
  },
  {
      name: 'c : hello world',
      reqObject: {
          language: 'c',
          script:
              '#include<stdio.h>\n\n' +
              'int main(){\n\n' +
              '    printf("hello world");\n' +
              '    return 0;\n' +
              '}\n',
      },
      expectedResponse: {
          val: 'hello world',
          status: 200,
          error: 0,
      },
  },
  {
      name: 'c : print stdin',
      reqObject: {
          language: 'c',
          script:
              '#include <stdio.h>\n' +
              'int main() {\n' +
              '    int number;\n' +
              '    while (scanf("%d", &number) == 1) {\n' +
              '        printf("%d\\n", number);\n' +
              '    } \n' +
              '    return 0;\n' +
              '}',
          stdin: '1 2 3',
      },
      expectedResponse: {
          val: '1\n2\n3\n',
          status: 200,
          error: 0,
      },
  },
  {
      name: 'java : print stdin',
      reqObject: {
          language: 'java',
          script:
              'import java.util.Scanner;\n' +
              'public class Solution {\n' +
              '    public static void main(String[] args) {\n' +
              '        System.out.println("hello world");\n' +
              '    }\n' +
              '}\n',
      },
      expectedResponse: {
          val: 'hello world\n',
          status: 200,
          error: 0,
      },
  },
  {
      name: 'java : print stdin',
      reqObject: {
          language: 'java',
          script:
              'import java.util.Scanner;\n' +
              'public class Solution {\n' +
              '    public static void main(String[] args) {\n' +
              '        Scanner scanner = new Scanner(System.in);\n' +
              '        while (scanner.hasNextInt()) {\n' +
              '            int number = scanner.nextInt();\n' +
              '            System.out.println(number);\n' +
              '        } \n' +
              '        scanner.close();\n' +
              '    }\n' +
              '}\n',
          stdin: '1 2 3',
      },
      expectedResponse: {
          val: '1\n2\n3\n',
          status: 200,
          error: 0,
      },
  },
  {
      name: 'ruby : print hello world',
      reqObject: {
          language: 'ruby',
          script:
              'print "hello world"'
      },
      expectedResponse: {
          val: 'hello world',
          status: 200,
          error: 0,
      },
  },
  {
      name: 'ruby : print stdin',
      reqObject: {
          language: 'ruby',
          script:
              'user_input = gets.chomp\n' +
              'puts user_input',
          stdin: '10\n'
      },
      expectedResponse: {
          val: '10\n',
          status: 200,
          error: 0,
      },
  },
  {
      name: 'TLE test',
      reqObject: {
          language: 'nodejs',
          script: 'for(let i=0 ; ; ){i++}',
      },
      expectedResponse: {
          val: 'Time limit exceeded',
          status: 200,
          error: 1,
      },
  },
  {
      name: 'MLE test',
      reqObject: {
          language: 'python',
          script: 'one_gb_data = bytearray(1000 * 1024 * 1024)',
      },
      expectedResponse: {
          val: 'Memory limit exceeded',
          status: 200,
          error: 1,
      },
  },
  {
      name: 'MLE test 2',
      reqObject: {
          language: 'python',
          script:
              'import time\n' +
              'def consume_memory(target_mb, duration_sec):\n' +
              '    float_size = 8\n' +
              '    floats_per_mb = (1024 * 1024) // float_size\n' +
              '    total_floats = target_mb * floats_per_mb\n' +
              '    iterations = int(duration_sec / 0.1)\n' +
              '    floats_per_iteration = total_floats // iterations\n' +
              '    memory_hog = []\n' +
              '    for _ in range(iterations):\n' +
              '        memory_hog.extend([0.0] * floats_per_iteration)\n' +
              '        time.sleep(0.1)\n' +
              'consume_memory(1000, 1)\n',
      },
      expectedResponse: {
          val: 'Memory limit exceeded',
          status: 200,
          error: 1,
      },
  },
  {
      name: 'MLE test 3',
      reqObject: {
          language: 'python',
          script:
              'a = [100]\n' +
              'for i in a:\n' +
              '    a.append(i)\n',
      },
      expectedResponse: {
          val: 'Memory limit exceeded',
          status: 200,
          error: 1,
      },
  },
  {
      name: 'OPEN AI test promptv1',
      reqObject: {
          language: 'promptv1',
          prompt: 'The question is what is 2 plus 2. The answer given is 4.',
      },
      expectedResponse: {
          val: {},
          status: 200,
          error: 0,
      },
  },
  {
      name: 'OPEN AI test promptv2',
      reqObject: {
          language: 'promptv2',
          prompt: 'The question is what is 2 plus 2. The answer given is 4.',
      },
      expectedResponse: {
          val: {},
          status: 200,
          error: 0,
      },
  },

  {
      name: "c : calculate factorial",
      reqObject: {
          language: "c",
          script: "#include <stdio.h>\n\nint factorial(int n) {\n    if (n <= 1)\n        return 1;\n    else\n        return n * factorial(n - 1);\n}\n\nint main() {\n    int result = factorial(5);\n    printf(\"Factorial of 5 is %d\\n\", result);\n    return 0;\n}"
      },
      expectedResponse: {
          val: {},
          status: 200,
          error: 0
      }
  },
  {
      name: "cpp : calculate fibonacci sequence",
      reqObject: {
          language: "cpp",
          script: "#include <iostream>\n\nint fibonacci(int n) {\n    if (n <= 1)\n        return n;\n    else\n        return fibonacci(n - 1) + fibonacci(n - 2);\n}\n\nint main() {\n    int result = fibonacci(6);\n    std::cout << \"Fibonacci of 6 is \" << result << std::endl;\n    return 0;\n}"
      },
      expectedResponse: {
          val: {},
          status: 200,
          error: 0
      }
  },
  {
      name: "java : calculate power of a number",
      reqObject: {
          language: "java",
          script: "public class Main {\n    public static int power(int base, int exponent) {\n        if (exponent == 0)\n            return 1;\n        else\n            return base * power(base, exponent - 1);\n    }\n\n    public static void main(String[] args) {\n        int result = power(2, 5);\n        System.out.println(\"2 to the power of 5 is \" + result);\n    }\n}"
      },
      expectedResponse: {
          val: {},
          status: 200,
          error: 0
      }
  },
  {
      name: "python : calculate prime numbers",
      reqObject: {
          language: "python",
          script: "def is_prime(num):\n    if num < 2:\n        return False\n    for i in range(2, int(num ** 0.5) + 1):\n        if num % i == 0:\n            return False\n    return True\n\nfor i in range(1, 20):\n    if is_prime(i):\n        print(i, 'is prime')"
      },
      expectedResponse: {
          val: {},
          status: 200,
          error: 0
      }
  },
  {
      name: "nodejs : manipulate arrays",
      reqObject: {
          language: "nodejs",
          script: "let numbers = [1, 2, 3, 4, 5];\nlet sum = numbers.reduce((acc, curr) => acc + curr, 0);\nlet average = sum / numbers.length;\nconsole.log('Sum:', sum);\nconsole.log('Average:', average);"
      },
      expectedResponse: {
          val: {},
          status: 200,
          error: 0
      }
  },
      {
          name: "c : reverse array elements",
          reqObject: {
              language: "c",
              script: "#include <stdio.h>\n\nvoid reverseArray(int arr[], int size) {\n    int start = 0, end = size - 1;\n    while (start < end) {\n        int temp = arr[start];\n        arr[start] = arr[end];\n        arr[end] = temp;\n        start++;\n        end--;\n    }\n}\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    reverseArray(arr, size);\n    printf(\"Reversed array: \");\n    for (int i = 0; i < size; i++) {\n        printf(\"%d \", arr[i]);\n    }\n    return 0;\n}"
          },
          expectedResponse: {
              val: {},
              status: 200,
              error: 0
          }
      },
      {
          name: "cpp : find maximum element in array",
          reqObject: {
              language: "cpp",
              script: "#include <iostream>\n\nint findMax(int arr[], int size) {\n    int max = arr[0];\n    for (int i = 1; i < size; i++) {\n        if (arr[i] > max)\n            max = arr[i];\n    }\n    return max;\n}\n\nint main() {\n    int arr[] = {3, 7, 1, 9, 4};\n    int size = sizeof(arr) / sizeof(arr[0]);\n    int max = findMax(arr, size);\n    std::cout << \"Maximum element in array: \" << max << std::endl;\n    return 0;\n}"
          },
          expectedResponse: {
              val: {},
              status: 200,
              error: 0
          }
      },
      {
          name: "java : check palindrome string",
          reqObject: {
              language: "java",
              script: "public class Main {\n    public static boolean isPalindrome(String str) {\n        int start = 0, end = str.length() - 1;\n        while (start < end) {\n            if (str.charAt(start) != str.charAt(end))\n                return false;\n            start++;\n            end--;\n        }\n        return true;\n    }\n\n    public static void main(String[] args) {\n        String str = \"radar\";\n        boolean result = isPalindrome(str);\n        System.out.println(str + \" is palindrome: \" + result);\n    }\n}"
          },
          expectedResponse: {
              val: {},
              status: 200,
              error: 0
          }
      },
      {
          name: "python : sort array in descending order",
          reqObject: {
              language: "python",
              script: "def sort_descending(arr):\n    arr.sort(reverse=True)\n    return arr\n\nnums = [5, 1, 3, 7, 2]\nsorted_nums = sort_descending(nums)\nprint('Sorted array in descending order:', sorted_nums)"
          },
          expectedResponse: {
              val: {},
              status: 200,
              error: 0
          }
      },
      {
          name: "nodejs : read and write file",
          reqObject: {
              language: "nodejs",
              script: "const fs = require('fs');\n\nfs.readFile('input.txt', 'utf8', (err, data) => {\n    if (err) {\n        console.error(err);\n        return;\n    }\n    console.log('File content:');\n    console.log(data);\n    fs.writeFile('output.txt', data.toUpperCase(), (err) => {\n        if (err) console.error(err);\n        else console.log('Data written to output.txt');\n    });\n});"
          },
          expectedResponse: {
              val: {},
              status: 200,
              error: 0
          }
      },{
        name: 'swift : hello world',
        reqObject: {
          language: 'swift',
          script: 'print("Hello, World!")\n',
        },
        expectedResponse: {
          val: 'Hello, World!\n',
          status: 200,
          error: 0,
        },
      },
      {
        name: 'php : hello world',
        reqObject: {
          language: 'php',
          script: '<?php\n' +
                  'echo "Hello, World!";\n' +
                  '?>\n',
        },
        expectedResponse: {
          val: 'Hello, World!',
          status: 200,
          error: 0,
        },
      },
      {
        name: 'swift : addition function',
        reqObject: {
          language: 'swift',
          script: 'func add(a: Int, b: Int) -> Int {\n' +
                  '    return a + b\n' +
                  '}\n' +
                  'print(add(a: 3, b: 4))\n',
        },
        expectedResponse: {
          val: '7\n',
          status: 200,
          error: 0,
        },
      },
      {
        name: 'php : addition function',
        reqObject: {
          language: 'php',
          script: '<?php\n' +
                  'function add($a, $b) {\n' +
                  '    return $a + $b;\n' +
                  '}\n' +
                  'echo add(3, 4);\n' +
                  '?>\n',
        },
        expectedResponse: {
          val: '7',
          status: 200,
          error: 0,
        },
      },
      {
        name: 'swift : factorial function',
        reqObject: {
          language: 'swift',
          script: 'func factorial(n: Int) -> Int {\n' +
                  '    if n == 0 {\n' +
                  '        return 1\n' +
                  '    } else {\n' +
                  '        return n * factorial(n: n - 1)\n' +
                  '    }\n' +
                  '}\n' +
                  'print(factorial(n: 5))\n',
        },
        expectedResponse: {
          val: '120\n',
          status: 200,
          error: 0,
        },
      },
      {
        name: 'php : factorial function',
        reqObject: {
          language: 'php',
          script: '<?php\n' +
                  'function factorial($n) {\n' +
                  '    if ($n == 0) {\n' +
                  '        return 1;\n' +
                  '    } else {\n' +
                  '        return $n * factorial($n - 1);\n' +
                  '    }\n' +
                  '}\n' +
                  'echo factorial(5);\n' +
                  '?>\n',
        },
        expectedResponse: {
          val: '120',
          status: 200,
          error: 0,
        },
      }
  
  
]
  


module.exports = { testCases }
