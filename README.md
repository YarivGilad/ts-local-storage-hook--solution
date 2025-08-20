# useLocalStorage Hook Challenge

## 🎯 Challenge Overview

Your task is to implement a custom React hook called `useLocalStorage` that behaves exactly like React's built-in `useState` hook, but with one key difference: **the state persists in the browser's localStorage**.

## 📋 Requirements

### Core Functionality
Your `useLocalStorage` hook should:

1. **Accept the same parameters as `useState`**:
   - `key` (string): The localStorage key to store the value under
   - `initialValue`: The initial value (can be a value or a function that returns a value)

2. **Return the same interface as `useState`**:
   - Current state value
   - Setter function to update the state

3. **Persist data across browser sessions**:
   - When the component mounts, read the value from localStorage
   - When the state changes, automatically save it to localStorage
   - If no value exists in localStorage, use the provided initial value

### TypeScript Requirements
- The hook should be fully typed with TypeScript generics
- Support any serializable data type (string, number, boolean, objects, arrays)
- Handle type safety for both the stored value and the setter function

### Error Handling
- Handle cases where localStorage is not available (e.g., private browsing)
- Handle JSON parsing errors gracefully
- Fallback to regular state behavior if localStorage operations fail

## 🚀 Getting Started

1. Open `src/hooks/useLocalStorage.ts` - this file is currently empty
2. Implement your `useLocalStorage` hook
3. Test it by uncommenting the import and usage in `src/App.tsx`

## 🧪 Testing Your Implementation

Once implemented, your hook should work like this:

```typescript
// In App.tsx - uncomment these lines to test
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  // This should persist the counter value across page refreshes
  const [count, setCount] = useLocalStorage('myCounter', 0);
  
  // Rest of your component...
}
```

### Expected Behavior
1. **First visit**: Counter starts at 0 (initial value)
2. **Click increment**: Counter increases and saves to localStorage
3. **Refresh page**: Counter maintains its value from localStorage
4. **Reset button**: Counter goes back to 0 and updates localStorage

## 💡 Implementation Hints

<details>
<summary>Click to reveal hints (try implementing first!)</summary>

### Basic Structure
```typescript
export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  // Your implementation here
}
```

### Key Concepts to Consider
- Use `useState` internally to manage the current state
- Use `useEffect` to sync with localStorage
- Handle JSON serialization/deserialization
- Consider the initial value can be a function (lazy initialization)
- Handle edge cases (localStorage unavailable, parsing errors)

### localStorage API Refresher
```typescript
// Save to localStorage
localStorage.setItem(key, JSON.stringify(value));

// Read from localStorage
const item = localStorage.getItem(key);
const value = item ? JSON.parse(item) : null;
```

</details>

## 🎯 Success Criteria

Your implementation is successful when:
- ✅ The counter persists across page refreshes
- ✅ TypeScript compilation passes without errors
- ✅ The hook works with different data types (try strings, objects, arrays)
- ✅ Error handling works (test in private browsing mode)
- ✅ The API feels identical to `useState`

## 🌟 Bonus Challenges

Once you have the basic implementation working, try these extensions:

1. **Add a remove function**: Return a third value that clears the localStorage item
2. **Add event listener**: Sync changes across multiple tabs/windows
3. **Add debouncing**: Prevent excessive localStorage writes
4. **Add compression**: Compress large objects before storing

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Good luck! 🚀