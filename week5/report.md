\# CyberShield Dashboard - Project Report



\## 1. Project Overview



A mini web application dashboard for CyberShield that displays security 

threat data loaded from a static JSON file. The dashboard includes 

responsive layout, interactive filtering, accessibility features, 

and performance optimizations.



\## 2. Features Implemented



\- Stats cards showing threats blocked, active users, and scans today

\- Threats table displaying all detected threats with name, type, risk and status

\- Filter buttons to filter threats by risk level (All, High, Medium, Low)

\- Data loaded dynamically from data.json using JavaScript fetch API

\- Responsive layout that adapts to mobile and desktop screens

\- Skip navigation link for keyboard users

\- ARIA labels on interactive sections

\- Focus styles for keyboard navigation



\## 3. Design Decisions



\- Dark navy blue theme consistent with CyberShield branding

\- Red, orange, green colors for High, Medium, Low risk levels

\- CSS Grid for stats cards layout

\- overflow-x auto on table for mobile scrolling



\## 4. Performance Optimizations



\- Meta description tag added

\- Minimal CSS with no external libraries

\- No unnecessary JavaScript or DOM complexity

\- Single JSON file for all data



\## 5. Testing



\- Tested on Chrome desktop and mobile view

\- Filter buttons tested for all risk levels

\- Keyboard navigation tested using Tab key

\- Lighthouse accessibility score: 100

