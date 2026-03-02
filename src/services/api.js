const BASE_URL = 'http://localhost:3000';

/**
 * Sign up a new user.
 * @param {Object} data - { name, email, password }
 * @returns {Promise<Object>} API response with user/token
 */
export async function signup(data) {
  const response = await fetch(`${BASE_URL}/api/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: response.statusText }));
    throw new Error(error.message || 'Signup failed');
  }

  return response.json();
}

/**
 * Sign in an existing user.
 * @param {Object} data - { email, password }
 * @returns {Promise<Object>} API response with token
 */
export async function signin(data) {
  const response = await fetch(`${BASE_URL}/api/auth/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: response.statusText }));
    throw new Error(error.message || 'Sign in failed');
  }

  return response.json();
}
