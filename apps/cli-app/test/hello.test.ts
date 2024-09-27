import { describe, test, expect } from 'vitest'
import { run } from './helpers'

describe('Hello Command', () => {
  test('should say hello', () => {
    const { stdout } = run(['hello', 'world'])
    expect(stdout).toBe('Hello, world!')
  })
})
