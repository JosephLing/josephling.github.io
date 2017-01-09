---
layout: page
title: Categories
permalink: /category/
---
<div id="archives">

 <div id="category-list">
<!-- so what we do here is generate all the categories with there content and their description from the _data/categories.yml file-->
{% for category in site.categories %}

    {% capture category_name %}{{ category | first }}{% endcapture %}
    <div id="{{ category_name | slugize }}">
        <h3 class="category-head">{{ category_name }}</h3>
        {% if site.data.categories[category_name] %}
           {{site.data.categories[category_name]}}
        {% else %}
            {{site.data.categories["default"]}}
        {% endif %}
        <ul>
        {% for post in site.categories[category_name] %}
            <li><a href="{{ site.baseurl }}{{ post.url }}">{{post.title}}</a></li>
        {% endfor %}
        </ul>
    </div>

{% endfor %}
  </div>
<script type="text/javascript">
        var url = window.location.href;
        console.log(window.location.href);
        var loc = window.location.href.search("=");
        if (loc != -1){
            var divId = url.slice(loc+1, url.length);
            var displayId = document.getElementById(divId);
            if (displayId != null ){
                var getCategories = document.getElementById("category-list").getElementsByTagName("div");
                for(var i = 0; i < getCategories.length; i++) {
                    if (divId === getCategories[i].id){
                        getCategories[i].style.display = "all";
                    }else{
                        getCategories[i].style.display = "none";
                    }
                }
            }

        }
</script>