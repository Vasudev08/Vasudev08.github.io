---
layout: about
title: about
permalink: /
subtitle: AI/MS student at Texas A&M University · Computer vision & human-AI interaction

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem 1.25rem;">
      <a href="https://github.com/Vasudev08" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> GitHub</a>
      <a href="https://linkedin.com/in/agarwal-vasudev" target="_blank" rel="noopener"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>
      <a href="https://scholar.google.com/citations?user=T_bTa7QAAAAJ&hl=en" target="_blank" rel="noopener"><i class="ai ai-google-scholar"></i> Google Scholar</a>
      <a href="mailto:vasu14devagarwal@gmail.com"><i class="fa-solid fa-envelope"></i> Email</a>
    </div>

selected_papers: false # disabled here; rendered in the page body below to control the order
social: false # includes social icons at the bottom of the page

announcements:
  enabled: false # disabled here; rendered in the page body below # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false # disabled here; rendered in the page body below
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

Write your biography here. Tell the world about yourself. Link to your favorite [subreddit](https://www.reddit.com). You can put a picture in, too. The code is already in, just name your picture `prof_pic.jpg` and put it in the `img/` folder.

Put your address / P.O. box / other info right below your picture. You can also disable any of these elements by editing `profile` property of the YAML header of your `_pages/about.md`. Edit `_bibliography/papers.bib` and Jekyll will render your [publications page](/al-folio/publications/) automatically.

Link to your social media connections, too. This theme is set up to use [Font Awesome icons](https://fontawesome.com/) and [Academicons](https://jpswalsh.github.io/academicons/), like the ones below. Add your Facebook, Twitter, LinkedIn, Google Scholar, or just disable all of them.

## [selected publications]({{ '/publications/' | relative_url }})

{% include selected_papers.liquid %}

## [latest posts]({{ '/blog/' | relative_url }})

{% include latest_posts.liquid %}

## [news]({{ '/news/' | relative_url }})

{% include news.liquid limit=true %}
