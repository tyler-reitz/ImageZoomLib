# imagezoomlib

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

> Simple JS library for zoom-on-hover effects

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Maintainers](#maintainers)
- [Contribute](#contribute)
- [License](#license)

## Install

Include the library in your html and call the init method with the parent elements selector
```
<script src="vanilla-zoom/vanilla-zoom.js"></script>

<script>
    vanillaZoom.init('#my-gallery');
</script>
```

## Usage

`.zoomed-image` element take `src` attribute for clicked `.small-preview` element 
```
<div id="my-gallery" class="vanilla-zoom">
    
    <div class="sidebar">
        <img src="images/image-1.jpg" class="small-preview">
        <img src="images/image-2.jpg" class="small-preview">
        <img src="images/image-3.jpg" class="small-preview">
    </div>

    <!-- Required -->
    <div class="zoomed-image"></div>
</div>
```

## Maintainers

[@tyler-reitz](https://github.com/tyler-reitz)

## Contribute



Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

MIT © 2017 Tyler Reitz
