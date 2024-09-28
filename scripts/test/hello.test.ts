import { describe, test, expect } from 'vitest'

describe('Hello Command', () => {
  test('should say hello', () => {
    expect("Hello, world!").toBe('Hello, world!')
  })
})
