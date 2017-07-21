module Jekyll
    Jekyll::Hooks.register :pages, :pre_render do |a, b|
        puts "---------------------------------"
        puts a.class
        puts a.url
        puts a.data
        puts "---------------------------------"
        puts "----------------------------------"
        # a.content = a.content.gsub("\n\n", "")
    end
end