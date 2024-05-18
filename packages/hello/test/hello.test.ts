import { describe, test, expect } from 'vitest'
import { sayHello } from '../src'

describe('Hello Test Description', () => {
  test('should say hello', () => {
    expect(sayHello('World')).toBe('Hello World!!!')
  })
})
