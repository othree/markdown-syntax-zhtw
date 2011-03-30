Markdown: Basics
================

Getting the Gist of Markdown's Formatting Syntax
------------------------------------------------

這頁提供了 Markdown 簡單的概觀給想使用的人， [語法說明][s] 頁提供了完整詳細的文件，說明每項功能，但是 Markdown 其實很簡單就可以上手，這頁文件提供了一些範例，並且每個範例都有提供輸出的 HTML 結果。

其實直接試試看也是一個很不錯的方法， [Dingus][d] 是一個網頁應用程式，讓你可以把你的 Markdown 文件轉成 XHTML。

**Note:** 這份文件本身也是用 Markdown 寫的，你也可以看看 [它的原始碼][src]

  [s]: http://markdown.tw  "Markdown Syntax"
  [d]: http://daringfireball.net/projects/markdown/dingus  "Markdown Dingus"
  [src]: https://github.com/othree/markdown-syntax-zhtw/blob/master/basics.md

## 段落、標題、區塊程式碼 ##

一個段落是由一個以上的連接的行句組成，而一個以上的空行則會切分出不同的段落（空行的定義是顯示上看起來像是空行，就被視為空行，例如有一行只有空白和 tab，那該行也會被視為空行），一般的段落不需要用空白或斷行縮排。

Markdown 支援兩種標題的語法，[Setext] [1] 和 [atx] [2] 形式。Setext 形式是用底線的形式，利用 `=` （最高階標題）和 `-` （第二階標題），Atx 形式在行首插入 1 到 6 個 `#` ，對應到標題 1 到 6 階。

區塊引言則使用 email 形式的 '`>`' 角括號。

Markdown:

    A First Level Header
    ====================
    
    A Second Level Header
    ---------------------

    Now is the time for all good men to come to
    the aid of their country. This is just a
    regular paragraph.

    The quick brown fox jumped over the lazy
    dog's back.
    
    ### Header 3

    > This is a blockquote.
    > 
    > This is the second paragraph in the blockquote.
    >
    > ## This is an H2 in a blockquote

輸出：

    <h1>A First Level Header</h1>
    
    <h2>A Second Level Header</h2>
    
    <p>Now is the time for all good men to come to
    the aid of their country. This is just a
    regular paragraph.</p>
    
    <p>The quick brown fox jumped over the lazy
    dog's back.</p>
    
    <h3>Header 3</h3>
    
    <blockquote>
        <p>This is a blockquote.</p>
        
        <p>This is the second paragraph in the blockquote.</p>
        
        <h2>This is an H2 in a blockquote</h2>
    </blockquote>



### 修辭和強調 ###

Markdown 使用星號和底線來標記需要強調的區段。

Markdown:

    Some of these words *are emphasized*.
    Some of these words _are emphasized also_.
    
    Use two asterisks for **strong emphasis**.
    Or, if you prefer, __use two underscores instead__.

輸出:

    <p>Some of these words <em>are emphasized</em>.
    Some of these words <em>are emphasized also</em>.</p>
    
    <p>Use two asterisks for <strong>strong emphasis</strong>.
    Or, if you prefer, <strong>use two underscores instead</strong>.</p>

## 清單 ##

無序清單使用星號、加號和減號來做為清單的項目標記，這些符號是都可以使用的，使用星號：

    *   Candy.
    *   Gum.
    *   Booze.

加號：

    +   Candy.
    +   Gum.
    +   Booze.

和減號

    -   Candy.
    -   Gum.
    -   Booze.

都會輸出：

    <ul>
    <li>Candy.</li>
    <li>Gum.</li>
    <li>Booze.</li>
    </ul>

有序的清單則是使用一般的數字接著一個英文句點作為項目標記：

    1.  Red
    2.  Green
    3.  Blue

輸出：

    <ol>
    <li>Red</li>
    <li>Green</li>
    <li>Blue</li>
    </ol>

