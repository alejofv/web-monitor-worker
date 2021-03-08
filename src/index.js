import { checkSite } from './monitor'

// scheduled event
addEventListener('scheduled', event => {
  event.waitUntil(webMonitor(event))
})

// fetch event for preview
addEventListener('fetch', event => {
  event.waitUntil(webMonitor(event))

  event.respondWith(new Response('OK', {
    status: 200
  }))
})

async function webMonitor(event) {
  // Get sites list from KV
  const sites = await WebMonitorKV.get("sites", "json")
  if (!Array.isArray(sites))
    return;

  for (const site of sites) {
    await checkSite(site)
  }
}