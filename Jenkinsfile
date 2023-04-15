pipeline {
    agent any

    stages {
        stage('Clonar repositório') {
            steps {
                git branch: 'main', url: 'https://github.com/robsonkelly/teste_mobile_17'
            }
        }
        stage('Instalar todas dependencias') {
            steps {
                bat 'npm install'
            }
        }
        stage('Rodar teste') {
            steps {
                bat 'npm test'
            }
        }
        
    }
}