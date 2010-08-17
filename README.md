# Node Text #

This package is a collection of utilities for manipulating text.

## Installation ##

Use `npm install text` or add `text` to a folder in your `NODE_PATH`.

## API ##

### Encoding ###

#### encode64(str) ####

Return `str` encoded using a standard base64 alphabet.

#### decode64(str) ####

Return the standard base64 decoding of `str`.

#### urlsafeEncode64(str) ####

Like `encode64`, but uses `-_` instead of `+/` to make the result
url-safe.

#### urlsafeDecode64(str) ####

Like `decode64`, but assumes the encoding uses `-_` instead of `+/`.

### Manipulation ###

### splitLines(str) ###

Return an array of lines in `str` without trailing line delimitors.

#### wrap(str, [soft=70, hard]) ####

Break `str` into segments along word boundaries.  Return the segments
in an array.  Usually, each segment is no longer than `soft`
characters.  If there are no word breaks and `hard` is set, the long
word will be split into segments that are no longer than `hard`
characters.  If `hard` is not set, long words are not broken.

#### fill(str, [soft=70, hard, glue]) ####

This is a shortcut for `wrap(str, soft, hard).join(glue)`.  By
default, `glue` is a newline.

#### atMost(str, [soft=70, hard, pattern="\\s"]) ####

Return the largest substring of `str` terminated by `pattern` that's
no longer than `soft` characters.  By default, `pattern` is any space
character.  If a `hard` limit is given, the result will be no longer
than `hard` characters, even if `pattern` isn't found.

## Compatibility ##

Node Text has been tested with Node.JS version `0.1.103`.

## License ##

Copyright (c) 2010, Ben Weaver &lt;ben@orangesoda.net&gt;
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are
met:

* Redistributions of source code must retain the above copyright
  notice, this list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright
  notice, this list of conditions and the following disclaimer in the
  documentation and/or other materials provided with the distribution.

* Neither the name of the <organization> nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT
HOLDER> BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

