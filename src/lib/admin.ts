export const ADMIN_TOKEN_KEY = 'math-make-smart-admin-token';

export function getApiUrl() {
  return (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000').replace(/\/$/, '');
}

export function getAdminLoginPath() {
  return process.env.NEXT_PUBLIC_ADMIN_LOGIN_PATH || '/auth/admin/login';
}