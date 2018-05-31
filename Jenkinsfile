node('master'){
   
    stage('Clear Workspace'){
	  echo "Clear Workspace"
      deleteDir()
    }
	
	stage('Checkout'){
	  echo "Cloning Git Repository"
      checkout scm
    }
	
	stage('Test Mail'){
	  echo "sending a test mail"
      emailext body: 'This is a test mail', subject: 'Test mail', to: 'sanketpethkar23@gmail.com'
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
	
}
