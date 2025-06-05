---
title: "My Little Corner in the World Wide Web"
publishDate: 2025-06-01 00:00:00 +0700
modifiedDate: 2025-06-01 00:00:00 +0700
draft: true
---

What Emmanuel Raymond wrote on his [blog post](https://peoray.dev/blog/digital-garden)[^1] is resonated well with me, as the goal of my personal website is aligned:

> Yet, I've realized that the goal is to write for myself. If others find value in my words, that's wonderful, but if not, that's perfectly alright. It doesn't have to be flawless; there's no requirement for a minimum word count, and elaborate deep-dive, or intricate illustrations. It can be a brief snippet, a random thought, or anything that resonates with me.
>
> Looking back, I've come to accept that very few people read my blog apart from myself. I rearely share what I've written, as I'm naturally reserved on the internet and prefer to lurk rather than engage. While I do receive some traffic, it is minimal, and most likely, it's just me clicking on my posts.
>
> I believe the main thing preventing me from publishing more frequently is perfectionism, overthinking, and fear of being judged harshly. By adopting the mindset of treating my site as a digital garden, I hope to overcome these mental barriers.
>
> I intend to contribute my knowledge to the internet and share what I have learned. Consider this blog my public journal, a means of learning rather than striving for complete pieces of work.

## Content Deliver Strategy

By upload the source of my website up to GitHub, I do have to think about where I up my other contents like images. Typically, the images for the website would be reside along with the source, but I want to avoid push them all up to GitHub repository.

GitHub does recommend [keeping repositories small, ideally less than 1 GB](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github#repository-size-limits).

> Smaller repositiories are faster to clone and easier to work with and maintain. If your repository excessively impacts our infrastructure, you might receive an email from GitHub support asking you to take corrective action.

I have look into [Cloudflare Images](https://www.cloudflare.com/developer-platform/products/cloudflare-images/), but for a small personal website like mine, this look to be overkill. Plus, it will cost me if I decides to move the images away from the service in the future.

Storing the images on my own server is a viable option. Just like putting the website up on shared hosting back in the old days with just HTML and image files. I would have a full control over my images.

Serving all the images from a NAS is free, but do limit by the speed of my home internet connection, especially the upload speed, which is typically slower than the download speed for the internet plan designed for home use. If the internet is down, the images on the website would not load at all.

[^1]: Raymond, Emmanuel. ["My Blog is Dead. Long Live my Digital Garden"](https://peoray.dev/blog/digital-garden). [Archived](https://web.archive.org/web/20250605071256/https://peoray.dev/blog/digital-garden) from the original on June 5, 2025. Retrieved on June 5, 2025.