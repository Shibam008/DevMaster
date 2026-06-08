# React Component Lifecycle, useEffect, Cleanup, useMemo, useCallback & useLayoutEffect

A practical interview-focused guide to understanding React rendering behavior, side effects, performance problems, and optimization techniques.

---

# 1. React Component Lifecycle (Functional Components)

In class components, React had lifecycle methods like:

```js
componentDidMount()
componentDidUpdate()
componentWillUnmount()
```

In modern React, `useEffect()` handles all of these.

---

# Functional Component Lifecycle Mind Map

```text
                COMPONENT LIFECYCLE
                         |
        -----------------------------------
        |                |                |
      MOUNT            UPDATE          UNMOUNT
   (first render)   (re-render)      (removed)
        |                |                |
   useEffect()      useEffect()      Cleanup Runs
                                        |
                                return () => {}
```

---

# 2. Understanding Rendering in React

Every time state or props change:

```js
setCount(1)
```

React:

1. Re-renders component
2. Recreates variables/functions
3. Re-runs effects (depending on dependency array)
4. Updates DOM

This is normal.

But unnecessary renders/effects can create performance problems.

---

# 3. useEffect Basics

## Syntax

```js
useEffect(() => {
   // side effect

   return () => {
      // cleanup
   }
}, [dependencies])
```

---

# 4. What is a Side Effect?

A side effect means:

Anything outside normal rendering.

Examples:

* API calls
* Event listeners
* Timers
* LocalStorage
* WebSocket connections
* DOM manipulation
* Subscriptions

---

# 5. Different useEffect Behaviors

## A. Runs on Every Render

```js
useEffect(() => {
   console.log("runs every render")
})
```

### Problem

This runs:

* on first render
* on every re-render

Can cause:

* unnecessary API calls
* performance issues
* infinite loops

---

## B. Runs Only Once (Mount)

```js
useEffect(() => {
   console.log("runs once")
}, [])
```

Equivalent to:

```js
componentDidMount()
```

Used for:

* fetching data
* initial setup
* subscriptions

---

## C. Runs When Dependency Changes

```js
useEffect(() => {
   console.log("count changed")
}, [count])
```

Runs:

* first render
* whenever `count` changes

---

# 6. Biggest Production Problem with useEffect

# Infinite Re-render Loop

## Bad Example

```js
const [users, setUsers] = useState([])

useEffect(() => {
   fetchUsers()
   setUsers(data)
})
```

---

# What Happens?

```text
Render
  ↓
useEffect runs
  ↓
setUsers()
  ↓
State changes
  ↓
Re-render
  ↓
useEffect runs again
  ↓
Infinite loop 🔥
```

---

# Correct Version

```js
useEffect(() => {
   fetchUsers()
}, [])
```

---

# Real Production Issues Caused by Bad useEffect

## 1. Multiple API Calls

A missing dependency array can hit APIs repeatedly.

Consequences:

* server overload
* slow app
* higher cloud cost
* rate limit errors

---

## 2. Memory Leaks

Not cleaning intervals/listeners causes memory leaks.

Example:

```js
useEffect(() => {
   setInterval(() => {
      console.log("running")
   }, 1000)
}, [])
```

Even after component unmounts:

```text
Interval still running ❌
```

This wastes memory and CPU.

---

## 3. Stale Closures

Sometimes effect captures old state values.

Example:

```js
useEffect(() => {
   setInterval(() => {
      console.log(count)
   }, 1000)
}, [])
```

This may print old count values.

---

# 7. Cleanup Function

Cleanup prevents memory leaks.

---

# Syntax

```js
useEffect(() => {

   // setup

   return () => {
      // cleanup
   }

}, [])
```

---

# When Cleanup Runs

```text
1. Before effect runs again
2. When component unmounts
```

---

# Common Cleanup Examples

---

## A. Clear Interval

```js
useEffect(() => {
   const id = setInterval(() => {
      console.log("running")
   }, 1000)

   return () => {
      clearInterval(id)
   }
}, [])
```

---

## B. Remove Event Listener

```js
useEffect(() => {
   const handleResize = () => {
      console.log(window.innerWidth)
   }

   window.addEventListener("resize", handleResize)

   return () => {
      window.removeEventListener("resize", handleResize)
   }
}, [])
```

---

## C. Abort API Request

```js
useEffect(() => {
   const controller = new AbortController()

   fetch(url, {
      signal: controller.signal
   })

   return () => {
      controller.abort()
   }
}, [])
```

---

# Interview Question

## Why cleanup is important?

Answer:

Cleanup prevents:

* memory leaks
* unnecessary background tasks
* duplicate listeners
* state updates on unmounted components
* performance degradation

---

# 8. useMemo

# Purpose

Memoizes a COMPUTED VALUE.

Used to avoid expensive recalculations.

---

# Syntax

```js
const memoizedValue = useMemo(() => {
   return expensiveCalculation()
}, [dependencies])
```

---

# Problem Without useMemo

```js
const expensiveValue = heavyCalculation(data)
```

This recalculates:

```text
on every render ❌
```

Even if data didn't change.

---

# With useMemo

```js
const expensiveValue = useMemo(() => {
   return heavyCalculation(data)
}, [data])
```

Now calculation runs only when:

```text
data changes ✅
```

---

# Real Production Example

```js
const sortedUsers = useMemo(() => {
   return users.sort((a, b) => a.age - b.age)
}, [users])
```

