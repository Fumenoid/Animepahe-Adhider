
const removeAds = () => {
  try {
    var searchelementss = window.location.search
    var n = searchelementss.search("s")
    var searchelements= window.location.search.substring(n+2)
    console.log(searchelements)
    if(searchelements=="beta"){
        console.log("If ran !!")
        // create an array (see 'spread operator') from all the Node List on the page from: all iframes where it's not a source of 'about:blank'
        // any element on the page which has an id of 'ads' in it.
        // any anchor which links to a local location and it's not got an id of button
        const [...advertElements] = document.querySelectorAll('iframe:not([src="about:blank"]), [id*="ads"], a[href="#"]:not([id^="btn"])')

        // Get the single Element where the iframe has 'video' in its id.
        videoContainer = document.querySelectorAll("video[id*='video']")  //for beta server
        // just throw if we find nothing. Run twice or they've changed all the selectors in the arms race.
        if (!advertElements.length) {
            throw new Error('No adverts found, check the selectors!')
        }
  
        // We need to keep one of the divs <div id="adsFooBar" class="big something"> so remove it from our array
        if (videoContainer) {
            advertElements.shift()
        }
  
        // Go through the remaining elements and remove them (and their childeren -r) from the DOM
            advertElements.forEach(elem => {
            elem.remove()
        })

    } else{
        console.log("Else ran !!")
        const [...advertElements] = document.querySelectorAll('iframe:not([src="about:blank"]), [id*="ads"], a[href="#"]:not([id^="btn"])')

        // Get the single Element where the iframe has 'video' in its id.
        const videoContainer = document.querySelector("iframe[id*='video']")
        // Get its parent ot make it null
        const videoParent = videoContainer ? videoContainer.parentElement : null
    
        // just throw if we find nothing. Run twice or they've changed all the selectors in the arms race.
        if (!advertElements.length) {
          throw new Error('No adverts found, check the selectors!')
        }
    
        // We need to keep one of the divs <div id="adsFooBar" class="big something"> so remove it from our array
        if (videoContainer) {
          advertElements.shift()
        }
    
        // Go through the remaining elements and remove them (and their childeren -r) from the DOM
        advertElements.forEach(elem => {
          elem.remove()
        })
    
        // Put the video back in its plaxe.
        if (videoContainer) {
          videoParent.prepend(videoContainer)
        }
    }   
  } catch (e) {
    console.error('Something broke:', e)
  }
}

// Just fire it half a econd after the page is idle
setTimeout(removeAds, 500)
