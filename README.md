# Node.JS Text Utilities #

This package is a collection of utilities for manipulating text.

## Installation ##

Add `text.js` to a folder in your `NODE_PATH`
(e.g. `~/.node_libraries`).

## Examples ##

See tests/text.js for examples.

## API ##

**splitLines(str)**
Return an array of lines in `str` without trailing line delimitors.

**wrap(str, [soft=70, hard])**
Break `str` into segments along word boundaries.  Return the segments
in an array.  Usually, each segment is no longer than `soft`
characters.  If there are no word breaks and `hard` is set, the long
word will be split into segments that are no longer than `hard`
characters.  If `hard` is not set, long words are not broken.

**fill(str, [soft=70, hard, glue])**
This is a shortcut for `wrap(str, soft, hard).join(glue)`.  By
default, `glue` is a newline.

**atMost(str, [soft=70, hard, pattern="\\s"])**
Return the largest substring of `str` terminated by `pattern` that's
no longer than `soft` characters.  By default, `pattern` is any space
character.  If a `hard` limit is given, the result will be no longer
than `hard` characters, even if `pattern` isn't found.
