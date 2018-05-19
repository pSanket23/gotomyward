node('master'){
   
    stage('Clear Workspace'){
	  echo "Clear Workspace"
    //  deleteDir()
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
	  
	  sh 'npm install'
	  sh 'ng build --prod --extract-css false'
    }
	
}
