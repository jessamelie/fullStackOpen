sequenceDiagram
    participant user
    participant browser
    participant server

Note right of browser: The SPA URL is already loaded and running
user->>browser: writes a note and clicks the "Save" button

Note right of browser: JavaScript sends a POST request using fetch
browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: JSON response with the new note
    deactivate server

Note right of browser: JavaScript adds the new note to the DOM without reloading the page