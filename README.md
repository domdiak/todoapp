
To Do App focuses on frontend implementation of the task with a basic backend set-up.

### Technologies:

---

- **Frontend**: React, TailwindCSS
- **Backend**: Node.js/Express, MongoDB

### Features:

---

- Interface which displays a list of tasks
- A user is able to add and  delete tasks
- A user can update the task title
- A user can mark a task as completed
- A user is able to hide complete tasks with a toggle

### Installation:
- Created a `.env` file based on `.env-template`
- Replace MONGO_URI with your MONGO_URI key 
- Run `npm install` 
- Start the client with `npm start` and the server with `npm run server` 

## Design
### Frontend:
---

- Built in React and styling was implemented with Tailwind CSS
- `App component` contains existing parts of the layout (i.e. NavBar and Main Interface) and allows for easy addition of new layout components, such as Sidebar Menu, or React Router functionality
- `MainInterface component` contains a major chunk of this application’s logic:
    - Located in `pages` folder all views (added in the future) would live
    - `task` state and `fetchTasks` function which hold and retrieve DB data
    - All actions relating to the `task` state are performed with `handle...` functions, which are held in this component and passed as props to child components
    - Contains 4 child components with each component having a single and distinctive functionality:
        - `FilterBar` - toggle for hiding/showing already completed tasks
        - `AddTask` - allows for adding of new tasks
        - `TaskList` - displays a list of all tasks
        - `Error Message` - responsible for display of client-side errors
- `on...`  functions take care of interactions with the server-side and always invoke `handle...`functions to bring local state up-to-date:
    - `AddTask` contains `onSubmit` function
    - `TaskItem` (child inside `TaskList`) contains `onEdit, onDelete, onIsCompleted`functions
- `fetcher.js` contains all Axios requests and keeps them separate from React logic in the component

### Tradeoffs:
- `hideCompleted` filters for completed tasks on the backend, I would have moved it to the front-end and preform all filter operations there to maintain consistency (currently, a filter in `handleComplete` takes place in the frontend)

### Backend:
---

- A simple REST API built with Express.js
- Single route which handles all CRUD operations related to tasks

### Data Layer:
---

- MongoDB database which contains a single table storing tasks and their related properties:
    - _id (auto-generated)
    - title (type: String)
    - completed (type: Boolean)
