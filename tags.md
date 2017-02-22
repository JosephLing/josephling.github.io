---
layout: page
title: Tags
permalink: /tags/
---

<div id="archives">

<div id="categories-selection">
    <form method="GET">
        <input id="buttonAll" type="submit" name="type" value="all">
        {% for tag in site.tags %}
            <input id="button{{ tag | first }}" type="submit" name="type" value="{{ tag | first }}">   
        {% endfor %}
    </form>
</div>
    <div id="tags-list">
        {% for tag in site.tags %}
        {% capture tag_name %}{{ tag | first }}{% endcapture %}
            <div id="{{ tag_name | slugize }}">
                <h3 class="tags-head">{{tag_name}}</h3>
                <ul>
                {% for post in site.tags[tag_name] %}
                    <li><a href="{{ site.baseurl }}{{ post.url }}">{{post.title}}</a></li>
                {% endfor %}
                </ul>
            </div>
        {% endfor %}


    </div>
  </div>


<script src="../main.js"></script>
<script type="text/javascript">
filterOptions("tags-list");
</script>