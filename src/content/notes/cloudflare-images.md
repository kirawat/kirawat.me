---
title: "Cloudflare Images"
publishDate: 2025-06-05 11:31:00 +0700
modifiedDate: 2025-06-05 11:31:00 +0700
---

[Cloudflare Images](https://www.cloudflare.com/developer-platform/products/cloudflare-images/) is a service provides a platform for storing, optimizing, transforming, and delivring images.

## Core Functionality

* **Storage:** You can upload and store your original images directly on Cloudflare's global network. This helps eliminate the complexity of managing multiple copies of the same image in different sizes or formats.

* **Image Optimization:** Cloudflare Images automatically optimizes your images for web delivery. This includes:
  * **Format Conversion:** Dynamically serves images in the best format (like WebP or AVIF) based on the user's browser and device.
  * **Compression:** Reduces image's file sizes to speed up loading times.

* **Image Transformation:** You can dynamically manipulate images on the fly. This includes:
  * **Resizing and Cropping:** Create different versions (variants) of an image for various use cases (e.g., thumbnails, hero images) by specifying width, height, and fit options (like scale-down, contain, cover, crop, pad).
  * **Visual Effects:** Apply effects such as blue or add watermarks.
  * **Face Cropping:** Automatically detect and crop images around faces.

* **Delivery:** Leverages Cloudflare's extensive global Content Delivery Network (CDN) with over 330 data centers. This ensures images are served quickly to users from a location geographically close to them, improving website performance and speed.

## Pricing

On Free plan, only Image Transformations service is available with  the [request up to 5,000 unique transformations each month](https://developers.cloudflare.com/images/pricing/#images-free).

On Paid plan, you can choose to add storage service, which will cost US$5 per 100,000 images stored/month and US$1 per 100,000 images deliverd/month. If you opt to store your own images, you will only be billed for the images transformed (first 5,000 unique transformations + US$0.50/1,000 unique transformations/month).
