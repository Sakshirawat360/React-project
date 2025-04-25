

const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "e@e.com",
    password: "123",
    tasks: [
      {
        title: "Design Homepage",
        description: "Create the main landing page layout",
        date: "2025-04-18",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix navbar bug",
        description: "Resolve sticky navbar issue on scroll",
        date: "2025-04-15",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Team meeting",
        description: "Weekly catch-up with design team",
        date: "2025-04-17",
        category: "Meetings",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 0
    }
  },
  {
    id: 2,
    firstName: "Ishita",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Implement login",
        description: "Build user login with validation",
        date: "2025-04-16",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Write unit tests",
        description: "Create test cases for auth module",
        date: "2025-04-17",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Code review",
        description: "Review PRs from frontend team",
        date: "2025-04-18",
        category: "Review",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix login bug",
        description: "Fix login redirect on success",
        date: "2025-04-15",
        category: "Bugfix",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ],
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 3,
    firstName: "Rohan",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Create logo",
        description: "Design logo concepts for new app",
        date: "2025-04-12",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Update branding guide",
        description: "Include new color scheme and logo",
        date: "2025-04-16",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Organize assets",
        description: "Sort and rename image files",
        date: "2025-04-18",
        category: "Media",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ],
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 4,
    firstName: "Meera",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "QA dashboard",
        description: "Check dashboard UI across browsers",
        date: "2025-04-14",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Write release notes",
        description: "Summarize v1.2.0 changes",
        date: "2025-04-16",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Check broken links",
        description: "Run audit on staging site",
        date: "2025-04-17",
        category: "Maintenance",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix image loading issue",
        description: "Investigate why product images fail to load",
        date: "2025-04-15",
        category: "Bugfix",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 1
    }
  },
  {
    id: 5,
    firstName: "Devansh",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Migrate database",
        description: "Move from SQLite to PostgreSQL",
        date: "2025-04-11",
        category: "Database",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Update environment vars",
        description: "Add API keys to new .env file",
        date: "2025-04-13",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Configure CI/CD",
        description: "Set up GitHub Actions workflow",
        date: "2025-04-17",
        category: "Automation",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 0
    }
  }
];

  

  const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
      }
  ];

 export const setLocalStorage = ()=>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
  }
 export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    
    return{employees, admin}
  }
  