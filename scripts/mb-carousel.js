$(function() {
    var mq = window.matchMedia("screen and (min-width: 769px)")
    if (mq.matches) {
        [$("#home-section ul.itemSlide"),
         $("#standards-carousel-section ul.itemSlide"),
         $("#gallery-section ul.itemSlide")].map(initCarousel)
    }
})

var initCarousel = function(element) {
    var pause = false
    if (element.length <= 0) { return }

    element.itemslide({parent_width: true, one_item: true})
    element.bind('click', function() { pause = true})

    $(window).resize(function() { element.reload() })

    var prevButton = element.siblings(".mb-carousel-prev")
    var nextButton = element.siblings(".mb-carousel-next")
    var slideCount = element.find(">li").length

    console.log(slideCount)

    prevButton.click(function(e) {
        e.preventDefault()
        element.previous()
        pause = true
        setTimeout(function() { pause = false}, 5000)
    })

    nextButton.click(function(e) {
        e.preventDefault()
        element.next()
        pause = true
        setTimeout(function() { pause = false}, 5000)
    })

    element.on("changeActiveIndex", function(e) {
        enableControls()
    })

    var enableControls = function() {
        var index = element.getActiveIndex()
        if (index === 0){
            prevButton.hide()
        } else {
            prevButton.show()
        }

        if (index === (slideCount - 1)) {
            nextButton.hide()
        } else {
            nextButton.show()
        }
    }

    enableControls()

    setInterval(function() {
      if (!pause) {
          index = element.getActiveIndex()

          if (index === (slideCount - 1)) {
              element.gotoSlide(0)
          } else {
              element.next()
          }

          enableControls()
      }
    }, 5000)
}
