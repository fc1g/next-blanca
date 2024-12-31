import { z } from 'zod';

const email = z.string().email('Invalid email address');
const password = z
  .string()
  .min(8, 'Password must be at least 8 characters')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  .regex(/[0-9]/, 'Password must contain at least one number')
  .nonempty('Password is required');
const passwordConfirm = z
  .string()
  .nonempty('Password confirmation is required');

export const signUpUserSchema = z
  .object({ email, password, passwordConfirm })
  .refine(data => data.password === data.passwordConfirm, {
    message: "Passwords don't match",
    path: ['passwordConfirm'],
  });

export const loginUserSchema = z.object({ email, password });
