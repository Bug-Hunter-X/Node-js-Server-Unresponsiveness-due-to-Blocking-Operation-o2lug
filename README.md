# Node.js Server Unresponsiveness

This repository demonstrates a common issue in Node.js where a long-running synchronous operation blocks the event loop, causing the server to freeze or become unresponsive.  The `bug.js` file shows the problematic code, and `bugSolution.js` provides a solution using asynchronous programming.

## Problem
The original code has a `for` loop that takes a significant amount of time to execute. This operation blocks the event loop, preventing the server from handling new requests or responding to existing ones.

## Solution
The solution uses asynchronous programming techniques. While not directly applicable to all scenarios, it illustrates the principal of keeping the event loop clear of long tasks.