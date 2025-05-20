// User type definition
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
  createdAt: string;
}

// API Response type
interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
}

// Mock user data (replace with actual API calls in production)
const MOCK_USERS: User[] = [
  {
    id: '1',
    email: 'user@example.com',
    name: 'John Doe',
    role: 'user',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    email: 'admin@example.com',
    name: 'Admin User',
    role: 'admin',
    createdAt: new Date().toISOString(),
  },
];

// Login function
export const login = async (email: string, password: string): Promise<ApiResponse<{ user: User; token: string }>> => {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Find user by email (in production, this would be an API call)
    const user = MOCK_USERS.find(u => u.email === email);

    if (!user) {
      return {
        success: false,
        message: 'Invalid email or password',
      };
    }

    // In production, verify password with proper hashing
    // For demo, we'll accept any password
    const token = 'mock-jwt-token-' + Math.random();

    return {
      success: true,
      data: {
        user,
        token,
      },
    };
  } catch (error) {
    console.error('Login error:', error);
    return {
      success: false,
      message: 'An error occurred during login',
    };
  }
};

// Register function
export const register = async (
  name: string,
  email: string,
  password: string
): Promise<ApiResponse<{ user: User; token: string }>> => {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Check if user already exists
    const existingUser = MOCK_USERS.find(u => u.email === email);
    if (existingUser) {
      return {
        success: false,
        message: 'Email already registered',
      };
    }

    // Create new user (in production, this would be an API call)
    const newUser: User = {
      id: String(MOCK_USERS.length + 1),
      email,
      name,
      role: 'user',
      createdAt: new Date().toISOString(),
    };

    MOCK_USERS.push(newUser);

    const token = 'mock-jwt-token-' + Math.random();

    return {
      success: true,
      data: {
        user: newUser,
        token,
      },
    };
  } catch (error) {
    console.error('Registration error:', error);
    return {
      success: false,
      message: 'An error occurred during registration',
    };
  }
};

// Logout function
export const logout = async (): Promise<ApiResponse<void>> => {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // In production, this would invalidate the token on the server
    return {
      success: true,
    };
  } catch (error) {
    console.error('Logout error:', error);
    return {
      success: false,
      message: 'An error occurred during logout',
    };
  }
}; 