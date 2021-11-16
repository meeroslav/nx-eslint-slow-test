# nx-eslint-slow-test

There are two projects in here: `plain` & `custom-eslint-slow`.

This repo exists to show that when generating a custom eslint @nrwl/linter:workspace-rule that is just the generated example where it significantly adds to the lint time as we increase the amount of libraries/apps involved.

* The `plain` application uses nest as its base workspace generator and has 9 generated libs.
* The `custom-eslint-slow` uses nest as its base workspace generator and has 9 generated libs and a custom eslint @nrwl/linter:workspace-rule

When running the command `time npx nx run-many --target=lint --all --skip-nx-cache` in each project we can see how the timings change due to the custom eslint workflow-rule. When running against a single lib or app it is insignificant (1-2 sec) but when running against many targets we start to see how that adds up (10s vs 27s).

plain
---

```
sam@sam-XPS-13-9310:~/work/nx-eslint-slow-test/plain$ time npx nx run-many --target=lint --all --skip-nx-cache

>  NX  Running target lint for 11 project(s):

  - api-lib10
  - api-lib1
  - api-lib2
  - api-lib3
  - api-lib4
  - api-lib5
  - api-lib6
  - api-lib7
  - api-lib8
  - api-lib9
  - plain

———————————————————————————————————————————————

> nx run api-lib10:lint 

Linting "api-lib10"...

All files pass linting.


> nx run api-lib1:lint 

Linting "api-lib1"...

All files pass linting.


> nx run api-lib2:lint 

Linting "api-lib2"...

All files pass linting.


> nx run api-lib3:lint 

Linting "api-lib3"...

All files pass linting.


> nx run api-lib4:lint 

Linting "api-lib4"...

All files pass linting.


> nx run api-lib5:lint 

Linting "api-lib5"...

All files pass linting.


> nx run api-lib6:lint 

Linting "api-lib6"...

All files pass linting.


> nx run api-lib7:lint 

Linting "api-lib7"...

All files pass linting.


> nx run api-lib8:lint 

Linting "api-lib8"...

All files pass linting.


> nx run api-lib9:lint 

Linting "api-lib9"...

All files pass linting.


> nx run plain:lint 

Linting "plain"...

All files pass linting.


———————————————————————————————————————————————

>  NX   SUCCESS  Running target "lint" succeeded



real	0m10.215s
user	0m10.895s
sys	0m0.955s
```


custom-eslint-slow
---

```
sam@sam-XPS-13-9310:~/work/nx-eslint-slow-test/custom-eslint-slow$ time npx nx run-many --target=lint --all --skip-nx-cache

>  NX  Running target lint for 10 project(s):

  - custom-eslint-slow
  - api-lib1
  - api-lib2
  - api-lib3
  - api-lib4
  - api-lib5
  - api-lib6
  - api-lib7
  - api-lib8
  - api-lib9

———————————————————————————————————————————————

> nx run custom-eslint-slow:lint 

Linting "custom-eslint-slow"...

All files pass linting.


> nx run api-lib1:lint 

Linting "api-lib1"...

All files pass linting.


> nx run api-lib2:lint 

Linting "api-lib2"...

All files pass linting.


> nx run api-lib3:lint 

Linting "api-lib3"...

All files pass linting.


> nx run api-lib4:lint 

Linting "api-lib4"...

All files pass linting.


> nx run api-lib5:lint 

Linting "api-lib5"...

All files pass linting.


> nx run api-lib6:lint 

Linting "api-lib6"...

All files pass linting.


> nx run api-lib7:lint 

Linting "api-lib7"...

All files pass linting.


> nx run api-lib8:lint 

Linting "api-lib8"...

All files pass linting.


> nx run api-lib9:lint 

Linting "api-lib9"...

All files pass linting.


———————————————————————————————————————————————

>  NX   SUCCESS  Running target "lint" succeeded



real	0m26.216s
user	0m44.821s
sys	0m1.851s
```
