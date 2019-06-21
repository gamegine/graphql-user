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
		/* This builds the actual image; synonymous to docker build on the command line */
		//app = docker.build()// error
		sh "docker build . -t gamegine/test:test"
	}

	stage('Push image') {
        docker.withRegistry('https://registry-1.docker.io/v2', 'docker-hub-credentials') {
			//docker.push("gamegine/test:test")
			sh 'docker tag gamegine/test:test gamegine/test:test'
			sh 'docker push gamegine/test:test'
		}
	}
}q

