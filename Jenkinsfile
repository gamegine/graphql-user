node {
	def app
	
	stage('Clone repository') {
		/* Let's make sure we have the repository cloned to our workspace */
		checkout scm
		sh'ls -la'
	}

	stage('install') {
		nodejs(nodeJSInstallationName: 'NodeJS12') {
			sh 'npm install'
		}
	}

	stage('test') {
		nodejs(nodeJSInstallationName: 'NodeJS12') {
			sh 'npm test'
		}
	}

	stage('Build image') {
		app = docker.build('gamegine/test')
	}

	stage('Push image') {
        docker.withRegistry('https://registry-1.docker.io/v2', 'docker-hub-credentials') {
			app.push("test")
		}
	}
}
