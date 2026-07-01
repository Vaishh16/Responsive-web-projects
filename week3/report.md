\# CyberShield Accessibility Report



\## 1. Audit Performed



A Lighthouse audit was conducted on the CyberShield landing page using 

Chrome DevTools. The initial accessibility score was 90 out of 100.



The following issues were identified:



\- Background and foreground colors do not have sufficient contrast ratio

\- Document does not have a main landmark element

\- Interactive elements lack proper ARIA attributes

\- Keyboard navigation was limited for the hamburger menu

\- No skip navigation link for keyboard users



\## 2. Improvements Made



\### HTML Improvements

\- Added `<main>` landmark element wrapping all page sections

\- Added skip navigation link at top of page for keyboard users

\- Added `aria-expanded` attribute to hamburger button



\### CSS Improvements

\- Improved text contrast by changing paragraph colors from #b0b0b0 to #c0c0c0

\- Fixed footer text contrast from #555e6e to #a0a0a0

\- Added visible focus styles for all links and buttons

\- Fixed input focus to show outline instead of removing it



\### JavaScript Improvements

\- Added keyboard support for hamburger menu (Enter and Space keys)

\- Added dynamic aria-expanded attribute update on menu toggle



\## 3. How These Meet Accessibility Standards



| Fix | WCAG Guideline |

|-----|---------------|

| Color contrast | WCAG 1.4.3 - Contrast Minimum |

| Main landmark | WCAG 1.3.1 - Info and Relationships |

| Skip link | WCAG 2.4.1 - Bypass Blocks |

| Focus styles | WCAG 2.4.7 - Focus Visible |

| Keyboard support | WCAG 2.1.1 - Keyboard Accessible |

| ARIA attributes | WCAG 4.1.2 - Name Role Value |



\## 4. Result



After applying all improvements, the Lighthouse accessibility score 

improved from 90 to 100.

