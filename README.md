# Instagram Scraper

## Overview
Given a user id, outputs the latest post details: 
 * title
 * imageURL
 * timeTaken


## Requirements
 * NodeJS
 * Docker (optional, but preferred)

## Usage

* Clone this repository
```
git clone https://github.com/jana-uoft/insta_scraper.git
```

* Run script with docker
  * `docker-compose run scraper`

* Run the script without docker
  * Install dependencies with
    `yarn i`
  * Run the script with
    `node script.js`

## Example 1
```bash
Enter the instagram user id? anirudhofficial
Grabbing the latest post of: anirudhofficial
{
  title: '#KuttiStoryHits20MViews 🥳',
  imageURL: 'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/84321902_2535145543422876
_5520176703468120880_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=100&_nc_ohc=d5tdoJHJK38AX87ImGv&o
h=fb70099c6f862e35bfaaf939c8626c68&oe=5E832F8C',
  timeTaken: 'Mon, 19 Jan 1970 07:32:51 GMT'
}
```

## Example 2
```bash
Enter the instagram user id? bla
Grabbing the latest post of: bla
Failed. Make sure the profile is public and exists. https://www.instagram.com/bla
```