sequenceDiagram
    participant user
    participant browser
    participant server

Note right of browser: User writes a new note in the input field
user->>browser: clicks the "Save" button

Note right of browser: The form element uses method="POST" and action="/new_note"
browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
activate server

Note right of server: server reads request body and creates an object { content, date }
server-->>browser: HTTP 302 Redirect to /notes
deactivate Server

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
activate server
server-->>browser: HTML document with updated notes list
deactivate server

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
activate server
server-->>browser: CSS file
deactivate server

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
activate server
server-->>browser: JavaScript file
deactivate server

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
activate server
server-->>browser: JSON data including the new note
deactivate server

Note right of browser: The browser renders the updated list of notes