pipeline {
    agent any 
    stages {
        stage('build') {
            steps {
            	nodejs('node14.2') {
	            sh """
			    npm install 
	            npm run test
			    """
	            }
            }
        }
    }
    post {

	    always {
	            echo 'Always generate report.'
		        junit '**/reports/*.xml'      
	    }
	    success {
	            echo 'I succeeeded!'
	    }
	    unstable {
	            echo 'I am unstable :/'
	    }
	    failure {
	            echo 'I failed :('
	    }
	    changed {
	            echo 'Things were different before...'
	    }
    }
}
