# React + Vite

KONSEP HOOKS
1. Hooks merupakan function untuk mengaitkan state dan fitur-fitur lifecycle react pada functional component
2. Hooks hanya dapat digunakan di functional tidak berfungsi pada class component
3. Hooks untuk prinsip DRY
4. Hooks untuk komponen yang komplex
5. Untuk menghindari Classes komponen
6. Classes komponen menimbulkan pola yang memperlambat optimasi
7. Penggunaan Hooks(dapat dari React/built in sendiri dan custom Hooks)


STATE HOOKS
1. Penyimpanan sementara
2. Ketika di refresh state akan kembali ke kondisi default
3. Untuk page dinamis atau interaksi aplikasi dengan user menggunakan event handler
4. contoh useState dan useReducer
5. useState => sederhana, melekat pada komponennya, mudah dibaca dan debugging
7. useReducer => banyak event handler, mudah debugging dan komponen dapat dipecah


EFFECT HOOKS
1. Hooks untuk side effect di component, ex: fetching API, interaksi DOM, dll
2. Akan running setiap komponen melakukan render
3. Namun kita bisa mengatur running dari effect hooks dengan menambakan parameter kedua yang berupa array
4. contoh useEffect, useLayoutEffecr dan useInsertionEffect
5. useEffect => aktif setelah komponen mount, performance lebih bagus
6. useLayoutEffect => aktif sebelum komponen mount
7. useInsertionEffect => aktif sebelum React membuat changes terhadap DOM, bisa inject CSS


CONTEXT HOOKS
1. Berfungsi untuk komunikasi antara parent dan child component tanpa harus menggunakan props
2. contoh useContext


REF HOOKS
1. Melakukan hold informasi yang tidak dilakukan render
2. contoh useRef dan useImperativeHandle
3. useImperativeHandle adalah semacam hooks yang dapat membuat komponen atau handle dari komponen terkespose


PERFORMANCE HOOKS
1. Mengoptimalkan rendering, misalkan data tidak berubah maka tidak dilakukan rerender komponen
2. useMemo dan useCallback


OTHER HOOKS
1. Jarang digunakan
2. useDebugValue, useId, useSyncExternalStore