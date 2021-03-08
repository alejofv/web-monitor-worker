import { webMonitor } from './services/monitor'
import { statusPage } from './services/statusPage'

// scheduled event
addEventListener('scheduled', event => {
  event.waitUntil(webMonitor(event))
})

// fetch event for preview
addEventListener('fetch', event => {
  event.waitUntil(webMonitor(event))
  event.respondWith(statusPage(event))
})