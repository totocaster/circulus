Circulus is a template for ver good, minimal, yet beautifully designed
static blog engine — [toto][]. I created this template for my [personal
blog][], but then decided to open-source it as-well. mainly because I
like it, and secondly because there are not much toto templates at this
moment.

Features
--------

-   Minimalist and readable design.
-   HTML5 compatible.
-   Supports all of major browsers.
-   Google web-font embedded, but you can modify CSS it as you wish.
-   Adaptive and flexible viewport layout.
-   Support Retina/HiDPI displays.
-   RSS Feed with full posts.
-   Automatic image footnoting (read further).
-   Support for text footnotes.
-   Integrated Read Late (via Instapaper).
-   Clean and organised Archives page.
-   HTML based navigation, no generators.
-   Automatic circle images on header and footer.

Automatic Image Footnoting
--------------------------

Circulus has a very simple but handy feature when rendering images. If
you provide alternative text to image-link markdown in you post like
this: `![Text Here](http://link-to.your/image.png)`, Circulus will
print-out that alternative text as a footnote for image automatically,
so you keep your markdown free of html.

Fonts
-----

Circulus fonts are different of ones used on my blog. Reason for that is
TypeKit, it does require a account to render fonts on specific domains.
I wanted Circulus to work out of the box, but maintain readability and
typography goodness, thus I replaced fonts with freely available ones
from your system, and from Google Web-fonts archive.

You are free to change those fonts on your personal blog.

Installation and Toto Versions
------------------------------

Original toto gem doesn’t support Ruby 1.9 very well, so I modified
`Gemfile` a bit to make it work well. If you have truncated RSS feed
then you are running old version of toto, check it with latest on on
[GitHub][].

If you want to be clean with your code just replace `gem 'toto'` with
`gem "toto", :git => 'git://github.com/cloudhead/toto.git'` in your
`Gemfile`. By default it’s already done for you.

Configuration
-------------

Circulus supports all the default configurations that toto has, you can
override defaults in `config.ru` rack file.

Heroku
------

Template is prepared to be published on Heroku, so only thing you have
to do is run following lines in terminal:

    $ heroku create myblog
    $ git push heroku master
    $ heroku open

Done, enjoy your blog.

Licence and Contribution
------------------------

You are free to use this theme for personal or commercial use, just
leave the attribution to GitHub repo in the bottom of the template.
If you want to get rid of it please contact me.

You are also free to fork Circulus and make any changes, ones that I
like will be pushed to my main branch too. Thanks for the interest.

Happy blogging!

  [toto]: http://cloudhead.io/toto
  [personal blog]: http://totocaster.com
  [GitHub]: http://github.com/cloudhead/toto