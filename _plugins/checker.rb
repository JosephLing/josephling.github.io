module Jekyll
   

    log = -> posts, name {
        space = 50 - posts.url.length 
        if space <= 0
            space = 1
        end
        puts "%s: %s%s\tLines:%s" % [name, posts.url, " " * space , posts.to_s.lines.count]
    } 
    

    Jekyll::Hooks.register :pages, :pre_render do |pages|
        log.call(pages, "Page")
    end

    Jekyll::Hooks.register :posts, :pre_render do |posts|
        log.call(posts, "Post")
    end

end