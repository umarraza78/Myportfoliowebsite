export const projectsData = [
  {
    id: "cicd-task1-jenkins-setup",
    title: "Jenkins Installation & Configuration",
    shortDesc: "Provisioned an EC2 Jenkins controller + private agent via Terraform, configured required plugins, credentials, and a sanity-check pipeline on the linux-agent.",
    fullDesc: "Provisioned an EC2 Jenkins LTS controller inside the Assignment 3 VPC using a Terraform user_data script that installs Java 17, Git, Docker, AWS CLI, and Terraform automatically.\n\nKey Highlights:\n- Opened port 8080 only to team IP; port 22 for SSH via Security Groups\n- Completed the Jenkins initial setup wizard: created an admin user, installed suggested plugins + Pipeline, Git, GitHub Branch Source, Docker Pipeline, Credentials Binding, Pipeline Utility Steps, SonarQube Scanner, Blue Ocean\n- Configured a separate EC2 build agent in a private subnet connected via SSH — labeled linux-agent\n- Created all required Jenkins Credentials (AWS key/secret, GitHub PAT, SonarQube token, ECR credentials, Slack webhook)\n- Configured GitHub plugin with PAT for private repo cloning and commit-status reporting\n- Added jenkins/ folder: plugins.txt, setup.md, and Terraform EC2 files\n- Verified with a sanity-check Pipeline job echoing 'hello' on the agent",
    image: "/T1.png",
    detailImage: "/T1.1.png",
    video: null,
    reportPdf: "/DEVOPS-A04.pdf",
    link: "https://github.com/umarraza78/Devops-A-3.git",
    techStack: ["Jenkins", "Terraform", "AWS EC2", "Groovy", "Blue Ocean", "GitHub"]
  },
  {
    id: "cicd-task2-declarative-pipeline",
    title: "Declarative Pipeline with Parallel Stages",
    shortDesc: "Built a Node.js app with 5+ unit & 2+ integration tests, a Declarative Jenkinsfile with parallel Test stages, Multibranch Pipeline, and Slack/email notifications.",
    fullDesc: "Built a Node.js + Express sample application under app/ featuring a /health REST endpoint, 5 unit tests, and 2 integration tests.\n\nJenkinsfile Stages (Declarative):\n1. Checkout — pulls code from GitHub\n2. Build — installs npm dependencies\n3. Test — parallel block running unit & integration tests concurrently with JUnit report publishing\n4. Package — packages the application artifact\n5. Deploy — deploys to the target environment\n\nPipeline Features:\n- agent directive targets linux-agent from Task 1\n- environment block injects Slack webhook via credentials()\n- post section: always (archive artifacts), success (Slack success notification), failure (Slack failure with stage name)\n- Configured as a Multibranch Pipeline with GitHub webhook for auto-triggering\n- Demonstrated successful and intentionally failing builds on a feature branch",
    image: "/T2.png",
    detailImage: null,
    video: null,
    reportPdf: "/DEVOPS-A04.pdf",
    link: "https://github.com/umarraza78/Devops-A-3.git",
    techStack: ["Jenkins", "Node.js", "Express.js", "JUnit", "Slack", "GitHub Webhooks"]
  },
  {
    id: "cicd-task3-shared-library",
    title: "Reusable Jenkins Shared Library (Groovy)",
    shortDesc: "Created a jenkins-shared-library repo with Groovy OOP classes (NotificationService, DockerHelper) and global vars (notifySlack, buildAndPushImage, runSonarScan).",
    fullDesc: "Created a separate GitHub repository jenkins-shared-library with the standard layout:\n- vars/ — global step scripts\n- src/ — Groovy OOP classes\n\nGroovy Classes (src/org/team/):\n- NotificationService: sendSlack(message) and sendEmail(to, subject, body) methods; constructor receives the Jenkins script object\n- DockerHelper: buildImage(name, tag) and pushImage(name, tag) methods; validates inputs before execution\n\nGlobal Variables (vars/):\n- notifySlack.groovy — validates required keys (message, channel) and calls NotificationService\n- buildAndPushImage.groovy — validates image name/tag, delegates to DockerHelper\n- runSonarScan.groovy — validates project key, runs SonarQube scanner step\n\nRegistered globally in Jenkins under Manage Jenkins > System > Global Pipeline Libraries (Default version: main, not implicit).\n\nRefactored the Task 2 Jenkinsfile so the post-section Slack notification calls notifySlack() from the library. Build logs show: 'Loading library your-lib@main'.",
    image: "/T3.png",
    detailImage: null,
    video: null,
    reportPdf: "/DEVOPS-A04.pdf",
    link: "https://github.com/umarraza78/jenkins-shared-library.git",
    techStack: ["Groovy", "Jenkins Shared Library", "OOP", "Slack API", "Docker"]
  },
  {
    id: "cicd-task4-sonarqube",
    title: "SonarQube Code Quality Integration",
    shortDesc: "Deployed SonarQube on EC2, integrated it with Jenkins via withSonarQubeEnv + waitForQualityGate, enforced Coverage on New Code ≥ 70%, and published coverage reports.",
    fullDesc: "Deployed SonarQube Community Edition on a t3.small EC2 instance inside the VPC using docker run in the user_data script.\n\nSetup:\n- Port 9000 restricted to team IP and Jenkins agent Security Group only\n- Generated project token in SonarQube, stored as Secret text credential in Jenkins\n- Registered SonarQube server under Manage Jenkins > System > SonarQube Servers\n- Configured SonarQube webhook pointing back to Jenkins (prevents waitForQualityGate timeout)\n\nJenkinsfile Changes:\n- Added Static Analysis stage (before Test) using withSonarQubeEnv step\n- waitForQualityGate step blocks pipeline until Quality Gate result returns\n- Gate failure causes pipeline failure\n\nQuality Gate Configuration:\n- Used default 'Sonar way' gate\n- Added custom condition: Coverage on New Code ≥ 70%\n- Code coverage measured with nyc/Istanbul (Node.js) and report passed to SonarQube\n\nDemonstrated both a passing gate and an intentional failure (lowered coverage).",
    image: "/T4.png",
    detailImage: "/T4.1.png",
    video: null,
    reportPdf: "/DEVOPS-A04.pdf",
    link: "https://github.com/umarraza78/Devops-A-3.git",
    techStack: ["SonarQube", "Jenkins", "Istanbul/nyc", "Code Coverage", "Quality Gates", "EC2"]
  },
  {
    id: "cicd-task5-docker-ecr",
    title: "Docker Build, Trivy Scan & ECR Push",
    shortDesc: "Multi-stage Dockerfile (non-root), Trivy vulnerability scanning failing on HIGH/CRITICAL CVEs, dual-tagged (SHA + branch) images pushed to AWS ECR via IAM role.",
    fullDesc: "Wrote a multi-stage Dockerfile:\n- Stage 1 (builder): installs dependencies and compiles/builds\n- Stage 2 (runtime): copies only the production artifact, runs as non-root user, excludes build tools and package caches\n\nJenkinsfile Stages:\n- Container Build: builds and tags image with short Git commit SHA (myapp:a1b2c3d) and branch name (myapp:main)\n- Security Scan: runs Trivy against built image; fails pipeline on any HIGH or CRITICAL CVE with an available fix; archives Trivy report regardless of result; .trivyignore file committed with justification comments\n- Push: authenticates to ECR using IAM role attached to agent EC2 (no long-lived keys); pushes both tags\n\nInfrastructure:\n- ECR private repository provisioned via Terraform\n- Lifecycle policy: keep 10 most recent images, expire untagged after 7 days\n- IAM policy documented in repository\n\nDemonstrated a failing Trivy scan (old base image) and then a passing scan after fix.",
    image: "/t5.png",
    detailImage: null,
    video: null,
    reportPdf: "/DEVOPS-A04.pdf",
    link: "https://github.com/umarraza78/Devops-A-3.git",
    techStack: ["Docker", "AWS ECR", "Trivy", "IAM Roles", "Terraform", "Multi-stage Build"]
  },
  {
    id: "cicd-task6-terraform-pipeline",
    title: "Terraform CI/CD Pipeline with tfsec",
    shortDesc: "Parameterized infra-pipeline (plan/apply/destroy) with tfsec security scanning, binary plan artifacts, manual approval gate, and S3/DynamoDB state locking demonstration.",
    fullDesc: "Created a parameterized Jenkins pipeline job named infra-pipeline with parameters:\n- ACTION: choice (plan / apply / destroy)\n- AUTO_APPROVE: boolean (default false)\n\nPipeline Stages:\n1. Checkout — pulls Terraform code\n2. Fmt & Validate — runs terraform fmt -check and terraform validate; fails on formatting errors or validation failures\n3. Security Scan — runs tfsec; fails on any HIGH finding; archives tfsec report as artifact\n4. Plan — saves binary plan file (tfplan), archived as Jenkins artifact\n5. Manual Approval — input step with 30-minute timeout; only appears when ACTION=apply or destroy AND AUTO_APPROVE=false\n6. Apply/Destroy — runs terraform apply tfplan (guarantees apply matches approved plan)\n\nState Management:\n- Terraform state stored in S3 backend from Assignment 3\n- DynamoDB table for state locking\n- Demonstrated state locking: second concurrent run blocked while first is running",
    image: "/t6.png",
    detailImage: null,
    video: null,
    reportPdf: "/DEVOPS-A04.pdf",
    link: "https://github.com/umarraza78/Devops-A-3.git",
    techStack: ["Terraform", "Jenkins", "tfsec", "AWS S3", "DynamoDB", "IaC"]
  },
  {
    id: "cicd-task7-blue-green",
    title: "Blue-Green Deployment to AWS",
    shortDesc: "Zero-downtime Blue-Green deployment using two ASGs behind an ALB, automated smoke testing, traffic switching, manual rollback pipeline, and S3 deployment logging.",
    fullDesc: "Extended Assignment 3 infrastructure to support Blue-Green deployment:\n\nInfrastructure (via Terraform):\n- Two Auto Scaling Groups: asg-blue and asg-green\n- Single ALB with two target groups: tg-blue and tg-green\n- ALB listener forwards 100% traffic to the currently live color; the other is idle\n\nDeploy-Production Stage (main branch only):\n1. Queries ALB listener to determine live color (AWS CLI)\n2. Updates idle ASG launch template to new ECR image version and triggers instance refresh\n3. Waits for all idle target group targets to become healthy\n4. Runs smoke test by curling idle target group on a test listener port\n5. If smoke test passes: switches ALB listener to idle target group\n6. If smoke test fails: pipeline fails with a clear message; listener is NOT switched\n\nRollback:\n- Separate Jenkins pipeline (no parameters) that flips ALB listener back to the other target group\n\nDeployment Logging:\n- JSON-line log appended to S3 via aws s3 cp on each deployment\n- Records: timestamp, Git SHA, image tag, previous color, new color, result (success/failed/rolled-back)",
    image: "/t7.png",
    detailImage: null,
    video: null,
    reportPdf: "/DEVOPS-A04.pdf",
    link: "https://github.com/umarraza78/Devops-A-3.git",
    techStack: ["AWS ALB", "Auto Scaling Groups", "Blue-Green", "Jenkins", "AWS CLI", "S3"]
  },
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
