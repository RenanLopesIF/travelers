export interface THeaderPost {
  userName: string;
  userImage: string;
  userType: 'Passageiro' | 'Motorista';
  description: string;
}

export interface TPost extends THeaderPost {
  content: string;
}
