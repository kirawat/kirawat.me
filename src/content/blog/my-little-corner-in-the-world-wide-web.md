---
name: "My Little Corner in the World Wide Web"
author: "Kirawat Sahasewiyon"
dateCreated: 2025-06-01T00:00:00+07:00
datePublished: 2025-06-01T00:00:00+07:00
dateModified: 2025-06-01T00:00:00+07:00
draft: true
---

What Emmanuel Raymond wrote on his [blog post](https://peoray.dev/blog/digital-garden)[^1] is resonated well with me, as the goal of my personal website is aligned:

> ... I've realized that the goal is to write for myself. If others find value in my words, that's wonderful, but if not, that's perfectly alright. It doesn't have to be flawless; there's no requirement for a minimum word count, and elaborate deep-dive, or intricate illustrations. It can be a brief snippet, a random thought, or anything that resonates with me.
>
> Looking back, I've come to accept that very few people read my blog apart from myself. I rearely share what I've written, as I'm naturally reserved on the internet and prefer to lurk rather than engage. While I do receive some traffic, it is minimal, and most likely, it's just me clicking on my posts.
>
> I believe the main thing preventing me from publishing more frequently is perfectionism, overthinking, and fear of being judged harshly. By adopting the mindset of treating my site as a digital garden, I hope to overcome these mental barriers.
>
> I intend to contribute my knowledge to the internet and share what I have learned. Consider this blog my public journal, a means of learning rather than striving for complete pieces of work.

## Contents

### Blog



### Notes

These are fragments notes that contain information to be referenced to.

## Content Deliver Strategy

### Page Contents

I was curious if I could have a very long piece of content in a single Markdown file, which would then be rendered into HTML by Astro. If so, would it affect performance when the large page is loaded? It turns out that modern web browsers stream content from top to bottom and render it progressively. They don't wait to download the entire page before showing anything to the user. This process is known as "progressive rendering."

As soon as the browser receives the first chunk of the HTML document from the server, it begins parsing and rendering what it has processed so far. This is why you often see the top part of a webpage (like the header and navigation bar) appear first, followed by the rest of the content as you scroll down. However, this rendering process can be temporarily halted by other resources, such as CSS and JavaScript.[^2]

When the browser encounters a `<link>` tag for a CSS stylesheet, it will pause rendering the rest of the page until that CSS file has been downloaded and parsed. This is because the style can affect the layout of the entire page.

Similarly, when a `<script>` tag is found, the browser will typically stop everything else, download the script, execute it, and only then continue parsing and rendering the HTML. This is why it's a common practice to place `<script>` tags just before the closing `</body>` tag, so they don't block the initial rendering of the visible content.

Browsers do cache CSS and JavaScript after the initial load, though, so this becomes less of an issue on subsequent visits.

I can organize my content by subject, separating each part into a section within the same document. The atomic notes idea doesn't work for me, as the content itself is separated into small parts, which makes it harder to see the overall picture when you have to jump from one note to another. You can eventually get lost if you don't keep track of the trail.

### Media and Images

By upload the source of my website up to GitHub, I do have to think about where I up my other contents like images. Typically, the images for the website would be reside along with the source, but I want to avoid push them all up to GitHub repository.

GitHub does recommend [keeping repositories small, ideally less than 1 GB](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github#repository-size-limits).

> Smaller repositiories are faster to clone and easier to work with and maintain. If your repository excessively impacts our infrastructure, you might receive an email from GitHub support asking you to take corrective action.

I have look into [Cloudflare Images](https://www.cloudflare.com/developer-platform/products/cloudflare-images/), but for a small personal website like mine, this look to be overkill. Plus, it will cost me if I decides to move the images away from the service in the future.

Storing the images on my own server is a viable option. Just like putting the website up on shared hosting back in the old days with just HTML and image files. I would have a full control over my images.

Serving all the images from a NAS is free, but do limit by the speed of my home internet connection, especially the upload speed, which is typically slower than the download speed for the internet plan designed for home use. If the internet is down, the images on the website would not load at all.

[Tailscale Funnel](https://tailscale.com/kb/1223/funnel) does have potential. I have to look at it's limitations such as bandwidth allowance.

Cloudflare Tunnel is another top contender.

## Edit Content Across Devices with Obsidian

Having the source of the website up on GitHub repository is good and all, but I want the ability to write and edit the website content from anywhere. The idea can strike at any time of the day, and the one device that's always with me is my smartphone.

GitHub app does have the ability to create and edit file, but it's not anywhere close to edit it in VSCode. A proper Markdown editor is a better way. Comes Obsidian.

I have been using Obsidian for quite sometimes now, and like how it doesn't store content in database, but just plain text file on my device. Obsidian Sync is seamlessly sync across all my devices. The UI look and theme are fully customizable with CSS. That's mean I can make the Markdown preview look just like how it would be like on the actual website using the similar CSS code based.

### Bookmark Active Documents

I can bookmark the file I'm still working on. Especially those still in "draft", "seedling", or "sprout", which make it easy to find and know which content that I should revisited.

### Sync Conflict with Git

There is an issue where the Obsidian Sync would sync the file to all the devices, and it will crash with one that already been pushed to GitHub repository. I can simply discard changes on GitHub Desktop, but it's a thing that's not as smooth as it can be.

[^1]: Raymond, Emmanuel. ["My Blog is Dead. Long Live my Digital Garden"](https://peoray.dev/blog/digital-garden). [Archived](https://web.archive.org/web/20250605071256/https://peoray.dev/blog/digital-garden) from the original on June 5, 2025. Retrieved on June 5, 2025.

[^2]: MDM Web Docs. ["Populating the page: how browsers work"](https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/How_browsers_work). [Archived](https://web.archive.org/web/20250521152508/https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/How_browsers_work) from the original on June 10, 2025. Retrieved on June 10, 2025.