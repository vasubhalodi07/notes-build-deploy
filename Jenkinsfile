pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                echo "Cloning Repository"
                git url: 'https://github.com/vasubhalodi07/notes-build-deploy', branch: 'main'
                echo "Repository Cloned"
            }
        }

        stage('Build') {
            steps {
                echo "Building the application"
                echo "Application Built Successfully"
            }
        }

        stage('Run Tests') {
            steps {
                echo "Running Tests"
                echo "Tests Completed Successfully"
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploying the application"
                echo "Application Deployed Successfully"
            }
        }
    }
}

