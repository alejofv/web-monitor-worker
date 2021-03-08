
const checkSite = async (siteUrl) => {
  console.log('Checking site: ' + siteUrl)
  try {
    const url = `https://${siteUrl}`
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`Network response was not ok: status ${response.status}`)
    }

    console.log(`Site ${siteUrl} is OK`)
  } catch (error) {
    console.error(`Site ${siteUrl} has issues!`)
    console.error(error)
  }
}

export { checkSite }