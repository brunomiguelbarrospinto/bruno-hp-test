import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render } from '@testing-library/vue'

import App from '@/App.vue'
import { mount } from '@vue/test-utils'
import router from '@/router'

describe('App', () => {
  afterEach(() => {
    cleanup()
    document.body.innerHTML = ''
  })

  it('render with importing main.ts', async () => {
    const div = document.createElement('div')
    div.setAttribute('id', 'app')
    document.body.appendChild(div)
    await import('@/main')
    await router.isReady()

    const element = document.querySelector('#home-view-title')
    expect(element).toBeTruthy()
    expect(element?.innerHTML).toEqual('Home view')
  })

  it('renders home view with @vue/test-utils', async () => {
    router.push('/')
    await router.isReady()

    const wrapper = mount(App, {
      global: {
        plugins: [router]
      }
    })
    expect(wrapper.html()).toContain('Home view')
  })

  it('renders home view with @testing-library/vue', async () => {
    const { findByText } = await render(App, {
      global: {
        plugins: [router]
      }
    })

    expect(await findByText('Home view')).toBeDefined()
  })

  it('renders another view', async () => {
    const { findByText, getByText } = await render(App, {
      global: {
        plugins: [router]
      }
    })
    router.push({ name: 'another' })
    expect(await findByText('Another view')).toBeDefined()
    expect(await findByText('Count: 0')).toBeDefined()
    expect(await findByText('Double count: 0')).toBeDefined()
    const button = await getByText('Increment')
    button.click()
    expect(await findByText('Count: 1')).toBeDefined()
    expect(await findByText('Double count: 2')).toBeDefined()
  })
})
