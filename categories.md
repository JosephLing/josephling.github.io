---
layout: page
title: Categories
permalink: /category/
---
<div id="archives">

<div id="categories-selection">
    <form method="GET">
        <input id="buttonAll" type="submit" name="type" value="all">
        {% for category in site.categories %}
            <input id="button{{ category | first }}" type="submit" name="type" value="{{ category | first }}">   
        {% endfor %}
    </form>
</div>

 <div id="category-list">
<!-- so what we do here is generate all the categories with there content and their description from the _data/categories.yml file-->
{% for category in site.categories %}

    {% capture category_name %}{{ category | first }}{% endcapture %}
    <div id="{{ category_name | slugize }}">
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
<script type="text/javascript">
        function submitButtonChecked(nameOfId){
            var buttonId = document.getElementById("button"+nameOfId);
            if (buttonId === null || buttonId == null){
                console.log("error in grabbing element");
            }else{
                buttonId.style.backgroundColor = "black";
                buttonId.style.color = "white";
            }
        }
        var url = window.location.href;
        var loc = window.location.href.search("=");
        if (loc != -1){ //                              checks if ?type= exists 
            var divId = url.slice(loc+1, url.length);
            if(divId == "all") {
                submitButtonChecked("All");
            } else {
                var displayId = document.getElementById(divId);
                if (displayId != null ){ //             check if it is a valid category
                    var getCategories = document.getElementById("category-list").getElementsByTagName("div");
                    for(var i = 0; i < getCategories.length; i++) {
                        if (divId === getCategories[i].id){
                            getCategories[i].style.display = "all";
                        }else{
                            getCategories[i].style.display = "none";
                        }
                    }
                    submitButtonChecked(divId);
                }
            }
        }else{
            // No category has been selected so we are displaying all values. 
            // Therefore 'All' button should be checked.
            submitButtonChecked("All");
        }
</script>