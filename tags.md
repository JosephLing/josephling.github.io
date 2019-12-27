---
layout: page
title: Tags
permalink: /tags/
titlebar: false
---

<div id="archives">

<div id="tags-list">
    {% for tag in site.tags %}
    {% capture tag_name %}{{ tag | first }}{% endcapture %}
        <div id="{{ tag_name | slugize }}" class="list">
            <h3 class="sub-head">{{tag_name}}</h3>
            <ul>
            {% for post in site.tags[tag_name] %}
                <li><a href="{{ site.baseurl }}{{ post.url }}">{{post.title}}</a></li>
            {% endfor %}
            </ul>
        </div>
    {% endfor %}


</div>
</div>
{% include filterListEnd.html listName="tags-list" %}