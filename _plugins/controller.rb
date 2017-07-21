module Jekyll
    class Test < Jekyll::Command
        class << self
            def init_with_program(prog)
                prog.command(:test) do |c|
                    c.syntax "tes [options]"
                    c.description "create new post on the site"
                    c.option 'dest', '-d DEST', 'Where the site should go'
                    c.action do | args, options|
                        puts options['dest']
                        puts 'hello'
                    end
                end
            end
        end
    end
end