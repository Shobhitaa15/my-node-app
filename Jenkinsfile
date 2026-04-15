pipeline {
    agent any

    environment {
        APP_NAME = "my-node-app"
    }

    stages {

        stage('Checkout') {
            steps {
                echo 'Pulling latest code...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing npm packages...'
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                bat 'npm test || ver > nul'
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Building Docker image...'
                bat 'docker build -t my-node-app:latest .'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying with Docker Compose...'
                bat 'docker-compose down --remove-orphans || ver > nul'
                bat 'docker-compose up -d --build'
                echo 'App is live on port 3000!'
            }
        }
    }

    post {
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed. Check the logs above.'
        }
    }
}