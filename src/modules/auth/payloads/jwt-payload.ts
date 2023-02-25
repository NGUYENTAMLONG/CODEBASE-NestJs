export interface JwtPayload {
  sub?: number;
  phone_number: string;
  scopes?: string[];
  isAdministrator?: boolean;
  name?: string;
  iat?: string;
}
