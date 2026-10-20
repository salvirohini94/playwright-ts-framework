export const user = {
  email: process.env.TEST_EMAIL ?? '',
  password: process.env.TEST_PASSWORD ?? '',      
};

if (!user.email || !user.password) {
  throw new Error('Set TEST_EMAIL and TEST_PASSWORD in the .env file');
}