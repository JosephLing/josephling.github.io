# Replaces multiple newlines and whitespace 
# between them with one newline
# source: https://github.com/aucor/jekyll-plugins/issues/1

module Jekyll
  class StripTag < Liquid::Block

    def render(context)
      super.gsub /(?<=\s)\n\s*\n(?![^<>]*<\/pre>)/, "\n"
    end

  end
end

Liquid::Template.register_tag('strip', Jekyll::StripTag)