from __future__ import unicode_literals
"""
Implement dynamic checks instead of static values. As well as implementation to implement default empty values.

Then after checking is complete work on implementing cmd interface that can also build and commit to repo.  
"""
import os
from time import localtime

#content =  "---\nlayout: post\ntitle: {0}\ndate: {1}\ncategories: {2}\ntags: {3}\ndescription: {4}\n---".format(

def formatAsList(L):
    if L is None:
        return ""
    else:
        L = L.split(" ")
        if len(L) == 1:
            return L[0]
        else:
            return "[%s]" % ", ".join(L)

def getTime():
    l = localtime()
    return ["%s-%s-%s" % (l[0], l[1], l[2]), "%s:%s" % (l[3],l[4])]


REQUIRED = ["layout", "title", "date", "categories", "tags", "description"]
REQUIRED_F = [ ]


def createPost(name, time=None, categories=None, tags=None, description="no description yet given"):
    
    tags = formatAsList(tags)
    categories = formatAsList(categories)
    assert tags.count("\\") == 0 # basic validation
    if time is None:
        time = getTime()
    else:
        assert isinstance(time, list)
        assert len(time) == 2
    
    
    if os.path.exists("_posts"):
        path = "_posts" + os.path.sep + time[0]+"-"+name+".md"
        if not os.path.exists(path):
            file = open(path, "w") # supporting py2 here 
            content =  "---\nlayout: post\ntitle: {0}\ndate: {1}\ncategories: {2}\ntags: {3}\ndescription: {4}\n---".format(
        name, time[0] + " "  + time[1], categories, tags, description)
            file.write(content)
            file.close()
        else:
            print("Error file already exists: " + path)
    else:
        print("_posts dir doesn't exist")


def checkPost(content):
    print(len(content))
    if len(content) >= 8:
        if content[0] == "---\n":
            if content[7] == "---\n" or content[7] == "---":
                pass
            else:
                print("no end line dash at the end of the config")
        else:
            print("no start config dash")
    else:
        print("error not enough lines in file")

def checkPosts():
    if os.path.exists("_posts"):
        for file in os.walk(os.path.dirname(os.path.realpath(__file__))+os.path.sep+"_posts").next()[2]:
            print(file)
            f = open("_posts"+ os.path.sep + file)
            checkPost(f.readlines())
            f.close()
    else:
         print("_posts dir doesn't exist")

createPost("test", getTime(), "cat", "dog cat fish")
checkPosts()