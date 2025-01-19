# WikiPedia Application

## Overview
his application is a simple Wikipedia search tool that allows users to search for content directly from Wikipedia using an API. When a user types a query in the search input field and presses "Enter," the app fetches relevant results from the Wikipedia Search API and displays them dynamically on the webpage. It includes a spinner to indicate loading and ensures a seamless user experience.

## Features
### Dynamic Search Results
- The app fetches search results in real time from the Wikipedia API when the user presses "Enter."
- Results include the title, description, and link for each search item.
### Spinner for Loading Feedback:
- A spinner element is displayed while the API call is being made, improving user experience during loading.
### Interactive Links:

- Titles and URLs in the search results are clickable and open the respective Wikipedia pages in a new tab.
### Clean UI with Organized Content:

- Results are displayed in an organized format:
- Title (with a clickable link).
- URL (displayed and clickable).
- Description (brief explanation of the search result).
### Keyboard Input Handling:

- The application listens for the "Enter" key press event to initiate the search, providing a user-friendly interaction model.
### Real-Time Search:

- Each search clears previous results and dynamically displays new results without requiring a page reload.
### Reusable Code Design:

- The function createAndAppendResult ensures reusability by dynamically creating and appending each search result in a structured format.



## Technologies Used
- **Frontend:** HTML, CSS, Bootstrap, JavaScript

# Screenshot of the Project

https://github.com/solletivishnu/Wikipedia-Application/issues/1#issue-2797494333
