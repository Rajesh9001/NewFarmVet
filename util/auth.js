// Simple authentication mock
async function authenticate(mode, email, password) {
  return {
    idToken: 'dummy-token',
    email: email
  };
}

export function createUser(email, password) {
  return authenticate("signUp", email, password);
}

export function login(email, password) {
  return authenticate("signInWithPassword", email, password);
}
