## Setup

`rails new Project --database=postgresql --webpack=react`

`rails g react:install`

Add `//= require react` to `application.js`.

`rails g react:component FileName --es6` (the component appears in `app/javascript/components`)

Add `<%= javascript_pack_tag 'application' %>
<%= react_component 'FileName', {}, prerender: true %>` to the appropriate view (e.g. the view your default route points to). _You can put props for the server-side component in the empty options object._
Add `<%= javascript_pack_tag 'application' %>` to `application.html.erb`.

On the client-side, [use](https://github.com/English3000/rails-ssr-practice/blob/master/frontend/index.js) `ReactDOM.hydrate`. For this to work, put `<div id='replaced-with-js'>`, wrapping `<%= yield %>`, in `application.html.erb`.

> [react-rails](https://github.com/reactjs/react-rails)