如果你在項目之間插入空行，那項目的內容會備用 `<p>` 包起來，你也可以在一個項目內放上多個段落，只要在它前面縮排 4 個空白或 1 個 tab 。

    *   A list item.
    
        With multiple paragraphs.

    *   Another item in the list.

輸出：

    <ul>
    <li><p>A list item.</p>
    <p>With multiple paragraphs.</p></li>
    <li><p>Another item in the list.</p></li>
    </ul>
    
### 連結 ###

Markdown 支援兩種形式的連結語法： *行內* 和 *參考* 兩種形式，兩種都是使用角括號來把文字轉成連結。

行內形式形式是直接在後面用括號直接接上連結：

    This is an [example link](http://example.com/).

輸出：

    <p>This is an <a href="http://example.com/">
    example link</a>.</p>

你也可以選擇性的加上 title 屬性：

    This is an [example link](http://example.com/ "With a Title").

輸出：

    <p>This is an <a href="http://example.com/" title="With a Title">
    example link</a>.</p>

參考形式的連結讓你可以為連結定一個名稱，之後你可以在文件的其他地方定義該連結的內容：

    I get 10 times more traffic from [Google][1] than from
    [Yahoo][2] or [MSN][3].

    [1]: http://google.com/        "Google"
    [2]: http://search.yahoo.com/  "Yahoo Search"
    [3]: http://search.msn.com/    "MSN Search"

輸出：

    <p>I get 10 times more traffic from <a href="http://google.com/"
    title="Google">Google</a> than from <a href="http://search.yahoo.com/"
    title="Yahoo Search">Yahoo</a> or <a href="http://search.msn.com/"
    title="MSN Search">MSN</a>.</p>

title 屬性是選擇性的，連結名稱可以用字母、數字和空格，但是不分大小寫：

    I start my morning with a cup of coffee and
    [The New York Times][NY Times].

    [ny times]: http://www.nytimes.com/

輸出：

    <p>I start my morning with a cup of coffee and
    <a href="http://www.nytimes.com/">The New York Times</a>.</p>


### 圖片 ###

圖片的語法和連結很像。

行內形式（title 是選擇性的）：

    ![alt text](/path/to/img.jpg "Title")

參考形式：

    ![alt text][id]

    [id]: /path/to/img.jpg "Title"

上面兩種方法都會輸出：

    <img src="/path/to/img.jpg" alt="alt text" title="Title" />

### 程式碼 ###
    
在一般的段落文字中，你可以使用反引號 `` ` `` 來標記程式碼區段，區段內的 `&`、`<` 和 `>` 都會被自動的轉換成 HTML 實體，這項特性讓你可以很容易的在程式碼區段內插入 HTML 碼：

    I strongly recommend against using any `<blink>` tags.

    I wish SmartyPants used named entities like `&mdash;`
    instead of decimal-encoded entites like `&#8212;`.

輸出：

    <p>I strongly recommend against using any
    <code>&lt;blink&gt;</code> tags.</p>
    
    <p>I wish SmartyPants used named entities like
    <code>&amp;mdash;</code> instead of decimal-encoded
    entites like <code>&amp;#8212;</code>.</p>

如果要建立一個已經格式化好的程式碼區塊，只要每行都縮排 4 個空格或是一個 tab 就可以了，而 `&`、`<` 和 `>` 也一樣會自動轉成 HTML 實體。

Markdown:

    If you want your page to validate under XHTML 1.0 Strict,
    you've got to put paragraph tags in your blockquotes:

        <blockquote>
            <p>For example.</p>
        </blockquote>

輸出：

    <p>If you want your page to validate under XHTML 1.0 Strict,
    you've got to put paragraph tags in your blockquotes:</p>
    
    <pre><code>&lt;blockquote&gt;
        &lt;p&gt;For example.&lt;/p&gt;
    &lt;/blockquote&gt;
    </code></pre>
