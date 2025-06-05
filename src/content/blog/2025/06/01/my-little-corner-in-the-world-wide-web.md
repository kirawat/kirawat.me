---
title: "My Little Corner in the World Wide Web"
publishDate: 2025-06-01 00:00:00 +0700
modifiedDate: 2025-06-01 00:00:00 +0700
draft: true
---

By upload the source of my website up to GitHub, I do have to think about where I up my other contents like images. Typically, the images for the website would be reside along with the source, but I want to avoid push them all up to GitHub repository.

GitHub does recommend [keeping repositories small, ideally less than 1 GB](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github#repository-size-limits).

> Smaller repositiories are faster to clone and easier to work with and maintain. If your repository excessively impacts our infrastructure, you might receive an email from GitHub support asking you to take corrective action.

I have look into [Cloudflare Images](https://www.cloudflare.com/developer-platform/products/cloudflare-images/), but for a small personal website like mine, this look to be overkill. Plus, it will cost me if I decides to move the images away from the service in the future.

Storing the images on my own server is a viable option. Just like putting the website up on shared hosting back in the old days with just HTML and image files. I would have a full control over my images.

Serving all the images from a NAS is free, but do limit by the speed of my home internet connection, especially the upload speed, which is typically slower than the download speed for the internet plan designed for home use. If the internet is down, the images on the website would not load at all.