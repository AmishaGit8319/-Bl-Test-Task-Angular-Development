import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users: { username: string, password: string }[] = [];
  private loggedInUser: string | null = null;

  constructor(private router: Router) {}

  register(username: string, password: string): boolean {
    const userExists = this.users.some(user => user.username === username);
    if (userExists) return false;

    this.users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(this.users));
    return true;
  }

  login(username: string, password: string): boolean {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const user = storedUsers.find((user: any) => user.username === username && user.password === password);
    if (user) {
      this.loggedInUser = username;
      localStorage.setItem('loggedInUser', username);
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return this.loggedInUser !== null || localStorage.getItem('loggedInUser') !== null;
  }

  logout() {
    this.loggedInUser = null;
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/login']);
  }
}
