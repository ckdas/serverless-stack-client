export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_y66tL9ifz9HkHATX1YJiVHsa00mSpwbatp",
  
  s3: {
    REGION: "us-east-1",
    BUCKET: "slessprnotes"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://d86pcmf582.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_snOFEQ13R",
    APP_CLIENT_ID: "3jb0crf7b4rahc3mtlej0je3hl",
    IDENTITY_POOL_ID: "us-east-1:07fd5abf-b82f-4f13-abb4-33aecbb2c359"
  }
};