import { describe, expect, test } from 'vitest'

import { run } from '../helpers'

describe('Speak Test', () => {
  test('only speaker', () => {
    const { stdout } = run(['speak', '--speaker=Suraj Jha'])
    expect(stdout).toContain('Suraj Jha said "Something"')
  })
  test('Speech and speaker', () => {
    const { stdout } = run(['speak', 'cool', '--speaker=Suraj Jha'])
    expect(stdout).toContain('Suraj Jha said "cool"')
  })
})
