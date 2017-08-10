Progress so far:
- Added Semantic-UI for styling.
- Added a common Layout with a header.
- Added Header UI.
- Added sidebar.
- Can query a single post by ID.


Pending: 

- Add UI for showing list of blog posts.
- Add UI for rendering a single post.
- UI and layout for about me page.

Issues Faced:

- Hot-reload on error scenario throws "out of stack space" error in windows
	Used --max-old-space-size=4096 along with the node command. (Unverified)