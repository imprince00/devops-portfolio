\# 🚀 DevOps Portfolio — Automated CI/CD Deployment



> \*\*A complete DevOps project demonstrating containerization, continuous integration, continuous deployment, and cloud hosting using Docker, Jenkins, GitHub, and AWS EC2.\*\*



\---



\## 📌 About The Project



This project is a \*\*production-style DevOps portfolio deployment\*\* built to demonstrate how a web application can be automatically delivered from source code to a live cloud server.



The portfolio website is developed using \*\*HTML, CSS, and JavaScript\*\*, containerized with \*\*Docker\*\*, and deployed on \*\*AWS EC2\*\* through a \*\*Jenkins CI/CD pipeline\*\*.



Whenever new code is pushed to the `main` branch, GitHub automatically triggers Jenkins through a webhook. Jenkins then builds a fresh Docker image and deploys the latest version of the application to the EC2 server.



\### 🔄 Complete Workflow



```text

Code Change

&#x20;    │

&#x20;    ▼

GitHub Repository

&#x20;    │

&#x20;    │ Push to main

&#x20;    ▼

GitHub Webhook

&#x20;    │

&#x20;    ▼

Jenkins CI/CD

&#x20;    │

&#x20;    ├── Checkout Code

&#x20;    │

&#x20;    ├── Build Docker Image

&#x20;    │

&#x20;    ├── Stop Old Container

&#x20;    │

&#x20;    ├── Remove Old Container

&#x20;    │

&#x20;    └── Deploy New Container

&#x20;            │

&#x20;            ▼

&#x20;       AWS EC2 Server

&#x20;            │

&#x20;            ▼

&#x20;      Live Portfolio

```



\---



\## 🎯 Project Objectives



The main objectives of this project are to:



\* Understand the fundamentals of DevOps.

\* Implement a complete CI/CD workflow.

\* Containerize a web application using Docker.

\* Automate deployment using Jenkins.

\* Host the application on AWS EC2.

\* Configure GitHub Webhooks for automatic builds.

\* Gain practical experience with Linux and cloud deployment.

\* Understand how source code moves from GitHub to a live server.



\---



\## 🛠️ Technologies \& Tools



| Technology         | Purpose                               |

| ------------------ | ------------------------------------- |

| \*\*HTML5\*\*          | Website structure                     |

| \*\*CSS3\*\*           | Website styling and responsive design |

| \*\*JavaScript\*\*     | Website interactivity                 |

| \*\*Git\*\*            | Version control                       |

| \*\*GitHub\*\*         | Source code management                |

| \*\*Docker\*\*         | Application containerization          |

| \*\*Jenkins\*\*        | CI/CD automation                      |

| \*\*AWS EC2\*\*        | Cloud server                          |

| \*\*Ubuntu Linux\*\*   | Server operating system               |

| \*\*GitHub Webhook\*\* | Automatic Jenkins trigger             |

| \*\*Nginx\*\*          | Web server inside Docker              |



\---



\## 📂 Project Structure



```text

devops-portfolio/

│

├── index.html          # Portfolio website

├── style.css           # Website styling

├── script.js           # JavaScript functionality

├── Dockerfile          # Docker image configuration

├── Jenkinsfile         # Jenkins CI/CD pipeline

└── README.md           # Project documentation

```



\---



\## 🐳 Docker Implementation



The portfolio application is packaged into a lightweight Docker container using \*\*Nginx Alpine\*\*.



\### Dockerfile



```dockerfile

FROM nginx:alpine



COPY . /usr/share/nginx/html



EXPOSE 80



CMD \["nginx", "-g", "daemon off;"]

```



\### Build Docker Image



```bash

docker build -t devops-portfolio:latest .

```



\### Run Docker Container



```bash

docker run -d -p 80:80 \\

&#x20; --name devops-portfolio-container \\

&#x20; devops-portfolio:latest

```



\### Check Running Containers



```bash

docker ps

```



\---



\## ⚙️ Jenkins CI/CD Pipeline



Jenkins is used to automate the build and deployment process.



The pipeline performs the following operations:



\### 1. Checkout



Jenkins retrieves the latest source code from GitHub.



\### 2. Build



A new Docker image is created using the latest application code.



\### 3. Stop Existing Container



The currently running application container is stopped.



\### 4. Remove Existing Container



The old container is removed.



\### 5. Deploy



A new Docker container is started using the newly built image.



\### Pipeline Flow



```text

GitHub

&#x20;  │

&#x20;  ▼

Jenkins

&#x20;  │

&#x20;  ├── Checkout

&#x20;  │

&#x20;  ├── Docker Build

&#x20;  │

&#x20;  └── Docker Deploy

&#x20;         │

&#x20;         ▼

&#x20;      AWS EC2

```



