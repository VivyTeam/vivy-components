import React from 'react';
import ThemeStyles from './theme.style';

const ThemeFonts = () => (
  <ThemeStyles>
    <div className="font-container">
      <h1>Typography</h1>
      <p id="alt">
        We use TT Norms, giving text in Vivy a fun and friendly feel to match
        our illustrations.
      </p>
      <br />
      <h1>&lt;h1&gt; Headline - 1.5em 600 bold</h1>
      <h1>The quick brown fox jumps over the lazy dog</h1>
      <br />
      <h2>&lt;h2&gt; Title - 1.25em 600 bold</h2>
      <h2>The quick brown fox jumps over the lazy dog</h2>
      <br />
      <h3>&lt;h3&gt; Subheading - 1em 600 bold</h3>
      <h3>The quick brown fox jumps over the lazy dog</h3>
      <br />
      <h3 id="alt">&lt;h3&gt; Subheading alt - 1em 100 regular</h3>
      <h3 id="alt">The quick brown fox jumps over the lazy dog</h3>
      <br />
      <p>&lt;p&gt; Body - 0.93em 600 bold</p>
      <p>The quick brown fox jumps over the lazy dog</p>
      <br />
      <p id="alt">&lt;p&gt; Body alt - 0.93em 100 regular</p>
      <p id="alt">The quick brown fox jumps over the lazy dog</p>
      <br />
      <p className="caption">&lt;p&gt; Caption - 0.81em 400 medium</p>
      <p className="caption">The quick brown fox jumps over the lazy dog</p>
    </div>
  </ThemeStyles>
);

export default ThemeFonts;
