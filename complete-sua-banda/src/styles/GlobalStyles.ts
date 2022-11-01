import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    /* http://meyerweb.com/eric/tools/css/reset/ 
        v2.0 | 20110126
		License: none (public domain)
	*/

html, body, div, span, h1, h2, h3, h4, h5, h6,
p, a, img, small, strong, sub, b, i, ul, li,
form, label, article, aside, footer, header,
nav, section  {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
    box-sizing: border-box;
    text-decoration: none;
}
/* HTML5 display-role reset for older browsers */
article, aside, footer, header, nav, section {
	display: block;
}
body {
	line-height: 1;
    font-family: 'Inter', sans-serif;
}
ul {
	list-style: none;
}

:root {
	/* Colors */
    --color-brand: #DA6031;
	--color-brand-opacity: #DA603133;
	--color-brand-active: #FE9870;
	--color-grey-1: #FFF5F1;
	--color-grey-2: #999390;
	--color-grey-3: #4C4948;
	--color-grey-4: #191818;
	
	/*Typography  */
	--title-size-1: 24px;
	--title-size-2: 20px;
	--text-size-1: 12px;
	--text-size-2: 10px;
}
`;
