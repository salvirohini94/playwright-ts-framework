pipeline {
  agent any
  stages {
    stage('Install') {
      steps { bat 'npm ci' }
    }
    stage('Browsers') {
      steps { bat 'npx playwright install chromium' }
    }
    stage('Test') {
      steps { bat 'npx playwright test --project=chromium' }
    }
  }
}