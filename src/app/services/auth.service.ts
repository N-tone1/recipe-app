import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_BASE = ' https://getappusers-zazjbx7nka-uc.a.run.app/';
  private UID = 'tIJMikQWFze81vIqEH8Wud8dS1Q2'; //my given UID

  async login(email: string, password: string) {
    try {
      const response = await axios.post(`${this.API_BASE}/login-zazjbx7nka-uc.a.run.app/`, {
        email,
        password,
      }, {
        headers: { authid: this.UID }
      });
      return response.data;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  }

  async register(name: string, email: string, password: string) {
    try {
      const response = await axios.post(`${this.API_BASE}/addappuser-zazjbx7nka-uc.a.run.app/`, {
        name,
        email,
        password
      }, {
        headers: { authid: this.UID }
      });
      return response.data;
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  }
}
