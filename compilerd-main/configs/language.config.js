const { CPP, C, PYTHON, JAVA, NODEJS, RUBY, PROMPTV1, PROMPTV2, GO, SWIFT, PHP } = require('../enums/supportedLanguages');
const ONE_MB = 1024; // 1 KB
const ALLOWED_RAM = process.env.ALLOWED_RAM || 512;

const LANGUAGES_CONFIG = {
    [C]: {
        compile: 'gcc -o a.out solution.c',
        run: './a.out',
        timeout: 2,
        filename: 'solution.c',
        memory: ALLOWED_RAM * ONE_MB,
    },
    [CPP]: {
        compile: 'g++ -o a.out -pthread -O0 solution.cpp',
        run: './a.out',
        timeout: 2,
        filename: 'solution.cpp',
        memory: ALLOWED_RAM * ONE_MB,
    },
    [PYTHON]: {
        compile: 'python -m compileall -q solution.py',
        run: 'python solution.py',
        timeout: 10,
        filename: 'solution.py',
        memory: ALLOWED_RAM * ONE_MB,
    },
    [JAVA]: {
        compile: 'javac Solution.java',
        run: 'java Solution',
        timeout: 4,
        filename: 'Solution.java',
        memory: ALLOWED_RAM * ONE_MB,
    },
    [NODEJS]: {
        compile: 'node --check solution.js',
        run: 'node solution.js',
        timeout: 10,
        filename: 'solution.js',
        memory: 786432, // Node.js v20 requires more initial memory, so initialize it to around 780MB (1.5 * 512MB).
    },
    [RUBY]: {
        compile: 'ruby -c solution.rb',
        run: 'ruby solution.rb',
        timeout: 10,
        filename: 'solution.rb',
        memory: ALLOWED_RAM * ONE_MB,
    },
    [PROMPTV1]: {
        model: 'gpt-4-1106-preview',
    },
    [PROMPTV2]: {
        model: 'gpt-3.5-turbo-1106',
    },
    [GO]: {
        compile: 'go build -o solution solution.go',
        run: './solution',
        timeout: 2,
        filename: 'solution.go',
        memory: ALLOWED_RAM * ONE_MB,
    },
    [SWIFT]: {
        compile: 'swiftc -o solution solution.swift',
        run: './solution',
        timeout: 2,
        filename: 'solution.swift',
        memory: ALLOWED_RAM * ONE_MB,
    },
    {
        [PHP]: {
            "compile": "php -l index.php",  // Syntax check
            "run": "php index.php",
            "timeout": 3,
            "filename": "index.php",
            "memory": ALLOWED_RAM * ONE_MB
        }
    }
    
};

module.exports = { LANGUAGES_CONFIG };
