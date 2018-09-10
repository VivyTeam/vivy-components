import { injectGlobal } from "styled-components";
import ie9Compat00 from "../../public/fonts/TTNorms/35C396_0_0.eot";
import woff200 from "../../public/fonts/TTNorms/35C396_0_0.woff2";
import woff00 from "../../public/fonts/TTNorms/35C396_0_0.woff";
import tt00 from "../../public/fonts/TTNorms/35C396_0_0.ttf";
import svg00 from "../../public/fonts/TTNorms/35C396_0_0.svg";
import ie9Compat10 from "../../public/fonts/TTNorms/35C396_1_0.eot";
import woff210 from "../../public/fonts/TTNorms/35C396_1_0.woff2";
import woff10 from "../../public/fonts/TTNorms/35C396_1_0.woff";
import tt10 from "../../public/fonts/TTNorms/35C396_1_0.ttf";
import svg10 from "../../public/fonts/TTNorms/35C396_1_0.svg";
import ie9Compat20 from "../../public/fonts/TTNorms/35C396_2_0.eot";
import woff220 from "../../public/fonts/TTNorms/35C396_2_0.woff2";
import woff20 from "../../public/fonts/TTNorms/35C396_2_0.woff";
import tt20 from "../../public/fonts/TTNorms/35C396_2_0.ttf";
import svg20 from "../../public/fonts/TTNorms/35C396_2_0.svg";
import ie9Compat30 from "../../public/fonts/TTNorms/35C396_3_0.eot";
import woff230 from "../../public/fonts/TTNorms/35C396_3_0.woff2";
import woff30 from "../../public/fonts/TTNorms/35C396_3_0.woff";
import tt30 from "../../public/fonts/TTNorms/35C396_3_0.ttf";
import svg30 from "../../public/fonts/TTNorms/35C396_3_0.svg";
import ie9Compat40 from "../../public/fonts/TTNorms/35C396_4_0.eot";
import woff240 from "../../public/fonts/TTNorms/35C396_4_0.woff2";
import woff40 from "../../public/fonts/TTNorms/35C396_4_0.woff";
import tt40 from "../../public/fonts/TTNorms/35C396_4_0.ttf";
import svg40 from "../../public/fonts/TTNorms/35C396_4_0.svg";
import ie9Compat50 from "../../public/fonts/TTNorms/35C396_5_0.eot";
import woff250 from "../../public/fonts/TTNorms/35C396_5_0.woff2";
import woff50 from "../../public/fonts/TTNorms/35C396_5_0.woff";
import tt50 from "../../public/fonts/TTNorms/35C396_5_0.ttf";
import svg50 from "../../public/fonts/TTNorms/35C396_5_0.svg";
import vivyIconsEot from "../../public/fonts/vivy-icons/vivy-icons.eot";
import vivyIconsWoff from "../../public/fonts/vivy-icons/vivy-icons.woff";
import vivyIconsTtf from "../../public/fonts/vivy-icons/vivy-icons.ttf";
import vivyIconsSvg from "../../public/fonts/vivy-icons/vivy-icons.svg";

// eslint-disable-next-line
injectGlobal`
    @font-face {
      font-family: 'Norms';
      font-weight: 700;
      font-style: normal;
      src: url(${ie9Compat00}); /* IE9 Compat Modes */
      src: url(${woff200}) format('woff2'), /* Super Modern Browsers */
           url(${woff00}) format('woff'), /* Pretty Modern Browsers */
           url(${tt00})  format('truetype'),
           url(${svg00}) format('svg'); /* Legacy iOS */
    }
    @font-face {
      font-family: 'Norms';
      font-weight: 400;
      font-style: italic;
      src: url(${ie9Compat10}); /* IE9 Compat Modes */
      src: url(${woff210}) format('woff2'), /* Super Modern Browsers */
           url(${woff10}) format('woff'), /* Pretty Modern Browsers */
           url(${tt10})  format('truetype'),
           url(${svg10}) format('svg'); /* Legacy iOS */
    }
    @font-face {
      font-family: 'Norms';
      font-weight: 300;
      font-style: normal;
      src: url(${ie9Compat20}); /* IE9 Compat Modes */
      src: url(${woff220}) format('woff2'), /* Super Modern Browsers */
           url(${woff20}) format('woff'), /* Pretty Modern Browsers */
           url(${tt20})  format('truetype'),
           url(${svg20}) format('svg'); /* Legacy iOS */
    }
    @font-face {
      font-family: 'Norms';
      font-weight: 500;
      font-style: normal;
      src: url(${ie9Compat30}); /* IE9 Compat Modes */
      src: url(${woff230}) format('woff2'), /* Super Modern Browsers */
           url(${woff30}) format('woff'), /* Pretty Modern Browsers */
           url(${tt30})  format('truetype'),
           url(${svg30}) format('svg'); /* Legacy iOS */
    }
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
      font-weight: 400;
      font-style: normal;
      src: url(${ie9Compat50}); /* IE9 Compat Modes */
      src: url(${woff250}) format('woff2'), /* Super Modern Browsers */
           url(${woff50}) format('woff'), /* Pretty Modern Browsers */
           url(${tt50})  format('truetype'),
           url(${svg50}) format('svg'); /* Legacy iOS */
    }
    @font-face {
      font-family: 'vivy-icons';
      src: url(${vivyIconsEot}),
           url(${vivyIconsWoff}) format('woff'),
           url(${vivyIconsTtf}) format('truetype'),
           url(${vivyIconsSvg}) format('svg');
      font-weight: normal;
      font-style: normal;
    }
`;
