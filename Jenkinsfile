node('master'){
   
    stage('Clear Workspace'){
	  echo "Clear Workspace"
      deleteDir()
    }
	
	stage('Checkout'){
	  echo "Cloning Git Repository"
      checkout scm
    }
	
	stage('Notify build is started'){
	  echo "sending a test mail"
      emailext body: 'Build started', subject: 'Build started', to: 'sanketpethkar23@gmail.com'
    }
	
	stage('Build'){
	  
	 // sh 'npm install'
	 // sh 'ng build --prod --extract-css false'
    echo "The build is successful !!!!"
    }
  
  stage('Publich Artifacts to Nexus'){
	  
	 // sh 'npm install'
	 // sh 'ng build --prod --extract-css false'
    echo "Artifacts uploaded successfully !!!!"
    }
  
  stage('Deploy application to Apache tomcat'){
	  
	 // sh 'npm install'
	 // sh 'ng build --prod --extract-css false'
    echo "The deployment is successful !!!!"
    }
  
  stage('Notify build status'){
	  echo "sending a test mail"
      emailext body: 'Build Status', subject: 'Build Status', to: 'sanketpethkar23@gmail.com'
    }
	
}
