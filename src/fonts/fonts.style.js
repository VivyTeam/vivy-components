import { injectGlobal } from 'styled-components';
import woff200 from '../../public/fonts/35C396_0_0.woff2';
import ie9Compat40 from '../../public/fonts/35C396_4_0.eot';
import woff240 from '../../public/fonts/35C396_4_0.woff2';
import woff40 from '../../public/fonts/35C396_4_0.woff';
import tt40 from '../../public/fonts/35C396_4_0.ttf';
import svg40 from '../../public/fonts/35C396_4_0.svg';
import woff250 from '../../public/fonts/35C396_5_0.woff2';

// eslint-disable-next-line
injectGlobal`
  @font-face {
    font-family: 'Norms';
    font-weight: 300;
    font-style: normal;
    src: url(${ie9Compat40}); /* IE9 Compat Modes */
    src: url(${woff240}) format('woff2'), /* Super Modern Browsers */
         url(${woff40}) format('woff'), /* Pretty Modern Browsers */
         url(${tt40})  format('truetype'),
         url(${svg40}) format('svg'); /* Legacy iOS */
    }
    @font-face {
      font-family: 'Norms';
      font-weight: 300;
      font-style: normal;
      src: url('/fonts/35C396_2_0.eot'); /* IE9 Compat Modes */
      src: url('/fonts/35C396_2_0.woff2') format('woff2'), /* Super Modern Browsers */
           url('/fonts/35C396_2_0.woff') format('woff'), /* Pretty Modern Browsers */
           url('/fonts/35C396_2_0.ttf')  format('truetype'),
           url('/fonts/35C396_2_0.svg#svgFontName') format('svg'); /* Legacy iOS */
    }
    @font-face {
      font-family: 'Norms';
      font-weight: 400;
      font-style: normal;
      src: url('/fonts/35C396_5_0.eot'); /* IE9 Compat Modes */
      src: url('/fonts/35C396_5_0.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
           url(${woff250}) format('woff2'), /* Super Modern Browsers */
           url('/fonts/35C396_5_0.woff') format('woff'), /* Pretty Modern Browsers */
           url('/fonts/35C396_5_0.ttf')  format('truetype'),
           url('/fonts/35C396_5_0.svg#svgFontName') format('svg'); /* Legacy iOS */
    }
    @font-face {
      font-family: 'Norms';
      font-weight: 400;
      font-style: italic;
      src: url('/fonts/35C396_1_0.eot'); /* IE9 Compat Modes */
      src: url('/fonts/35C396_1_0.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
           url('/fonts/35C396_1_0.woff2') format('woff2'), /* Super Modern Browsers */
           url('/fonts/35C396_1_0.woff') format('woff'), /* Pretty Modern Browsers */
           url('/fonts/35C396_1_0.ttf')  format('truetype'),
           url('/fonts/35C396_1_0.svg#svgFontName') format('svg'); /* Legacy iOS */
    }
  
    @font-face {
      font-family: 'Norms';
      font-weight: 500;
      font-style: normal;
      src: url('/fonts/35C396_3_0.eot'); /* IE9 Compat Modes */
      src: url('/fonts/35C396_3_0.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
           url('/fonts/35C396_3_0.woff2') format('woff2'), /* Super Modern Browsers */
           url('/fonts/35C396_3_0.woff') format('woff'), /* Pretty Modern Browsers */
           url('/fonts/35C396_3_0.ttf')  format('truetype'),
           url('/fonts/35C396_3_0.svg#svgFontName') format('svg'); /* Legacy iOS */
    }
    @font-face {
      font-family: 'Norms';
      font-weight: 700;
      font-style: normal;
      src: url('/fonts/35C396_0_0.eot'); /* IE9 Compat Modes */
      src: url('/fonts/35C396_0_0.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
           url(${woff200}) format('woff2'), /* Super Modern Browsers */
           url('/fonts/35C396_0_0.woff') format('woff'), /* Pretty Modern Browsers */
           url('/fonts/35C396_0_0.ttf')  format('truetype'),
           url('/fonts/35C396_0_0.svg#svgFontName') format('svg'); /* Legacy iOS */
    }
`;