\---



\## 🔗 GitHub Webhook Integration



GitHub Webhook connects the GitHub repository with Jenkins.



When a developer pushes code to the `main` branch:



```text

Git Push

&#x20;  ↓

GitHub

&#x20;  ↓

Webhook Trigger

&#x20;  ↓

Jenkins Build

&#x20;  ↓

Docker Image Build

&#x20;  ↓

Container Deployment

```



This removes the need to manually start a Jenkins build after every code change.



\---



\## ☁️ AWS EC2 Deployment



The application is deployed on an \*\*AWS EC2 Ubuntu instance\*\*.



\### Server Configuration



```text

Operating System : Ubuntu Linux

Application      : Docker Container

Web Server       : Nginx

Application Port : 80

Jenkins Port     : 8080

```



The Docker container exposes port `80`, allowing the portfolio website to be accessed through the EC2 public IP.



\---



\## 🌐 Portfolio Features



The portfolio website includes:



\* 🏠 Home

\* 👨‍💻 About Me

\* 🛠️ Technical Skills

\* 🎓 Education

\* 💼 Internship Experience

\* 🚀 Projects

\* 📜 Certifications

\* 📩 Contact Section

\* 🌙 Light/Dark Theme

\* 📱 Responsive Design



\---



\## 🔐 DevOps Concepts Demonstrated



This project provides hands-on experience with:



\* Version Control

\* Git Branching

\* GitHub Repository Management

\* Linux

\* SSH

\* Docker

\* Docker Images

\* Docker Containers

\* Dockerfile

\* Jenkins

\* CI/CD

\* GitHub Webhooks

\* AWS EC2

\* Nginx

\* Automated Deployment

\* Cloud Hosting



\---



\## 📈 CI/CD Benefits



The implemented pipeline provides:



\* \*\*Automation\*\* — deployment is triggered automatically.

\* \*\*Consistency\*\* — application is deployed using the same Docker process.

\* \*\*Faster Delivery\*\* — changes can reach the server without manual deployment.

\* \*\*Containerization\*\* — application runs in an isolated Docker environment.

\* \*\*Cloud Deployment\*\* — application is hosted on AWS EC2.

\* \*\*Version Control\*\* — source code is maintained in GitHub.



\---



\## 🧪 Deployment Verification



After deployment, the following commands can be used to verify the application:



\### Check Docker Container



```bash

docker ps

```



\### Check Port 80



```bash

sudo ss -tlnp | grep :80

```



\### Test Application Locally on EC2



```bash

curl http://localhost

```



If the HTML response is returned, the application is successfully running inside the EC2 server.



\---



\## 💡 What I Learned



By building this project, I gained practical knowledge of how modern applications can be developed, containerized, automated, and deployed to the cloud.



Key learning areas include:



\* Building Docker images

\* Managing Docker containers

\* Working with Linux servers

\* Connecting GitHub with Jenkins

\* Creating CI/CD pipelines

\* Configuring GitHub Webhooks

\* Deploying applications on AWS EC2

\* Troubleshooting deployment and networking issues

\* Understanding the complete software delivery lifecycle



\---



\## 🚀 Future Improvements



The project can be further improved by adding:



\* Docker Hub image publishing

\* HTTPS using SSL/TLS

\* Custom domain

\* AWS Load Balancer

\* Terraform Infrastructure as Code

\* Jenkins credentials management

\* Automated testing

\* SonarQube code quality analysis

\* Monitoring with AWS CloudWatch

\* Blue-Green or Rolling Deployment



\---



\## 👨‍💻 Author



\### Prince Kumar Sharma



\*\*BCA — Artificial Intelligence\*\*

Vivekananda Global University

Expected Graduation: \*\*2027\*\*



📧 \*\*Email:\*\* \[Prince7ks77@gmail.com](mailto:Prince7ks77@gmail.com)

🔗 \*\*LinkedIn:\*\* \[www.linkedin.com/in/prince-kumar-541568322](http://www.linkedin.com/in/prince-kumar-541568322)



\---



\## ⭐ Project Highlights



```text

GitHub

&#x20;  +

Jenkins

&#x20;  +

Docker

&#x20;  +

AWS EC2

&#x20;  +

GitHub Webhook

&#x20;  ↓

Automated CI/CD Deployment

```



> \*\*This project demonstrates a complete beginner-to-intermediate DevOps workflow from source code management to automated cloud deployment.\*\*



\---



\### ⭐ If you find this project useful, consider giving the repository a star!



