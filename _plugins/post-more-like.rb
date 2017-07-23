#!/usr/bin/env ruby
#
# TODO
# rewrite as a filter {{ site.tags | theFilter:3}}
# could potentailly see if we could do {{% assign list = site | theTagFilter | thePostFilter %}}


class PostMoreLike < Jekyll::Generator
  # TODO: remove own post; make this actually useful (randomised, multiple tags?
  #       I dunno)
  def generate(site)
    max_related_posts = 3

    site.posts.docs.each do |post|
      first_tag = post.data["tags"][0]

      # get at most max_related_posts (if fewer, take fewer)
      posts_related_by_tag = site.tags[first_tag].take(max_related_posts)

      # add to post frontmatter
      post.data.merge!("posts_like_tags" => posts_related_by_tag)
    end
  end
end
