Description
============

It is just an excuse to play a bit with node.js, socket.io and express framework.

The idea is to allow, like a chat room environemnt, where you can browse at the same time
with others users. Everytime a user browses a new URL is updated in all the clients
connected to that room.



Implementation
--------------

- socket.io for events spread across all the user for a specific room
- redis to store room information (in this first implementation just the room UUIDs)
- express for the scaffolding and url handling


Limitations
-----------

- It cannot be used to access sites that does not allow access through an iframe
- Look & feel are crappy ;) I haven't invested time on UI stuff
