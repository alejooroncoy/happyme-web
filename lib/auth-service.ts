import { prisma } from './database';
import bcrypt from 'bcryptjs';

export interface UserData {
  id: number;
  phone_number: string;
  name: string;
  age: number;
  mood?: string | null;
  has_seen_psychologist?: boolean | null;
  plan?: 'Free' | 'Premium' | null;
  college?: string | null;
  semester?: number | null;
  gender?: string | null;
  created_at?: Date | null;
  updated_at?: Date | null;
}

export interface AccountData {
  id: number;
  email: string;
  user_id: number;
  created_at: Date;
  updated_at: Date;
}

export class AuthService {
  // Verificar si un número de teléfono existe en la BD
  static async checkPhoneExists(phoneNumber: string): Promise<UserData | null> {
    try {
      const user = await prisma.users.findUnique({
        where: {
          phone_number: phoneNumber
        }
      });
      return user;
    } catch (error) {
      console.error('Error checking phone exists:', error);
      return null;
    }
  }

  // Verificar si un email ya tiene cuenta
  static async checkEmailExists(email: string): Promise<AccountData | null> {
    try {
      const account = await prisma.accounts.findUnique({
        where: {
          email: email
        }
      });
      return account;
    } catch (error) {
      console.error('Error checking email exists:', error);
      return null;
    }
  }

  // Crear cuenta (vincular email/password con usuario existente)
  static async createAccount(email: string, password: string, userId: number): Promise<AccountData | null> {
    try {
      // Verificar que el email no esté en uso
      const existingAccount = await this.checkEmailExists(email);
      if (existingAccount) {
        throw new Error('Email already in use');
      }

      // Hash de la contraseña
      const hashedPassword = await bcrypt.hash(password, 12);

      // Crear la cuenta
      const account = await prisma.accounts.create({
        data: {
          email,
          password: hashedPassword,
          user_id: userId
        }
      });

      return account;
    } catch (error) {
      console.error('Error creating account:', error);
      return null;
    }
  }

  // Autenticar usuario con email y password
  static async authenticateUser(email: string, password: string): Promise<{ user: UserData; account: AccountData } | null> {
    try {
      // Buscar la cuenta por email
      const account = await prisma.accounts.findUnique({
        where: {
          email: email
        },
        include: {
          users: true
        }
      });

      if (!account) {
        return null;
      }

      // Verificar la contraseña
      const isValidPassword = await bcrypt.compare(password, account.password);
      if (!isValidPassword) {
        return null;
      }

      return {
        user: account.users,
        account: {
          id: account.id,
          email: account.email,
          user_id: account.user_id,
          created_at: account.created_at,
          updated_at: account.updated_at
        }
      };
    } catch (error) {
      console.error('Error authenticating user:', error);
      return null;
    }
  }

  // Obtener datos del usuario por ID
  static async getUserById(userId: number): Promise<UserData | null> {
    try {
      const user = await prisma.users.findUnique({
        where: {
          id: userId
        }
      });
      return user;
    } catch (error) {
      console.error('Error getting user by ID:', error);
      return null;
    }
  }
}
