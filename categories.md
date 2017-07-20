---
layout: page
title: Categories
permalink: /category/
---
<div id="archives">

{% include filteredList.html filterList=site.categories %}

 <div id="category-list">
<!-- so what we do here is generate all the categories with there content and their description from the _data/categories.yml file-->
{% for category in site.categories %}

    {% capture category_name %}{{ category | first }}{% endcapture %}
    <div id="{{ category_name | slugize }}" class='list'>
        <h3 class="category-head">{{ category_name }}</h3>
        {% if site.data.categories[category_name] %}
           {{ site.data.categories[category_name] }}
        {% else %}
            {{ site.data.categories["default"] }}
        {% endif %}
        <ul>
        {% for post in site.categories[category_name] %}
            <li><a href="{{ site.baseurl }}{{ post.url }}">{{post.title}}</a></li>
        {% endfor %}
        </ul>
    </div>

{% endfor %}
  </div>
</div>

{% include filterListEnd.html listName="category-list" %}