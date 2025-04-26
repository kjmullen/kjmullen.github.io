import { ProfileData } from '../types';

export const profileData: ProfileData = {
  name: "Kevin Mullen",
  title: "Senior DevOps Engineer",
  summary: "Tech-savvy and accomplished professional with extensive experience in development operations, automation, and technical project management. Well-versed in configuring, installing, and updating software and applications as well as maintaining necessary infrastructure. Talent for conducting analysis, assessment, and performing resolution for defects and incidents of advanced complexity. Adept at ensuring cyber hygiene as well as developing and implementing innovative technical solutions. Remarkable efficiency in maintaining server app build and deployment pipeline, documenting processes, and leveraging cloud resources. Excel at leading and training cross-functional teams to achieve desired outcomes. Proficient in relationship building, software systems, continuous integration, and change management. Thrive in challenging and deadline-driven environments.",
  skills: [
    { name: "AWS", level: 5, category: "cloud" },
    { name: "GCP", level: 4, category: "cloud" },
    { name: "Azure", level: 3, category: "cloud" },
    { name: "Kubernetes", level: 4, category: "infrastructure" },
    { name: "Docker", level: 5, category: "devops" },
    { name: "Terraform", level: 5, category: "infrastructure" },
    { name: "Pulumi", level: 4, category: "infrastructure" },
    { name: "CloudFormation", level: 4, category: "infrastructure" },
    { name: "CDK", level: 4, category: "infrastructure" },
    { name: "GitHub Actions", level: 5, category: "devops" },
    { name: "Jenkins", level: 5, category: "devops" },
    { name: "Linux", level: 5, category: "tools" },
    { name: "Bash", level: 5, category: "languages" },
    { name: "Python", level: 5, category: "languages" },
    { name: "Typescript", level: 4, category: "languages" },
    { name: "Groovy", level: 4, category: "languages" },
    { name: "Monitoring & Observability", level: 5, category: "tools" },
    { name: "CI/CD", level: 5, category: "devops" },
    { name: "Infrastructure as Code", level: 5, category: "infrastructure" },
    { name: "Saltstack", level: 4, category: "infrastructure" },
    { name: "Git", level: 5, category: "tools" },
    { name: "AWS ECS", level: 4, category: "infrastructure" },
    { name: "AWS EKS", level: 4, category: "infrastructure" },
    { name: "AWS Lambda", level: 4, category: "infrastructure" },
    { name: "Google Cloud Functions", level: 4, category: "infrastructure" },
    { name: "Jenkins CasC", level: 4, category: "infrastructure" },
    { name: "CloudWatch", level: 4, category: "tools" },
    { name: "CloudTrail", level: 4, category: "tools" },
    { name: "Sentry", level: 4, category: "tools" },
    { name: "Datadog", level: 4, category: "tools" },
    { name: "Graylog", level: 4, category: "tools" }
  ],
  experience: [
    {
      company: "Chainskope",
      position: "Lead DevOps Engineer",
      duration: "2024 - Present",
      description: [
        "Accepted transfer of knowledge from previous DevOps lead and took on production rollout responsibilities",
        "Created tasks for future improvements while evaluating the current infrastructure",
        "Refactoring the development environment to prevent overlapping CIDR block ranges with the production environment",
        "Deploying a new VPC and fixes for networking tech debt, with database & ECS migrations to new subnets using Terraform",
        "Collaborated with Backend and Frontend engineers on quickly deploying a public API, including API keys with usage plans, and Firewall blocking malicious usage using AWS API Gateway"
      ],
      technologies: ["AWS", "Terraform", "ECS", "API Gateway", "VPC", "Networking"]
    },
    {
      company: "IXLayer",
      position: "Senior DevOps Engineer",
      duration: "2021 - 2023",
      description: [
        "Executed fully automated versioning, image building, code artifacting, and rapid development procedures using Jenkins, Docker, Github Actions, and CDK/Terraform/Pulumi",
        "Oversaw transformation from Bitbucket to Github as the SCM provider and collaborated with engineering pods",
        "Deployed Wagtail CMS on AWS Fargate ECS enabling developer velocity and scalability",
        "Authored Pulumi infrastructure as code for secure, production-grade VPC, load balancing, and other infrastructure",
        "Established CI/CD pipeline with GitHub Actions for rapid, automated releases on code changes",
        "Led migration from manual Jenkins jobs to Jenkins Pipelines-as-Code",
        "Created reusable Jenkins shared libraries in Groovy enabling modular, maintainable deployments",
        "Reduced deployment times of over seven-fold and release time from full day to 15 minutes via automation, process improvement, and development and operations procedures transition"
      ],
      technologies: ["AWS", "Jenkins", "Docker", "GitHub Actions", "CDK", "Terraform", "Pulumi", "ECS", "Groovy"]
    },
    {
      company: "Omnislash",
      position: "Cloud Engineer/Python Developer/Data Team Member",
      duration: "2019 - 2021",
      description: [
        "Monitored and configured GCP Firebase backend with Google endpoints-built API and serverless event-activated cloud functions running Python to update the Firestore database",
        "Supervised automation of data extraction from external APIs and data transformation for front-end views",
        "Developed Python AWS Lambda to analyze logs in S3 triggered on upload event; implemented with Terraform and tested locally with python-local-lambda",
        "Maintained Jenkins slave machine to gather C++, installed dependencies, and assessed compiling demands before pipeline automation",
        "Configured Airflow helm chart and executed through Terraform",
        "Spearheaded advanced installer project for team and oversaw updates and releases of application Installer.exe",
        "Recorded DevOps infrastructure reviews and updated for performing DevOps roles and crafting disaster recovery plan",
        "Created Google cloud functions to collect match data from three gaming APIs and integrating 100K+ matches daily into analytics dashboards to facilitate data-driven player performance insights",
        "Deployed and managed Apache Airflow on Amazon EKS Kubernetes cluster to create data pipelines, configuring Helm chart and infrastructure through Terraform IaC"
      ],
      technologies: ["GCP", "AWS", "Python", "Terraform", "Jenkins", "Lambda", "EKS", "Kubernetes", "Firebase", "Airflow", "Helm"]
    },
    {
      company: "IXLayer",
      position: "Cloud Engineer",
      duration: "2018 - 2019",
      description: [
        "Designed cloud formation templates for VPC, security groups, load balancers, S3 buckets, and networking and EC2 instances for introducing new customers",
        "Restructured and debugged Grunt and Vue docker image for CI/CD pipeline and prepared for implementation",
        "Assessed and incorporated SSL encryption renewing method through SaltStack",
        "Successfully prepared company for secret store via Hashicorp's Vault, including documentation and deployment",
        "Created first iterations of infrastructure as code with Cloudformation"
      ],
      technologies: ["AWS", "CloudFormation", "Docker", "Saltstack", "Vault", "VPC", "S3", "EC2"]
    },
    {
      company: "HATech LLC",
      position: "Cloud Engineer",
      duration: "2018",
      description: [
        "Transformed BASH scripts to Python to increase deployment speeds and improve overall readability",
        "Developed documentation and diagrams specifying full disaster guide with detailed steps and information on backups",
        "Established and managed cloud solutions in accordance with best practices",
        "Minimized script execution time by 45% by migrating BASH scripts with 3K+ lines of code to Python",
        "Enhanced developer experience by executing automated deployment pipeline built with S3 Events, Python scripted AWS Lambda, and Jenkins jobs",
        "Monitored and modifies infrastructure containing six different development environments, 20+ microservices and docker apps, and 20+ lambdas using Terraform"
      ],
      technologies: ["AWS", "Python", "Bash", "Terraform", "Lambda", "S3", "Jenkins", "Docker"]
    },
    {
      company: "WiseBanyan Inc.",
      position: "Cloud Engineer/Data Team Member/PHP Developer",
      duration: "2016 - 2017",
      description: [
        "Maintained virtual boxes for development and unit testing, including Vagrant and VM",
        "Implemented task automation and workflow management platform for data warehouse, such as airflow on Ubuntu EC2 instance",
        "Monitored data backups and devised automation process",
        "Steered and setup log management and alerts, including papertrail, slack, and email notifications along with developing microservice containers (Docker)",
        "Drafted deployment recipes for infrastructure management using Terraform",
        "Coordinated extract, transform, and load (ETL) and command development (PHP)",
        "Executed and configured continuous integration and continuous deployment server (Jenkins on Ubuntu EC2 Instance)"
      ],
      technologies: ["AWS", "Terraform", "Docker", "Jenkins", "PHP", "Ubuntu", "EC2", "Vagrant", "Airflow"]
    }
  ],
  contacts: [
    {
      platform: "GitHub",
      url: "https://github.com/kjmullen",
      icon: "Github"
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/kevin-mullen-68072911b/",
      icon: "Linkedin"
    },
    {
      platform: "Email",
      url: "mailto:kevinmullen.dev@gmail.com",
      icon: "Mail"
    }
  ]
};