pipeline{

	agent any

	environment {
		DOCKERHUB_CREDENTIALS=credentials('dockerhub-cred')
	}

	stages {

		stage('Build') {

			steps {
			    sh 'sudo service docker start'
                sh 'sudo service docker status'
				sh 'docker build -t fredyalmenares/nextapp:latest .'
			}
		}

		stage('Login') {

			steps {
				sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
			}
		}

		stage('Push') {

			steps {
				sh 'docker push fredyalmenares/nextapp:latest'
			}
		}
	}

	post {
		always {
			sh 'docker logout'
		}
	}

}