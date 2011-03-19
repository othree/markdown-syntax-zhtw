**NOTE:** This is Traditional Chinese Edition Document of
Markdown Syntax. If you are seeking for English Edition 
Document. Please refer to [Markdown: Syntax][eng-doc].

[eng-doc]:http://daringfireball.net/projects/markdown/syntax


Markdown: Syntax
================

*   [Overview](#overview)
    *   [Philosophy](#philosophy)
    *   [Inline HTML](#html)
    *   [Automatic Escaping for Special Characters](#autoescape)
*   [Block Elements](#block)
    *   [Paragraphs and Line Breaks](#p)
    *   [Headers](#header)
    *   [Blockquotes](#blockquote)
    *   [Lists](#list)
    *   [Code Blocks](#precode)
    *   [Horizontal Rules](#hr)
*   [Span Elements](#span)
    *   [Links](#link)
    *   [Emphasis](#em)
    *   [Code](#code)
    *   [Images](#img)
*   [Miscellaneous](#misc)
    *   [Backslash Escapes](#backslash)
    *   [Automatic Links](#autolink)


**Note:** This document is itself written using Markdown; you
can [see the source for it by adding '.text' to the URL][src].

  [src]: http://daringfireball.net/projects/markdown/syntax.text

* * *

<h2 id="overview">Overview</h2>

<h3 id="philosophy">Philosophy</h3>

Markdown is intended to be as easy-to-read and easy-to-write as is feasible.

Markdown 將容易閱讀和容易寫作這兩點作為主要目標。

Readability, however, is emphasized above all else. A Markdown-formatted
document should be publishable as-is, as plain text, without looking
like it's been marked up with tags or formatting instructions. While
Markdown's syntax has been influenced by several existing text-to-HTML
filters -- including [Setext] [1], [atx] [2], [Textile] [3], [reStructuredText] [4],
[Grutatext] [5], and [EtText] [6] -- the single biggest source of
inspiration for Markdown's syntax is the format of plain text email.

可讀性則是其中最重要的一個特點，一篇 Markdown 格式的文件應該要可以直
接作為發佈用的文件，而不會讓人覺得他是使用像是邊簽語言之類的格式來編
寫，Markdown 的文件格式受到很多的 text-to-HTML 格式的影響，包括 
[Setext] [1]、[atx] [2]、[Textile] [3]、[reStructuredText] [4]、
[Grutatext] [5] 和 [EtText] [6]，然而影響最大的其實是純文字的電子郵
件。

  [1]: http://docutils.sourceforge.net/mirror/setext.html
  [2]: http://www.aaronsw.com/2002/atx/
  [3]: http://textism.com/tools/textile/
  [4]: http://docutils.sourceforge.net/rst.html
  [5]: http://www.triptico.com/software/grutatxt.html
  [6]: http://ettext.taint.org/doc/

To this end, Markdown's syntax is comprised entirely of punctuation
characters, which punctuation characters have been carefully chosen so
as to look like what they mean. E.g., asterisks around a word actually
look like \*emphasis\*. Markdown lists look like, well, lists. Even
blockquotes look like quoted passages of text, assuming you've ever
used email.

為了這個目的，Markdown 的語法全部由標點符號來組成，標點符號的選擇是依
據他們看起來樣子或是他們的意義慎重的考慮的，像是在文字兩旁加上星號，看
起來就很像在 \*強調\* 。Markdow 的清單就很像是清單，區塊引研究很像是電
子郵件的引言。

<h3 id="html">Inline HTML</h3>

Markdown's syntax is intended for one purpose: to be used as a
format for *writing* for the web.

Markdown 的語法有個主要的目的：用來作為一種網路內容的 *寫作* 用語言。

Markdown is not a replacement for HTML, or even close to it. Its
syntax is very small, corresponding only to a very small subset of
HTML tags. The idea is *not* to create a syntax that makes it easier
to insert HTML tags. In my opinion, HTML tags are already easy to
insert. The idea for Markdown is to make it easy to read, write, and
edit prose. HTML is a *publishing* format; Markdown is a *writing*
format. Thus, Markdown's formatting syntax only addresses issues that
can be conveyed in plain text.

Markdown 不是要來取代 HTML，甚至也沒有要和它相似，它的語法種類不多，
只和 HTML 的一部分有關係，重點 *不是* 要創造一種更容易插入 HTML 標籤
的語法，我認為 HTML 已經很容易插入了，Markdown 的重點在讓文件更容易
閱讀、編寫，HTML 是一種 *發佈* 的格式，Markdown 是一種 *編寫* 的格式，
因此，Markdown 的格式語法只涵蓋純文字可以涵蓋的範圍。

For any markup that is not covered by Markdown's syntax, you simply
use HTML itself. There's no need to preface it or delimit it to
indicate that you're switching from Markdown to HTML; you just use
the tags.

不在 Markdown 涵蓋範圍之外的標籤，都可以直接在文件裡面用 HTML 撰寫。
不需要額外標註這是 HTML 或是 Markdown；只要直接加標籤就可以了。

The only restrictions are that block-level HTML elements -- e.g. `<div>`,
`<table>`, `<pre>`, `<p>`, etc. -- must be separated from surrounding
content by blank lines, and the start and end tags of the block should
not be indented with tabs or spaces. Markdown is smart enough not
to add extra (unwanted) `<p>` tags around HTML block-level tags.

只有區塊元素──比如 `<div>`,`<table>`, `<pre>`, `<p>` 等標籤，必需在
前後加上空白，以利與內容區隔。而且這些的開始與結尾標籤，不可以用 tab 
或是空白來縮排。Markdown 的產生器有智慧型判斷，可以避免在區塊標籤前後
加上沒有必要的 `<p>` 標籤。

For example, to add an HTML table to a Markdown article:

舉例說明，在 Markdown 文件裡加上一段 HTML 表格：

    This is a regular paragraph.
    這是一般的段落

    <table>
        <tr>
            <td>Foo</td>
        </tr>
    </table>

    This is another regular paragraph.
    這是下一個段落

Note that Markdown formatting syntax is not processed within block-level
HTML tags. E.g., you can't use Markdown-style `*emphasis*` inside an
HTML block.

請注意，在 HTML 區塊標籤內，是不會對 Markdown 的語法進行處理的。例如，
HTML 區塊內，無法使用 Markdown 形式的 `*強調*`

Span-level HTML tags -- e.g. `<span>`, `<cite>`, or `<del>` -- can be
used anywhere in a Markdown paragraph, list item, or header. If you
want, you can even use HTML tags instead of Markdown formatting; e.g. if
you'd prefer to use HTML `<a>` or `<img>` tags instead of Markdown's
link or image syntax, go right ahead.

HTML 的跨度標間如 `<span>`, `<cite>` 或者 `<del>` 則不受限制，可以在
Markdown 的段落、清單或是檔頭裡任意使用。依照個人習慣，甚至可以不用
Markdown 格式，而採用 HTML 標籤來格式化。舉例說明：如果比較喜歡 HTML
的  `<a>` 或 `<img>` 標籤，可以直接使用這些標籤，而不用 Markdown 提
供的連結或是影像標示語法。

Unlike block-level HTML tags, Markdown syntax *is* processed within
span-level tags.

HTML 跨度標籤和區塊標籤不同，在跨度標籤的範圍內， Markdown 的語法是有效的。

<h3 id="autoescape">Automatic Escaping for Special Characters</h3>

In HTML, there are two characters that demand special treatment: `<`
and `&`. Left angle brackets are used to start tags; ampersands are
used to denote HTML entities. If you want to use them as literal
characters, you must escape them as entities, e.g. `&lt;`, and
`&amp;`.

在 HTML 文件中，有兩個字元需要特殊處理： `<` 和 `&` 。 `<` 符號用於起始
標籤，`&` 符號則用於標記 HTML 實體，如果你只是想要使用這些符號，你必須要
使用實體的形式，像是 `&lt;` 和 `&amp;`。

Ampersands in particular are bedeviling for web writers. If you want to
write about 'AT&T', you need to write '`AT&amp;T`'. You even need to
escape ampersands within URLs. Thus, if you want to link to:

`&` 符號其實很讓寫作網路文件的人很困擾，如果你要打 'AT&T' ，你必須要寫成
'`AAT&amp;T`' ，你還必須要轉換網址內的 `&` 符號，如果你要連結到：

    http://images.google.com/images?num=30&q=larry+bird

you need to encode the URL as:

你必須要把網址轉成：

    http://images.google.com/images?num=30&amp;q=larry+bird

in your anchor tag `href` attribute. Needless to say, this is easy to
forget, and is probably the single most common source of HTML validation
errors in otherwise well-marked-up web sites.

才能放到你的連結標籤的 `href` 裡，不用說，這很容易忘記，可能是最大的
HTML 標準檢查的錯誤來源。

Markdown allows you to use these characters naturally, taking care of
all the necessary escaping for you. If you use an ampersand as part of
an HTML entity, it remains unchanged; otherwise it will be translated
into `&amp;`.

Markdown 允許你直接使用這些符號，但是你要小心跳脫字元的使用，如果你是在
HTML 實體中使用 `&` 符號的話，它不會被轉換，而在其它情形下，它則會被轉換
成 `&amp;`

So, if you want to include a copyright symbol in your article, you can write:

所以你如果要在文件中插入一個著作權的符號，你可以這樣寫：

    &copy;

and Markdown will leave it alone. But if you write:

Markdown 將不會對這段文字做修改，但是如果你這樣寫：

    AT&T

Markdown will translate it to:

Markdown 就會將它轉為：

    AT&amp;T

Similarly, because Markdown supports [inline HTML](#html), if you use
angle brackets as delimiters for HTML tags, Markdown will treat them as
such. But if you write:

類似的狀況也會發生在 `<` 符號上，因為 Markdown 支援 [inline HTML](#html) ，
如果你是使用 `<` 符號作為 HTML 標籤使用，那 Markdown 也不會對它做任何轉換，
但是如果你是寫：

    4 < 5

Markdown will translate it to:

Markdown 將會把它轉換為：

    4 &lt; 5

However, inside Markdown code spans and blocks, angle brackets and
ampersands are *always* encoded automatically. This makes it easy to use
Markdown to write about HTML code. (As opposed to raw HTML, which is a
terrible format for writing about HTML syntax, because every single `<`
and `&` in your example code needs to be escaped.)

不過要注意的是，code 範圍內，不論是行內還是區塊， `<` 和 `&` 兩個符號都 *一定*
會被轉換成 HTML 實體，這項特性讓你可以很容易的用 Markdown 寫 HTML code 
（和 HTML 相對而言， HTML 語法中，你要把所有的 `<` 和 `&` 都轉換為 HTML 實體，
你才能再 HTML 文件裡面寫出 HTML code）

* * *


<h2 id="block">Block Elements</h2>


<h3 id="p">Paragraphs and Line Breaks</h3>

A paragraph is simply one or more consecutive lines of text, separated
by one or more blank lines. (A blank line is any line that looks like a
blank line -- a line containing nothing but spaces or tabs is considered
blank.) Normal paragraphs should not be indented with spaces or tabs.

一個段落是由一個或以上的連接的行句組成，而兩個以上的空行則會切分出不同的段落
（空行的定義是顯示上看起來像是空行，就被視為空行，例如有一行只有空白和 tab，
那該行也會被視為空行），一般的段落不需要用空白或斷行縮排。

The implication of the "one or more consecutive lines of text" rule is
that Markdown supports "hard-wrapped" text paragraphs. This differs
significantly from most other text-to-HTML formatters (including Movable
Type's "Convert Line Breaks" option) which translate every line break
character in a paragraph into a `<br />` tag.

「一個或以上的連接的行句組成」這句其實暗示了 Markdow 允許段落內的強迫斷行，
這個特性和其他大部分的 text-to-HTML 格式不一樣（包括 MovableType 的 
"Convert Line Breaks" 選項），其它的格式會把每個斷行都轉成 `<br />` 標籤。


When you *do* want to insert a `<br />` break tag using Markdown, you
end a line with two or more spaces, then type return.

如果你 *真的* 是想要插入 `<br />` 標籤的話，在行尾加上兩個以上的空白，然後按 enter。

Yes, this takes a tad more effort to create a `<br />`, but a simplistic
"every line break is a `<br />`" rule wouldn't work for Markdown.
Markdown's email-style [blockquoting][bq] and multi-paragraph [list items][l]
work best -- and look better -- when you format them with hard breaks.

是的，這確實讓你要花比較多功夫插入 `<br />` ，但是「每個換行都轉換為 `<br />`」
的方法在 Markdown 中並不適合， Markdown 的 email 式的 [區塊引言][bq] 和多段落的
[清單][l] 在使用換行來排版的時候，不但更好用，還更好看！

  [bq]: #blockquote
  [l]:  #list



<h3 id="header">Headers</h3>

Markdown supports two styles of headers, [Setext] [1] and [atx] [2].

Markdown 支援兩種標題的語法，[Setext] [1] 和 [atx] [2] 形式。

Setext-style headers are "underlined" using equal signs (for first-level
headers) and dashes (for second-level headers). For example:

Setext 形式是用底線的形式，利用 `=` （最高階標題）和 `-` （第二階標題），
例如：

    This is an H1
    =============

    This is an H2
    -------------

Any number of underlining `=`'s or `-`'s will work.

任何數量的 `=` 和 `-` 都可以有效果。

Atx-style headers use 1-6 hash characters at the start of the line,
corresponding to header levels 1-6. For example:

Atx 形式在行首插入 1 到 6 個 `#` ，對應到標題 1 到 6 階，例如：

    # This is an H1

    ## This is an H2

    ###### This is an H6

Optionally, you may "close" atx-style headers. This is purely
cosmetic -- you can use this if you think it looks better. The
closing hashes don't even need to match the number of hashes
used to open the header. (The number of opening hashes
determines the header level.) :

你可以選擇性的 "關閉" atx 樣式的標題，這純粹只是美觀用的，你如果覺得這樣
看起來比較好，就可以加上 `#` 在行尾，而行尾的 `#` 數量也不用和開頭一樣
（行首的數量決定標題的階數）：

    # This is an H1 #

    ## This is an H2 ##

    ### This is an H3 ######


<h3 id="blockquote">Blockquotes</h3>

Markdown uses email-style `>` characters for blockquoting. If you're
familiar with quoting passages of text in an email message, then you
know how to create a blockquote in Markdown. It looks best if you hard
wrap the text and put a `>` before every line:

Markdown 使用 email 形式的區塊引言，如果你很清楚在 email 信件中如何引言，
你就知道如何在 Markdown 文件中建立一個區塊引言，那會看起來像是你強迫斷行，
然後在每行的最前面加上 `>` ：

    > This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
    > consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
    > Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
    > 
    > Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
    > id sem consectetuer libero luctus adipiscing.

Markdown allows you to be lazy and only put the `>` before the first
line of a hard-wrapped paragraph:

Markdown 也允許你只在整個段落的第一行最前面加上 `>` ：

    > This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
    consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
    Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

    > Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
    id sem consectetuer libero luctus adipiscing.

Blockquotes can be nested (i.e. a blockquote-in-a-blockquote) by
adding additional levels of `>`:

區塊引言可以有階層（例如：引言內的引言），只要根據層數加上不同數量的 `>` ：

    > This is the first level of quoting.
    >
    > > This is nested blockquote.
    >
    > Back to the first level.

Blockquotes can contain other Markdown elements, including headers, lists,
and code blocks:

引言的區塊內也可以使用其他的 Markdown 語法，包括標題、清單、程式碼區塊等：


	> ## This is a header.
	> 
	> 1.   This is the first list item.
	> 2.   This is the second list item.
	> 
	> Here's some example code:
	> 
	>     return shell_exec("echo $input | $markdown_script");

Any decent text editor should make email-style quoting easy. For
example, with BBEdit, you can make a selection and choose Increase
Quote Level from the Text menu.

任何標準的文字編輯器都可以簡單的建立 email 樣式的引言，例如 BBEdit ，你可以
選取文字後然後從選單中選擇 *增加引言階層* 。

<h3 id="list">Lists</h3>

Markdown supports ordered (numbered) and unordered (bulleted) lists.

Markdown 支援有序清單和無序清單。

Unordered lists use asterisks, pluses, and hyphens -- interchangably
-- as list markers:

無序清單使用星號、加號或是減號作為清單標記：

    *   Red
    *   Green
    *   Blue

is equivalent to:

等同於：

    +   Red
    +   Green
    +   Blue

and:

和：

    -   Red
    -   Green
    -   Blue

Ordered lists use numbers followed by periods:

有序清單則使用數字接著一個英文句點：

    1.  Bird
    2.  McHale
    3.  Parish

It's important to note that the actual numbers you use to mark the
list have no effect on the HTML output Markdown produces. The HTML
Markdown produces from the above list is:

很重要的一點是：你的清單標記上的數字並不會影響輸出的 HTML 結果，上面
的清單所產生的 HTML 標記為：

    <ol>
    <li>Bird</li>
    <li>McHale</li>
    <li>Parish</li>
    </ol>

If you instead wrote the list in Markdown like this:

如果你的清單標記寫成：

    1.  Bird
    1.  McHale
    1.  Parish

or even:

或甚至是：

    3. Bird
    1. McHale
    8. Parish

you'd get the exact same HTML output. The point is, if you want to,
you can use ordinal numbers in your ordered Markdown lists, so that
the numbers in your source match the numbers in your published HTML.
But if you want to be lazy, you don't have to.

你都會得到完全一樣的 HTML 輸出，重點在於，你可以讓你的 Markdown 文件的清單
數字和輸出的結果一樣，或是你懶一點，你可以完全不用在意數字的正確性。

If you do use lazy list numbering, however, you should still start the
list with the number 1. At some point in the future, Markdown may support
starting ordered lists at an arbitrary number.

如果你使用懶惰的寫法，建議第一個項目最好還是從 1. 開始，因為 Markdown 未來
可能會支援有序清單的 start 屬性。

List markers typically start at the left margin, but may be indented by
up to three spaces. List markers must be followed by one or more spaces
or a tab.

清單項目標記通常是放在最左邊，但是其實也可以縮排，最多三個空白，項目標記後面
則一定要接著至少一個空白或 tab。

To make lists look nice, you can wrap items with hanging indents:

要讓清單看起來更漂亮，你可以把內容用固定的縮排整理好：

    *   Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,
        viverra nec, fringilla in, laoreet vitae, risus.
    *   Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
        Suspendisse id sem consectetuer libero luctus adipiscing.

But if you want to be lazy, you don't have to:

但是如果你很懶，那也不一定需要：

    *   Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,
    viverra nec, fringilla in, laoreet vitae, risus.
    *   Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
    Suspendisse id sem consectetuer libero luctus adipiscing.

If list items are separated by blank lines, Markdown will wrap the
items in `<p>` tags in the HTML output. For example, this input:

如果清單項目間用空行分開， Markdown 會把項目的內容在輸出時用 `<p>` 
標籤包起來，舉例來說：

    *   Bird
    *   Magic

will turn into:

會被轉換為：

    <ul>
    <li>Bird</li>
    <li>Magic</li>
    </ul>

But this:

但是這個：

    *   Bird

    *   Magic

will turn into:

會被轉換為：

    <ul>
    <li><p>Bird</p></li>
    <li><p>Magic</p></li>
    </ul>

List items may consist of multiple paragraphs. Each subsequent
paragraph in a list item must be indented by either 4 spaces
or one tab:

清單項目可以包含多個段落，每個項目下的端落都必須要縮排 4 個空白或
是一個 tab ：

    1.  This is a list item with two paragraphs. Lorem ipsum dolor
        sit amet, consectetuer adipiscing elit. Aliquam hendrerit
        mi posuere lectus.

        Vestibulum enim wisi, viverra nec, fringilla in, laoreet
        vitae, risus. Donec sit amet nisl. Aliquam semper ipsum
        sit amet velit.

    2.  Suspendisse id sem consectetuer libero luctus adipiscing.

It looks nice if you indent every line of the subsequent
paragraphs, but here again, Markdown will allow you to be
lazy:

如果你每行都有縮排，看起來會看好很多，當然，再次的，如果你很懶惰，
Markdown 也允許：

    *   This is a list item with two paragraphs.

        This is the second paragraph in the list item. You're
    only required to indent the first line. Lorem ipsum dolor
    sit amet, consectetuer adipiscing elit.

    *   Another item in the same list.

To put a blockquote within a list item, the blockquote's `>`
delimiters need to be indented:

如果要在清單項目內放進引言，那 `>` 就需要縮排：

    *   A list item with a blockquote:

        > This is a blockquote
        > inside a list item.

To put a code block within a list item, the code block needs
to be indented *twice* -- 8 spaces or two tabs:

如果要放程式碼區塊的話，該區塊就需要縮排 *兩次* ，也就是 8 個
空白或是兩個 tab：

    *   A list item with a code block:

            <code goes here>


It's worth noting that it's possible to trigger an ordered list by
accident, by writing something like this:

當然，項目清單很可能會不小心產生，像是下面這樣的寫法：

    1986. What a great season.

In other words, a *number-period-space* sequence at the beginning of a
line. To avoid this, you can backslash-escape the period:

換句話說，也就是在行首出現 *數字-句點-空白* ，要避免這樣的狀況，你
可以在句點前面加上反斜線。

    1986\. What a great season.



<h3 id="precode">Code Blocks</h3>

Pre-formatted code blocks are used for writing about programming or
markup source code. Rather than forming normal paragraphs, the lines
of a code block are interpreted literally. Markdown wraps a code block
in both `<pre>` and `<code>` tags.

和程式相關的寫作或是標籤語言原始碼通常會有已經排版好的程式碼區塊，通常這些
區塊我們並不希望它照一般段落文件的方式去排版，而是照原來的樣子顯示，Markdown 
會用 `<pre>` 和 `<code>` 標籤來把程式碼區塊包起來。

To produce a code block in Markdown, simply indent every line of the
block by at least 4 spaces or 1 tab. For example, given this input:

在 Markdown 中要建立程式碼區塊很簡單，只要簡單的縮排 4 個空白或是 1 個 tab 就可以，
例如，下面的輸入：

    This is a normal paragraph:

        This is a code block.

Markdown will generate:

Markdown 會轉換成：

    <p>This is a normal paragraph:</p>

    <pre><code>This is a code block.
    </code></pre>

One level of indentation -- 4 spaces or 1 tab -- is removed from each
line of the code block. For example, this:

這個每行一階的縮排（4 個空白或是 1 個 tab），都會被移除，例如：

    Here is an example of AppleScript:

        tell application "Foo"
            beep
        end tell

will turn into:

會被轉換為：

    <p>Here is an example of AppleScript:</p>

    <pre><code>tell application "Foo"
        beep
    end tell
    </code></pre>

A code block continues until it reaches a line that is not indented
(or the end of the article).

一個程式碼區塊會一直持續到碰到沒有縮排的行（或是文件結尾）。

Within a code block, ampersands (`&`) and angle brackets (`<` and `>`)
are automatically converted into HTML entities. This makes it very
easy to include example HTML source code using Markdown -- just paste
it and indent it, and Markdown will handle the hassle of encoding the
ampersands and angle brackets. For example, this:

在程式碼區塊裡面， `&` 、 `<` 和 `>` 會自動轉成 HTML 實體，這樣的方式會讓
你非常容易使用 Markdown 插入範例用的 HTML 原始碼，只需要複製貼上，然後縮
排就可以了，剩下的 Markdown 都會幫你處理，例如：


        <div class="footer">
            &copy; 2004 Foo Corporation
        </div>

will turn into:

會被轉換為：

    <pre><code>&lt;div class="footer"&gt;
        &amp;copy; 2004 Foo Corporation
    &lt;/div&gt;
    </code></pre>

Regular Markdown syntax is not processed within code blocks. E.g.,
asterisks are just literal asterisks within a code block. This means
it's also easy to use Markdown to write about Markdown's own syntax.

程式碼區塊中，一般的 Markdown 語法不會被轉換，像是星號就只會是星號，
這表示你可以很容易用 Markdown 語法寫 Markdown 語法相關的文件。

<h3 id="hr">Horizontal Rules</h3>

You can produce a horizontal rule tag (`<hr />`) by placing three or
more hyphens, asterisks, or underscores on a line by themselves. If you
wish, you may use spaces between the hyphens or asterisks. Each of the
following lines will produce a horizontal rule:

你可以用在一行內用三個或以上的星號、減號、底線來建立一個分隔線，
行內不能有其他東西，你也可以在星號中間插入空白，下面每種寫法都可
以建立分隔線：

    * * *

    ***

    *****

    - - -

    ---------------------------------------


* * *

<h2 id="span">Span Elements</h2>

<h3 id="link">Links</h3>

Markdown supports two style of links: *inline* and *reference*.

Markdown 支援兩種形式的連結語法： *行內* 和 *參考* 兩種形式。

In both styles, the link text is delimited by [square brackets].

不管是哪一種，連結的文字都是用 [方括號] 來標記。

To create an inline link, use a set of regular parentheses immediately
after the link text's closing square bracket. Inside the parentheses,
put the URL where you want the link to point, along with an *optional*
title for the link, surrounded in quotes. For example:

要建立一個行內形式的連結，只要在方塊括號後面馬上接著括號並插入網址連結即可，
如果你還想要加上連結的 title 文字，只要在網址後面，用雙引號把 title 文字
包起來即可，例如：

    This is [an example](http://example.com/ "Title") inline link.

    [This link](http://example.net/) has no title attribute.

Will produce:

會產生：

    <p>This is <a href="http://example.com/" title="Title">
    an example</a> inline link.</p>

    <p><a href="http://example.net/">This link</a> has no
    title attribute.</p>

If you're referring to a local resource on the same server, you can
use relative paths:

如果你是要連結到同樣主機的資源，你可以使用相對路徑：

    See my [About](/about/) page for details.   

Reference-style links use a second set of square brackets, inside
which you place a label of your choosing to identify the link:

參考形式的連結使用另外一個方括號接在連結文字的括號後面，而在第二個方括號
裡面要填入連結的辨識用的標籤：

    This is [an example][id] reference-style link.

You can optionally use a space to separate the sets of brackets:

你也可以選擇性的在兩個方括號中間加上空白：

    This is [an example] [id] reference-style link.

Then, anywhere in the document, you define your link label like this,
on a line by itself:

接著，在文件的任意處，你可以把這個標籤的連結內容定義出來：

    [id]: http://example.com/  "Optional Title Here"

That is:

連結定義的形式為：

*   Square brackets containing the link identifier (optionally
    indented from the left margin using up to three spaces);
*   followed by a colon;
*   followed by one or more spaces (or tabs);
*   followed by the URL for the link;
*   optionally followed by a title attribute for the link, enclosed
    in double or single quotes, or enclosed in parentheses.

*   方括號，裡面輸入連結的辨識用標籤
*   接著一個分號
*   接著一個以上的空白或 tab
*   接著連結的網址
*   選擇性的接著 title 內容，可以用單引號、雙引號或是括弧包著

The following three link definitions are equivalent:

下面這三種連結的定義都是相同：

	[foo]: http://example.com/  "Optional Title Here"
	[foo]: http://example.com/  'Optional Title Here'
	[foo]: http://example.com/  (Optional Title Here)

**Note:** There is a known bug in Markdown.pl 1.0.1 which prevents
single quotes from being used to delimit link titles.

**Note:** 有一個已知的問題是 Markdown.pl 1.0.1 會忽略單引號包起來的
連結 title。

The link URL may, optionally, be surrounded by angle brackets:

連結網址也可以用角括號包起來：

    [id]: <http://example.com/>  "Optional Title Here"

You can put the title attribute on the next line and use extra spaces
or tabs for padding, which tends to look better with longer URLs:

你也可以把 title 屬性放到下一行，也可以加一些縮排，網址太長的話，這樣
會比較好看：

    [id]: http://example.com/longish/path/to/resource/here
        "Optional Title Here"

Link definitions are only used for creating links during Markdown
processing, and are stripped from your document in the HTML output.

網址定義只有在產生連結的時候用到，並不會直接出現在文件之中。

Link definition names may consist of letters, numbers, spaces, and
punctuation -- but they are *not* case sensitive. E.g. these two
links:

連結辨識標籤可以有字母、數字、空白和標點符號，但是並 *不* 分大小寫，
因此下面兩個連結是一樣的：

	[link text][a]
	[link text][A]

are equivalent.

The *implicit link name* shortcut allows you to omit the name of the
link, in which case the link text itself is used as the name.
Just use an empty set of square brackets -- e.g., to link the word
"Google" to the google.com web site, you could simply write:

*預設的連結標籤* 功能讓你可以省略指定連結標籤，這種情形下，連結標籤
和連結文字會視為相同，要用預設連結標籤只要在連結文字後面加上一個空的
角括號，如果你要讓 "Google" 連結到 google.com，你可以簡化成：

	[Google][]

And then define the link:

然後定義連結內容：

	[Google]: http://google.com/

Because link names may contain spaces, this shortcut even works for
multiple words in the link text:

由於連結文字可能包含空白，所以這種簡化的標籤內也可以包含多個文字：

	Visit [Daring Fireball][] for more information.

And then define the link:

然後接著定義連結：
	
	[Daring Fireball]: http://daringfireball.net/

Link definitions can be placed anywhere in your Markdown document. I
tend to put them immediately after each paragraph in which they're
used, but if you want, you can put them all at the end of your
document, sort of like footnotes.

Here's an example of reference links in action:

    I get 10 times more traffic from [Google] [1] than from
    [Yahoo] [2] or [MSN] [3].

      [1]: http://google.com/        "Google"
      [2]: http://search.yahoo.com/  "Yahoo Search"
      [3]: http://search.msn.com/    "MSN Search"

Using the implicit link name shortcut, you could instead write:

    I get 10 times more traffic from [Google][] than from
    [Yahoo][] or [MSN][].

      [google]: http://google.com/        "Google"
      [yahoo]:  http://search.yahoo.com/  "Yahoo Search"
      [msn]:    http://search.msn.com/    "MSN Search"

Both of the above examples will produce the following HTML output:

    <p>I get 10 times more traffic from <a href="http://google.com/"
    title="Google">Google</a> than from
    <a href="http://search.yahoo.com/" title="Yahoo Search">Yahoo</a>
    or <a href="http://search.msn.com/" title="MSN Search">MSN</a>.</p>

For comparison, here is the same paragraph written using
Markdown's inline link style:

    I get 10 times more traffic from [Google](http://google.com/ "Google")
    than from [Yahoo](http://search.yahoo.com/ "Yahoo Search") or
    [MSN](http://search.msn.com/ "MSN Search").

The point of reference-style links is not that they're easier to
write. The point is that with reference-style links, your document
source is vastly more readable. Compare the above examples: using
reference-style links, the paragraph itself is only 81 characters
long; with inline-style links, it's 176 characters; and as raw HTML,
it's 234 characters. In the raw HTML, there's more markup than there
is text.

With Markdown's reference-style links, a source document much more
closely resembles the final output, as rendered in a browser. By
allowing you to move the markup-related metadata out of the paragraph,
you can add links without interrupting the narrative flow of your
prose.


<h3 id="em">Emphasis</h3>

Markdown treats asterisks (`*`) and underscores (`_`) as indicators of
emphasis. Text wrapped with one `*` or `_` will be wrapped with an
HTML `<em>` tag; double `*`'s or `_`'s will be wrapped with an HTML
`<strong>` tag. E.g., this input:

    *single asterisks*

    _single underscores_

    **double asterisks**

    __double underscores__

will produce:

    <em>single asterisks</em>

    <em>single underscores</em>

    <strong>double asterisks</strong>

    <strong>double underscores</strong>

You can use whichever style you prefer; the lone restriction is that
the same character must be used to open and close an emphasis span.

Emphasis can be used in the middle of a word:

    un*frigging*believable

But if you surround an `*` or `_` with spaces, it'll be treated as a
literal asterisk or underscore.

To produce a literal asterisk or underscore at a position where it
would otherwise be used as an emphasis delimiter, you can backslash
escape it:

    \*this text is surrounded by literal asterisks\*



<h3 id="code">Code</h3>

To indicate a span of code, wrap it with backtick quotes (`` ` ``).
Unlike a pre-formatted code block, a code span indicates code within a
normal paragraph. For example:

    Use the `printf()` function.

will produce:

    <p>Use the <code>printf()</code> function.</p>

To include a literal backtick character within a code span, you can use
multiple backticks as the opening and closing delimiters:

    ``There is a literal backtick (`) here.``

which will produce this:

    <p><code>There is a literal backtick (`) here.</code></p>

The backtick delimiters surrounding a code span may include spaces --
one after the opening, one before the closing. This allows you to place
literal backtick characters at the beginning or end of a code span:

	A single backtick in a code span: `` ` ``
	
	A backtick-delimited string in a code span: `` `foo` ``

will produce:

	<p>A single backtick in a code span: <code>`</code></p>
	
	<p>A backtick-delimited string in a code span: <code>`foo`</code></p>

With a code span, ampersands and angle brackets are encoded as HTML
entities automatically, which makes it easy to include example HTML
tags. Markdown will turn this:

    Please don't use any `<blink>` tags.

into:

    <p>Please don't use any <code>&lt;blink&gt;</code> tags.</p>

You can write this:

    `&#8212;` is the decimal-encoded equivalent of `&mdash;`.

to produce:

    <p><code>&amp;#8212;</code> is the decimal-encoded
    equivalent of <code>&amp;mdash;</code>.</p>



<h3 id="img">Images</h3>

Admittedly, it's fairly difficult to devise a "natural" syntax for
placing images into a plain text document format.

Markdown uses an image syntax that is intended to resemble the syntax
for links, allowing for two styles: *inline* and *reference*.

Inline image syntax looks like this:

    ![Alt text](/path/to/img.jpg)

    ![Alt text](/path/to/img.jpg "Optional title")

That is:

*   An exclamation mark: `!`;
*   followed by a set of square brackets, containing the `alt`
    attribute text for the image;
*   followed by a set of parentheses, containing the URL or path to
    the image, and an optional `title` attribute enclosed in double
    or single quotes.

Reference-style image syntax looks like this:

    ![Alt text][id]

Where "id" is the name of a defined image reference. Image references
are defined using syntax identical to link references:

    [id]: url/to/image  "Optional title attribute"

As of this writing, Markdown has no syntax for specifying the
dimensions of an image; if this is important to you, you can simply
use regular HTML `<img>` tags.


* * *


<h2 id="misc">Miscellaneous</h2>

<h3 id="autolink">Automatic Links</h3>

Markdown supports a shortcut style for creating "automatic" links for URLs and email addresses: simply surround the URL or email address with angle brackets. What this means is that if you want to show the actual text of a URL or email address, and also have it be a clickable link, you can do this:

    <http://example.com/>
    
Markdown will turn this into:

    <a href="http://example.com/">http://example.com/</a>

Automatic links for email addresses work similarly, except that
Markdown will also perform a bit of randomized decimal and hex
entity-encoding to help obscure your address from address-harvesting
spambots. For example, Markdown will turn this:

    <address@example.com>

into something like this:

    <a href="&#x6D;&#x61;i&#x6C;&#x74;&#x6F;:&#x61;&#x64;&#x64;&#x72;&#x65;
    &#115;&#115;&#64;&#101;&#120;&#x61;&#109;&#x70;&#x6C;e&#x2E;&#99;&#111;
    &#109;">&#x61;&#x64;&#x64;&#x72;&#x65;&#115;&#115;&#64;&#101;&#120;&#x61;
    &#109;&#x70;&#x6C;e&#x2E;&#99;&#111;&#109;</a>

which will render in a browser as a clickable link to "address@example.com".

(This sort of entity-encoding trick will indeed fool many, if not
most, address-harvesting bots, but it definitely won't fool all of
them. It's better than nothing, but an address published in this way
will probably eventually start receiving spam.)



<h3 id="backslash">Backslash Escapes</h3>

Markdown allows you to use backslash escapes to generate literal
characters which would otherwise have special meaning in Markdown's
formatting syntax. For example, if you wanted to surround a word
with literal asterisks (instead of an HTML `<em>` tag), you can use
backslashes before the asterisks, like this:

    \*literal asterisks\*

Markdown provides backslash escapes for the following characters:

    \   backslash
    `   backtick
    *   asterisk
    _   underscore
    {}  curly braces
    []  square brackets
    ()  parentheses
    #   hash mark
	+	plus sign
	-	minus sign (hyphen)
    .   dot
    !   exclamation mark

    \   反斜線
    `   反引號
    *   星號
    _   底線
    {}  大括號
    []  方括號
    ()  括號
    #   井字號
	+	加號
	-	減號
    .   英文句點
    !   驚嘆號

