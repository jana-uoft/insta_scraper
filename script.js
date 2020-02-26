const axios = require('axios')
const cheerio = require('cheerio')
const readline = require('readline')

const BASE_URL = 'https://www.instagram.com'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Enter the instagram user id? ', async (userID) => {
  console.log(`Grabbing the latest post of: ${userID}`)
  rl.close()

  // Load webpage content
  const response = await axios.get(`${BASE_URL}/${userID}`)
  const $ = cheerio.load(response.data)

  // Load the script which has user data
  const script = $('script').eq(4).html()

  try {
    // Traverse through the JSON of instagram response
    const { entry_data: { ProfilePage: { [0]: { graphql: { user } } } } } = JSON.parse(/window\._sharedData = (.+);/g.exec(script)[1]);

    // Get user timeline
    const timeline = user.edge_owner_to_timeline_media.edges

    // Grab the latest post
    const latest = timeline[0].node

    const title = latest.edge_media_to_caption.edges[0].node.text
    const imageURL = latest.display_url
    const timeTaken = latest.taken_at_timestamp

    console.log({
      title,
      imageURL,
      timeTaken: new Date(timeTaken).toGMTString()
    });
  } catch {
    console.log(`Failed. Make sure the profile is public and exists. ${BASE_URL}/${userID}`)
  }
})
