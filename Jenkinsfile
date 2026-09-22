pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t devops-portfolio:latest .'
            }
        }

        stage('Deploy Container') {
            steps {
                sh 'docker stop devops-portfolio-container || true'
                sh 'docker rm devops-portfolio-container || true'
                sh 'docker run -d -p 80:80 --name devops-portfolio-container devops-portfolio:latest'
            }
        }
    }
}






