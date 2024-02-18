import { describe, expect, test } from 'vitest'

import { run } from '../helpers'

describe('random', () => {
  test('runs hello', () => {
    const { stdout } = run(['random'])
    expect(stdout).toContain('hello world')
  })
})
