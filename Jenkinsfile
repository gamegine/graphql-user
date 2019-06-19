node {
	def app
	
	stage('Clone repository') {
		/* Let's make sure we have the repository cloned to our workspace */
		checkout scm
	}
	
	stage('Build image') {
		/* This builds the actual image; synonymous to docker build on the command line */
		//app = docker.build()// error
		sh "docker build . -t graphql-user:1"
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

	stage('Push image') {
	/*
        docker.withRegistry('https://hub.docker.com', 'docker-hub-credentials') {
			app.push("${env.BUILD_NUMBER}")
			app.push("latest")
		}
	*/
	}
}
