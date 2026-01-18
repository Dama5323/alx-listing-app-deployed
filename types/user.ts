export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  isHost: boolean;
  joinedDate: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  bio: string;
  location: string;
  joinedDate: string;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
}
