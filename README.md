## Setup

`rails new Project --database=postgresql --webpack=react`

`rails g react:install`

Add `//= require react` to `application.js`.

`rails g react:component FileName`

Add `<%= javascript_pack_tag 'application' %>
<%= react_component 'FileName', { #server-side props
}, prerender: true %>` to the appropriate view.
Add `<%= javascript_pack_tag 'application' %>` to `application.html.erb`.

On the client-side, use `ReactDOM.hydrate`. For this to work, put `<div id='replaced-with-js'>`, wrapping `<%= yield %>` in `application.html.erb`.

> [react-rails](https://github.com/reactjs/react-rails)