Useful for:

* filtering
* sorting
* searching
* heavy computations
* large datasets

---

# IMPORTANT

Do NOT overuse useMemo.

`useMemo` itself has overhead.

Use it only for:

* expensive calculations
* frequently re-rendering components
* optimization bottlenecks

---

# Interview Question

## Difference Between useMemo and useCallback?

```text
useMemo  -> memoizes VALUE
useCallback -> memoizes FUNCTION
```

---

# 9. useCallback

# Purpose

Prevents unnecessary function recreation.

---

# Problem

Functions recreate on every render.

```js
const handleClick = () => {
   console.log("clicked")
}
```

Every render:

```text
new function created ❌
```

Usually this is fine.

But becomes a problem when passing functions to child components.

---

# Child Re-render Problem

```js
<Child onClick={handleClick} />
```

Even if logic is same:

```text
new function reference created
```

React thinks prop changed.

Child re-renders unnecessarily.

---

# Solution: useCallback

```js
const handleClick = useCallback(() => {
   console.log("clicked")
}, [])
```

Now function reference stays same.

---

# Real Production Scenario

Useful when:

* passing callbacks to memoized children
* large component trees
* preventing unnecessary renders

---

# Example with React.memo

```js
const Child = React.memo(({ onClick }) => {
   console.log("child rendered")

   return <button onClick={onClick}>Click</button>
})
```

Without useCallback:

```text
Child re-renders every parent render ❌
```

With useCallback:

```text
Child renders only when needed ✅
```

---

# IMPORTANT

Do NOT use useCallback everywhere.

It also has overhead.

Use only when:

* function reference matters
* optimization is needed
* passing callbacks to memoized children

---

# 10. useLayoutEffect

# What is it?

Similar to `useEffect`, but timing is different.

---

# Timing Difference

## useEffect

```text
Render
  ↓
Paint UI to screen
  ↓
useEffect runs
```

---

## useLayoutEffect

```text
Render
  ↓
useLayoutEffect runs
  ↓
Paint UI to screen
```

---

# Meaning

`useLayoutEffect` runs BEFORE browser paints.

It blocks painting.

---

# Use Cases for useLayoutEffect

Used when:

* measuring DOM size
* reading layout
* synchronously modifying DOM
* preventing flicker
* animations
* scroll position adjustments

---

# Example

```js
useLayoutEffect(() => {
   const height = ref.current.offsetHeight
   console.log(height)
}, [])
```

---

# Why not always use useLayoutEffect?

Because it blocks painting.

Overusing it can:

* slow rendering
* hurt performance
* create janky UI

---

# Rule

```text
Prefer useEffect
Use useLayoutEffect only when DOM measurement/layout is required
```

---

# 11. useEffect vs useLayoutEffect

| Feature                | useEffect                | useLayoutEffect  |
| ---------------------- | ------------------------ | ---------------- |
| Runs Before Paint?     | No                       | Yes              |
| Blocks UI Paint?       | No                       | Yes              |
| Better Performance?    | Yes                      | Usually          |
| Used For               | API calls, subscriptions | DOM measurements |
| Can Cause Flicker Fix? | No                       | Yes              |

---

# 12. React Performance Optimization Mind Map

```text
                  REACT PERFORMANCE
                           |
     -------------------------------------------------
     |                    |                         |
   useMemo           useCallback            Cleanup Functions
     |                    |                         |
 Memoize Values      Memoize Functions      Prevent Memory Leaks
     |
 Prevent Expensive
 Recalculations
```

---

# 13. Common Interview Questions

---

## Q1. Why useEffect is dangerous sometimes?

Answer:

Improper dependencies can cause:

* infinite loops
* repeated API calls
* stale state
* memory leaks
* unnecessary renders

---

## Q2. Why cleanup function is important?

Answer:

Cleanup removes:

* intervals
* subscriptions
* event listeners
* ongoing async tasks

This prevents memory leaks.

---

## Q3. Difference between useMemo and useCallback?

```text
useMemo -> memoizes result/value
useCallback -> memoizes function
```

---

## Q4. When should we use useMemo?

Use for:

* expensive calculations
* sorting/filtering large data
* avoiding unnecessary recalculations

---

## Q5. When should we use useCallback?

Use when:

* passing functions to child components
* using React.memo
* preventing unnecessary child renders

---

## Q6. Difference between useEffect and useLayoutEffect?

```text
useEffect -> runs after paint
useLayoutEffect -> runs before paint
```

`useLayoutEffect` is mainly for DOM measurements/layout synchronization.

---

# 14. Final Golden Rules

---

# useEffect Rules

✅ Use dependency arrays properly

✅ Always cleanup listeners/timers/subscriptions

✅ Prefer `useEffect` over `useLayoutEffect`

❌ Don't put unnecessary state updates inside effects

❌ Don't create infinite loops

---

# useMemo Rules

✅ Use for expensive calculations

❌ Don't memoize everything

---

# useCallback Rules

✅ Use when function reference matters

❌ Don't wrap every function blindly

---

# useLayoutEffect Rules

✅ Use for DOM measurements and preventing flicker

❌ Avoid heavy logic inside it

---

# One-Line Summary

```text
useEffect -> side effects
cleanup -> prevent memory leaks
useMemo -> memoize values
useCallback -> memoize functions
useLayoutEffect -> DOM/layout synchronization before paint
```
