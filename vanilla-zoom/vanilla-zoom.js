(function(window){
  function define_library() {
    const vanillaZoom = {}
    
    vanillaZoom.init = function(galleryID) {
      // library logic here
      const container = document.querySelector(galleryID)
      
      const firstSmallImage = container.querySelector('.small-preview')
      const zoomedImage = container.querySelector('.zoomed-image')

      zoomedImage.style.backgroundImage = `url(${firstSmallImage.src})`

      container.addEventListener('click', (e) => {
        const elem = e.target

        if (elem.classList.contains('small-preview')) {
          zoomedImage.style.backgroundImage = `url(${elem.src})`
        }
      })

      zoomedImage.addEventListener('mouseenter', function(e) {
        console.log(this.style)
        this.style.backgroundSize = '250%'
      }, false)

      zoomedImage.addEventListener('mousemove', function(e) {
        const { left, top, width, height } = this.getBoundingClientRect()
        
        const x = e.clientX - left
        const y = e.clientY - top

        const xpercent = Math.round(100 / ( width / x ))
        const ypercent = Math.round(100 / ( height / y) );

        this.style.backgroundPosition = `${xpercent}% ${ypercent}%`
      })

      zoomedImage.addEventListener('mouseout', function(e) {
        console.log(this)
        this.style.backgroundSize = 'cover'
        this.style.backgroundPosition = 'center'
      }, false)
    }

    return vanillaZoom
  }

  if (typeof(vanillaZoom) === 'undefined') {
    window.vanillaZoom = define_library()
  } else {
    console.log('VanillaZoom is already defined')
  }
  
})(window)