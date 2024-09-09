import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render } from '@testing-library/vue'

import App from '@/App.vue'
import router from '@/router'

describe('App', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders home view', async () => {
    const { findByText } = await render(App, {
      global: {
        plugins: [router]
      }
    })
    expect(await findByText('Home view')).toBeTruthy()
  })

  it('renders another view', async () => {
    const { findByText } = await render(App, {
      global: {
        plugins: [router]
      }
    })
    router.push({ name: 'another' })
    expect(await findByText('Another view')).toBeTruthy()
  })
})
