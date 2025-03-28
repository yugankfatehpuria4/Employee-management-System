const employees =  [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Finish project report",
          "taskDescription": "Complete the final report for the project and submit it to the team lead.",
          "taskDate": "2025-03-28",
          "category": "Reporting"
        },
        {
          "active": true,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Prepare presentation",
          "taskDescription": "Prepare a presentation for the upcoming client meeting.",
          "taskDate": "2025-03-26",
          "category": "Presentation"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Research new software tools",
          "taskDescription": "Research new software tools for team collaboration.",
          "taskDate": "2025-03-25",
          "category": "Research"
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Attend training session",
          "taskDescription": "Attend the online training session for new software.",
          "taskDate": "2025-03-27",
          "category": "Training"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Update documentation",
          "taskDescription": "Update the software documentation to reflect recent changes.",
          "taskDate": "2025-03-28",
          "category": "Documentation"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Complete code review",
          "taskDescription": "Complete the code review for the last sprint's development.",
          "taskDate": "2025-03-24",
          "category": "Review"
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Design new UI",
          "taskDescription": "Design the user interface for the new project dashboard.",
          "taskDate": "2025-03-28",
          "category": "Design"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Bug fix for mobile app",
          "taskDescription": "Fix the reported bugs in the mobile application.",
          "taskDate": "2025-03-24",
          "category": "Development"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Research new design trends",
          "taskDescription": "Research and document current UI/UX trends.",
          "taskDate": "2025-03-30",
          "category": "Research"
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Test new feature",
          "taskDescription": "Test the newly developed feature and report any issues.",
          "taskDate": "2025-03-27",
          "category": "Testing"
        },
        {
          "active": true,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Client meeting preparation",
          "taskDescription": "Prepare for the client meeting with slides and reports.",
          "taskDate": "2025-03-25",
          "category": "Meeting"
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Create marketing plan",
          "taskDescription": "Create a comprehensive marketing plan for the new product launch.",
          "taskDate": "2025-03-29",
          "category": "Marketing"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Conduct market research",
          "taskDescription": "Conduct a survey and analyze the market trends.",
          "taskDate": "2025-03-30",
          "category": "Research"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Design ad campaign",
          "taskDescription": "Design an ad campaign for the product launch, including creatives.",
          "taskDate": "2025-03-22",
          "category": "Advertising"
        }
      ]
    }
  ]
  
  const admin = [{
    "id": 101,
    "email": "admin@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Approve project budget",
        "taskDescription": "Review and approve the budget for the upcoming project.",
        "taskDate": "2025-03-28",
        "category": "Budgeting"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Review team performance",
        "taskDescription": "Review the performance of each team member and prepare feedback.",
        "taskDate": "2025-03-29",
        "category": "Performance"
      }
    ]
  }]

export const setLocalstorage=()=> {
    localStorage.setItem("employees",JSON.stringify(employees))
    localStorage.setItem("admin",JSON.stringify(admin))
}
export const getLocalstorage=()=>{
    const employees = JSON.parse(localStorage.getItem("employees"))
   
    const admin = JSON.parse(localStorage.getItem("admin"))
    console.log(employees,admin);
    return{employees,admin}
}