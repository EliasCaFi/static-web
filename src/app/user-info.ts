export interface UserInfo {
  clientPrincipal: ClientPrincipal;
}

interface ClientPrincipal {
  identityProvider: string;
  userId: string;
  userDetails: string;
  userRoles: string[];
}