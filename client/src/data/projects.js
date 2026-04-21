export const projectsData = [
  {
    id: "aws-vpc-wordpress",
    title: "AWS VPC Deployment with WordPress",
    shortDesc: "Complete AWS VPC architecture with public/private subnets, NAT, IAM roles, and WordPress deployed on EC2.",
    fullDesc: "Designed and implemented a secure AWS Virtual Private Cloud (VPC). Configured public and private subnets, Internet Gateways, NAT Gateways, and IAM roles. Provisioned database resources and successfully deployed a WordPress website on an EC2 instance.",
    image: "/aws.png",
    video: null,
    link: "",
    techStack: ["AWS", "VPC", "EC2", "WordPress", "IAM"]
  },
  {
    id: "freelance-platform",
    title: "Freelance Platform",
    shortDesc: "A full-stack platform connecting freelancers with clients, built with the MERN stack.",
    fullDesc: "A comprehensive freelance platform built using MongoDB, Express.js, React.js, and Node.js. It connects freelancers with potential clients, allowing for seamless job posting, bidding, and communication.",
    image: "/edu.jpeg",
    video: null,
    link: "https://github.com/umarraza78/FreelancePlatform-MERN-.git",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js"]
  },
  {
    id: "whatsopify",
    title: "Whatsopify",
    shortDesc: "A robust real-time communication application.",
    fullDesc: "Whatsopify is a real-time messaging application featuring a modern user interface and seamless communication capabilities.",
    image: "/whatsapp.jpeg",
    video: null,
    link: "https://github.com/umarraza78/Whatsopify.git",
    techStack: ["React.js", "Node.js", "Socket.IO"]
  },
  {
    id: "mobile-automation-framework",
    title: "Mobile Automation with CI Pipeline",
    shortDesc: "Comprehensive mobile automation testing framework using WebdriverIO, Appium, and POM following OOP principles.",
    fullDesc: "A comprehensive mobile automation testing framework using WebdriverIO and Appium with a robust Page Object Model (POM) implementation following OOP principles.\n\n🚀 Features\n- Page Object Model (POM): Clean separation of test logic and page structure\n- OOP Principles: Inheritance, encapsulation, abstraction, and single responsibility\n- Reusable Components: Base classes and helper utilities to avoid code duplication\n- Mobile-Specific Actions: Swipe, scroll, tap, long press, and other gestures\n- Smart Wait Strategies: Multiple wait helpers with retry and backoff mechanisms\n- Test Data Generation: Dynamic test data creation to avoid hardcoding\n- Comprehensive Assertions: Soft and hard assertions with detailed error messages\n- Cross-Platform Ready: Structured for easy Android/iOS support",
    image: "/devops-a1.png",
    video: "/devops-a1.mp4",
    link: "https://github.com/umarraza78/Devops-A-01-Mobile-framework-automation-testing-.git",
    techStack: ["WebdriverIO", "Appium", "Page Object Model", "CI/CD"]
  },
  {
    id: "automated-aws-infrastructure",
    title: "Automated High-Availability AWS",
    shortDesc: "Automated, scalable AWS infrastructure using Terraform, ALB, and Auto Scaling for maximum reliability.",
    fullDesc: "This project delivers a highly available and secure cloud architecture on AWS. Built with a focus on 'Reliability' and 'Security by Design', the infrastructure is fully automated using modern DevOps practices.\n\nPROJECT OVERVIEW\nAn engineering-focused implementation of a highly available AWS infrastructure. The system leverages Infrastructure as Code (IaC) to ensure reproducible, scalable, and resilient environments that automatically adapt to computational demands.\n\nTECHNICAL BREAKDOWN\n- IaC & Automation: Used Terraform for full resource provisioning and Packer for custom AMI baking (Nginx/Appium/Stress-ng).\n- Networking: Custom VPC with 4 subnets (Multi-AZ), NAT Gateway, and Internet Gateway.\n- Scalability: Application Load Balancer (ALB) integrated with an Auto Scaling Group (ASG).\n- Monitoring: CloudWatch Alarms for CPU-based scaling (Scale-out > 60%, Scale-in < 20%).\n- Security: Multi-tier Security Groups (Web vs. DB), IAM roles for S3 access, and Bastion Host pattern for private instance management.\n- State Management: Remote S3 Backend with DynamoDB state locking.",
    image: "/dev.png",
    video: null,
    link: "https://github.com/umarraza78/Devops-A-3.git",
    techStack: ["AWS", "Terraform", "Packer", "CloudWatch", "ALB", "ASG"]
  },
  {
    id: "hospital-management-system",
    title: "Hospital Management",
    shortDesc: "Full-stack MERN app for hospital ops, featuring real-time chat & scheduling.",
    fullDesc: "The Hospital Management System (HMS) is a comprehensive web-based application designed to streamline hospital operations and improve patient care management. The system includes appointment scheduling, medical records management, prescription handling, doctor-patient communication, and administrative dashboards.\n\nKey Features:\n- Patient appointment booking and management\n- Doctor schedule and availability management\n- Medical records and prescription management\n- Real-time chat between doctors and patients\n- Admin dashboard for user and appointment management\n- User authentication with Google OAuth support\n- Responsive UI for web browsers",
    image: "/hospital.png",
    video: "/hms.mp4",
    link: "https://github.com/umarraza78/Hospital-Management-System.git",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Docker", "SonarQube"]
  },
  {
    id: "fast-course-registration",
    title: "Course Registration System",
    shortDesc: "Role-based university course registration platform built with Node & MongoDB.",
    fullDesc: "A robust role-based web application designed for university-style course registration. Built as a full-stack solution utilizing Node.js, Express, MongoDB, and EJS.\n\nStudents can securely browse available courses, register or drop classes, and view their organized schedules. Administrators have access to powerful management tools to oversee courses, monitor all student registrations, and generate comprehensive reports.",
    image: "/fast.png",
    video: "/fast.mp4",
    link: "https://github.com/umarraza78/FAST-COURSE-REGISTRATION-SYSTEM-FULL-STACK-MERN-.git",
    techStack: ["Node.js", "Express.js", "MongoDB", "EJS", "Full-Stack"]
  },
  {
    id: "secure-exam",
    title: "Secure Exam",
    shortDesc: "AI-powered secure exam monitoring system with real-time behavior detection and alert notifications.",
    fullDesc: "Secure Exam is a robust platform designed to ensure exam integrity through advanced AI monitoring.\n\nKey Features:\n- Authentication System: Login/Signup for teachers and admins\n- Real-time Monitoring: AI-powered student behavior detection\n- Alert System: Email notifications for suspicious activities\n- Dashboard: Teacher interface for managing exam sessions\n- Image Storage: Cloud-based storage for incident screenshots",
    image: "/secureexam.png",
    video: "/secureexam.mp4",
    link: "https://github.com/ahmadijaz02/Secure-Exam.git",
    techStack: ["React.js", "Node.js", "AI/CV", "Cloud Storage"]
  },
  {
    id: "kubernetes-mern-todo",
    title: "Kubernetes MERN App",
    shortDesc: "MERN app on Kubernetes with Persistent Storage and Horizontal Pod Autoscaling (HPA).",
    fullDesc: "This project demonstrates a containerized MERN (MongoDB, Express, React, Node.js) application deployed on a Kubernetes cluster with Persistent Storage and Horizontal Pod Autoscaling (HPA).\n\n🏗 Application Architecture\nThe application is split into three main tiers:\n- Web Tier: React frontend pods managed by a Deployment and exposed via a service.\n- API Tier: Node.js backend pods with Resource Limits (CPU) and Auto-scaling enabled.\n- Data Tier: MongoDB pod attached to a Persistent Volume Claim (PVC) to ensure data survives pod restarts.\n\n📈 Scaling & Persistence:\nThe backend scales automatically based on CPU utilization (Target 70%, Min 2, Max 5). Data stored in MongoDB remains available even after deleting the database pod.",
    image: "/devops-a2.png",
    video: null,
    link: "https://github.com/umarraza78/Devops-MERN-APP-Docker-kubernetes-docker-compose-persistent-storage-scaling-.git",
    techStack: ["React.js", "Node.js", "Kubernetes", "Docker", "MongoDB"]
  }
];
